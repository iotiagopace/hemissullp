"use client";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function throttle<T extends (...args: unknown[]) => void>(
    fn: T,
    delay: number,
): (...args: Parameters<T>) => void {
    let last = 0;
    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn(...args);
        }
    };
}

function getScrollPercentage(): number {
    const scrollableHeight = document.body.scrollHeight - window.innerHeight;
    if (scrollableHeight <= 0) return 0;
    return Math.min((window.scrollY / scrollableHeight) * 100, 100);
}

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const [fillWidth, setFillWidth] = useState(0);
    const location = usePathname();

    const throttledScrollRef = useRef<(() => void) | null>(null);

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [location]);

    useEffect(() => {
        function handleScroll() {
            const percentage = getScrollPercentage();
            setVisible((prev) => {
                const shouldShow = window.scrollY > 250;
                return prev !== shouldShow ? shouldShow : prev;
            });
            setFillWidth((prev) => {
                return Math.abs(prev - percentage) > 0.5 ? percentage : prev;
            });
        }

        throttledScrollRef.current = throttle(handleScroll, 250);

        window.addEventListener("scroll", throttledScrollRef.current);
        return () => {
            if (throttledScrollRef.current) {
                window.removeEventListener("scroll", throttledScrollRef.current);
            }
        };
    }, []);

    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Link
            href="#"
            onClick={scrollToTop}
            className={`scroll-to-top ${visible ? "show" : ""}`}
        >
            <span className="scroll-to-top__wrapper">
                <span
                    className="scroll-to-top__inner"
                    style={{ width: `${fillWidth}%` }}
                ></span>
            </span>
            <span className="scroll-to-top__text">Go Back Top</span>
        </Link>
    );
};

export default ScrollToTop;