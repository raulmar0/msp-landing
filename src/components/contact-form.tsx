"use client";

import { useState } from "react";
import { Mail, MessageSquare, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Icono de WhatsApp como SVG
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
    </svg>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSend = () => {
    const { name, email, message } = formData;
    
    // Crear el mensaje para WhatsApp
    const whatsappMessage = `¡Hola! Me pongo en contacto desde su página web.

*Información de contacto:*
• Nombre: ${name}
• Email: ${email}

*Mensaje:*
${message}

¡Espero su respuesta!`;

    // Crear la URL de WhatsApp con el mensaje
    const whatsappUrl = `https://wa.me/8123505568?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp en una nueva ventana/pestaña
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Juan Pérez" 
            required 
            className="pl-10" 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Correo Electrónico</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleInputChange}
            placeholder="juan.perez@ejemplo.com" 
            required 
            className="pl-10" 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleInputChange}
            placeholder="¿Cómo podemos ayudarte?" 
            required 
            className="pl-10" 
          />
        </div>
      </div>
      
      <Button 
        type="button"
        onClick={handleWhatsAppSend}
        disabled={!isFormValid}
        className="w-full bg-green-600 hover:bg-green-700 text-white"
      >
        <WhatsAppIcon className="mr-2 h-4 w-4" />
        Enviar WhatsApp
      </Button>
    </div>
  );
}
