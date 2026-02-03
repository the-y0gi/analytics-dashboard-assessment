"use client";

import { useState, useMemo } from "react";
import { useEVData } from "@/hooks/useEVData";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { MainChart } from "@/components/dashboard/MainChart";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { LoadingScreen } from "@/components/dashboard/LoadingScreen";
import {
  LucideZap,
  LucideCar,
  LucideActivity,
  LucideAward,
  LucideCalendar,
} from "lucide-react";

export default function Dashboard() {
  const { data, loading } = useEVData();
  const [filter, setFilter] = useState("all");

  const filteredData = useMemo(() => {
    if (filter === "all") return data;
    return data.filter((d) => d.Make === filter);
  }, [data, filter]);

  const uniqueMakes = useMemo(
    () => Array.from(new Set(data.map((d) => d.Make))).sort(),
    [data],
  );

  const stats = useMemo(() => {
    if (filteredData.length === 0)
      return { avgRange: 0, topMake: "N/A", cafvRate: "0" };

    const totalRange = filteredData.reduce(
      (acc, curr) => acc + (Number(curr["Electric Range"]) || 0),
      0,
    );
    const avgRange = Math.round(totalRange / filteredData.length);

    const cafvEligibleCount = filteredData.filter(
      (d) =>
        d["Clean Alternative Fuel Vehicle (CAFV) Eligibility"] ===
        "Clean Alternative Fuel Vehicle Eligible",
    ).length;
    const cafvRate = ((cafvEligibleCount / filteredData.length) * 100).toFixed(
      1,
    );

    const makeCounts: Record<string, number> = {};
    filteredData.forEach((d) => {
      if (d.Make) makeCounts[d.Make] = (makeCounts[d.Make] || 0) + 1;
    });
    const topMake =
      Object.entries(makeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

    return { avgRange, topMake, cafvRate };
  }, [filteredData]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-[#08090a] bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.05),_transparent)] text-slate-300 transition-all duration-700 font-sans">
      <div className="max-w-[1700px] mx-auto p-6 lg:p-12 space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
              <LucideCalendar size={12} />
              <span>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                })}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Good evening,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">
                -- MapUp
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <FilterBar makes={uniqueMakes} onFilterChange={setFilter} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatsCard
            title="Total Inventory"
            value={filteredData.length.toLocaleString()}
            icon={<LucideCar size={20} />}
            description="Active registered fleet"
          />
          <StatsCard
            title="Avg. Range"
            value={`${stats.avgRange} mi`}
            icon={<LucideZap size={20} />}
            description="Battery performance mean"
          />
          <StatsCard
            title="Market Leader"
            value={stats.topMake}
            icon={<LucideAward size={20} />}
            description="Volume based dominance"
          />
          <StatsCard
            title="Eligibility"
            value={`${stats.cafvRate}%`}
            icon={<LucideActivity size={20} />}
            description="CAFV incentive ready"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 group rounded-[2.5rem] bg-[#111214] border border-[#1c1d20] p-8 hover:border-brand-primary/20 transition-all duration-500 shadow-2xl">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  Adoption Curve
                </h3>
                <p className="text-[10px] text-brand-primary font-bold mt-1">
                  Live Trend Analysis
                </p>
              </div>
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              </div>
            </div>
            <div className="h-[350px]">
              <MainChart data={filteredData} type="area" title="" />
            </div>
          </div>

          <div className="lg:col-span-4 rounded-[2.5rem] bg-[#111214] border border-[#1c1d20] p-8 flex flex-col">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-10 text-center">
              Market Share
            </h3>
            <div className="flex-1 min-h-[300px]">
              <MainChart data={filteredData} type="pie" title="" />
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-brand-primary/10 border border-brand-primary/10">
              <p className="text-[10px] text-center font-bold text-brand-primary uppercase tracking-tighter leading-tight">
                High eligibility rate detected in {stats.topMake} models.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2.5rem] bg-[#111214] border border-[#1c1d20] p-10 overflow-hidden relative group">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-primary/5 blur-3xl rounded-full group-hover:bg-brand-primary/10 transition-all" />

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="h-10 w-1 bg-brand-primary rounded-full" />
              <h3 className="text-2xl font-black tracking-tight text-white uppercase">
                Vehicle Roster
              </h3>
            </div>
            <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest transition-all">
              Export Data Log
            </button>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Displaying deep-dive metrics for {stats.topMake} and{" "}
            {filteredData.length.toLocaleString()} other registrations.
          </p>
        </div>
      </div>
    </div>
  );
}
