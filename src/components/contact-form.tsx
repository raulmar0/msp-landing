"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Mail, MessageSquare, User } from "lucide-react";

import { type FormState, submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : (
        "Enviar Mensaje"
      )}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: FormState = { message: "", errors: {}, success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "¡Éxito!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input id="name" name="name" placeholder="Juan Pérez" required className="pl-10" />
        </div>
        {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Correo Electrónico</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input id="email" name="email" type="email" placeholder="juan.perez@ejemplo.com" required className="pl-10" />
        </div>
        {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Textarea id="message" name="message" placeholder="¿Cómo podemos ayudarte?" required className="pl-10" />
        </div>
        {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
