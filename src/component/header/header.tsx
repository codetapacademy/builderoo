import React, { useState } from "react"
import { ButtonOption } from "../button-option"
// import * as HeaderST from "./header.style"
import { StyledHeaderWrapper, StyledHeaderLeft, StyledHeaderLeftBuilderoo, StyledHeaderLeftDevelopments, StyledHeaderRight, StyledHeaderRightNav, StyledHeaderRightLink, StyledHeaderLefKeybordArrowDown, StyledHeaderLeftArrowdown, StyledHeaderLeftUser } from "./header.style"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



interface HeaderPropList {
  // handleClick: () => void,
  // event: any
}

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <StyledHeaderWrapper>
      <StyledHeaderLeft>
        <StyledHeaderLeftBuilderoo>Builderoo.<span>uk</span></StyledHeaderLeftBuilderoo>
        <StyledHeaderLeftDevelopments>Developments</StyledHeaderLeftDevelopments>
      </StyledHeaderLeft>
      <StyledHeaderRight>
        <StyledHeaderRightNav>
          <ButtonOption type="colouredBg" title="Post a job">Post a job</ButtonOption>
          {/* <span></span> */}

          <StyledHeaderRightLink>
            Client
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <StyledHeaderLefKeybordArrowDown />
              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClick={handleClose}>
                <MenuItem onClick={handleClose}>How it works</MenuItem>
                <MenuItem onClick={handleClose}>About us</MenuItem>
                <MenuItem onClick={handleClose}>Project Advice</MenuItem>
                <MenuItem onClick={handleClose}>Find trades</MenuItem>
              </Menu>
            </Button>
          </StyledHeaderRightLink>
          <StyledHeaderRightLink>
            Trade member
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <StyledHeaderLefKeybordArrowDown />
              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClick={handleClose}>
                <MenuItem onClick={handleClose}>Trade sign up</MenuItem>
                <MenuItem onClick={handleClose}>How it works</MenuItem>
                <MenuItem onClick={handleClose}>Trade academy</MenuItem>
              </Menu>
            </Button>
          </StyledHeaderRightLink>

          <span></span>
          <span></span>
          <div>Login <StyledHeaderLeftUser /></div>
        </StyledHeaderRightNav>
      </StyledHeaderRight>
    </StyledHeaderWrapper>
  )
} 