import { useEffect, useState } from "react"
import styled from "styled-components";
import { getGames } from "../api/api";
import Card from "./Card";

const GameList = ({ account, setAccount, searchTerms, onlyFavoriteGames }) => {
    const [gamesList, setGamesList] = useState([{ "customAttributes": [], "developer": "Terrible Toybox", "publisher": "Devolver Digital", "gallery": ["//images-4.gog-statics.com/d85262589e3366a7d3bdb7d7f6fd5859772d75480bbada3a1071b57d624af5ea", "//images-2.gog-statics.com/a06d35a9d06bae594c6c52fcec9ddbc4cf979a212ea254e4460b0535dd837e05", "//images-2.gog-statics.com/1683543f9578c19ca45aa30203477f95f36df0fc7d644fa12eb2dacda48ba1c9", "//images-3.gog-statics.com/4d96e288042222a34f8070c449054f62fb25910f8cafeeb119ebe302daf01d8e", "//images-2.gog-statics.com/b83a4cae3e62baadd6a30189fa285e45ae7d54069dc863ea792ec41cb30333f9", "//images-1.gog-statics.com/c9fe6f15e32b53f5964ec12d2827eb7e9f46b7b9d63512dc576cf746f539b98a", "//images-4.gog-statics.com/e84f6fe1f797789a0b593b4922b8f205a6a8f2629d00f05f0efbeae74cc6a1fd", "//images-4.gog-statics.com/aa290555cf52b926751eb69f24e3e8d3c6b097b77ea2e18c653aa33967dc33a9", "//images-2.gog-statics.com/3bd42b247e99ed5f6edd7a65dc8d953a953ce8b70decd4f13d50343a3339ce0c", "//images-1.gog-statics.com/2b51949e03b938ba8bb10295f208a9a4850bf99d335035c97be6eb7edd70c2a0", "//images-1.gog-statics.com/354020135a849912c570c1466e6f4cf3d11be173a172809f049de9c56b1dd031", "//images-1.gog-statics.com/17b7c7136e329e8a10e0f4019cf143bc52b07660e53ec2e0ae17fc9d2a5c50c0"], "video": { "id": "QW9NWLYhD00", "provider": "youtube" }, "supportedOperatingSystems": ["windows", "mac", "linux"], "genres": ["Adventure", "Point-and-click", "Fantasy"], "globalReleaseDate": 1669586400, "isTBA": false, "price": { "currency": "BRL", "amount": "36.99", "baseAmount": "73.99", "finalAmount": "36.99", "isDiscounted": true, "discountPercentage": 50, "discountDifference": "37.00", "symbol": "R$", "isFree": false, "discount": 50, "isBonusStoreCreditIncluded": false, "bonusStoreCreditAmount": "0.00", "promoId": "20250409_casual_fun_promo" }, "isDiscounted": true, "isInDevelopment": false, "id": 1436760537, "releaseDate": 1669586400, "availability": { "isAvailable": true, "isAvailableInAccount": true }, "salesVisibility": { "isActive": true, "fromObject": { "date": "2022-11-28 15:55:00.000000", "timezone_type": 3, "timezone": "Europe/Nicosia" }, "from": 1669643700, "toObject": { "date": "2037-12-31 23:59:59.000000", "timezone_type": 3, "timezone": "Europe/Nicosia" }, "to": 2145909599 }, "buyable": true, "title": "Return to Monkey Island", "image": "//images-3.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78", "url": "/en/game/return_to_monkey_island", "supportUrl": "/support/return_to_monkey_island", "forumUrl": "/forum/monkey_island_series", "worksOn": { "Windows": true, "Mac": true, "Linux": true }, "category": "Adventure", "originalCategory": "Adventure", "rating": 0, "type": 1, "isComingSoon": false, "isPriceVisible": true, "isMovie": false, "isGame": true, "slug": "return_to_monkey_island", "isWishlistable": true, "extraInfo": [], "ageLimit": 0, "boxImage": "//images-4.gog-statics.com/34c4b2867f88166b18b1518bc1af08960edc1301549813548852bf2b88ce7173" }, { "customAttributes": [], "developer": "Terrible Toybox", "publisher": "Devolver Digital", "gallery": ["//images-4.gog-statics.com/d85262589e3366a7d3bdb7d7f6fd5859772d75480bbada3a1071b57d624af5ea", "//images-2.gog-statics.com/a06d35a9d06bae594c6c52fcec9ddbc4cf979a212ea254e4460b0535dd837e05", "//images-2.gog-statics.com/1683543f9578c19ca45aa30203477f95f36df0fc7d644fa12eb2dacda48ba1c9", "//images-3.gog-statics.com/4d96e288042222a34f8070c449054f62fb25910f8cafeeb119ebe302daf01d8e", "//images-2.gog-statics.com/b83a4cae3e62baadd6a30189fa285e45ae7d54069dc863ea792ec41cb30333f9", "//images-1.gog-statics.com/c9fe6f15e32b53f5964ec12d2827eb7e9f46b7b9d63512dc576cf746f539b98a", "//images-4.gog-statics.com/e84f6fe1f797789a0b593b4922b8f205a6a8f2629d00f05f0efbeae74cc6a1fd", "//images-4.gog-statics.com/aa290555cf52b926751eb69f24e3e8d3c6b097b77ea2e18c653aa33967dc33a9", "//images-2.gog-statics.com/3bd42b247e99ed5f6edd7a65dc8d953a953ce8b70decd4f13d50343a3339ce0c", "//images-1.gog-statics.com/2b51949e03b938ba8bb10295f208a9a4850bf99d335035c97be6eb7edd70c2a0", "//images-1.gog-statics.com/354020135a849912c570c1466e6f4cf3d11be173a172809f049de9c56b1dd031", "//images-1.gog-statics.com/17b7c7136e329e8a10e0f4019cf143bc52b07660e53ec2e0ae17fc9d2a5c50c0"], "video": { "id": "QW9NWLYhD00", "provider": "youtube" }, "supportedOperatingSystems": ["windows", "mac", "linux"], "genres": ["Adventure", "Point-and-click", "Fantasy"], "globalReleaseDate": 1669586400, "isTBA": false, "price": { "currency": "BRL", "amount": "36.99", "baseAmount": "73.99", "finalAmount": "36.99", "isDiscounted": true, "discountPercentage": 50, "discountDifference": "37.00", "symbol": "R$", "isFree": false, "discount": 50, "isBonusStoreCreditIncluded": false, "bonusStoreCreditAmount": "0.00", "promoId": "20250409_casual_fun_promo" }, "isDiscounted": true, "isInDevelopment": false, "id": 1436760537, "releaseDate": 1669586400, "availability": { "isAvailable": true, "isAvailableInAccount": true }, "salesVisibility": { "isActive": true, "fromObject": { "date": "2022-11-28 15:55:00.000000", "timezone_type": 3, "timezone": "Europe/Nicosia" }, "from": 1669643700, "toObject": { "date": "2037-12-31 23:59:59.000000", "timezone_type": 3, "timezone": "Europe/Nicosia" }, "to": 2145909599 }, "buyable": true, "title": "Return to Monkey Island", "image": "//images-3.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78", "url": "/en/game/return_to_monkey_island", "supportUrl": "/support/return_to_monkey_island", "forumUrl": "/forum/monkey_island_series", "worksOn": { "Windows": true, "Mac": true, "Linux": true }, "category": "Adventure", "originalCategory": "Adventure", "rating": 0, "type": 1, "isComingSoon": false, "isPriceVisible": true, "isMovie": false, "isGame": true, "slug": "return_to_monkey_island", "isWishlistable": true, "extraInfo": [], "ageLimit": 0, "boxImage": "//images-4.gog-statics.com/34c4b2867f88166b18b1518bc1af08960edc1301549813548852bf2b88ce7173" }]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const params = (searchTerms ? {
                    search: searchTerms,
                    mediaType: "game",
                    page: 1
                } : {
                    page: 1,
                    sort: "popularity",
                    system: "windows",
                    onlyGames: true,
                    mediaType: "game",
                    price: "discounted",
                    limit: 30
                });


                const response = await getGames(params);

                if (response.length === 0) {
                    return;
                }

                if (onlyFavoriteGames) {
                    setGamesList(response.filter(game => account?.favoriteGames?.includes(game.title)));
                    return;
                }

                setGamesList(response);


            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            }
        };

        fetchGames();

    }, [searchTerms, account.favoriteGames]);

    const toggleFavorite = (slugGame) => {
        setAccount((prevAccount) => {
            const alreadyFavorited = prevAccount.favoriteGames.includes(`${slugGame}`);
            const updatedFavorites = alreadyFavorited
                ? prevAccount.favoriteGames.filter(id => id !== `${slugGame}`)
                : [...prevAccount.favoriteGames, `${slugGame}`];

            return {
                ...prevAccount,
                favoriteGames: updatedFavorites
            };
        });
    };

    return (
        <GameListStyle>
            {gamesList && gamesList.map((game, index) => {
                return (
                    <Card
                        game={game}
                        key={game.id + "-" + index}
                        isFavorite={account?.favoriteGames?.includes(`${game.title}`)}
                        onToggleFavorite={() => toggleFavorite(game.title)}
                    />
                )
            })}
        </GameListStyle>
    );
}


const GameListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 100px));
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: center;
    overflow-y: auto;
    justify-items: center;
`;

export default GameList;