import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-space-evenly ;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 10em;

  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.div`
  margin-top: 8px;
  font-size: 12pt;
  color: #000;
  font-weight: 600;
`;

const AnimeItemContainer = styled.div`
  width: 12em;
  height: 16em;
  display: flex;
  flex-direction: column ;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));



export function HotAnime() {
  const { animePage } = useAppSelector(stateSelector);
  const isEmptyAnimePage = !animePage || !animePage.media || animePage.media.length === 0;
console.log("checkData",animePage)
  if(!isEmptyAnimePage){
    console.log("Nodata")
  return null;}
  
  return (
  <HotAnimeContainer>
    {animePage && animePage.media && animePage.media.map((anime)=>(
        <AnimeItemContainer>
        
        <AnimeCover>
            <img src={anime?.coverImage?.extraLarge || "img"} alt="img" />
        </AnimeCover>
        <AnimeTitle>{anime?.title?.english}</AnimeTitle>
        </AnimeItemContainer>
    )
    )}
    </HotAnimeContainer>
    );
}
