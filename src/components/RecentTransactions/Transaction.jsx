import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Transaction = ({ transaction }) => {
  const {description,amount,type} = transaction;

  const iconClasses =
    type === "income"
      ? "text-green-700 bg-green-200"
      : "text-red-700 bg-red-200";
  
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-gray-200 border-dashed">
      <div className="flex gap-3 items-center">
        <h1 className={`text-[12px] p-2 rounded-full ${iconClasses}`}>
          {type === "income" ? <FaPlus /> : <FaMinus />}
        </h1>
        <h1 className="text-xl font-semibold text-gray-600">{description}</h1>
      </div>
      <div className="flex gap-8 items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">{amount}</p>
        <p className="text-[22px] font-semibold text-teal-700">
          <MdDelete />
        </p>
      </div>
    </div>
  );
};

export default Transaction;