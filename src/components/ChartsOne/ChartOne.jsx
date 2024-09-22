import { useContext } from "react";
import { BalanceContext } from "../Context/BalanceContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartOne = () => {
  const { userDetail, transactionType } = useContext(BalanceContext);

  const yAxisLabel = transactionType === "income" ? "Income ($)" : "Expense ($)";
  const dataKey = transactionType === "income" ? "income" : "expense";

  return (
    <div className="w-full h-96 shadow-xl mt-12 p-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={userDetail}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />
          <YAxis
            label={{ value: yAxisLabel, angle: -90, position: "insideLeft" }}
          />
          <Tooltip/>
          <Legend />

          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#1d13d8"
            activeDot={{ r: 10 }}
          />
          <Line type="monotone" dataKey="amount" stroke="#0bf765" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartOne;
