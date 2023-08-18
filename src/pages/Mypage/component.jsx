import React, { useState, useEffect } from "react"; // Import useState and useEffect
import * as S from "./style";
import {
  faRightFromBracket,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../assets/api/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Mypage() {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = "/api/mypage/profile";

    async function fetchUserProfile() {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        const data = response.data;
        const profileImage = data.profile_image;
        const nickname = data.nickname;

        console.log("프로필 이미지:", profileImage);
        console.log("닉네임:", nickname);

        // Update the state if needed
        setName(nickname);
        setProfile(profileImage);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    }

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    // 로그아웃 API 요청
    axios
      .post("/api/dj-rest-auth/logout/")
      .then((response) => {
        // 만약 로그아웃이 성공적으로 이루어진다면, 로컬 스토리지에서 토큰을 제거하고
        // 홈으로 리디렉션
        localStorage.removeItem("token");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  return (
    <S.Outline>
      <p style={{ fontSize: "40px", fontWeight: "600", marginTop: "0px" }}>
        프로필
      </p>

      <S.ImgBox src={profile} alt="프로필 이미지" />
      <S.Idp>{name}</S.Idp>
      <S.Settingp style={{ marginTop: "100px" }}>
        <Link to="/myaccount">
          내 계정 관리 <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </S.Settingp>
      <S.Settingp>
        <Link to="/myactive">
          내 활동 관리 <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </S.Settingp>

      <S.Logoutp onClick={handleLogout}>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          style={{ marginRight: "20px" }}
        />
        로그아웃
      </S.Logoutp>
    </S.Outline>
  );
}
