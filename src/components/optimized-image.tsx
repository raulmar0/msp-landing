"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallbackSrc?: string;
  showLoader?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc,
  showLoader = true,
  className,
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const imageSrc = imageError && fallbackSrc ? fallbackSrc : src;

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {showLoader && !imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse rounded" />
      )}
      
      <Image
        src={imageSrc}
        alt={alt}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}