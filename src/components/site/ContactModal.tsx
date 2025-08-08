import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactModal = () => {
  const [open, setOpen] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request received",
      description: "We will reach out with a demo and feasibility review.",
    });
    setOpen(false);
  };

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="rounded-xl border bg-card p-6 shadow-sm md:p-10">
        <div className="mb-6 text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Work with us</h2>
          <p className="mt-2 text-muted-foreground">Request a demo or ask for an AI feasibility review.</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="hero" size="lg" aria-label="Open request a demo form">Request a demo</Button>
          </DialogTrigger>
          <DialogContent aria-describedby="contact-desc">
            <DialogHeader>
              <DialogTitle>Request a demo</DialogTitle>
              <DialogDescription id="contact-desc">
                Tell us a bit about your use case. We’ll get back within 1–2 days.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" />
              </div>
              <div>
                <Label htmlFor="interest">Project interest</Label>
                <Input id="interest" name="interest" placeholder="Automation • LLM • IoT • Full‑Stack" />
              </div>
              <div className="flex items-center gap-2">
                <input id="feasibility" name="feasibility" type="checkbox" className="h-4 w-4" />
                <Label htmlFor="feasibility">Request an AI feasibility review</Label>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Send request</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ContactModal;
