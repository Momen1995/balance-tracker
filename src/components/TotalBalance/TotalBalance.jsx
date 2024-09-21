import { useContext, } from "react";
import { BalanceContext } from "../Context/BalanceContext";
import { FiDollarSign } from "react-icons/fi";

const TotalBalance = () => {
  const {totalBalance} = useContext(BalanceContext)
  return (
    <div className="bg-[#fff] shadow-md w-1/3 rounded">
      <h3 className="bg-[#2e6fef] text-white mb-3 h-14 p-4 text-left text-xl">
        <span className="mr-3">💰</span>Total Balance
      </h3>
      <p className="p-7 text-left text-2xl text-green-600 font-bold flex items-center"><span><FiDollarSign/></span>{totalBalance}</p>
    </div>
  );
};

export default TotalBalance;