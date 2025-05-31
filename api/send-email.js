"use server";

import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

type State = { error: string } | { data: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function send(prevState: State, formData: FormData) {
  const email = formData.get("email") as string;

  const { data, error } = await resend.emails.send({
    from: "Vercel <vercel@resend.dev>",
    to: [email],
    subject: "Join team on Vercel",
    react: "nothi",
  });

  if (error) {
    return { error: error.message };
  }

  console.log(data);

  return { data: "Email sent!" };
}
