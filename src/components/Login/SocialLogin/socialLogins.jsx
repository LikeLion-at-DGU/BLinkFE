//소셜 로그인 버튼 (구글, 카카오, 네이버 예정)

import React from "react";
import { SocialLogin, SocialLoginImg, SocialLoginText } from "./style";

export function SocialLoginButton({
  onClick,
  socialImg,
  socialalt,
  socialText,
  backgroundColor,
  borderColor,
  color,
}) {
  return (
    <SocialLogin
      onClick={onClick}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      <SocialLoginImg src={socialImg} alt={socialalt} />
      <SocialLoginText color={color}>{socialText}</SocialLoginText>
    </SocialLogin>
  );
}
