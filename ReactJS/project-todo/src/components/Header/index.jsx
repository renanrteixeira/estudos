import React from "react";

export default ({ headerInfo, headerColor }) => {
  return (
    <>
      <h1 style={{ color: `${headerColor}` }}>{headerInfo}</h1>
    </>
  );
};
