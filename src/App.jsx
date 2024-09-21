import "./App.css";
import TotalBalance from "./components/TotalBalance/TotalBalance";
import TotalExpense from "./components/TotalExpense/TotalExpense";
import TotalIncome from "./components/TotalIncome/TotalIncome";
function App() {
  
  return (
    <>
      <div className="bg-[#ffffff w-10/12 mx-auto">
        <h1 className="text-3xl font-bold text-gray-700 uppercase tracking-wider">Enhance balance tracker</h1>
        <div className="flex gap-6 justify-between mt-10 ">
          <TotalBalance/>
          <TotalIncome/>
          <TotalExpense/>
        </div>
      </div>
    </>
  );
}

export default App;
