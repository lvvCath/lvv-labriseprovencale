import "./Section0.css";
import HomepageVideo from "/assets/video/Homepage.mp4";
import Logo from "/assets/icon/logo.png";

function Section0() {
  return (
    <div className="video-container">
      <video className="video-background" autoPlay muted loop playsInline>
        <source src={HomepageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src={Logo} alt="Logo" className="video-logo" />
    </div>
  );
}

export default Section0;
