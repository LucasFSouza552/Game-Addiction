/**
 * Card individual para exibir jogos
 *
 * Props:
 * - Imagem
 * - Título
 * - Botão de favorito/remover favorito
 * - Clicável para ir à Página de Detalhes
 */
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const Card = ({ game }) => {

    const { symbol: gameSymbol, amount: discountPrice, baseAmount: basePrice } = game?.price || {};


    return (
        <div className="card" key={game.gameID}>
            <span>{game.title}</span>
            <h4>{gameSymbol} {basePrice || 0.00}</h4>
            <h3>{gameSymbol} {discountPrice || 0.00}</h3>
            <div>
                <MdOutlineFavoriteBorder />
            </div>
        </div>
    );
}


export default Card;
