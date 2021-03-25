import React from "react"
import { StyledButtonOrange, StyledButtonWhite } from "./button.style"

interface IButtonPropList {
  type: any,
  title: string
}

export const ButtonOption: React.FC<IButtonPropList> = ({ type, children, title }) => {

  return type === "colouredBg" ? (
    <StyledButtonOrange title={title}>{children}</StyledButtonOrange>
  ) : type === "whiteBg" ? (
    <StyledButtonWhite>
      {children}
    </StyledButtonWhite>
  ) : (
    <div>{children}</div>
  )
}
