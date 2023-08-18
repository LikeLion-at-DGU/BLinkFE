// line style.jsx

import styled from "styled-components";

export const LineContainer = styled.div`
  width: 80%;
  text-align: center;
  border-bottom: 1px solid rgb(170, 170, 170);
  line-height: 0.1em;
  margin: ${(props) => props.margin || "70px 0px 70px"};
`;

export const LineText = styled.span`
  background: #fff;
  padding: 0 10px;
`;
