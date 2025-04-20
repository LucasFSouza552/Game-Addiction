import { useState } from "react";
import GameGenres from "../utils/GameGenres";
import { FaFilter } from "react-icons/fa";
import styled from "styled-components";

export default function GameFilter({ filters, setFilters }) {
    const [openFilter, setOpenFilter] = useState(false);

    if (!filters) {
        return null;
    }


    const openFilterHandler = () => {
        setOpenFilter(!openFilter);
    };

    const handleFilterChange = (key, value) => {

        if (!filters) return;
        setFilters((prevFilters) => {
            const prevFilterValues = prevFilters[key] || [];
            const newFilterValues = prevFilterValues.includes(value)
                ? prevFilterValues.filter((filter) => filter !== value)
                : [...prevFilterValues, value];

            return { ...prevFilters, [key]: newFilterValues };
        });
    }
    return (
        <>
            <FilterToggleButton onClick={openFilterHandler} openFilter={openFilter}>
                <FilterIcon />
            </FilterToggleButton>
            <GameFilterContainer openFilter={openFilter}>
                <FilterCloseButton onClick={openFilterHandler}>
                    <FilterIcon />
                </FilterCloseButton>
                <FilterHeader>
                    <FilterTitle>Gêneros</FilterTitle>
                </FilterHeader>
                <FilterList>
                    {Object.entries(GameGenres).map(([key, value]) => (
                        <FilterItem
                            key={value}
                            value={value}
                            checked={filters && filters.category?.includes(value)}
                            onClick={() => handleFilterChange("category", value)}
                        >
                            {key}
                        </FilterItem>
                    ))}
                </FilterList>

                <FilterHeader>
                    <FilterTitle>Plataforma</FilterTitle>
                </FilterHeader>
                <FilterList>
                    <FilterItem
                        value="windows"
                        checked={filters["system"]?.includes("windows")}
                        onClick={() => handleFilterChange("system", "windows")}
                    >
                        Windows
                    </FilterItem>
                    <FilterItem
                        value="mac"
                        checked={filters["system"]?.includes("mac")}
                        onClick={() => handleFilterChange("system", "mac")}
                    >
                        Mac
                    </FilterItem>
                    <FilterItem
                        value="linux"
                        checked={filters["system"]?.includes("linux")}
                        onClick={() => handleFilterChange("system", "linux")}
                    >
                        Linux
                    </FilterItem>
                </FilterList>

            </GameFilterContainer>
        </>
    );
}

const GameFilterContainer = styled.div`
    --text-color: #ffffff;
    --border-radius: 8px;
    --transition-time: 0.3s;
    
    transform: translateX(-100%);
    position: relative;
    left: 0;
    z-index: 1000;
    background-color: var(--bgColor);
    color: var(--text-color);
    font-size: 1rem;
    width: 280px;
    height: min-content;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    box-shadow: ${({ openFilter }) => openFilter ? '2px 2px 10px rgba(0, 0, 0, 0.3)' : 'none'};
    transition: all var(--transition-time) cubic-bezier(0.4, 0, 0.2, 1);
    display: ${({ openFilter }) => openFilter ? 'block' : 'none'};
    animation: ${({ openFilter }) => openFilter ? 'toggleOpen' : 'toggleClose'} var(--transition-time) ease-in-out forwards;

    @keyframes toggleOpen {
        from {
            transform: translateX(-100%);
            opacity: 0;
            display: block;
        }
        to {
            transform: translateX(0);
            opacity: 1;
            display: block;
        }
    }

    @keyframes toggleClose {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(-100%);
            opacity: 0;
            display: none;
        }
    }
`;

const FilterToggleButton = styled.div`
    display: ${({ openFilter }) => openFilter ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    color:white;
    background-color: var(--bgColor);
    border-radius: 0px 0px 10px 0px;
    cursor: pointer;
    transition: background-color var(--transition-time);
    position: absolute;
`;

const FilterCloseButton = styled(FilterToggleButton)`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    z-index: 1001;
`;

const FilterIcon = styled(FaFilter)`
    color: var(--text-color);
    font-size: 1.5rem;
`;

const FilterHeader = styled.div`
    position: relative;
    padding: 20px 15px 15px;
`;

const FilterTitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    padding: 15px 0;
    margin: 0;
    position: relative;
    
    &::after {
        content: "";
        position: absolute;
        width: 80%;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--primaryColor), transparent);
        bottom: 0;
        left: 10%;
    }
`;

const FilterList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0 15px 15px;
`;

const FilterItem = styled.span`
    padding: 8px 16px;
    border-radius: var(--border-radius);
    background-color: var(--primaryColor);
    font-weight: bold;
    cursor: pointer;
    transition: all var(--transition-time) ease;
    white-space: nowrap;
    
    &:hover {
        background-color: ${({ checked }) => (checked ? '#dec11c' : "#5a1ea8")};
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    &:active {
        transform: translateY(0);
    }

    background-color: ${({ checked }) => (checked ? 'var(--secondaryColor)' : 'var(--primaryColor)')};
    color: ${({ checked }) => (checked ? '#000' : 'var(--text-color)')};

`;