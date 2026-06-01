"use client";

import { useState, type ReactNode } from "react";

type SmartImageProps = {
  src?: string;
  alt: string;
  className?: string;
  /** Rendered when no `src` is provided or the image fails to load. */
  fallback?: ReactNode;
};

/**
 * Renders an image from `src` and gracefully swaps to `fallback` when the
 * source is missing or fails to load. A plain <img> is used (instead of
 * next/image) so visitors can drop in any local or remote image without
 * extra configuration.
 */
export default function SmartImage({
  src,
  alt,
  className,
  fallback = null,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <>{fallback}</>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
