import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { BalanceContext } from "../Context/BalanceContext";
import { FiDollarSign } from "react-icons/fi";

const TotalIncome = () => {
  const {totalIncome} = useContext(BalanceContext)

  return (
    <div className="bg-[#fff] shadow-md w-full lg:w-1/3 rounded">
      <h3 className="bg-[#33a050] text-white mb-3 h-16 p-4 text-left text-xl flex items-center font-semibold">
        <span className="mr-2">
          <FaPlus />
        </span>
        Total income
      </h3>
      <p className="p-7 text-left text-2xl flex items-center font-bold text-green-600">
        <FiDollarSign />
        {totalIncome}
      </p>
    </div>
  );
};

export default TotalIncome;
