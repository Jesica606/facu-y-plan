import { Player } from "video-react";
import { useEffect, useState } from "react";
import "video-react/dist/video-react.css";
import styles from "../styles/VideoEspacios.module.css";

const videoSources = {
  desktop: "https://sharedby.blomp.com/qTphr8",
  mobile: "https://sharedby.blomp.com/kzv6mK",
};

const VideoEspacios = () => {
  const [sourceVideo, setSourceVideo] = useState(videoSources.mobile);

  const handleResize = () => {
    if (window.innerWidth > 640) {
      setSourceVideo(videoSources.desktop);
    } else {
      setSourceVideo(videoSources.mobile);
    }
    console.log(window.innerWidth);
    console.log(sourceVideo);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.videoContainer}>
      <div className={styles.playerWrapper}>
        <Player>
          <source src={sourceVideo} />
        </Player>
      </div>
    </div>
  );
};

export default VideoEspacios;
