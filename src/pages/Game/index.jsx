import { useEffect, useState } from "react";
import { searchByTitle, searchGames } from "../../api/api";
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

    console.log(gametitle);

    useEffect(() => {
        if (!gametitle) return;

        const searchGame = async () => {
            try {
                const foundGames = await searchByTitle(gametitle);
                console.log(foundGames)
                if (foundGames) {
                    setGame(foundGames);
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
            <GameContainer>
                <BackButton size={40} onClick={() => window.history.back()} />
                <GameViewer game={game} />
                <GameGallery game={game} picture={picture} setPicture={setPicture} />
            </GameContainer>
        );

    } catch (error) {
        console.error("Erro ao carregar");
        return <p>Erro ao carregar</p>;
    }
}



const GameContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 10px 0px;
    width: 100%;
`;