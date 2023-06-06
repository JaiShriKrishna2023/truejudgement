import React from 'react';
import styled from 'styled-components';

const ColorSelectorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColorOption = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ColorSelection = ({ colors, onSelect }) => {
    console.log('.....', onSelect);
  const handleColorSelect = (color) => {
    onSelect(color);
  };

  return (
    <ColorSelectorContainer>
      {colors.map((color, index) => (
        <ColorOption
          key={index}
          color={color}
          onClick={() => handleColorSelect(color)}
        />
      ))}
    </ColorSelectorContainer>
  );
};

export default ColorSelection;
