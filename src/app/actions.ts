
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce una dirección de correo electrónico válida.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export type FormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    success: boolean;
};


export async function submitContactForm(
    prevState: FormState, 
    formData: FormData
): Promise<FormState> {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Por favor, corrige los errores a continuación.',
      success: false,
    };
  }
  
  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it to the console.
  console.log('Nuevo envío de formulario de contacto:');
  console.log(validatedFields.data);

  return {
    message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
    success: true,
  };
}
