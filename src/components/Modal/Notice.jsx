import React from "react";
import * as S from "./style";

export default function NotificationItem({ title }) {
  return (
    <S.NotificationBox>
      <S.NotificationText>
        <strong
          style={{ color: "#34446d", fontSize: "12px", cursor: "pointer" }}
        >
          {title}
        </strong>{" "}
        글에 댓글이 게시되었습니다.
      </S.NotificationText>
    </S.NotificationBox>
  );
}
