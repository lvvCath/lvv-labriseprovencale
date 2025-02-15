import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./Section0.css";
import HomepageVideo from "/assets/video/Homepage.mp4";

function Section0() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true; // Start muted
      video.volume = 0;
      video.play().catch(() => console.log("Autoplay blocked"));
    }

    // Mute this video when another audio/video starts playing
    const handlePlayEvent = (event: Event) => {
      if (event.target instanceof HTMLMediaElement && event.target !== video) {
        setIsMuted(true);
        if (video) {
          video.muted = true;
          video.volume = 0;
        }
      }
    };

    document.addEventListener("play", handlePlayEvent, true);

    return () => {
      document.removeEventListener("play", handlePlayEvent, true);
    };
  }, []);

  const toggleAudio = () => {
    setIsMuted((prevMuted) => {
      const video = videoRef.current;
      if (video) {
        const newMutedState = !prevMuted;
        video.muted = newMutedState;
        video.volume = newMutedState ? 0 : 0.07;
        return newMutedState;
      }
      return prevMuted;
    });
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        loop
        playsInline
      >
        <source src={HomepageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="audio-toggle bottom-right" onClick={toggleAudio}>
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  );
}

export default Section0;
