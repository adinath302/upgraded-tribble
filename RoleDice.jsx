import React, { useState } from "react";
import styled from "styled-components";

function RoleDice() {
  const [CurrentDice, SetCurrentDice] = useState();

  //  Onclick on the div will generate a random Number from 1 to 6 that we get as a parameter
  const GenerateRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  
  console.log(GenerateRandomNumber(1, 6));
  

  return (
    <DiceContainer>
      <div className="dice" onClick={() => GenerateRandomNumber(1, 6)}>
        {/* i give the function 1 to 6 as a parameter */}
        <img src="/images/dice/dice_1.png" alt="dice-1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;

// ReactJs - NextJs - Angular - Tailwind - ChakraUI, Siap slicing dari Figma
