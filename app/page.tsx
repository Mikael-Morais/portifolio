"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Mikael Morais"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  const skills = [
    { name: "JavaScript", category: "Frontend", icon: Code2 },
    { name: "TypeScript", category: "Frontend", icon: Code2 },
    { name: "React", category: "Frontend", icon: Code2 },
    { name: "Next.js", category: "Frontend", icon: Code2 },
    { name: "Node.js", category: "Backend", icon: Database },
    { name: "Python", category: "Backend", icon: Database },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "Mysql", category: "Database", icon: Database },
  ]

  const projects = [
    {
      title: "Plataforma de logística",
      description:
        "Sistema de gerenciamento de lodo das ETE com revenda de produtos para o pequeno agricultor",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      image: "/ete1.png?height=200&width=400",
      github: "#",
    },
    {
      title: "Site da Olimpíada de Matemática Avançada",
      description: "Site para cadastro e informações sobre a Olimpíada de Matemática Avançada",
      technologies: ["Node.js", "Express", "SQLite", "Express"],
      image: "/oma.png?height=200&width=400",
      github: "#",
      
    },
    {
      title: "Plataforma de reciclagem gamificada",
      description: "A ZeluS é uma plataformaa que induz a reciclagem através de um sistema de pontos e recompensas.",
      technologies: ["CSS", "HTML", "JavaScript", "SQLite"],
      image: "/zelus.png?height=200&width=400",
      github: "#",
      demo: "https://deploy-desafio4-trilhas-5p18.vercel.app/landing/index.html",
      
    },
    {
      title: "Saúde Conectada MA",
      description: "Platafoma de agendamento de consultas médicas e telemedicinas, além de realizar triagens de sintomas.",
      technologies: ["JavaScript", "MySQL", "HTML", "JWT"],
      image: "/saudema.png?height=200&width=400",
      github: "#",
      demo: 'https://desafio-5-1ut2.onrender.com',    
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50"
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.1 }} className="text-xl font-bold text-purple-400 cursor-pointer">
            <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                {"<Dev/>"}
                </a>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {["Sobre", "Habilidades", "Projetos", "Contato"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1, color: "#a855f7" }}
                className="hover:text-purple-400 transition-colors cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 overflow-hidden">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="mb-6"
            >
              <Image
                src="/perfil.jpg?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full mx-auto border-4 border-purple-500"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Olá, eu sou{" "}
              <motion.span
                className="text-purple-400 inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{
                  background: "linear-gradient(45deg, #a855f7, #ec4899, #a855f7)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="text-purple-400"
                >
                  |
                </motion.span>
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Desenvolvedor Full Stack em formação apaixonado por criar soluções inovadoras e experiências digitais excepcionais
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="mailto:yagopx3@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Mail className="mr-2 h-4 w-4" />
                    Entre em Contato
                  </Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://github.com/Mikael-Morais" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Sobre <span className="text-purple-400">Mim</span>
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              Sou um desenvolvedor full stack com mais de 8 meses de experiência criando aplicações web. Tenho
              paixão por tecnologia e estou sempre buscando aprender novas ferramentas e metodologias para entregar
              soluções de qualidade.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Especializo-me em desenvolvimento frontend com React e Next.js, backend com Node.js e Python, e tenho
              experiência com bancos de dados. 
            </motion.p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Minhas <span className="text-purple-400">Habilidades</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Frontend", "Backend", "Database"].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-gray-800 border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-400 flex items-center">
                      {category === "Frontend" && <Globe className="mr-2 h-5 w-5" />}
                      {category === "Backend" && <Database className="mr-2 h-5 w-5" />}
                      {category === "Database" && <Database className="mr-2 h-5 w-5" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-purple-900/30 text-purple-300 border-purple-700 cursor-pointer"
                            >
                              {skill.name}
                            </Badge>
                          </motion.div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Meus <span className="text-purple-400">Projetos</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-purple-600/20 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-lg font-semibold"
                      >
                        Ver Projeto
                      </motion.div>
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-purple-400">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                   <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={`${tech}-${techIndex}`} // AQUI A MUDANÇA
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="outline" className="border-purple-400 text-purple-300">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
                  </CardContent>
                  <CardContent>
                    <div className="flex space-x-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {project.demo && (
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                        </a>
                     </Button>
                      )}
                      
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Vamos <span className="text-purple-400">Conversar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo para discutirmos
            como posso ajudar!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Mail, text: "Email",
                href: "mailto:yagopx3@gmail.com",
                bg: "bg-purple-600 hover:bg-purple-700" },
              {
                icon: Linkedin,
                text: "LinkedIn",
                href: "https://www.linkedin.com/in/mikael-morais-677b9a332",
                bg: "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent",
              },
              {
                icon: Github,
                text: "GitHub",
                href: "https://github.com/mikael-morais",
                bg: "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent",
              },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant={index === 0 ? "default" : "outline"} className={item.bg}>
                <item.icon className="mr-2 h-5 w-5" />
                {item.text}
              </Button>
            </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 border-t border-purple-500/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-12 scale-150"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo e Descrição */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-purple-400 mb-4 cursor-pointer"
              >
                <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                {"<Dev/>"}
                </a>
              </motion.div>
              <p className="text-gray-300 mb-4 max-w-md">
                Transformando ideias em código e criando experiências digitais que fazem a diferença. Sempre em busca da
                próxima inovação.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/Mikael-Morais", color: "hover:text-gray-400" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/mikael-morais-677b9a332", color: "hover:text-blue-400" },
                  { icon: Mail, href: "mailto:yagopx3@gmail.com?subject=Contato&body=Olá,%20gostaria%20de%20conversar...", color: "hover:text-red-400" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    className={`text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Rápidos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {[
                  { name: "Sobre", href: "#sobre" },
                  { name: "Habilidades", href: "#habilidades" },
                  { name: "Projetos", href: "#projetos" },
                  { name: "Contato", href: "#contato" },
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#a855f7" }}
                      className="text-gray-400 hover:text-purple-400 transition-all duration-300 cursor-pointer"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tecnologias Favoritas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "Python", "TypeScript"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, backgroundColor: "#7c3aed" }}
                    className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-sm border border-purple-700/50 cursor-pointer transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Linha divisória animada */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"
          ></motion.div>

          {/* Copyright e Status */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2025 Mikael Morais. 
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 bg-green-400 rounded-full"
              ></motion.div>
              <span className="text-gray-400 text-sm">Disponível para novos projetos</span>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-4 right-4 text-purple-500/20 text-6xl pointer-events-none"
          >
            {"</>"}
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-4 left-4 text-purple-500/10 text-4xl pointer-events-none"
          >
            {"{}"}
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
