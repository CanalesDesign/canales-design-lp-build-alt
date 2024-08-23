"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function CookieEyesBanner() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="cookie__eyes--wrapper">
      {isClient ? "This is never prerendered" : "Prerendered"}
      <Script
        id="cookies__eyes--script"
        type="text/javascript"
        src={`https://cdn-cookieyes.com/client_data/7e463c96c344dbbd7815e7f0/script.js`}
        strategy="beforeInteractive"
      />
    </div>
  );
}
