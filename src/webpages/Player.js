import React from "react";
import { useAsset } from "@livepeer/react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useFileContext } from "./FileContext";
import "../style/Player.scss";

export default function Player() {
  const {currVideo} = useFileContext();

  return (
    <Plyr id = "player"
      source={{
        type: "video",
        title: currVideo?.name,

        sources: [
          {
            src: currVideo?.downloadUrl,
            type: "video/mp4",
          },
        ],
      }}
      options={{
        autoplay: true,
      }}
      autoPlay={true}
    />
  );
}
