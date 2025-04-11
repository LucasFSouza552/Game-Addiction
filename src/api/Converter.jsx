import axios from "axios";

export const convertUSDToBRL = async (usd) => {
  try {
    const response = await axios.get("https://economia.awesomeapi.com.br/last/USD-BRL");
    const rate = parseFloat(response.data.USDBRL.bid);
    const brl = (usd * rate).toFixed(2);
    console.log("USD para BRL:", brl);
    return `R$ ${brl}`;
  } catch (error) {
    console.error("Erro ao buscar cotação:", error);
    return "R$ --";
  }
};