import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./form.css";

export const CreateForm = ({ types, listTransactions, setListTransactions }) => {
  const [transaction, setTransaction] = useState({
    name: "",
    value: "",
    type: "",
  });

  const submit = (event) => {
    event.preventDefault();

    const newTransaction = { ...transaction, id: uuidv4() };

    setListTransactions([...listTransactions, newTransaction]);
    setTransaction({ name: "", value: "", type: "" });
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        id="description"
        placeholder="Digite aqui sua descrição"
        required
        value={transaction.name}
        onChange={(e) => setTransaction({ ...transaction, name: e.target.value })}
      />
      <span>Ex: Compra de roupas</span>

      <label htmlFor="value">Valor(R$)</label>
      <input
        type="number"
        id="value"
        placeholder="Digite aqui o valor"
        required
        min={1}
        value={transaction.value}
        onChange={(e) => setTransaction({ ...transaction, value: e.target.value })}
      />

      <label htmlFor="type">Tipo de valor</label>
      <select
        required
        id="type"
        value={transaction.type}
        onChange={(e) => setTransaction({ ...transaction, type: e.target.value })}
      >
        <option>Selecione um tipo</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>

      <button type="submit">Inserir valor</button>
    </form>
  );
};
