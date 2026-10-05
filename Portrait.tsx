import type React from "react"
import speakerSmall from "../../imports/optimized/fernando-palestrando-480.webp"
import speakerLarge from "../../imports/optimized/fernando-palestrando-960.webp"
import portraitSmall from "../../imports/optimized/fernando-retrato-480.webp"
import portraitLarge from "../../imports/optimized/fernando-retrato-960.webp"

export function Portrait({
  variant = "speaker",
  critical = false,
  className = "",
  ...rest
}: {
  variant?: "speaker" | "portrait"
  critical?: boolean
  className?: string
} & React.ImgHTMLAttributes<HTMLImageElement> & {
  [key: `data-${string}`]: string
}) {
  const speaker = variant === "speaker"
  return (
    <img
      src={speaker ? speakerLarge : portraitLarge}
      srcSet={`${speaker ? speakerSmall : portraitSmall} 480w, ${
        speaker ? speakerLarge : portraitLarge
      } 960w`}
      sizes="(max-width: 600px) 90vw, (max-width: 900px) 65vw, 800px"
      width={960}
      height={speaker ? 1127 * 1.5 : 1461 * 1.5}
      alt={
        speaker
          ? "Fernando Gonçalves com microfone durante uma palestra"
          : "Fernando Gonçalves, de camisa azul e blazer"
      }
      loading={critical ? "eager" : "lazy"}
      fetchPriority={critical ? "high" : "auto"}
      decoding="async"
      className={className}
      {...rest}
    />
  )
}
