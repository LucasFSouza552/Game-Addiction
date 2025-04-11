import axios from "axios";

const api = axios.create({
  baseURL: "https://www.gog.com/games/ajax/filtered"
});


export const getGames = async (params = {}) => {
  try {
    const response = await api.get("", { params });
    return response.data.products;
  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
    return [];
  }
};

// Api DISCARTADA!
// baseURL: "https://www.cheapshark.com/api/1.0"
