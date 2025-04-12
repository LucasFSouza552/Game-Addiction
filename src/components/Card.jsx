/**
 * Card individual para exibir um jogo
 *
 * Props:
 * - Imagem
 * - Título
 * - Preço base
 * - Preço de desconto
 * - Botão de favorito/remover favorito
 */
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const Card = ({ game, isFavorite, onToggleFavorite }) => {

    if (!game) return null;

    const { symbol: gameSymbol, amount: discountPrice, baseAmount: basePrice } = game?.price || {};

    return (
        <div className="card" key={game.id}>
            <img src={"http://" + game.image + '.png'} alt={game.title} />
            <span>{game.title}</span>
            <h4>{gameSymbol} {basePrice || 0.00}</h4>
            {game.isDiscounted && <h3>{gameSymbol} {discountPrice || 0.00}</h3>}
            {onToggleFavorite && <div onClick={onToggleFavorite}>
                {isFavorite ? < MdOutlineFavorite /> : < MdOutlineFavoriteBorder />}
                {isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            </div>}
            <div>
                {game.genres.map((genre) => {
                    return (
                        <span key={genre}>{genre}</span>
                    )
                })}
            </div>
        </div>
    );
}


export default Card;
