"use client";

import { useState, FormEvent } from "react";
// import emailjs from "@emailjs/browser"; // Uncomment when deploying

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // In a real project, replace these with your EmailJS credentials
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   formData as any,
      //   "YOUR_PUBLIC_KEY"
      // );
      
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setError("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, handleChange, sendEmail, isSubmitting, success, error };
};
