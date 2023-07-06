import { CardList } from "./Card";
import "./list.css";

export const FinancialSummary = ({ listTransactions, deleteTransaction }) => {
  return (
    <section className="container-sumary">
      <h4>Resumo financeiro</h4>
      {listTransactions.length > 0 ? (
        <ul>
          {listTransactions.map((transaction) => {
            return (
              <CardList
                key={transaction.id}
                transaction={transaction}
                deleteTransaction={deleteTransaction}
              />
            );
          })}
        </ul>
      ) : (
        <p>Você ainda não possui nenhum lançamento</p>
      )}
    </section>
  );
};
