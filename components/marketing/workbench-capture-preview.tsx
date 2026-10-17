import type { CSSProperties } from "react";
import mediaStyles from "./responsive-media.module.css";

/** Source-pixel bounds for presentation only. Enlargement always uses the original. */
export type CaptureFrame = readonly [x: number, y: number, width: number, height: number];

type Props = {
  src: string;
  alt: string;
  height?: number;
  desktop?: CaptureFrame;
  mobile: CaptureFrame;
  eager?: boolean;
};

function frameStyles(frame: CaptureFrame, prefix: string): Record<string, string> {
  const [x, y, width, height] = frame;
  return {
    [`--${prefix}-ratio`]: `${width} / ${height}`,
    [`--${prefix}-width`]: `${1600 / width * 100}%`,
    [`--${prefix}-left`]: `${-x / width * 100}%`,
    [`--${prefix}-top`]: `${-y / height * 100}%`,
  };
}

export function WorkbenchCapturePreview({ src, alt, height = 1100, desktop = [0, 0, 1600, height], mobile, eager = false }: Props) {
  const style = { ...frameStyles(desktop, "capture"), ...frameStyles(mobile, "capture-mobile") } as CSSProperties;

  return (
    <span className={mediaStyles.capturePresentation}>
      <span data-capture-preview className={mediaStyles.captureViewport} style={style}>
        <img key={src} src={src} alt={alt} width={1600} height={height} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} className={mediaStyles.captureImage} />
      </span>
      <span className={mediaStyles.captureHint}>Detail preview · Enlarge for full view</span>
    </span>
  );
}
