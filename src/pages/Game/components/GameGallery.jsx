import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";

const CloseIcon = styled(IoMdCloseCircle)`
    position: absolute;
    font-size: 2em;
    top: 10px;
    right: 10px;
    cursor: pointer;

`;

const getYouTubeVideoID = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const GameGallery = ({ game, picture, setPicture }) => {
    const [videoId, setVideoId] = useState({});
    if (!game) return null;


    const handleClick = (e) => {
        setPicture(e.target.src);
    };

    const Gallery =
        game?.gallery?.map((screenshot, index) => (
            <GalleryImage
                key={index}
                src={screenshot + `.png`}
                alt={`Screenshot ${index + 1}`}
                onClick={handleClick}
                loading="lazy"
                onError={(e) => {
                    e.target.style.display = "none";
                }}
            />
        )) || [];

    useEffect(() => {
        if (game && game.video === null && game.video.id === null) return
        const videoId = getYouTubeVideoID(`https://www.youtube.com/watch?v=${game.video?.id}`);
        setVideoId(videoId);
    }, [game.video])
    return (
        <GalleryWrapper id="galeria">
            {game.video &&
                <iframe
                    width="100%"
                    height="600px"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>}
            {Gallery.length > 0 && <Title>Galeria</Title>}
            <GalleryContainer>
                {Gallery}
            </GalleryContainer>
            {picture && (
                <Modal>
                    <ModalImage src={picture} alt="Screenshot" />
                    <CloseIcon onClick={() => setPicture(null)} />
                </Modal>
            )}
        </GalleryWrapper>
    );
};

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9999;
`;

const ModalImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
`;

const Title = styled.h2`
    color: white;
    font-family: "Satoshi-Bold";
    position: relative;
    text-align: center;
    margin: 20px 0px;

    &::before {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: #00ff88;
        position: absolute;
        bottom: 0px;
    }
`;

const GalleryWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    overflow: hidden;
    color: white;
    height: auto;
    background-color: #333;
    border-radius: 10px;
    padding: 10px;
`;

const GalleryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    gap: 10px;
`;


const GalleryVideo = styled.iframe`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

const GalleryImage = styled.img`
    width: 200px;
    border-radius: 10px;
    object-fit: cover;
    height: 100%;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        z-index: 100;
    }
`;

export default GameGallery;

