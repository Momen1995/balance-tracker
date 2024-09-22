import { useContext } from "react";
import { BalanceContext } from "../Context/BalanceContext";

const AddTransaction = () => {
  const {
    description,
    amount,
    setDescription,
    setAmount,
    userDetail,
    handleSubmit,
    transactionType,
    setTransactionType,
  } = useContext(BalanceContext);


  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleOptionCheck = (e) => {
    setTransactionType(e.target.value); 
  };

  console.log(userDetail);
  console.log(transactionType)

  return (
    <div className="bg-[#fff] w-full lg:w-2/5 shadow-md rounded">
      <h3 className="bg-[#2a9f90] text-white mb-3 h-14 p-4 text-left text-xl">
        Add Transaction
      </h3>

      <form className="p-4 text-left" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description" className="text-semibold lg:text-[18px]">
            Description
          </label>
          <br />
          <input
            type="text"
            name="description"
            className="w-full p-2 mt-1 bg-gray-100 rounded outline-none lg:text-[17px]"
            placeholder="Write your description"
            value={description}
            onChange={handleDescription}
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="amount" className="text-semibold lg:text-[18px]">
            Amount
          </label>
          <br />
          <input
            type="text"
            name="amount"
            className="w-full p-2 mt-1 bg-gray-100 rounded outline-none lg:text-[17px]"
            placeholder="Write amount"
            value={amount}
            onChange={handleAmount}
            required
          />
        </div>

        <div className="flex gap-3">
          <div className="mt-4">
            <label htmlFor="income" className="text-semibold">
              <input
                type="radio"
                name="transactionType"
                value="income"
                className="mr-2 cursor-pointer"
                checked={transactionType === "income"}
                onChange={handleOptionCheck}
                required
              />
              Income
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="expense" className="text-semibold">
              <input
                type="radio"
                name="transactionType"
                value="expense"
                className="mr-2 cursor-pointer"
                checked={transactionType === "expense"}
                onChange={handleOptionCheck}
                required
              />
              Expense
            </label>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#2a9f90] px-4 py-2 rounded text-sm lg:text-[18px] text-white inline-block mt-7 my-4"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
