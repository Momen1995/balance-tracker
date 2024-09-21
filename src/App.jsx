import { useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import { BalanceContext } from "./components/Context/BalanceContext";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";
import TotalBalance from "./components/TotalBalance/TotalBalance";
import TotalExpense from "./components/TotalExpense/TotalExpense";
import TotalIncome from "./components/TotalIncome/TotalIncome";
function App() {
   const [description, setDescription] = useState("");
   const [amount, setAmount] = useState("");
   const [userDetail, setUserDetail] = useState([]);
  
  return (
    <>
      <BalanceContext.Provider value={{description,amount,setDescription,setAmount,userDetail,setUserDetail}}>
        <div className="bg-[#ffffff w-10/12 mx-auto">
          <h1 className="text-3xl font-bold text-gray-700 uppercase tracking-wider">
            Enhance balance tracker
          </h1>
          <div className="flex gap-6 justify-between mt-10 ">
            <TotalBalance />
            <TotalIncome />
            <TotalExpense />
          </div>
          <div className="flex mt-8 gap-6">
            <AddTransaction />
            <RecentTransactions />
          </div>
        </div>
      </BalanceContext.Provider>
    </>
  );
}

export default App;
