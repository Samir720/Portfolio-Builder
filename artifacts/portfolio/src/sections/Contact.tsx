import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [msgLength, setMsgLength] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Fake submit
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <Reveal direction="left" className="mb-16">
          <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-7xl">
            Let's Build <br/> <span className="text-gradient">Something.</span>
          </h2>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="flex flex-col justify-between">
            <Reveal delay={200} className="flex flex-col gap-10">
              <div className="group flex items-center gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-surface transition-colors group-hover:border-primary group-hover:text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">Email</p>
                  <a href="mailto:mansurisamir493@gmail.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">mansurisamir493@gmail.com</a>
                </div>
              </div>
              
              <div className="group flex items-center gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-surface transition-colors group-hover:border-secondary group-hover:text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">Phone</p>
                  <a href="tel:+919409593511" className="text-lg font-semibold text-foreground hover:text-secondary transition-colors">+91 9409593511</a>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-surface">
                  <MapPin size={24} className="text-muted" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">Location</p>
                  <p className="text-lg font-semibold text-foreground">Godhra, Gujarat, India</p>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-surface">
                  <Clock size={24} className="text-muted" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">Availability</p>
                  <p className="text-lg font-semibold text-foreground">Mon–Sat, 9AM–9PM IST</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400} className="mt-16">
              <p className="text-muted-foreground border-l-2 border-primary pl-4 italic">
                "I typically reply within 24 hours."
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={300}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 rounded-3xl border border-border bg-surface/50 p-8 backdrop-blur-md md:p-10">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="peer w-full border-b border-border bg-transparent py-4 text-foreground outline-none transition-colors focus:border-primary placeholder-transparent" 
                  placeholder="Full Name"
                />
                <label htmlFor="name" className="pointer-events-none absolute left-0 top-4 text-muted transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs">
                  Full Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="peer w-full border-b border-border bg-transparent py-4 text-foreground outline-none transition-colors focus:border-primary placeholder-transparent" 
                  placeholder="Email Address"
                />
                <label htmlFor="email" className="pointer-events-none absolute left-0 top-4 text-muted transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs">
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  id="subject" 
                  required
                  className="peer w-full border-b border-border bg-transparent py-4 text-foreground outline-none transition-colors focus:border-primary placeholder-transparent" 
                  placeholder="Subject"
                />
                <label htmlFor="subject" className="pointer-events-none absolute left-0 top-4 text-muted transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs">
                  Subject
                </label>
              </div>

              <div className="relative group mt-4">
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  maxLength={500}
                  onChange={(e) => setMsgLength(e.target.value.length)}
                  className="peer w-full resize-none border-b border-border bg-transparent py-4 text-foreground outline-none transition-colors focus:border-primary placeholder-transparent" 
                  placeholder="Your Message"
                />
                <label htmlFor="message" className="pointer-events-none absolute left-0 top-4 text-muted transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs">
                  Your Message
                </label>
                <div className="absolute -bottom-6 right-0 text-xs text-muted-foreground">
                  {msgLength} / 500
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status !== "idle"}
                className={cn(
                  "mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold text-background transition-all",
                  status === "success" ? "bg-secondary text-background" : "bg-primary hover:bg-primary/90",
                  status === "loading" && "opacity-80"
                )}
              >
                {status === "idle" && <><Send size={18} /> Send Message</>}
                {status === "loading" && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
                {status === "success" && <><CheckCircle2 size={18} /> Sent Successfully</>}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
