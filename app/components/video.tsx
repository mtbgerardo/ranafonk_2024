
import React, { useState } from "react";

export default function videoFeed({ video }: { video: string } ) {

  return (
    <iframe
      width="80%"
      height="315"
      src={`https://www.youtube.com/embed/${video}?si=hVHhEzF4DmHTz7Vh`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
