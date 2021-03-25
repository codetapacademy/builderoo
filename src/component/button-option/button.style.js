import styled from "styled-components"

export const StyledButtonOrange = styled.div`
  background-color: ${({ color }) => (color ? color : "#FF6B35")};
  color: white;
  width: fit-content;
  padding: 5px 25px;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background-color: white;
    color: #FF6B35;
    border: 2px solid white;
  }
  
`

export const StyledButtonWhite = styled.div`
  background-color: ${({ color }) => (color ? color : "#fff")};
  color: #ff6b35;
  width: fit-content;
  padding: 5px 25px;
  /* font-size: 18px; */
  border: 3px solid #FF6B35;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #FF6B35;
    color: white;
    border: 2px solid white;
  }
`