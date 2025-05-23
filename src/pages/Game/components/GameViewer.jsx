import styled from "styled-components";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

/**
 * Componente para visualizar informações de um jogo.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.game - Objeto contendo informações sobre o jogo.
 * @param {string} props.game.title - O título do jogo.
 * @param {string} props.game.image - A URL da imagem do jogo.
 * @param {Array} props.game.genres - Lista de gêneros do jogo.
 */
const GameViewer = ({ game }) => {
    const [loading, setLoading] = useState(true);
    const [gameData, setGameData] = useState({});

    useEffect(() => {
        setLoading(true);
        setGameData(game);
        setLoading(false);
    }, [game]);

    return (
        <GameWrapper>
            {loading ? (
                <LoadingContainer>
                    <LoadingIcon />
                </LoadingContainer>
            ) : (
                <>
                    {gameData.image && <GameThumbnail src={`http://${gameData.image}.png`} alt={gameData.title} />}
                    <GameDetails>

                        <GameTitle>{gameData.title}</GameTitle>

                        <LabelAndDescription inline label="Desenvolvedor" description={gameData.developer} />
                        <LabelAndDescription inline label="Publicadora" description={gameData.publisher} />
                        <LabelAndDescription inline label="Plataforma" description={
                            gameData.worksOn ? (
                                <List inline>
                                    {Object.entries(gameData.worksOn).map(([key, value]) => (
                                        <GenresTag key={key}>{value ? <FaCheck size={20} color="green" /> : <FaTimes size={20} color="red" />} {key}</GenresTag>
                                    ))}
                                </List>
                            ) : null
                        } />

                        <LabelAndDescription inline label="Gêneros" description={(<List inline>{gameData.genres?.filter((genre) => genre).map((genre, index) => {
                            return (
                                <GenresTag bgColor={genre} color="black" key={genre}>{genre}</GenresTag>
                            )
                        })}</List>)} />

                        <PriceComponent game={gameData} />

                    </GameDetails>
                </>
            )}
        </GameWrapper>
    )
}

const PriceComponent = ({ game }) => {
    const discount = game.price?.discountPercentage;
    const oldPrice = game.price?.baseAmount || '0.00';
    const newPrice = game.price?.finalAmount || '0.00';
    const currencySymbol = game.price?.symbol || 'R$';
    
    return (
        <PriceContainer>
            {discount > 0 ? (
                <>
                    <CurrentPrice>
                        Por: {currencySymbol} {newPrice}
                    </CurrentPrice>
                    <OriginalPrice>
                        De: {currencySymbol} {oldPrice}
                    </OriginalPrice>
                    <DiscountBadge>{discount}% OFF</DiscountBadge>
                </>
            ) : (
                <CurrentPrice>
                    Preço: {currencySymbol} {newPrice}
                </CurrentPrice>
            )}
        </PriceContainer>
    );
};


const LabelAndDescription = ({ label, description }) => {
    return (
        <InfoContainer>
            <LabelInfo>{label}</LabelInfo>

            {description}
        </InfoContainer>
    )
}


const PriceContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 255, 136, 0.1), rgba(96, 239, 255, 0.1));
    padding: 25px;
    border-radius: 12px;
    margin: 30px 0px;

    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    gap: 8px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(to right, #00ff88, #60efff);
    }
`;


const OriginalPrice = styled.span`
    font-size: 1.1em;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: line-through;
    
    font-family: 'satoshi-regular';
`;

const CurrentPrice = styled.span`
    font-size: 1.8em;
    font-weight: 700;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'satoshi-bold';
`;

const DiscountBadge = styled.span`
    background-color: #ff5e5e;
    color: #0f0f13;
    padding: 4px 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-left: 12px;        
    font-family: 'satoshi-bold';
`;


const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LabelInfo = styled.h4`
    margin-top: 10px;
    margin-bottom: 5px;
`;

const GenresTag = styled.li`
    background-color: #333;
    color: ${({ color }) => color || 'white'};
    font-family: "Satoshi-Bold";
    border: solid 1px white;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;

    background-color: ${({ bgColor }) => {

        if (!bgColor) {
            return '#333';
        }

        let hash = 0;
        for (let i = 0; i < bgColor.length; i++) {
            hash = bgColor.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = hash % 360;
        return `hsl(${hue}, 60%, 50%)`;
    }};

`;

const List = styled.ul`
    display: flex;
    flex-direction: ${({ inline }) => inline ? 'row' : 'column'};
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
`;

const GameDetails = styled.div`
    color: white;
    width: 80%;
    justify-content: center;
    display: flex;
    margin: 10px 20px;
`;

const GameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
    overflow: hidden;
    height: auto;
    background-color: #333;
    border-radius: 10px;
`;


const GameTitle = styled.h1`
    font-family: "Satoshi-Bold";
    color: white;
    font-size: 40px;
    text-align: left;
`;


const GameThumbnail = styled.img`
    max-width: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
`;

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const LoadingIcon = styled.div`
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default GameViewer;
