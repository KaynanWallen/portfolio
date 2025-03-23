import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight, Code, Database, Globe, Layers, Menu } from "lucide-react";
import { ProjectsSection } from "~/components/project-section";
import { Skills } from "~/components/skills";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import ScrollToSection from "~/utils/scroll-to-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Kaynan Wallen" },
    { name: "description", content: "Desenvolvedor Full Stack desde 2022, especializado em React.js, Node.js e TypeScript. Ajudo empresas a aumentar sua notoriedade digital com landing pages otimizadas." },
    {name: 'keywords', content: 'Desenvolvedor Full Stack, React.js, Node.js, TypeScript, Next.js, APIs REST, Landing Pages, SEO, Tailwind CSS, MySQL, PostgreSQL, JavaScript, Docker, DevOps, CI/CD, Front-end, Back-end, Desenvolvimento Web, Programador'},
    {name: "viewport", content: "width=device-width,initial-scale=1" }
  ];
};

export default function Index() {
  return (
    <>
      <ScrollToSection />
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-violet-500/30">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 backdrop-blur-md bg-zinc-950/80">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tighter group">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                K
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 delay-[50ms]">
                W
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 delay-[100ms]">
                .
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                <Link
                  to="#home"
                  className="text-sm hover:text-violet-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="#about"
                  className="text-sm hover:text-violet-400 transition-colors"
                >
                  Sobre
                </Link>
                <Link
                  to="#projects"
                  className="text-sm hover:text-violet-400 transition-colors"
                >
                  Projetos
                </Link>
                <Link
                  to="#skills"
                  className="text-sm hover:text-violet-400 transition-colors"
                >
                  Habilidades
                </Link>
              </nav>

              <Link
                to="https://wa.me/5511969057943?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20contratar%20seus%20servi%C3%A7os"
                target="_blank"
              >
                <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0">
                  Contato
                </Button>
              </Link>
            </div>

            <button className="md:hidden text-zinc-400 hover:text-white transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block rounded-full bg-zinc-800/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm">
                    Olá, eu sou
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                    Kaynan{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                      Wallen
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-zinc-400 font-light">
                    Desenvolvedor{" "}
                    <span className="relative inline-block">
                      Fullstack
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500"></span>
                    </span>
                  </h2>
                  <p className="text-zinc-400 max-w-lg">
                    Criando experiências digitais inovadoras com foco em design
                    e performance.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0">
                      Ver projetos <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Link to={"#about"}>
                      <Button
                        variant="outline"
                        className="border-zinc-500/10 text-zinc-300 hover:bg-zinc-800/50 bg-transparent hover:text-white"
                      >
                        Sobre mim
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 opacity-20 blur-xl"></div>
                  <div className="relative aspect-square rounded-2xl bg-zinc-900 overflow-hidden border border-zinc-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10"></div>

                    {/* Código visual interativo */}
                    <div className="absolute inset-0 p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 text-xs text-zinc-500">
                          developer.js
                        </div>
                      </div>

                      <div className="flex-1 overflow-hidden text-left font-mono text-xs sm:text-sm text-zinc-400 space-y-2">
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">01</span>
                          <span className="text-violet-400">class</span>
                          <span className="text-white mx-2">Developer</span>
                          <span>&#123;</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">02</span>
                          <span className="ml-4 text-violet-400">
                            constructor
                          </span>
                          <span className="text-zinc-300">()</span>
                          <span className="ml-1">&#123;</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">03</span>
                          <span className="ml-8 text-zinc-300">this.</span>
                          <span className="text-green-400">name</span>
                          <span className="ml-1 text-zinc-300">=</span>
                          <span className="ml-1 text-yellow-300">
                            'Kaynan Wallen'
                          </span>
                          <span>;</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">04</span>
                          <span className="ml-8 text-zinc-300">this.</span>
                          <span className="text-green-400">role</span>
                          <span className="ml-1 text-zinc-300">=</span>
                          <span className="ml-1 text-yellow-300">
                            'Fullstack Developer'
                          </span>
                          <span>;</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">05</span>
                          <span className="ml-8 text-zinc-300">this.</span>
                          <span className="text-green-400">skills</span>
                          <span className="ml-1 text-zinc-300">=</span>
                          <span className="ml-1">&#91;</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">06</span>
                          <span className="ml-12 text-yellow-300">
                            'RemixJs'
                          </span>
                          <span>,</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">07</span>
                          <span className="ml-12 text-yellow-300">'ReactJs'</span>
                          <span>,</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">08</span>
                          <span className="ml-12 text-yellow-300">
                            'NextJs'
                          </span>
                          <span>,</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">09</span>
                          <span className="ml-12 text-yellow-300">
                            'NestJs'
                          </span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">10</span>
                          <span className="ml-8">&#93;;</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">11</span>
                          <span className="ml-4">&#125;</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">12</span>
                          <span className="ml-4 text-violet-400">
                            createAmazingExperiences
                          </span>
                          <span className="text-zinc-300">()</span>
                          <span className="ml-1">&#123;</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">13</span>
                          <span className="ml-8 text-violet-400">return</span>
                          <span className="ml-1 text-yellow-300">
                            'Inovação & Qualidade'
                          </span>
                          <span>;</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">14</span>
                          <span className="ml-4">&#125;</span>
                        </div>
                        <div className="flex">
                          <span className="text-zinc-600 mr-4">15</span>
                          <span>&#125;</span>
                        </div>
                      </div>

                      {/* Cursor piscando */}
                      <div className="h-4 w-2 bg-violet-400 animate-pulse mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-zinc-900/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                    Sobre
                  </span>{" "}
                  mim
                </h2>

                <div className="space-y-6 text-zinc-300">
                  <p>
                    Atuando como Desenvolvedor Full Stack desde 2022, tenho
                    experiência na criação de aplicações web escaláveis,
                    sistemas robustos e landing pages otimizadas para ajudar
                    empresas a aumentar sua presença digital. Minha
                    especialidade é desenvolver soluções eficientes utilizando
                    React.js, Node.js e TypeScript, criando interfaces modernas
                    e APIs performáticas. Trabalho com arquitetura de software,
                    bancos de dados SQL e NoSQL, além de ferramentas como
                    Drizzle ORM, Remix, Next.js e Tailwind CSS.
                  </p>
                  <p>
                    Além do desenvolvimento técnico, ajudo empresas a aumentar
                    sua notoriedade digital criando landing pages de alta
                    conversão, otimizadas para SEO e performance, garantindo
                    mais leads e visibilidade no mercado. em busca de novos
                    desafios e aprendizado contínuo, acompanhando tendências e
                    novas tecnologias para entregar soluções inovadoras e
                    escaláveis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <ProjectsSection />

          {/* Skills Section */}
          <section id="skills" className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Habilidades
                </span>{" "}
                & Tecnologias
              </h2>

              <Skills />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                    <Globe className="h-6 w-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Frontend</h3>
                  <p className="text-zinc-400 text-sm">
                    React, Next.js, TypeScript, Tailwind CSS, e outras
                    tecnologias modernas para criar interfaces responsivas.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                    <Database className="h-6 w-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Backend</h3>
                  <p className="text-zinc-400 text-sm">
                    Node.js, Express, MongoDB, PostgreSQL, e outras tecnologias
                    para criar APIs robustas e escaláveis.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                    <Code className="h-6 w-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Desenvolvimento</h3>
                  <p className="text-zinc-400 text-sm">
                    Git, Docker, CI/CD, e outras ferramentas para garantir um
                    fluxo de desenvolvimento eficiente.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                    <Layers className="h-6 w-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Design</h3>
                  <p className="text-zinc-400 text-sm">
                    UI/UX, Figma, e outras ferramentas para criar interfaces
                    intuitivas e atraentes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="py-2">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Formações
                </span>
              </h2>

              <div className="space-y-6">
                <div className="relative">

                  <div className="gap-6">
                    <Card>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <CardTitle>
                            Análise e Desenvolvimento de Sistemas
                          </CardTitle>
                          <Badge variant="outline" className="w-fit text-muted-foreground border-zinc-500/20">
                            2023 - 2025
                          </Badge>
                        </div>
                        <CardDescription>
                          Universidade São Francisco
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-zinc-400 text-sm" >
                          Cursando Análise e Desenvolvimento de Sistemas, com
                          foco em desenvolvimento de software, banco de dados, e
                          metodologias ágeis. Previsão de conclusão em julho de
                          2025.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="relative">

                  <div className="gap-6">
                    <Card>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <CardTitle>
                            Técnico em Desenvolvimento de Sistemas
                          </CardTitle>
                          <Badge variant="outline" className="w-fit text-muted-foreground border-zinc-500/20">
                            2022 - 2023
                          </Badge>
                        </div>
                        <CardDescription>
                          ETEC Rosa Perrone Scavone
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-zinc-400 text-sm">
                          Formação técnica em Desenvolvimento de Sistemas, com
                          aprendizado em programação, desenvolvimento web,
                          mobile e desktop. Concluído em julho de 2023.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 border-t border-zinc-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <a href="/" className="text-xl font-bold tracking-tighter">
                  KW<span className="text-violet-500">.</span>
                </a>
                <p className="text-zinc-400 text-sm mt-2">
                  © {new Date().getFullYear()} Kaynan Wallen. Todos os direitos
                  reservados.
                </p>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://github.com/KaynanWallen"
                  className="text-zinc-400 hover:text-violet-400 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/kaynan-wallen-9b542024a/"
                  className="text-zinc-400 hover:text-violet-400 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 100-2 1 1 0 000 2zm7 7h-2v-4c0-.6-.4-1-1-1s-1 .4-1 1v4h-2v-6h2v1.1c.4-.6 1.2-1.1 2-1.1 1.7 0 3 1.3 3 3v3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
