import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AI Solutions</span>
            </div>
            <p className="text-muted-foreground">
              Transforming businesses with intelligent automation and chatbot solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Chatbot Development</li>
              <li>Process Automation</li>
              <li>Custom Integrations</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Documentation</li>
              <li>Contact Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your Business with
                <span className="bg-gradient-primary bg-clip-text text-transparent"> AI-Powered</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Smart chatbots and automation that work 24/7
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Bot className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">Smart Chatbots</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-8 w-8 text-accent" />
                <span className="text-sm font-medium">Process Automation</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src={heroImage} 
              alt="AI Chatbot and Automation Interface" 
              className="relative rounded-3xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
