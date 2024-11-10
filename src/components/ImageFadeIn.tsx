import { useEffect, useRef } from "react";
import "./ImageFadeIn.css";

interface ImageFadeInProps {
  src: string;
  alt: string;
  className?: string; // Allow passing additional classes if needed
}

function ImageFadeIn({ src, alt, className = "" }: ImageFadeInProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img?.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold to trigger fade-in earlier or later
    );

    if (img) {
      observer.observe(img);
    }

    return () => {
      if (img) {
        observer.unobserve(img);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`fade-in-image ${className}`}
    />
  );
}

export default ImageFadeIn;
