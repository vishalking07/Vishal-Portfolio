import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-xl">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
      <Link to="/" className="text-xl font-bold tracking-tighter text-neutral-100 font-headline">VISHAL A.</Link>
      <div className="hidden md:flex items-center gap-12">
        <a className="text-orange-500 font-bold border-b-2 border-orange-500 pb-1 font-headline tracking-tight" href="/#work">Work</a>
        <a className="text-neutral-400 hover:text-neutral-100 transition-colors font-headline tracking-tight" href="/#about">About</a>
        <a className="text-neutral-400 hover:text-neutral-100 transition-colors font-headline tracking-tight" href="/#contact">Contact</a>
      </div>
      <a href="https://drive.google.com/file/d/1Cav-E1L2c6f2diH_s5JQzPzRAg0sj01b/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-headline font-bold text-sm tracking-tight hover:scale-105 transition-all inline-block">
        Hire Me
      </a>
    </div>
  </nav>
);

export const Footer = () => (
  <footer className="bg-neutral-950 w-full py-20 px-8 mt-auto">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800/30 pt-12">
      <p className="font-headline uppercase text-xs tracking-[0.2em] text-neutral-500">© 2024 VISHAL A. DESIGNED WITH INTENT.</p>
      <div className="flex items-center gap-8">
        <a className="font-headline uppercase text-xs tracking-[0.2em] text-neutral-500 hover:text-neutral-100 transition-colors" href="https://www.linkedin.com/in/vishal-a-designer" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="font-headline uppercase text-xs tracking-[0.2em] text-neutral-500 hover:text-neutral-100 transition-colors" href="mailto:spideyvishal05@gmail.com">Email</a>
        <a className="font-headline uppercase text-xs tracking-[0.2em] text-neutral-500 hover:text-neutral-100 transition-colors" href="#" target="_blank" rel="noopener noreferrer">Dribbble</a>
        <a className="font-headline uppercase text-xs tracking-[0.2em] text-neutral-500 hover:text-neutral-100 transition-colors" href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <motion.button 
        whileHover={{ y: -5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-primary hover:border-primary transition-colors"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  </footer>
);

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') !== null || target.closest('button') !== null || target.closest('.magnetic-trigger') !== null) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);
  }, [mousePosition, cursorX, cursorY]);

  const dotSize = 8;
  const ringSize = isHovering ? 40 : 20;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000] mix-blend-screen"
        style={{
          x: mousePosition.x - dotSize / 2,
          y: mousePosition.y - dotSize / 2,
          scale: isHovering || isClicking ? 0.5 : 1
        }}
        animate={{ scale: isHovering || isClicking ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] opacity-70 transition-colors duration-300 ${isHovering ? 'bg-primary border border-primary/20' : 'border border-primary'}`}
        style={{
          width: ringSize,
          height: ringSize,
          x: cursorX.get() - ringSize / 2,
          y: cursorY.get() - ringSize / 2,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          x: mousePosition.x - ringSize / 2,
          y: mousePosition.y - ringSize / 2,
        }}
        transition={{ type: "spring", ...springConfig }}
      />
    </>
  );
};

interface MagneticProps {
  children: React.ReactElement;
  className?: string;
}

export const Magnetic = ({ children, className = "inline-block" }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${className} magnetic-trigger`}
    >
      {children}
    </motion.div>
  );
};
