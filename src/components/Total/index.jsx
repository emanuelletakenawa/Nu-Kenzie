import "./total.css";

export const TotalValue = ({ listTransactions }) => {
  const total = listTransactions.reduce((previousValue, transaction) => {
    return transaction.type === "Entrada"
      ? previousValue + Number(transaction.value)
      : previousValue - Number(transaction.value);
  }, 0);

  return (
    <>
      {listTransactions.length > 0 && (
        <section className="container-totalValue">
          <div>
            <p>Valor total: </p>
            <span>R${total.toFixed(2).replace(".", ",")}</span>
          </div>

          <p>O valor se refere ao saldo</p>
        </section>
      )}
    </>
  );
};
