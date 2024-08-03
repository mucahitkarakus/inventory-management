import { TrendingUp } from "lucide-react";
import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardSalesSummary = () => {
  const [timeframe, setTimeframe] = useState("weekly");


  const data = [
  { date: "2024-07-01", totalValue: 2945000 },
  { date: "2024-07-02", totalValue: 1875000 },
  { date: "2024-07-03", totalValue: 780000 },
  { date: "2024-07-04", totalValue: 980000 },
  { date: "2024-07-05", totalValue: 6435000 },
]


  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between">
        <>
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Sales Summary
            </h2>
            <hr />
          </div>

          <div>
            <div className="flex justify-between items-center mb-6 px-7 mt-5">
              <div className="text-lg font-medium">
                <p className="text-xs text-gray-400">Value</p>
                <span className="text-2xl font-extrabold">
                  $12.98m
                </span>
                <span className="text-green-500 text-sm ml-2">
                  <TrendingUp className="inline w-4 h-4 mr-1" />
                </span>
              </div>
              <select
                className="shadow-sm border border-gray-300 bg-white p-2 rounded"
                value={timeframe}
                onChange={(e) => {
                  setTimeframe(e.target.value);
                }}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
         <ResponsiveContainer width="100%" height={350} className="px-7">
  <BarChart
    data={data}
    margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
  >
    <CartesianGrid strokeDasharray="" vertical={false} />
  <XAxis
      dataKey="date"
      tickFormatter={(value) => {
        const date = new Date(value);
        return `${date.getMonth() + 1}/${date.getDate()}`;
      }}
    />
    <YAxis
      domain={[0, 8000000]} // Maksimum değeri 8 milyon olarak ayarlayın
      ticks={[0, 2000000, 4000000, 6000000, 8000000]} // İstenilen değerler
      tickFormatter={(value) => {
        return `$${(value / 1000000).toFixed(0)}m`;
      }}
      tick={{ fontSize: 12, dx: -1 }}
      tickLine={false}
      axisLine={false}
    />
    <Tooltip
      formatter={(value) => [
        `$${value.toLocaleString("en")}`,
      ]}
      labelFormatter={(label) => {
        const date = new Date(label);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }}
    />
    <Bar
      dataKey="totalValue"
      fill="#3182ce"
      barSize={10}
      radius={[10, 10, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>

          </div>

          <div>
            <hr />
            <div className="flex justify-between items-center mt-6 text-sm px-7 mb-4">
              <p>5 days</p>
              <p className="text-sm">
                Highest Sales Date:{" "}
                <span className="font-bold">1/8/24</span>
              </p>
            </div>
          </div>
        </>
    </div>
  );
};

export default CardSalesSummary;
