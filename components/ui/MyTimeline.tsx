import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { Button } from "./MovingBorder";
import { FaArrowAltCircleRight } from "react-icons/fa";

export function MyTimeline() {
  const data = [
    {
      title: "Orc'estra",
      content: (
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1rem * 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="text-white border-slate-800 p-5"
        >
          <div className="flex items-center gap-4">
            <Image src="/orc.svg" height={50} width={50} alt="Logo Orcestra" />
            <div className="flex flex-col text-start">
              <h2 className="text-start text-xl md:text-2xl font-bold">
                Equipe de Projetos
              </h2>
              <p className="text-white-200">fev. 2022 - dez. 2022</p>
            </div>
          </div>
          <ul>
            <li className="flex items-start text-start text-white-100 mt-6 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                No projeto trainee, desenvolvi um to do list em react, e um
                modelo de currículo em HTML, CSS e Javascript.
              </span>
            </li>
            <li className="flex items-start text-start text-white-100 mt-3 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Após passar da fase trainee, entrei na divisão de projetos da
                Empresa Júnior, onde aprendi sobre as fases de um projeto, como
                definição de requisitos, testes, metodologia Scrum e Kanban.
              </span>
            </li>
            <li className="flex items-start text-start text-white-100 mt-3 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Além do framework Octalysis para gamificação, me capacitei no
                Lean Gamification.
              </span>
            </li>
            <li className="flex items-start text-start text-white-100 mt-3 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Melhorei minha comunicação e trabalho em equipe, auxiliando com
                entregas durante o período em que participei do Movimento.
              </span>
            </li>
          </ul>
        </Button>
      ),
    },
    {
      title: "Antaq",
      content: (
        <Button
          duration={Math.floor(Math.random() * 9500) + 10000}
          borderRadius="1rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1rem * 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className=" text-white border-slate-800 p-5"
        >
          <div className="flex items-center gap-4">
            <Image src="/antaq.svg" height={50} width={72} alt="Logo Antaq" />
            <div className="flex flex-col text-start">
              <h2 className="text-start text-xl md:text-2xl font-bold">
                Estagiário
              </h2>
              <p className="text-white-200">set. 2023 - atualmente</p>
            </div>
          </div>
          <ul>
            <li className="flex items-start text-start text-white-100 mt-6 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Desenvolvi uma nova forma de geração de XML, a fim de facilitar
                o envio de informações de atracações para a Antaq. Foi utilizado
                o Excel, com macros desenvolvidas em VBA, que pegam o conteúdo
                das planilhas e geram um XML no padrão exigido pela agência.
              </span>
            </li>
            <li className="flex items-start text-start text-white-100 mt-3 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Realizei manutenções e melhorias no Estatístico Aquaviário,
                utilizando HTML, CSS e Javascript.
              </span>
            </li>
            <li className="flex items-start text-start text-white-100 mt-3 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Documentei um dos principais sistemas da agência, entregando
                artefatos como, modelagem de dados (MER, DER, DLD e Dicionário
                de dados), diagramas de casos de uso, proposta de melhorias com
                protótipos de alta fidelidade no figma. Além disso a
                documentação foi feita no mkdocs, para melhor organização.
              </span>
            </li>
            <li className="flex items-start text-start text-white-100 mt-3 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Entreguei um sistema completo utilizando Next.js, Typescript,
                Postgree, Tailwind e Prisma. O sistema é um cadastro de
                nomenclaturas, tanto novas quanto antigas para vinculação,
                devido a impossiblidade de mudar totalmente para a nova
                atualmente. O sistema possui perfis de usuário, com permissões
                de acesso, e é possível realizar buscas, filtros e ordenações.
                Além disso, possui regras de negócio, para evitar duplicidades
                ou NULL na base de dados.
              </span>
            </li>
            <li className="flex items-start text-start text-white-100 mt-3 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Desenvolvi o Formulário de Equidade de Gênero de 2024 da Antaq,
                utilizando php, html, css e javascript. O design foi feito no
                figma e validado pela gerência, após isso ocorreu a
                implementação, devido a falta de possibilidade de criação de uma
                instância de banco de dados, o salvamento de respostas foi feito
                em arquivos exceis individuais, após a pesquisa foi feita uma
                macro para juntar as respostas.
              </span>
            </li>
            <li className="flex items-start text-start text-white-100 mt-3 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Auxilei no desenvolvimento do painel em qlik sense para exibir
                um dashboard com os resultados da Pesquisa deEquidade de Gênero
                de 2024, utilizando objetos, extensões da ferramenta, mashups e
                aprendendo sobre suas funções. Auxiliando no meu processo de
                aprendizado de análise de dados.
              </span>
            </li>
          </ul>
        </Button>
      ),
    },
    {
      title: "Talento Veículos",
      content: (
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1rem * 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="text-white border-slate-800 p-5"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/talento.svg"
              height={60}
              width={70}
              alt="Logo Talento"
              className="-mt-2"
            />
            <div className="flex flex-col text-start">
              <h2 className="text-start text-xl md:text-2xl font-bold">
                Freelancer
              </h2>
              <p className="text-white-200">set. 2024 - dez. 2024</p>
            </div>
          </div>
          <ul>
            <li className="flex items-start text-start text-white-100 mt-6 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Nesse freelancer, os protótipos estava prontos em figma, foram
                feitos somente alguns ajustes de figma.
              </span>
            </li>
            <li className="flex items-start text-start text-white-100 mt-3 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                Desenvolvi o front-end do site, utilizando html, css e
                javascript. Aplicando animações e grids de acordo com o que foi
                pedido.
              </span>
            </li>
            <li className="flex items-start text-start text-white-100 mt-3 font-semibold">
              <FaArrowAltCircleRight className="text-white mt-1 shrink-0" />
              <span className="ml-2">
                A parte da responsividade foi desenvolvida sem um layout pronto,
                feita totalmente por mim.
              </span>
            </li>
          </ul>
        </Button>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
