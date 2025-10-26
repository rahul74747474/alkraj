import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Our team will contact you shortly." });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 via-brand-gold/10 to-transparent pointer-events-none" />
      <div className="container relative">
        <div className="max-w-2xl mx-auto rounded-2xl bg-white/70 dark:bg-background/80 backdrop-blur-md shadow-xl ring-1 ring-white/40 p-6 md:p-8">
          <h3 className="text-2xl font-extrabold text-primary text-center">Get in Touch</h3>
          <p className="text-center text-muted-foreground mt-2">
            We’d love to help you find your ideal property.
          </p>
          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 rounded-lg px-3 bg-white/80 dark:bg-muted/40 border border-white/60 dark:border-border focus:outline-none focus:ring-2 focus:ring-brand-gold/60 transition"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-lg px-3 bg-white/80 dark:bg-muted/40 border border-white/60 dark:border-border focus:outline-none focus:ring-2 focus:ring-brand-gold/60 transition"
              />
            </div>
            <textarea
              required
              placeholder="Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg px-3 py-2 bg-white/80 dark:bg-muted/40 border border-white/60 dark:border-border focus:outline-none focus:ring-2 focus:ring-brand-gold/60 transition"
            />
            <button
              type="submit"
              className="mt-2 h-11 rounded-lg bg-primary text-primary-foreground hover:brightness-110 transition shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
