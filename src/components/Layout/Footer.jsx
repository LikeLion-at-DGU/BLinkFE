import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div>footer1</div>
      <div>footer2</div>
      <div>footer3</div>
    </FooterContainer>
  );
}
