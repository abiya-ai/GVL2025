"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trophy, Image as ImageIcon, Code, Info, Atom } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/hackathon", label: "Hackathon", icon: Atom },
    { href: "/hackathon/submissions", label: "Submissions", icon: Trophy },
    { href: "/gallery", label: "Gallery", icon: ImageIcon },
    { href: "/about", label: "About", icon: Info },
];

export default function BottomNav() {
    const pathname = usePathname();

    // Hide bottom nav on specific pages if needed
    if (pathname.includes("/admin")) {
        return null;
    }

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50">
            <div className="flex justify-around">
                {navItems.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "flex flex-col items-center justify-center w-full py-2 text-xs font-medium transition-colors",
                                isActive
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-primary"
                            )}
                        >
                            <Icon className="h-5 w-5 mb-1" />
                            <span>{label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
