"use client"
import { useMemo, useState } from "react";
import Header from "@/app/(components)/Header";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const Expenses = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const data = [
        { name: "Professional Expenses", value: 400000, color: "#0088FE" },
        { name: "Salaries Expenses", value: 300000, color: "#00C49F" },
        { name: "Office Expenses", value: 200000, color: "#FFBB28" },
    ];

    const filteredData = useMemo(() => {
        if (selectedCategory === "All") {
            return data;
        }
        return data.filter((item) =>
            item.name.toLowerCase().includes(selectedCategory.toLowerCase())
        );
    }, [selectedCategory, data]);

    const totalExpense = useMemo(() => {
        return filteredData.reduce((acc, cur) => acc + cur.value, 0);
    }, [filteredData]);

    return (
        <div>
            <div className="mb-5">
                <Header name="Expenses" />
                <p className="text-sm text-gray-500">
                    A visual representation of expenses over time.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="w-full md:w-1/3 bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">
                        Filter by Category and Date
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                defaultValue="All"
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option>All</option>
                                <option>Office</option>
                                <option>Professional</option>
                                <option>Salaries</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
                                Start Date
                            </label>
                            <input
                                type="date"
                                id="start-date"
                                name="start-date"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
                                End Date
                            </label>
                            <input
                                type="date"
                                id="end-date"
                                name="end-date"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-grow bg-white shadow rounded-lg p-4 md:p-6">
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={filteredData}
                                cx="50%"
                                cy="50%"
                                label
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"  // "value" olduğundan emin olun
                                onMouseEnter={(_, index) => setActiveIndex(index)}
                            >
                                {filteredData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={index === activeIndex ? "#0056b3" : entry.color}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="text-center mt-4">
                        <h4 className="text-lg font-semibold">
                            Total Expense: ${totalExpense.toFixed(2)}
                        </h4>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Expenses Over Time</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={filteredData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Expenses;
