import { useEffect, useState } from "react";
import { searchByTitle, searchGames } from "../../api/api";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import GameViewer from "./components/GameViewer";
import GameGallery from "./components/GameGallery";
import { FaAngleLeft } from "react-icons/fa";



const BackButton = styled(FaAngleLeft)`
    position: absolute;
    top: 120px;
    left: 20px;
    z-index: 1000;
    background-color: #333333;
    border-radius: 5px;
    border: solid 1px #ffffff;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: fit-content;
    font-size: 2em;
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
                const foundGames = await searchByTitle(gametitle);
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