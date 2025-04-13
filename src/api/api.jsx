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
 * @returns {Promise<{
 *   id: string, 
 *   title: string, image: string,
 *   originalPrice: number, 
 *   discountedPrice: number, 
 *   url: string, 
 *   genre: string, 
 *   developer: string, 
 *   publisher: string, 
 *   category: string,
 *   worksOn: ,
 *   releaseDate: string,
 *   customAttributes: Array<>,
 *   gallery: Array<string>,
 *   video: {
 *     id: string,
 *     provider: string
 *   },
 *   supportedOperatingSystems: Array<string>,
 *   isTBA: boolean,
 *   price: {
 *     currency: string,
 *     amount: string,
 *     baseAmount: string,
 *     finalAmount: string,
 *     isDiscounted: boolean,
 *     discountPercentage: number,
 *     discountDifference: string,
 *     symbol: string,
 *     isFree: boolean,
 *     discount: number,
 *     isBonusStoreCreditIncluded: boolean,
 *     bonusStoreCreditAmount: string,
 *     promoId: string
 *   },
 *   isDiscounted: boolean,
 *   isInDevelopment: boolean,
 *   releaseDate: number,
 *   availability: {
 *     isAvailable: boolean,
 *     isAvailableInAccount: boolean
 *   },
 *   salesVisibility: {
 *     isActive: boolean,
 *     fromObject: {
 *       date: string,
 *       timezone_type: number,
 *       timezone: string
 *     },
 *     from: number,
 *     toObject: {
 *       date: string,
 *       timezone_type: number,
 *       timezone: string
 *     },
 *     to: number
 *   },
 *   buyable: boolean,
 *   title: string,
 *   image: string,
 *   url: string,
 *   supportUrl: string,
 *   forumUrl: string,
 *   worksOn: {
 *     Windows: boolean,
 *     Mac: boolean,
 *     Linux: boolean
 *   },
 *   category: string,
 *   originalCategory: string,
 *   rating: number,
 *   type: number,
 *   isComingSoon: boolean,
 *   isPriceVisible: boolean,
 *   isMovie: boolean,
 *   isGame: boolean,
 *   slug: string,
 *   isWishlistable: boolean,
 *   extraInfo: Array<>,
 *   ageLimit: number,
 *   boxImage: string
 * }[]>} - Uma promessa que resolve para uma lista de jogos com os seguintes dados:
 * - id {string}: O ID do jogo na API da GOG.
 * - title {string}: O título do jogo.
 * - image {string}: A URL da imagem do jogo.
 * - originalPrice {number}: O preço original do jogo.
 * - discountedPrice {number}: O preço com desconto do jogo, se houver.
 * - url {string}: A URL do jogo na loja da GOG.
 */
export const searchGames = async (search, limit = 0) => {
  const params = {
    search,
    mediaType: "game",
    page: 1,
    limit: limit
  };


  try {
    const { data } = await api.get("", { params });
    const allGames = data.products || [];

    return allGames;
  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
    return [];
  }
};

export const searchFavoriteGames = async (favorites) => {
  const results = [];

  for (const title of favorites) {
    try {
      const params = {
        search: title,
        mediaType: "game",
        page: 1,
        pageSize: 10,
      };

      const { data } = await api.get("", { params });

      const allGames = data.products || [];

      const matched = allGames.find(
        (game) => game.title.toLowerCase() === title.toLowerCase()
      );

      if (matched) {
        results.push(matched);
      }
    } catch (error) {
      console.error(`Erro ao buscar o jogo "${title}":`, error);
    }
  }

  return results;
};

// Api DISCARTADA!
// baseURL: "https://www.cheapshark.com/api/1.0"