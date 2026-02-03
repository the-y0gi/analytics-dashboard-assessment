"use client";
import { motion } from "framer-motion";

export const StatsCard = ({ title, value, icon, description }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02, translateY: -5 }}
    className="relative group p-8 rounded-[2.5rem] border border-slate-200/50 dark:border-[#1c1d20] bg-white/40 dark:bg-[#111214] backdrop-blur-2xl shadow-2xl dark:shadow-none overflow-hidden transition-all duration-500"
  >
    <div className="absolute -right-8 -top-8 w-32 h-32 bg-brand-primary/5 blur-3xl group-hover:bg-brand-primary/15 transition-all duration-700 rounded-full" />

    <div className="relative z-10">
      <div className="flex justify-between items-center mb-8">
        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#08090a] border dark:border-[#1c1d20] text-brand-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>

        <div className="h-1 w-12 bg-slate-200 dark:bg-[#1c1d20] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-brand-primary to-purple-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white drop-shadow-md">
          {value}
        </h3>
        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">
          {title}
        </p>
      </div>

      <p className="mt-6 text-[11px] text-slate-500 dark:text-slate-500 font-bold leading-relaxed uppercase tracking-tight">
        {description}
      </p>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);
