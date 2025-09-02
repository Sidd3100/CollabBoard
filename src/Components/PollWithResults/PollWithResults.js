import React, { useEffect } from "react";

const PollWithResults = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.strawpoll.com/dist/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="strawpoll-embed"
      id="strawpoll_PKgleYODRZp"
      style={{
        height: "644px",
        maxWidth: "640px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <iframe
        title="StrawPoll Embed"
        id="strawpoll_iframe_PKgleYODRZp"
        src="https://strawpoll.com/embed/PKgleYODRZp"
        style={{
          position: "static",
          visibility: "visible",
          display: "block",
          width: "100%",
          flexGrow: 1,
        }}
        frameBorder="0"
        allowFullScreen
        allowTransparency
      >
        Loading...
      </iframe>
    </div>
  );
};

export default PollWithResults;
