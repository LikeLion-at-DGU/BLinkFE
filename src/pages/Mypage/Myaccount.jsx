import React, { useEffect, useState } from "react";
import Mypage from "./component";
import * as S from "./style";
import axios from "../../assets/api/axios";

export function AccountRight() {
  const [nickname, setNickname] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [profileImage, setProfileImage] = useState("/img/default.png"); // 상태 변수 추가

  const apiUrl = "/api/mypage/profile";

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        await axios
          .get(apiUrl, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            const data = response.data;
            const Img = data.profile_image;
          });
      } catch (error) {
        console.error("프로필 이미지 가져오기 실패:", error);
      }
    };
    fetchProfileImage();
  }, []);

  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById("photo");
    try {
      const formData = new FormData();
      if (fileInput.files[0]) {
        formData.append("profile_image", fileInput.files[0]);
      }
      formData.append("nickname", nickname);
      formData.append("old_password", oldPassword);
      formData.append("new_password", newPassword);
      formData.append("new_password_confirm", newPasswordConfirm);

      const response = await axios.put(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert("변경사항이 적용되었습니다.");
      window.location.reload();
    } catch (error) {
      console.error("API 호출 에러:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleProfileUpdate}>
        <S.AccountBackground>
          <p style={{ fontSize: "35px", fontWeight: "600", margin: "0px" }}>
            내 계정 관리
          </p>
          <p style={{ fontSize: "20px", color: "#818181", marginTop: "10px" }}>
            대표 프로필과 별명을 수정할 수 있습니다.
          </p>
          <S.Textbox>
            <p style={{ fontSize: "25px" }}>프로필 사진 변경</p>
            <S.ImgBox src={profileImage}></S.ImgBox>
            <S.Middle>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleImagePreview}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            </S.Middle>

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <S.Explain>닉네임</S.Explain>
                <S.Explain>현재 비밀번호</S.Explain>
                <S.Explain>변경할 비밀번호</S.Explain>
                <S.Explain>비밀번호 확인</S.Explain>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <S.Inputt
                  type="text"
                  value={nickname}
                  onChange={(event) => setNickname(event.target.value)}
                />
                <S.Inputt
                  type="password"
                  value={oldPassword}
                  onChange={(event) => setOldPassword(event.target.value)}
                  required
                />

                <S.Inputt
                  type="password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                />

                <S.Inputt
                  type="password"
                  value={newPasswordConfirm}
                  onChange={(event) =>
                    setNewPasswordConfirm(event.target.value)
                  }
                />
              </div>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#3865BF",
                marginTop: "20px",
                color: "white",
                fontWeight: "600",
                fontSize: "20px",
                marginLeft: "auto",
                marginRight: "auto",
                width: "300px",
              }}
            >
              변경 사항 제출
            </button>
          </S.Textbox>
        </S.AccountBackground>
      </form>
    </>
  );
}

export function Myaccount() {
  return (
    <div style={{ display: "flex" }}>
      <Mypage></Mypage>
      <AccountRight></AccountRight>
    </div>
  );
}
