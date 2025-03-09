import "./Section0.css";

function Section0() {
  return (
    <div className="video-container">
      <video
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/video/video-poster.png" // Placeholder before video loads
      >
        <source src="/assets/video/Homepage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <img
        src="/assets/icon/logo.png"
        alt="Logo"
        className="video-logo"
        loading="lazy"
      />
    </div>
  );
}

export default Section0;
