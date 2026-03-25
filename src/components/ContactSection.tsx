import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  email: z.string().trim().email("Adresse email invalide").max(255),
  phone: z.string().trim().min(1, "Le téléphone est requis").max(20),
  message: z.string().trim().min(1, "Le message est requis").max(2000),
});

type FormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    toast.success("Message envoyé avec succès ! Nous vous recontacterons rapidement.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-2xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nous Contacter</h2>
          <p className="text-muted-foreground mt-3">
            Une question ? N'hésitez pas à nous écrire.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <Input
                name="name"
                placeholder="Nom complet"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
          </div>
          <div>
            <Input
              name="phone"
              type="tel"
              placeholder="Téléphone"
              value={form.phone}
              onChange={handleChange}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Votre message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" variant="cta" size="lg" className="w-full">
            Envoyer le message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
