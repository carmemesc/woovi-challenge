import { useState } from "react";

function Homepage() {

    const [cliente, setCliente] = useState("");
    const [amount, setAmount] = useState("");
    const handleclick = () => {
        console.log("Valores do Formulário:", cliente, amount);
    }
    
    return (
        <div>
           <h2>Insira os dados para pagamento</h2>
        <div>
        <label htmlFor="name">Nome do Cliente:</label>
        <input type="text" value={cliente} 
            onChange={(e) => setCliente(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="amount">Valor:</label>
            <input type="number" value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            id="amount"  /> 
            </div>
            <button onClick={handleclick}>
                Continuar
                </button>
        </div>
    );
}

export default Homepage; 
