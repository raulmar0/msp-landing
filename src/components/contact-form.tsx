"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Loader2, Mail, MessageSquare, User } from "lucide-react";

import { type FormState, submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: FormState = { message: "", errors: {}, success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
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
        <Label htmlFor="name">Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input id="name" name="name" placeholder="John Doe" required className="pl-10" />
        </div>
        {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required className="pl-10" />
        </div>
        {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Textarea id="message" name="message" placeholder="How can we help you?" required className="pl-10" />
        </div>
        {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
