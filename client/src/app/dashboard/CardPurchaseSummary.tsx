import { TrendingDown, TrendingUp } from "lucide-react";
import numeral from "numeral";
import React from "react";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";






const CardPurchaseSummary = () => {

    const data = [
        { date: "2024-07-01", totalPurchased: 1000000 },
        { date: "2024-07-02", totalPurchased: 900000 },
        { date: "2024-07-03", totalPurchased: 855000 },
        { date: "2024-07-04", totalPurchased: 598500 },
        { date: "2024-07-05", totalPurchased: 478800 },
    ];

    return (
        <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl">
            <div>
                <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
                    Purchase Summary
                </h2>
                <hr />
            </div>

            <div>
                <div className="mb-4 mt-7 px-7">
                    <p className="text-xs text-gray-400">Purchased</p>
                    <div className="flex items-center">
                        <p className="text-2xl font-bold">
                            $4.44m
                        </p>
                        <p
                            className={`text-sm text-green-500 flex ml-3`}
                        >
                            <TrendingUp className="w-5 h-5 mr-1" />
                            92.38%
                        </p>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={200} className="p-2">
                    <AreaChart
                        data={data}
                        margin={{ top: 0, right: 0, left: -50, bottom: 45 }}
                    >
                        <XAxis dataKey="date" tick={false} axisLine={false} />
                        <YAxis tickLine={false} tick={false} axisLine={false} />
                        <Tooltip
                            formatter={(value: number) => [
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
                        <Area
                            type="linear"
                            dataKey="totalPurchased"
                            stroke="#8884d8"
                            fill="#8884d8"
                            dot={true}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default CardPurchaseSummary;
