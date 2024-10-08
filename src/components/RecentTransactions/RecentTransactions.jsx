import { useContext } from "react";
import { BalanceContext } from "../Context/BalanceContext";
import Transaction from "./Transaction";

const RecentTransactions = () => {
  const { userDetail} = useContext(BalanceContext);

  return (
    <div className="bg-[#fff] w-full lg:w-3/5 shadow-md rounded-lg">
      <h3 className="bg-[#f16510] text-white mb-3 h-14 p-4 text-left lg:text-xl rounded-t-lg">
        Recent Transactions
      </h3>
      <div className="p-2 overflow-y-scroll h-80 recent-scroll">
        {userDetail.map((transaction) => (
          <Transaction key={transaction.key} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;