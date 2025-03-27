"use client";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const maxHeight = ref.current ? ref.current.scrollHeight : 0;
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, maxHeight]);

  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate which items should be active based on scroll progress
    const itemCount = data.length;
    const threshold = 1 / itemCount;
    const newActiveIndices = [];

    for (let i = 0; i < itemCount; i++) {
      if (latest >= i * threshold) {
        newActiveIndices.push(i);
      }
    }

    setActiveIndices(newActiveIndices);
  });

  return (
    <>
      <style jsx global>{`
        @keyframes gradient-y {
          0% {
            background-position: 50% 0%;
          }
          100% {
            background-position: 50% 100%;
          }
        }
        .animate-gradient-y {
          animation: gradient-y 3s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full" ref={containerRef}>
        <h1 className="heading">
          Minha <span className="text-purple">experiência</span>
        </h1>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="hidden md:flex sticky flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div
                  className={`h-10 absolute left-3 md:left-3 w-10 rounded-full transition-all duration-500 ${
                    activeIndices.includes(index)
                      ? "bg-[#cbacf9]"
                      : "bg-black-200"
                  } flex items-center justify-center`}
                >
                  <div className="h-4 w-4 rounded-full bg-black-100 border border-white/[0.2] p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 animate-gradient-y bg-[length:100%_500%] bg-[linear-gradient(to_bottom,#E2CBFF,#9D93E1,#393BB2,#9D93E1,#E2CBFF)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
