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
import "../fonts/satoshi.css";
import styled from "styled-components";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const Card = ({ game, isFavorite, onToggleFavorite }) => {

    if (!game) return null;

    const { symbol: gameSymbol, amount: discountPrice, baseAmount: basePrice } = game?.price || {};

    return (
        <CardWrapper key={game.id} title={game.title}>
            <CardImage src={"http://" + game.image + '.png'} alt={game.title} />
            <CardTitle>{game.title}</CardTitle>
            {onToggleFavorite && <FavoriteButton onClick={onToggleFavorite}>
                {isFavorite ? < MdOutlineFavorite /> : < MdOutlineFavoriteBorder />}
            </FavoriteButton>}
            <div>
                {game.genres.map((genre) => {
                    return (
                        <span key={genre}>{genre}</span>
                    )
                })}
            </div>
        </CardWrapper>
    );
}

export default Card;


const CardTitle = styled.h5`
    font-size: 0.9rem;
    margin-bottom: 5px;
    font-family: 'Satoshi-Regular';
`;

const FavoriteButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 5px;
    right: 5px; 
    cursor: pointer;
`;

const CardWrapper = styled.div`
    display: flex;
    width: auto;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: clamp(150px, 35%, 300px);
`;

const CardImage = styled.img`
    width: 100%;
    object-fit: cover;
    margin-bottom: 10px;
`;


