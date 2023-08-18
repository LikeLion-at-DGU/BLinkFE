import React from "react";
import { SocialLoginButton } from "../SocialLogin/socialLogins";

const kakao = () => {
  const restApiKey = process.env.REACT_APP_REST_API_KEY;
  const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
};
