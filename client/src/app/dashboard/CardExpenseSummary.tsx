import {
  ExpenseByCategorySummary,
  useGetDashboardMetricsQuery,
} from "@/state/api";
import { TrendingUp } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

type ExpenseSums = {
  [category: string]: number;
};

const colors = ["#00C49F", "#0088FE", "#FFBB28"];

const data = [
  { name: "Professional Expenses", value: 400000 },
  { name: "Salaries Expenses", value: 300000 },
  { name: "Office Expenses", value: 200000 },
];

const CardExpenseSummary = () => {

  return (
    <div className="row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
          Expense Summary
        </h2>
        <hr />
      </div>
      <div className="xl:flex justify-between pr-7">
        <div className="relative basis-3/5">
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie
                innerRadius={50}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                data={data}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center basis-2/5">
            <span className="font-bold text-xl">
              $401.00
            </span>
          </div>
        </div>
        <ul className="flex flex-col justify-around items-center xl:items-start py-5 gap-3">
          <li className="flex items-center text-xs">
            <span
              className="mr-2 w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[0] }}
            ></span>
            Professional Expenses
          </li>
          <li className="flex items-center text-xs">
            <span
              className="mr-2 w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[1] }}
            ></span>
            Salaries Expenses
          </li>
          <li className="flex items-center text-xs">
            <span
              className="mr-2 w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[2] }}
            ></span>
            Office Expenses
          </li>
        </ul>
      </div>
      <div>
        <hr />
        <div className="mt-3 flex justify-between items-center px-7 mb-4">
          <div className="pt-2">
            <p className="text-sm">
              Average:
              <span className="font-semibold">
                $80265893.30
              </span>
            </p>
          </div>
          <span className="flex items-center mt-2">
            <TrendingUp className="mr-2 text-green-500" />
            30%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardExpenseSummary;
