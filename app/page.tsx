"use client";

import React, { useState, useEffect } from "react";
import ThreeDCardDemo from "./card2/page";

const Framed = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [ipAddress, setIpAddress] = useState(null);
  const [hydrated, setHydrated] = useState(false); // Prevent rendering until hydration

  useEffect(() => {
    setHydrated(true); // Indicate hydration is complete
  }, []);

  useEffect(() => {
    if (showOverlay) {
      const fetchIpAddress = async () => {
        try {
          const response = await fetch("https://ipv4.wtfismyip.com/json");
          const data = await response.json();
          setIpAddress(data["YourFuckingIPAddress"]);
        } catch (error) {
          console.error("Error fetching IP address:", error);
        }
      };
      fetchIpAddress();
    }
  }, [showOverlay]);

  useEffect(() => {
    if (!showOverlay) {
      const audio = new Audio(
        "/music.webm"
      );
      audio.loop = true;
      audio.play();
    }
  }, [showOverlay]);

  if (!hydrated) return null; // Skip rendering until client-side hydration

  return (
    <main>
      <div
        className={`fixed inset-0 z-50 bg-black ${showOverlay ? "" : "hidden"}`}
        onClick={() => setShowOverlay(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-opacity-75 hover:text-opacity-100 duration-300 ease-in-out text-lg cursor-pointer">
            <a id="overlay">
              {ipAddress ? ` ${ipAddress}` : "Fetching IP..."}
            </a>
            <br />
            <span className="text-white text-opacity-70 justify-center items-center flex text-xs">
              (click to enter)
            </span>
          </div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 object-cover z-0 w-full h-full"
      >
        <source
          src="/music.webm"
        />
        Your browser does not support the video tag.
      </video>
      <ThreeDCardDemo />
    </main>
  );
};

export default Framed;
