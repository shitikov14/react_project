import { useEffect, useState } from "react";

export const ScrollBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect (() => {
        const handleScroll = () => {
            const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
            const scrollableHeight = scrollHeight - clientHeight;

            if (scrollableHeight === 0) {
                setProgress(0);
                return;
            }
            
            const scrolled = (scrollTop / scrollableHeight) * 100;
            setProgress(scrolled)
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {passive: true});
        window.addEventListener("resize", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleScroll);
        };
    }, []);

    return (
    <div
      className="scroll-progress"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.1)",
        zIndex: 9999,
      }}
    >
      <div
        className="scroll-progress__bar"
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "green",
        }}
      />
    </div>
    )
}