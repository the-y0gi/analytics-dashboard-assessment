"use client";
import { useState, useRef, useEffect } from "react";
import { LucideFilter, LucideChevronDown, LucideCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FilterBarProps {
  makes: string[];
  onFilterChange: (make: string) => void;
}

export const FilterBar = ({ makes, onFilterChange }: FilterBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("all");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    onFilterChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Glow Background */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-purple-600 rounded-2xl blur opacity-20 transition duration-500 ${isOpen ? 'opacity-40' : 'group-hover:opacity-30'}`}></div>

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-3 px-5 py-3 bg-[#111214] border border-[#1c1d20] hover:border-brand-primary/50 rounded-2xl transition-all duration-300 shadow-2xl min-w-[200px] justify-between group"
      >
        <div className="flex items-center gap-3">
          <LucideFilter size={14} className={`transition-colors ${isOpen ? 'text-brand-primary' : 'text-slate-500'}`} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
            {selected === "all" ? "All Manufacturers" : selected}
          </span>
        </div>
        <LucideChevronDown size={14} className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} />
      </button>

      {/* Custom Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-full min-w-[240px] bg-[#0d0e10] border border-[#1c1d20] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[100] overflow-hidden backdrop-blur-xl"
          >
            <div className="max-h-[300px] overflow-y-auto custom-scrollbar p-2">
              {/* Option: All */}
              <button
                onClick={() => handleSelect("all")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  selected === "all" ? 'bg-brand-primary/10 text-brand-primary' : 'text-slate-500 hover:bg-white/5 hover:text-white'
                }`}
              >
                All Manufacturers
                {selected === "all" && <LucideCheck size={12} />}
              </button>

              <div className="h-[1px] bg-[#1c1d20] my-1 mx-2" />

              {/* Dynamic Options */}
              {makes.map((make) => (
                <button
                  key={make}
                  onClick={() => handleSelect(make)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    selected === make ? 'bg-brand-primary/10 text-brand-primary' : 'text-slate-500 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {make}
                  {selected === make && <LucideCheck size={12} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};