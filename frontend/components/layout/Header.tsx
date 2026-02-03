"use client";
import { ThemeToggle } from "./ThemeToggle";
import {
  LucideLayoutDashboard,
  LucideMenu,
  LucideBell,
  LucideSearch,
} from "lucide-react";

export const Header = () => {
  return (
    <header className="h-20 border-b border-[#1c1d20] flex items-center justify-between px-8 bg-[#08090a]/80 backdrop-blur-2xl sticky top-0 z-50 transition-all duration-500">
      <div className="flex items-center gap-6">
        <button className="p-2.5 md:hidden hover:bg-white/5 rounded-xl transition-colors text-slate-400">
          <LucideMenu size={20} />
        </button>

        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-brand-primary opacity-20 blur-md group-hover:opacity-40 transition-opacity rounded-xl"></div>
            <div className="relative w-10 h-10 bg-[#111214] border border-[#1c1d20] rounded-xl flex items-center justify-center shadow-2xl">
              <LucideLayoutDashboard size={20} className="text-brand-primary" />
            </div>
          </div>
          <div className="hidden sm:block">
            <h2 className="font-black text-lg tracking-tighter text-white uppercase italic">
              MapUp <span className="text-brand-primary">Engine</span>
            </h2>
            <p className="text-[8px] font-bold text-slate-500 tracking-[0.3em] -mt-1 uppercase">
              Intelligence v2.0
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-3 bg-[#111214] border border-[#1c1d20] px-4 py-2 rounded-2xl w-96 group focus-within:border-brand-primary/50 transition-all">
        <LucideSearch size={14} className="text-slate-500" />
        <input
          type="text"
          placeholder="Command search..."
          className="bg-transparent border-none outline-none text-[11px] font-bold text-slate-300 w-full placeholder:text-slate-600 uppercase tracking-widest"
        />
        <div className="px-1.5 py-0.5 rounded border border-[#1c1d20] text-[9px] font-bold text-slate-500 uppercase">
          Ctrl K
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden md:flex items-center gap-2 mr-4 text-slate-500">
          <button className="p-2 hover:text-white transition-colors relative">
            <LucideBell size={18} />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-primary rounded-full ring-4 ring-[#08090a]"></span>
          </button>
        </div>

        <div className="h-6 w-[1px] bg-[#1c1d20] hidden md:block"></div>

        <ThemeToggle />

        <div className="relative p-[1px] rounded-full bg-gradient-to-tr from-brand-primary to-purple-500 shadow-neon-blue">
          <div className="h-9 w-9 rounded-full bg-[#08090a] border-2 border-[#08090a] overflow-hidden">
            <div className="h-full w-full bg-gradient-to-tr from-brand-primary/20 to-purple-500/20 flex items-center justify-center text-[10px] font-bold text-white">
              MU
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
