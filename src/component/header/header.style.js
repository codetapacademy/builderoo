import styled from "styled-components"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #FF6B35;
  display: flex;
  justify-content: space-between;
`

export const StyledHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledHeaderRightNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin-left: 10px;
  font-size: 12px;

  &:nth-last-child(7) {
    margin-left: 30px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 22px;
    margin-left: 15px;
  }
/* 
  span {
    height: 60px;
    width: 5px;
    background-color: #FFA4A4;
    border-radius: 5px;
    margin-left: 15px;
  } */
`

export const StyledHeaderRightLink = styled.div`
  display: flex;
`

export const StyledHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  div {
    color: white;
  }
`

export const StyledHeaderLeftBuilderoo = styled.div`
  font-size: 35px;
  font-weight: bold;

  span {
    font-size: 18px;
  }
`

export const StyledHeaderLeftDevelopments = styled.div`
  font-size: 25px;
  padding-left: 18px;

`

export const StyledHeaderLeftArrowdown = styled(KeyboardArrowDownIcon)`
  background-color: white;
  color: black;
  border-radius: 50%;

`

export const StyledHeaderLeftUser = styled(AccountCircleIcon)`
  width: 50px;
  height: 50px;

`

export const StyledHeaderLefKeybordArrowDown = styled(KeyboardArrowDownIcon)`
  background-color: white;
  color: black;
  border-radius: 50%;
  
`

