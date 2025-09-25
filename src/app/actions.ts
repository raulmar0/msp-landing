
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
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
      message: 'Please correct the errors below.',
      success: false,
    };
  }
  
  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it to the console.
  console.log('New contact form submission:');
  console.log(validatedFields.data);

  return {
    message: 'Thank you for your message! We will get back to you soon.',
    success: true,
  };
}
