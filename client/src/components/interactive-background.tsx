import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Zap, 
  GitBranch, 
  Server, 
  Smartphone,
  Globe,
  Brain,
  Settings,
  Terminal,
  Layers,
  Wifi,
  Lock
} from "lucide-react";

const techIcons = [
  Code, Database, Cloud, Cpu, Zap, GitBranch, Server, 
  Smartphone, Globe, Brain, Settings, Terminal, Layers, Wifi, Lock
];

interface FloatingElement {
  id: number;
  Icon: typeof Code;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function InteractiveBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      
      // Generate floating tech icons
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          Icon: techIcons[Math.floor(Math.random() * techIcons.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 16, // 16-36px
          duration: Math.random() * 20 + 15, // 15-35s
          delay: Math.random() * 10,
          opacity: Math.random() * 0.15 + 0.05 // 0.05-0.2
        });
      }
      
      setElements(newElements);
    };

    generateElements();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-green-50/30 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-green-950/20" />
      
      {/* Geometric patterns */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path 
              d="M 100 0 L 0 0 0 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              className="text-gray-200/50 dark:text-gray-700/30"
            />
          </pattern>
          <pattern id="dots" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle 
              cx="25" 
              cy="25" 
              r="2" 
              fill="currentColor" 
              className="text-gray-300/40 dark:text-gray-600/30"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Floating tech icons */}
      {elements.map((element) => {
        const IconComponent = element.Icon;
        return (
          <motion.div
            key={element.id}
            className="absolute theme-text-primary"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              opacity: element.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(element.id) * 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "linear",
              delay: element.delay,
            }}
            whileHover={{
              scale: 1.5,
              opacity: element.opacity * 2,
              transition: { duration: 0.3 }
            }}
          >
            <IconComponent size={element.size} />
          </motion.div>
        );
      })}

      {/* Mouse follower particles */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-blue-400/20 dark:bg-blue-300/20"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,50 Q250,100 500,50 T1000,50"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
        <motion.path
          d="M0,150 Q300,200 600,150 T1200,150"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: 1,
          }}
        />
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="currentColor" className="text-blue-400/30 dark:text-blue-300/20" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-8 h-8 border-2 border-purple-400/20 dark:border-purple-300/15 rotate-45" />
          ) : i % 3 === 1 ? (
            <div className="w-6 h-6 rounded-full border-2 border-green-400/20 dark:border-green-300/15" />
          ) : (
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-orange-400/20 dark:border-b-orange-300/15" />
          )}
        </motion.div>
      ))}

      {/* Pulsing nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 dark:from-blue-300/20 dark:to-purple-300/20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + (i % 2) * 60}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}