import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";
import axios from "../../assets/api/axios";
import NotificationItem from "./Notice"; // 알림 컴포넌트 임포트
import { Link } from "react-router-dom"; // react-router-dom에서 Link 컴포넌트 임포트

export default function Modal({ setModalOpen, Id, title }) {
  const [notifications, setNotifications] = useState([]);
  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const response = await axios.get("/api/mainposts/notification", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.data) {
          setNotifications(response.data); // 알림 객체들을 전체 배열로 설정
        } else {
          console.error("알림 데이터가 없습니다.", response.data);
        }
      } catch (error) {
        console.error("알림창 에러:", error);
      }
    }

    fetchNotifications();
  }, []);

  useEffect(() => {
    modalRef.current.scrollTop = modalRef.current.scrollHeight;
  }, [notifications]);

  return (
    <S.ModalContainer onClick={closeModal}>
      <S.ModalCloseBtn onClick={closeModal}>X</S.ModalCloseBtn>

      <S.ModalContent ref={modalRef}>
        <S.ModalTitle>Notifications</S.ModalTitle>
        <S.ModaltitleWrap>
          {!localStorage.getItem("token") ? (
            <S.ModalNoContent>로그인 후 확인해주세요!</S.ModalNoContent>
          ) : notifications.length === 0 ? (
            <S.ModalNoContent>알림이 없습니다.</S.ModalNoContent>
          ) : (
            notifications.map((notification) => (
              <Link key={notification.id} to={`/expertList/${notification.id}`}>
                <NotificationItem
                  title={
                    notification.title.length > 4
                      ? `${notification.title.substring(0, 4)}…`
                      : notification.title
                  }
                />
              </Link>
            ))
          )}
        </S.ModaltitleWrap>
      </S.ModalContent>
    </S.ModalContainer>
  );
}
