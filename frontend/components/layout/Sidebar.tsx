"use client";
import { LucideHome, LucideBarChart3, LucideSettings, LucideCarFront, LucideUsers } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Overview", icon: <LucideHome size={20} />, href: "/" },
  { name: "Vehicle Stats", icon: <LucideCarFront size={20} />, href: "#" },
  { name: "Analysis", icon: <LucideBarChart3 size={20} />, href: "#" },
  { name: "Users", icon: <LucideUsers size={20} />, href: "#" },
  { name: "Settings", icon: <LucideSettings size={20} />, href: "#" },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="p-6">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
          Main Menu
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? "bg-brand-primary/10 text-brand-primary" 
                    : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                <span className={`${isActive ? "text-brand-primary" : "group-hover:scale-110 transition-transform"}`}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-200 dark:border-slate-800">
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-2xl">
          <p className="text-xs text-slate-500 mb-1">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
};