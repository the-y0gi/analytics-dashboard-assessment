"use client";
import { ThemeToggle } from "./ThemeToggle";
import { LucideLayoutDashboard, LucideMenu } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800 z-10">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Icon (Visible only on small screens) */}
        <button className="p-2 md:hidden hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
          <LucideMenu size={20} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <LucideLayoutDashboard size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            MapUp <span className="text-brand-primary">Analytics</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary" />
      </div>
    </header>
  );
};