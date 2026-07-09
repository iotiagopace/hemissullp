"use client";
import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { jarallax } from "jarallax";

interface JarallaxBaseProps {
    /** CSS class(es) to add alongside the `jarallax` class */
    className?: string;

    /** Parallax scroll speed. Range: -1.0 → 2.0 (default 0.5 = half speed) */
    speed?: number;

    /** Parallax animation type */
    type?: "scroll" | "scale" | "opacity" | "scroll-opacity" | "scale-opacity";

    /** Background image source URL (use import or url string) */
    imgSrc?: string;

    /** YouTube / Vimeo video URL for video backgrounds */
    videoSrc?: string;

    /** CSS background-position value, e.g. "50% 0%" or "center center" */
    imgPosition?: string;

    /** CSS background-repeat value */
    imgRepeat?: "no-repeat" | "repeat";

    /** CSS background-size value */
    imgSize?: "cover" | "contain" | "auto" | string;

    /** z-index of the jarallax canvas layer (default -100) */
    zIndex?: number;

    /** Disable parallax on matching devices / conditions */
    disableParallax?: boolean | RegExp | (() => boolean);

    /** Disable video on matching devices / conditions */
    disableVideo?: boolean | RegExp | (() => boolean);

    /** Inline styles forwarded to the root element */
    style?: CSSProperties;
}

// ── Mode A: full-section wrapper (default) ────────────────────────────────────
interface JarallaxWrapperProps extends JarallaxBaseProps {
    /**
     * When false/omitted the component renders as a positioned wrapper that
     * contains your children, with an optional colour overlay on top of the
     * parallax image.
     */
    bgOnly?: false;

    /** Content rendered inside the section */
    children: ReactNode;

    /** Overlay colour (CSS colour string). Pass `"none"` to disable. */
    overlayColor?: string;

    /** Overlay opacity 0–1 (default 0.8) */
    overlayOpacity?: number;
}

// ── Mode B: background-only div ───────────────────────────────────────────────
interface JarallaxBgOnlyProps extends JarallaxBaseProps {
    /**
     * When true the component renders as a plain `<div>` with no children or
     * overlay — identical to the `cta-two__bg jarallax` pattern from the HTML
     * templates.  Position it absolutely inside a `position: relative` parent.
     */
    bgOnly: true;
    children?: never;
    overlayColor?: never;
    overlayOpacity?: never;
}

type JarallaxSectionProps = JarallaxWrapperProps | JarallaxBgOnlyProps;

// ─── Component ────────────────────────────────────────────────────────────────

export default function JarallaxSection(props: JarallaxSectionProps) {
    const {
        className = "",
        speed = 0.5,
        type = "scroll",
        imgSrc,
        videoSrc,
        imgPosition = "50% 50%",
        imgRepeat = "no-repeat",
        imgSize = "cover",
        zIndex = -100,
        disableParallax,
        disableVideo,
        style,
        bgOnly = false,
    } = props;

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        jarallax(el, {
            speed,
            type,
            imgSrc,
            videoSrc,
            imgPosition,
            imgRepeat,
            imgSize,
            zIndex,
            disableParallax,
            disableVideo,
        });

        return () => {
            jarallax(el, "destroy");
        };
    }, [
        speed,
        type,
        imgSrc,
        videoSrc,
        imgPosition,
        imgRepeat,
        imgSize,
        zIndex,
        disableParallax,
        disableVideo,
    ]);

    // ── Mode B: bg-only ───────────────────────────────────────────────────────
    if (bgOnly) {
        return (
            <div
                ref={ref}
                className={`jarallax ${className}`.trim()}
                style={style}
            />
        );
    }

    // ── Mode A: wrapper with optional overlay ─────────────────────────────────
    const { children, overlayColor = "rgba(0,0,0,1)", overlayOpacity = 0.8 } =
        props as JarallaxWrapperProps;

    return (
        <div ref={ref} className={`jarallax ${className}`.trim()} style={style}>
            {overlayColor && overlayColor !== "none" && (
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: overlayColor,
                        opacity: overlayOpacity,
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                />
            )}
            <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
        </div>
    );
}
