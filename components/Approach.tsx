/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approach = () => {
  // Estado global para saber qual card está ativo (somente um de cada vez)
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Minha <span className="text-purple">abordagem</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          index={1}
          title="Planejamento & Estratégia"
          icon={<AceternityIcon order="Fase 1" />}
          description="Vamos planejar e estruturar a sua ideia, mapeando os objetivos, audiência foco e funcionalidades chave."
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          index={2}
          title="Desenvolvimento & Atualização de Progresso"
          icon={<AceternityIcon order="Fase 2" />}
          description="Quando estivermos de acordo com o planejamento, é a hora onde mergulho no desenvolvimento."
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          index={3}
          title="Desenvolvimento & Deploy"
          icon={<AceternityIcon order="Fase 3" />}
          description="Aqui é onde o projeto ganha vida. Após a finalização do desenvolvimento, é hora de fazer o deploy."
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  index,
  title,
  icon,
  description,
  children,
  activeCard,
  setActiveCard,
}: {
  index: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  children?: React.ReactNode;
  activeCard: number | null;
  setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const [clicked, setClicked] = React.useState(false);

  const toggleClick = () => {
    // Permitir clique apenas em telas menores que "md"
    if (window.innerWidth < 1024) {
      // Verifica se o card clicado é o que está ativo
      if (activeCard === index) {
        // Desmarca o card clicado
        setActiveCard(null);
      } else {
        // Marca o card clicado como ativo e desmarca os outros
        setActiveCard(index);
      }
    }
  };

  return (
    <div
      onClick={toggleClick} // Clique para controlar visibilidade no mobile/tablet
      onMouseEnter={() => window.innerWidth >= 1024 && setActiveCard(index)} // Hover para desktop
      onMouseLeave={() => window.innerWidth >= 1024 && setActiveCard(null)} // Desativa hover no desktop
      className="border group/canvas-card flex items-center justify-center border-white/[0.2] max-w-sm w-full mx-auto p-4 lg:h-[35rem] relative rounded-3xl bg-[rgb(4,7,29)] bg-[linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)]"
    >
      {/* Ícones */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-white opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-white opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-white opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-white opacity-30" />

      <AnimatePresence>
        {(clicked || activeCard === index) && ( // Exibe o conteúdo se o card estiver ativo (clicado ou hover)
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className={`text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-200 w-full mx-auto flex items-center justify-center ${
            clicked || activeCard === index ? "opacity-0" : "opacity-100"
          }`}
        >
          {icon}
        </div>

        {/* Título e Descrição */}
        <h2
          className={`text-white transition-all duration-200 text-center text-3xl ${
            clicked || activeCard === index
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-sm transition-all duration-200 text-center mt-4 ${
            clicked || activeCard === index
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
          style={{ color: "#e4ecff" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
