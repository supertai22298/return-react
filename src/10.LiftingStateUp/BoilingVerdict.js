import React from "react";

export default function BoilingVerdict(props) {
  if (props.celsius >= 100) return <p>Nước sôi rồi</p>;
  return <p>Nước chưa sôi</p>;
}
