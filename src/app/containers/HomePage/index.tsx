import React, {useEffect} from "react";
import styled from "styled-components";
import animeService from "../../services/animeService";

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function HomePage(props: IHomePageProps) {
    const fetchAnimePage =async () => {
        const animePage = await animeService.getAnimePage(0).catch((err) => {
            console.log("Error", err);
        });

        console.log("Anime Page", animePage);
    }

 useEffect(() => {
   fetchAnimePage();
 }, [])
    
  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  );
}

export default HomePage;
