import React from "react";
import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "2",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#F96793", "#F99834", "#EFD372", "#7EB693", "#274C5B"]}
      />
    </div>
  );
};
