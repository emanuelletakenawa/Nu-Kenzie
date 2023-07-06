import "./card.css";

export const CardList = ({ transaction, deleteTransaction }) => {
  const transactionType = transaction.type === "Entrada" ? "greenBar" : "greyBar";

  const value = Number(transaction.value);

  const formattedValue = value.toFixed(2).replace(".", ",");

  return (
    <li>
      <span className={transactionType}></span>
      <div>
        <h3>{transaction.name}</h3>
        <span>{transaction.type}</span>
      </div>

      <div className="container-delete">
        <span>R$ {formattedValue}</span>
        <button
          className="btn-delete"
          onClick={() => deleteTransaction(transaction.id, transaction.value)}
        >
          Excluir
        </button>
      </div>
    </li>
  );
};
