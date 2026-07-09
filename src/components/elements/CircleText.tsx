"use client";
import { useMemo } from "react";
interface CircleTextProps {
  text: string;
  radius?: number;
  fontSize?: number;
  className?: string;
  wordSpacing?: number;
  letterSpacing?: number;
}

export default function CircleText({
  text,
  radius = 88,
  fontSize = 12,
  className = "",
  wordSpacing = 0.5,
  letterSpacing = 3,
}: CircleTextProps) {
  const { chars, containerHeight, transformOriginEm } = useMemo(() => {
    const letters = text.split("");
    const anglePerPx = (180 / (Math.PI * radius)) * fontSize;
    const transformOriginEm = radius / fontSize;

    const charWidthMap: Record<string, number> = {
      W: 0.5,
      M: 0.458333,
      m: 0.458333,
      i: 0.166667,
      I: 0.166667,
      l: 0.291667,
      t: 0.291667,
      r: 0.333333,
      k: 0.333333,
      p: 0.333333,
      y: 0.333333,
      S: 0.333333,
      P: 0.333333,
    };
    const defaultWidth = 0.375;

    const charAngles = letters.map((ch) => {
      const baseWidth =
        ch === " "
          ? wordSpacing
          : (charWidthMap[ch] ?? defaultWidth) * letterSpacing;
      return { char: ch, angleWidth: baseWidth * anglePerPx, baseWidth };
    });

    const totalAngle = charAngles.reduce((acc, c) => acc + c.angleWidth, 0);

    interface CharData {
      char: string;
      rotate: number;
      marginLeft: number;
    }

    const { chars: result } = charAngles.reduce(
      (acc, { char, angleWidth, baseWidth }) => {
        const rotate = acc.currentAngle + angleWidth / 2;
        return {
          chars: [
            ...acc.chars,
            {
              char,
              rotate,
              marginLeft: -(baseWidth / 2),
            },
          ],
          currentAngle: acc.currentAngle + angleWidth,
        };
      },
      { chars: [] as CharData[], currentAngle: -(totalAngle / 2) }
    );

    const containerHeight = radius * 2 - fontSize / 2;

    return { chars: result, containerHeight, transformOriginEm };
  }, [text, radius, fontSize, wordSpacing, letterSpacing]);

  return (
    <div
      className={className}
      style={{ position: "absolute", height: `${containerHeight}px` }}
    >
      {chars.map((item, i) => (
        <span
          key={i}
          className={`char${i + 1}`}
          style={{
            position: "absolute",
            left: "50%",
            marginLeft: `${item.marginLeft}em`,
            transform: `rotate(${item.rotate.toFixed(3)}deg)`,
            transformOrigin: `center ${transformOriginEm.toFixed(5)}em`,
          }}
        >
          {item.char === " " ? "\u00A0" : item.char}
        </span>
      ))}
    </div>
  );
}