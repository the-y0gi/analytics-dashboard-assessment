"use client";
import { useMemo } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
} from "recharts";

interface MainChartProps {
  data: any[];
  type: "area" | "pie";
  title: string;
}

export const MainChart = ({ data, type, title }: MainChartProps) => {
  const chartData = useMemo(() => {
    if (type === "area") {
      const counts: Record<string, number> = {};
      data.forEach((d) => {
        const year = d["Model Year"];
        if (year) counts[year] = (counts[year] || 0) + 1;
      });
      return Object.entries(counts)
        .map(([year, count]) => ({ year, count }))
        .sort((a, b) => Number(a.year) - Number(b.year));
    }

    if (type === "pie") {
      const counts: Record<string, number> = {};
      data.forEach((d) => {
        const make = d["Make"];
        if (make) counts[make] = (counts[make] || 0) + 1;
      });
      return Object.entries(counts)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);
    }
    return [];
  }, [data, type]);

  const COLORS = ["#3b82f6", "#10b981", "#6366f1", "#f59e0b", "#ef4444"];

  return (
    <div className="p-6 rounded-3xl border bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 h-[450px] flex flex-col backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-blue-500/5">
      <h3 className="text-xl font-bold mb-6 tracking-tight">{title}</h3>
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === "area" ? (

            <AreaChart data={chartData}>
              <defs>
                {/* Gradient for Neon Effect */}
                <linearGradient id="neonGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                strokeOpacity={0.1}
              />
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 600 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 10 }}
              />
              <Tooltip
                cursor={{ stroke: "#3b82f6", strokeWidth: 2 }}
                contentStyle={{
                  background: "rgba(2, 6, 23, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  borderRadius: "20px",
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                }}
              />
              <Area
                type="monotone"
                dataKey="count"
                stroke="#3b82f6"
                strokeWidth={4}
                fill="url(#neonGradient)"
                strokeLinecap="round"
              />
            </AreaChart>
          ) : (
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend iconType="circle" verticalAlign="bottom" height={36} />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};
