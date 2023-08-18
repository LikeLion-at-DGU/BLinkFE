// Line.jsx

import React from "react";
import { LineContainer, LineText } from "./style"; // style.jsx에서 정의한 스타일을 가져옵니다.

export const Line = ({ text, margin }) => {
  return (
    <LineContainer style={{ margin }}>
      <LineText>{text}</LineText>
    </LineContainer>
  );
};
