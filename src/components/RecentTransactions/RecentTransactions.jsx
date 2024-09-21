import { useContext } from "react";
import { BalanceContext } from "../Context/BalanceContext";
import Transaction from "./Transaction";

const RecentTransactions = () => {
  const { userDetail} = useContext(BalanceContext);

  return (
    <div className="bg-[#fff] w-3/5 shadow-md rounded overflow-y-scroll">
      <h3 className="bg-[#f16510] text-white mb-3 h-14 p-4 text-left text-xl">Recent Transactions</h3>
      <div className="p-4">
        {
          userDetail.map(transaction => <Transaction key={transaction.key} transaction={transaction}/>)
        }
      </div>
    </div>
  );
};

export default RecentTransactions;