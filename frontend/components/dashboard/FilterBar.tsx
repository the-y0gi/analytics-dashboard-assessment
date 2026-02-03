"use client";
import { LucideFilter } from "lucide-react";

interface FilterBarProps {
  makes: string[];
  onFilterChange: (make: string) => void;
}

export const FilterBar = ({ makes, onFilterChange }: FilterBarProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
      <LucideFilter size={18} className="text-brand-primary" />
      <select 
        onChange={(e) => onFilterChange(e.target.value)}
        className="bg-transparent border-none focus:ring-0 text-sm font-semibold cursor-pointer outline-none text-slate-700 dark:text-slate-200"
      >
        <option value="all">All Manufacturers</option>
        {makes.map((make) => (
          <option key={make} value={make} className="dark:bg-slate-900">
            {make}
          </option>
        ))}
      </select>
    </div>
  );
};