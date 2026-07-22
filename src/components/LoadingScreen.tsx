"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={hide ? "hide" : ""}>
      <div className="loader-mark">RIYA JETHVA</div>
      <div className="loader-bar">
        <span></span>
      </div>
    </div>
  );
}
