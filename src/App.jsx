import { useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import { BalanceContext } from "./components/Context/BalanceContext";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";
import TotalBalance from "./components/TotalBalance/TotalBalance";
import TotalExpense from "./components/TotalExpense/TotalExpense";
import TotalIncome from "./components/TotalIncome/TotalIncome";
import ChartOne from "./components/ChartsOne/ChartOne";

function App() {
   const [description, setDescription] = useState("");
   const [amount, setAmount] = useState("");
   const [userDetail, setUserDetail] = useState([]);
   const [transactionType, setTransactionType] = useState("income");
   const [totalBalance, setTotalBalance] = useState(0);
   const [totalIncome,setTotalIncome] = useState(0)
   const [totalExpense,setTotalExpense] = useState(0)


   const handleSubmit = (e) => {
     e.preventDefault();

     const id = userDetail.length + 1;
     const newUser = [
       ...userDetail,
       {
         id: id,
         description: description,
         amount: amount,
         type: transactionType,
       },
     ];

     if(amount > 0 && transactionType === "income"){
      setTotalBalance((preBalance) => preBalance + Number(amount));
      setTotalIncome(preBalance => preBalance + Number(amount) )
     }else{
      setTotalBalance((preBalance) => preBalance + Number(-amount));
      setTotalExpense((preBalance) => preBalance + Number(-amount));
     }

     setUserDetail(newUser);
   };
  
  return (
    <>
      <BalanceContext.Provider
        value={{
          description,
          amount,
          setDescription,
          setAmount,
          userDetail,
          setUserDetail,
          handleSubmit,
          transactionType,
          setTransactionType,
          totalBalance,
          totalIncome,
          totalExpense,
        }}
      >

        <div className="bg-[#ffffff w-10/12 mx-auto">
          <h1 className="text-3xl font-bold text-gray-700 uppercase tracking-wide">
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
          <ChartOne/>
        </div>
      </BalanceContext.Provider>
    </>
  );
}

export default App;
