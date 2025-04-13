import { useEffect, useState } from "react";
import { searchGames } from "../../api/api";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import GameViewer from "./components/GameViewer";
import GameGallery from "./components/GameGallery";
import { IoChevronBackCircle } from "react-icons/io5";


const BackButton = styled(IoChevronBackCircle)`
    position: absolute;
    top: 100px;
    left: 20px;
    font-size: 2em;
    color: white;
    cursor: pointer;
`;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Game() {
    const [game, setGame] = useState({});

    const [picture, setPicture] = useState(null);

    const query = useQuery();
    const gametitle = query.get("title");

    useEffect(() => {
        if (!gametitle) return;

        const searchGame = async () => {
            try {
                console.log("Procurar Jogo ", gametitle);
                const foundGames = await searchGames(gametitle, 1);
                if (foundGames.length > 0) {
                    setGame(foundGames[0]);
                } else {
                    console.warn("Nenhum jogo encontrado com o título:", gametitle);
                }
            } catch (error) {
                console.error("Erro ao buscar jogo:", error);
            }
        };

        searchGame();
    }, [gametitle]);
    try {
        return (
            <section id="game">
                <GameContainer>
                    <BackButton size={40} onClick={() => window.history.back()} />
                    <GameViewer game={game} />
                    <GameGallery game={game} picture={picture} setPicture={setPicture} />
                </GameContainer>
            </section>
        );

    } catch (error) {
        console.error("Erro ao carregar");
        return <p>Erro ao carregar</p>;
    }
}

const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 50px;
`;