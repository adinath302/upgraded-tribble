import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";

function GamePlay() {
  return (
    <MainContainer>
      <div className="Top_section">
        <TotalScore />
        <NumberSelector />
      </div>
      <RoleDice />
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .Top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
