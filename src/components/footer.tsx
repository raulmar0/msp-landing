import Link from "next/link";
import { Zap, Twitter, Linkedin, Facebook } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} MSP del Noreste. Todos los derechos reservados.
            </span>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
