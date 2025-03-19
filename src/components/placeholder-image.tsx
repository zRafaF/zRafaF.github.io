interface PlaceholderImageProps {
  width: number
  height: number
  alt: string
  className?: string
}

export function PlaceholderImage({ width, height, alt, className = "" }: PlaceholderImageProps) {
  return (
    <img
      src={`https://via.placeholder.com/${width}x${height}`}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}

