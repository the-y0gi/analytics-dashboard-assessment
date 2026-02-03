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
  LucideBarChart3,
} from "lucide-react";

export default function Dashboard() {
  const { data, loading } = useEVData();
  const [filter, setFilter] = useState("all");

  // 1. Filtering Logic
  const filteredData = useMemo(() => {
    if (filter === "all") return data;
    return data.filter((d) => d.Make === filter);
  }, [data, filter]);

  // 2. Extract Unique Makes for Filter
  const uniqueMakes = useMemo(
    () => Array.from(new Set(data.map((d) => d.Make))).sort(),
    [data],
  );

  // 3. Advanced Analytics Calculations
  const stats = useMemo(() => {
    if (filteredData.length === 0)
      return { avgRange: 0, topMake: "N/A", cafvRate: "0" };

    // Average Electric Range Calculation
    const totalRange = filteredData.reduce(
      (acc, curr) => acc + (Number(curr["Electric Range"]) || 0),
      0,
    );
    const avgRange = Math.round(totalRange / filteredData.length);

    // CAFV Eligibility Percentage
    const cafvEligibleCount = filteredData.filter(
      (d) =>
        d["Clean Alternative Fuel Vehicle (CAFV) Eligibility"] ===
        "Clean Alternative Fuel Vehicle Eligible",
    ).length;
    const cafvRate = ((cafvEligibleCount / filteredData.length) * 100).toFixed(
      1,
    );

    // Dynamic Top Manufacturer
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
 

    <div className="max-w-[1700px] mx-auto space-y-10 p-4 lg:p-10 transition-all duration-700">
      {/* Modern Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            System Live • Data Synchronized
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tightest text-slate-950 dark:text-white">
            MAPUP{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">
              EVOS
            </span>
          </h1>
        </div>
        <FilterBar makes={uniqueMakes} onFilterChange={setFilter} />
      </div>

      {/* Hero Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Inventory"
          value={filteredData.length.toLocaleString()}
          icon={<LucideCar size={24} />}
          description="Active registrations analyzed in real-time."
        />
        <StatsCard
          title="Range Performance"
          value={`${stats.avgRange}mi`}
          icon={<LucideZap size={24} />}
          description="Average battery efficiency across fleet."
        />
        <StatsCard
          title="Dominant Make"
          value={stats.topMake}
          icon={<LucideAward size={24} />}
          description="Current market leader by volume."
        />
        <StatsCard
          title="Incentive Ready"
          value={`${stats.cafvRate}%`}
          icon={<LucideActivity size={24} />}
          description="Vehicles eligible for CAFV benefits."
        />
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 group p-2 rounded-[3rem] bg-gradient-to-br from-brand-primary/20 to-transparent">
          <MainChart data={filteredData} type="area" title="Adoption Curve" />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <MainChart data={filteredData} type="pie" title="Market Share" />
        </div>
      </div>
    </div>
  );
}
