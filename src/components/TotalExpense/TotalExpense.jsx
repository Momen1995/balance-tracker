import { useContext } from "react";
import { FiDollarSign } from "react-icons/fi";
import { BalanceContext } from "../Context/BalanceContext";

const TotalExpense = () => {
  const {totalExpense} = useContext(BalanceContext)

  return (
    <div className="bg-[#fff] shadow-md w-1/3 rounded">
      <h3 className="bg-rose-600 text-white mb-3 h-14 p-4 text-left text-xl">
        <span className="mr-3">💰</span>Total Expenses
      </h3>
      <p className="p-7 text-left text-2xl text-rose-600 font-bold flex items-center">
        <span>
          <FiDollarSign />
        </span>
        {totalExpense * -1}
      </p>
    </div>
  );
};

export default TotalExpense;
