"use client";

import React, { useEffect, useState } from "react";

export default function videoFeed() {
  const [videos, setVideos] = useState([]);
  const baseUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCJfMps6SFaIqE4GdkFQiB7g";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(baseUrl);
        const data = await res.json();

        const id = data.items[0].guid.split(":").pop();

        setVideos(id);
        console.log(id);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    console.log(videos);
  }, [baseUrl]);

  return (
    <iframe
      width="80%"
      height="315"
      src={`https://www.youtube.com/embed/${videos}?si=hVHhEzF4DmHTz7Vh`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
