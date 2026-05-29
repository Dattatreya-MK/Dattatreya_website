"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  dir?: "up" | "left" | "right";
  className?: string;
}

export default function FadeIn({ children, delay = 0, dir = "up", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cls = `fade-${dir} ${visible ? "visible" : ""} ${className}`;
  const style = { transitionDelay: `${delay}s` };

  return <div ref={ref} className={cls} style={style}>{children}</div>;
}
