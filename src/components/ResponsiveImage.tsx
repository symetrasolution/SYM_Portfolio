import React from 'react';
import type { ResponsiveWebp } from '../types';

interface ResponsiveImageProps {
  webp: ResponsiveWebp;
  fallback: string;
  alt: string;
  sizes: string;
  loading?: 'lazy' | 'eager';
  className?: string;
  referrerPolicy?: React.ImgHTMLAttributes<HTMLImageElement>['referrerPolicy'];
}

/**
 * WebP-first responsive image with JPG fallback. Layout classes go on the
 * <img> so object-fit behavior is unchanged from the previous plain <img>.
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  webp,
  fallback,
  alt,
  sizes,
  loading = 'lazy',
  className,
  referrerPolicy,
}) => (
  <picture>
    <source
      type="image/webp"
      srcSet={`${webp.small} 640w, ${webp.large} 1280w`}
      sizes={sizes}
    />
    <img
      src={fallback}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      referrerPolicy={referrerPolicy}
    />
  </picture>
);
