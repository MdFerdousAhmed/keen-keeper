"use client";

import { ContactContext } from "@/context/ContactProvider";
import useApps from "@/hooks/useApps";
import React, { useContext, useMemo } from "react";
import {
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

export default function StatsPage() {
  const { contact } = useContext(ContactContext);
  const { apps, loading } = useApps();

  // Derive per-type counts from your contact array.
  // Adjust the `type` field name to match your actual data shape.
  const chartData = useMemo(() => {
    const callCount  = contact.filter((c) => c.type === "call").length;
    const textCount  = contact.filter((c) => c.type === "text").length;
    const videoCount = contact.filter((c) => c.type === "video").length;

    return [
      { name: "Call",  value: callCount,  fill: "#244D3F" },
      { name: "Text",  value: textCount,  fill: "#7E35E1" },
      { name: "Video", value: videoCount, fill: "#37A163" },
    ];
  }, [contact]);

  const installedCount   = apps.length;
  const uninstalledCount = apps.length - contact.length;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-slate-500 text-lg">Loading stats…</p>
      </div>
    );
  }

  return (
    <div className="my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      <h2 className="font-semibold text-3xl mb-4 text-center">
        Friendship Analytics
      </h2>

      {/* Donut chart — ResponsiveContainer handles fluid sizing */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            innerRadius="60%"
            outerRadius="80%"
            cornerRadius={6}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Legend />
          <Tooltip formatter={(value, name) => [`${value}`, name]} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}