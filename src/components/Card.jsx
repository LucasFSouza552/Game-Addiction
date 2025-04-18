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
import { useNavigate } from "react-router-dom";


const FavoriteIcon = styled(MdOutlineFavorite)`
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    ${props => props.isFavorite && !props.wasFavorite && `
        animation: heartbeat 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        color: red;
        @keyframes heartbeat {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.6);
        }
    `}
`;

const Card = ({ game, isFavorite, onToggleFavorite, showFavoriteButton = true }) => {
    const navigate = useNavigate();
    if (!game) return null;

    return (
        <CardWrapper key={game.id} title={game.title} onClick={() => navigate(`/game?title=${game.title}`)}>
            <CardImage src={"http://" + game.boxImage + ".png"} alt={game.title} />
            {onToggleFavorite && showFavoriteButton&& <FavoriteButton title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"} onClick={onToggleFavorite}>
                < FavoriteIcon isFavorite={isFavorite} />
            </FavoriteButton>}
            <BgCardDetails>
                <CardDetails>
                    <CardTitle>{game.title}</CardTitle>
                    <GenreWrapper>
                        {game.genres?.filter((genre) => genre).map((genre, index) => {
                            return (
                                <GenreTag key={genre} genre={genre} index={index}></GenreTag>
                            )
                        }).slice(0, 3)}
                    </GenreWrapper>
                </CardDetails>

            </BgCardDetails>
        </CardWrapper>
    );
}


export default Card;

const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    position: absolute;
    bottom: 50px;
`;

const BgCardDetails = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(122, 41, 228, 1),
    rgba(122, 41, 228, 0)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
`;

const GenreWrapper = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5px;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
   
`;

const GenreTag = styled.span`
    border-radius: 30px;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;

    background-color: ${({ genre }) => {
        let hash = 0;
        for (let i = 0; i < genre.length; i++) {
            hash = genre.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = hash % 360;
        return `hsl(${hue}, 100%, 70%)`;
    }};

    animation: dotsJump ${({ index }) => `${0.8 + (index * 0.05)}s`} ease-in-out infinite;

    @keyframes dotsJump {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;


const CardTitle = styled.h5`
    font-size: 0.9rem;
    margin-bottom: 10px;
    font-family: 'Satoshi-Regular';
    text-align: center;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
`;

const FavoriteButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    top: 8px;
    right: 8px; 
    cursor: pointer;
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
    &:hover {
        background-color: #ccc;
        transform: scale(1.2);
    }
    transition: transform 0.3s ease-in-out; 
    z-index: 1000;
`;

const CardWrapper = styled.div`
     display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 15px;
    overflow: hidden;
    margin: 5px;
    width: clamp(100px, auto, 300px);
    background-color: #ccc;
    height: 500px;
    cursor: pointer;
    perspective: 1000px; /* Adiciona profundidade */

    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: rotateY(3deg) rotateX(3deg) scale(1.1);
        z-index: 100;
    }

    &:hover ${BgCardDetails} {
        transform: translateY(0%);
        opacity: 1;
    }

    /* &:hover ${BgCardDetails} {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 100%;
        height: 120%;
        position: absolute;
        top: 0%;
        word-break: break-word;
        white-space: pre-wrap;
        transition: all 0.3s ease-in-out;
    } */
`;

const CardImage = styled.img`
     width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;

    ${CardWrapper}:hover & {
        transform: scale(1.1);
    }

    &[src] {
        opacity: 1;
        content-visibility: auto;
    }

    &[src=""] {
        opacity: 0;
        content-visibility: hidden;
    }
`;


