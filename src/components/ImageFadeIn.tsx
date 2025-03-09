import { useEffect, useRef, useState } from "react";
import "./ImageFadeIn.css";

interface ImageFadeInProps {
  src: string;
  alt: string;
  className?: string; // Allow passing additional classes if needed
}

function ImageFadeIn({ src, alt, className = "" }: ImageFadeInProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState<string>(
    "/assets/images/placeholder.webp"
  ); // Default placeholder

  useEffect(() => {
    const img = imgRef.current;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src); // Load the actual image
            img?.classList.add("visible");
            observer.disconnect(); // Stop observing after loading
          }
        });
      },
      { threshold: 0.3 }
    );

    if (img) observer.observe(img);
    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`fade-in-image ${className}`}
      loading="eager"
      onError={(e) => (e.currentTarget.src = "/assets/images/placeholder.webp")}
    />
  );
}

export default ImageFadeIn;
