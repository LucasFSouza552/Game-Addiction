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

const Card = ({ game, isFavorite, onToggleFavorite, showFavoriteButton = false }) => {
    const navigate = useNavigate();
    if (!game) return null;

    return (
        <CardWrapper key={game.id} title={game.title} onClick={() => navigate(`/game?title=${game.title}`)}>
            <CardImage src={"http://" + game.boxImage + ".png"} alt={game.title} />
            {onToggleFavorite && showFavoriteButton && <FavoriteButton title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"} onClick={onToggleFavorite}>
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
    perspective: 1000px;
    transform-style: preserve-3d;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    transition: 
        transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
        box-shadow 0.4s ease-out,
        z-index 0.3s step-end;

    &:hover {
        transform: 
            rotateY(5deg) 
            rotateX(2deg) 
            scale(1.05)
            translateY(-8px);
        z-index: 100;
        box-shadow: 
            0 10px 20px rgba(0, 0, 0, 0.2),
            0 6px 6px rgba(0, 0, 0, 0.1);
        
        &::before {
            opacity: 0.8;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%);
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
        z-index: 1;
        pointer-events: none;
    }

    &:hover ${BgCardDetails} {
        transform: translateY(0%);
        opacity: 1;
        transition: 
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s,
            opacity 0.4s ease-out 0.1s;
    }

    backface-visibility: hidden;
    will-change: transform;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0;

    ${CardWrapper}:hover & {
        transform: scale(1.1);
    }

    &[src] {
        opacity: 1;
        content-visibility: auto;
        transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
    }

    &[src=""] {
        opacity: 0;
        content-visibility: hidden;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        z-index: 1;
    }

    &[src]::before {
        display: none;
    }

    @keyframes shimmer {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
`;


