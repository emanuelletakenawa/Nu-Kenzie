import { useEffect, useState } from "react";
import { CreateForm } from "./components/Form";
import { Header } from "./components/Header";
import { FinancialSummary } from "./components/List";
import { TotalValue } from "./components/Total";
import { v4 as uuidv4 } from "uuid";
import "./styles/index.css";

export const App = () => {
  const [listTransactions, setListTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(listTransactions));
  }, [listTransactions]);

  const [transaction, setTransaction] = useState({
    name: "",
    value: "",
    type: "",
    id: uuidv4(),
  });

  const [totalValue, setTotalValue] = useState(0);

  const types = [
    {
      name: "Entrada",
    },
    {
      name: "Saída",
    },
  ];

  const deleteTransaction = (id, value) => {
    const newListTransaction = listTransactions.filter((transaction) => transaction.id !== id);
    setListTransactions(newListTransaction);
    setTotalValue(totalValue - value);
  };

  return (
    <>
      <Header />
      <main>
        <div className="first-container">
          <CreateForm
            types={types}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            transaction={transaction}
            setTransaction={setTransaction}
          />
          <TotalValue listTransactions={listTransactions} />
        </div>

        <FinancialSummary
          listTransactions={listTransactions}
          deleteTransaction={deleteTransaction}
        />
      </main>
    </>
  );
};
