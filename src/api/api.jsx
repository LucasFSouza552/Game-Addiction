import axios from "axios";

const api = axios.create({
  baseURL: "https://www.gog.com/games/ajax/filtered",
  headers: { "Content-Type": "application/json" }
});


// search	megamagic	Nome ou parte do nome do jogo
// page	1	Página da busca
// sort	popularity	Ordenação (popularity, new, price)
// system	windows	Sistema operacional (windows, mac, linux)
// price	discounted ou free	Filtrar por jogos com desconto ou gratuitos
// genre	action, rpg, etc	Gênero do jogo
/**
 * Busca uma lista de jogos da API da GOG com base nos parâmetros fornecidos.
 * 
 * @param {Object} params - Os parâmetros de consulta para filtrar jogos.
 * @param {string} params.search - Nome ou parte do nome do jogo.
 * @param {number} params.page - O número da página da busca.
 * @param {string} params.sort - A ordem de classificação (popularity, new, price).
 * @param {string} params.system - O sistema operacional (windows, mac, linux).
 * @param {string} params.price - Filtro para jogos com desconto ou gratuitos.
 * @param {string} params.genre - O gênero do jogo (action, rpg, etc).
 * @returns {Promise<Array>} - Uma promessa que resolve para uma lista de jogos.
 */
export const getGames = async (params = {}) => {
  try {
    const response = await api.get("", { params });
    return response.data.products;
  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
    return [];
  }
};

/**
 * Busca jogos especificados pela palavra-chave fornecida.
 * 
 * @param {Object} params - Os parâmetros de consulta para filtrar jogos.
 * @param {string} params.search - Nome ou parte do nome do jogo.
 * @returns {Promise<Array>} - Uma promessa que resolve para uma lista de jogos.
 */
export const searchGames = async (searchOption, limit = 0) => {
  const params = {
    search: searchOption,
  };

  if (limit > 0) {
    params.limit = limit;
  }

  try {
    const response = await api.get("", { params }); // <- Aqui está a correção
    return response.data.products;
  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
    return [];
  }
};


export const getGameById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar jogo:", error);
    return null;
  }
}

// Api DISCARTADA!
// baseURL: "https://www.cheapshark.com/api/1.0"