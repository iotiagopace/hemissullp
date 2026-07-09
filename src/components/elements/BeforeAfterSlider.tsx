"use client";
import { useRef, useState, useEffect, useCallback } from "react";

interface BeforeAfterSliderProps {
    id: string;
    beforeSrc: string;
    afterSrc: string;
    beforeLabel?: string;
    afterLabel?: string;
    beforeAlt?: string;
    afterAlt?: string;
    initialOffset?: number;
}

export default function BeforeAfterSlider({
    id,
    beforeSrc,
    afterSrc,
    beforeLabel = "Before",
    afterLabel = "After",
    beforeAlt = "before-and-after-img",
    afterAlt = "before-and-after-img",
    initialOffset = 0.5,
}: BeforeAfterSliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    // Pixel dimensions — computed once the image loads / on resize
    const [dims, setDims] = useState({ width: 0, height: 0 });
    // Current slider X position in pixels
    const [sliderX, setSliderX] = useState(0);
    const [dragging, setDragging] = useState(false);

    /* ── Measure container after image loads or window resizes ── */
    const measure = useCallback(() => {
        const el = containerRef.current;
        const img = imgRef.current;
        if (!el || !img) return;
        const w = el.offsetWidth;
        const h = img.offsetHeight; // natural-ratio height driven by CSS
        setDims({ width: w, height: h });
        // Only initialise sliderX once (when it's still 0)
        setSliderX((prev) => (prev === 0 ? w * initialOffset : prev));
    }, [initialOffset]);

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        if (img.complete) {
            measure();
        } else {
            img.addEventListener("load", measure);
        }

        const ro = new ResizeObserver(measure);
        if (containerRef.current) ro.observe(containerRef.current);

        return () => {
            img.removeEventListener("load", measure);
            ro.disconnect();
        };
    }, [measure]);

    /* ── Clamp helper ── */
    const clamp = (val: number, min: number, max: number) =>
        Math.min(max, Math.max(min, val));

    /* ── Convert clientX → pixel offset within container ── */
    const toSliderX = useCallback(
        (clientX: number) => {
            const el = containerRef.current;
            if (!el) return;
            const { left } = el.getBoundingClientRect();
            setSliderX(clamp(clientX - left, 0, dims.width));
        },
        [dims.width]
    );

    /* ── Mouse ── */
    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setDragging(true);
    };

    useEffect(() => {
        if (!dragging) return;
        const onMove = (e: MouseEvent) => toSliderX(e.clientX);
        const onUp = () => setDragging(false);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };
    }, [dragging, toSliderX]);

    /* ── Touch ── */
    const onTouchStart = (e: React.TouchEvent) => {
        setDragging(true);
        toSliderX(e.touches[0].clientX);
    };

    useEffect(() => {
        if (!dragging) return;
        const onMove = (e: TouchEvent) => toSliderX(e.touches[0].clientX);
        const onEnd = () => setDragging(false);
        window.addEventListener("touchmove", onMove, { passive: true });
        window.addEventListener("touchend", onEnd);
        return () => {
            window.removeEventListener("touchmove", onMove);
            window.removeEventListener("touchend", onEnd);
        };
    }, [dragging, toSliderX]);

    /* ── Click anywhere on container ── */
    const onContainerClick = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest(".twentytwenty-handle")) return;
        toSliderX(e.clientX);
    };

    /* ── Keyboard on handle ── */
    const onKeyDown = (e: React.KeyboardEvent) => {
        const step = e.shiftKey ? dims.width * 0.1 : dims.width * 0.02;
        if (e.key === "ArrowLeft")
            setSliderX((x) => clamp(x - step, 0, dims.width));
        if (e.key === "ArrowRight")
            setSliderX((x) => clamp(x + step, 0, dims.width));
    };

    /* ── Derived clip rects (matches plugin output exactly) ──
        before: rect(top,   right,    bottom,      left )
                rect(0px,   sliderX,  height,      0px  )
        after:  rect(0px,   fullWidth, height,     sliderX)
    ── */
    const { width, height } = dims;
    const beforeClip = `rect(0px, ${sliderX}px, ${height}px, 0px)`;
    const afterClip = `rect(0px, ${width}px,   ${height}px, ${sliderX}px)`;

    return (
        <>
            <div className="before-after">
                <div className="twentytwenty-wrapper twentytwenty-horizontal">
                    <div
                        ref={containerRef}
                        className="before-after-twentytwenty twentytwenty-container"
                        id={id}
                        style={{ height: height > 0 ? `${height}px` : undefined }}
                        onClick={onContainerClick}
                    >
                        {/* Before image */}
                        <img
                            ref={imgRef}
                            src={beforeSrc}
                            alt={beforeAlt}
                            className="twentytwenty-before"
                            style={height > 0 ? { clip: beforeClip } : undefined}
                            draggable={false}
                        />

                        {/* After image */}
                        <img
                            src={afterSrc}
                            alt={afterAlt}
                            className="twentytwenty-after"
                            style={height > 0 ? { clip: afterClip } : undefined}
                            draggable={false}
                        />

                        {/* Overlay labels */}
                        <div className="twentytwenty-overlay">
                            <div className="twentytwenty-before-label" data-content="Before" />
                            <div className="twentytwenty-after-label" data-content="After" />
                        </div>

                        {/* Handle */}
                        <div
                            className="twentytwenty-handle"
                            style={height > 0 ? { left: `${sliderX}px` } : undefined}
                            role="slider"
                            tabIndex={0}
                            aria-valuenow={width > 0 ? Math.round((sliderX / width) * 100) : 50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label="Before/After image slider"
                            onMouseDown={onMouseDown}
                            onTouchStart={onTouchStart}
                            onKeyDown={onKeyDown}
                        >
                            <span className="twentytwenty-left-arrow" />
                            <span className="twentytwenty-right-arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="before-and-after__tag">
                <span>{beforeLabel}</span>
            </div>
            <div className="before-and-after__tag before-and-after__tag-2">
                <span>{afterLabel}</span>
            </div>
        </>
    );
}