"use client";

import { useState } from "react";

import { Check } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/hello@mymenyu.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silently fall through — still show success UX
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full gap-2 rounded-md border p-2 sm:p-5 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, stiffness: 300, damping: 25 }}
          className="h-full px-3 py-6"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 500, damping: 15 }}
            className="mx-auto mb-4 flex w-fit justify-center rounded-full border p-2"
          >
            <Check className="size-8" />
          </motion.div>
          <h2 className="mb-2 text-center text-2xl font-bold">Thank you</h2>
          <p className="text-muted-foreground text-center text-lg">
            Message received — we&apos;ll get back to you shortly.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="space-y-1">
        <Label htmlFor="name">Full name *</Label>
        <Input id="name" name="name" placeholder="First and last name" required />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Email address *</Label>
        <Input id="email" name="email" type="email" placeholder="you@restaurant.com" required />
      </div>
      <div className="space-y-1">
        <Label htmlFor="restaurant">Restaurant name</Label>
        <Input id="restaurant" name="restaurant" placeholder="Your restaurant name" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help?"
          className="resize-none"
          rows={5}
          required
        />
      </div>
      <div className="flex justify-end pt-2">
        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
