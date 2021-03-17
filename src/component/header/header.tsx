import React from "react"
import * as HeaderST from "./header.style"

export const Header = () => {
  return (
    <HeaderST.StyledHeaderWrapper>
      <HeaderST.StyledHeaderLeft>
        <div>Builderoo.<span>uk</span></div>
        <div>Developments</div>
      </HeaderST.StyledHeaderLeft>
      <HeaderST.StyledHeaderRight>
        <button>Prost a job</button>
        <nav>
          <div>Client</div>
          <div>Trade member</div>
          <div>Login</div>
        </nav>
      </HeaderST.StyledHeaderRight>
    </HeaderST.StyledHeaderWrapper>
  )
} 