// src/app/page.jsx

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPostgresql, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiMongodb,
  SiVercel,
  SiGraphql,
  SiDocker,
  SiNestjs
} from 'react-icons/si';

// Modern tech color palette
const COLORS = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9', // Main primary
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#faf7ff',
    100: '#f2e9ff',
    200: '#d9c6ff',
    300: '#bb9af7',
    400: '#9d70eb',
    500: '#7e3af2', // Main secondary
    600: '#6624c5',
    700: '#4f1e99',
    800: '#3a1770',
    900: '#28114d',
  },
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  }
};

// Example project data
const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack online store with a modern design and secure payment integration.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    techIcons: [SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss],
    link: "/projects/ecommerce",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates and user authentication.",
    tech: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
    techIcons: [SiNextdotjs, SiTypescript, SiMongodb],
    link: "/projects/task-manager",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 3,
    title: "API Gateway",
    description: "High-performance API gateway with rate limiting and analytics.",
    tech: ["Node.js", "GraphQL", "Docker", "Redis"],
    techIcons: [SiNodedotjs, SiGraphql, SiDocker],
    link: "/projects/api-gateway",
    gradient: "from-amber-500 to-orange-500",
  },
];

const skills = [
  { name: "JavaScript", icon: SiJavascript, level: 95 },
  { name: "TypeScript", icon: SiTypescript, level: 90 },
  { name: "React", icon: SiReact, level: 92 },
  { name: "Next.js", icon: SiNextdotjs, level: 88 },
  { name: "Node.js", icon: SiNodedotjs, level: 85 },
  { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
  { name: "MongoDB", icon: SiMongodb, level: 75 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
  {name:"nestjs",icon:SiNestjs,level:50},
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto py-16 relative z-10">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
            <SiVercel className="mr-1" /> Now building with Next.js 14
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Hi, I'm <span className="text-blue-600">JOEL GACHIHI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 font-light max-w-2xl mx-auto">
            Full-stack developer crafting performant, accessible digital experiences with modern tech stacks.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/projects" 
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Explore My Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/contact" 
              className="group border border-neutral-300 bg-white/70 backdrop-blur-sm px-8 py-3 rounded-full hover:shadow-md transition-all duration-300"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 font-medium">
                Get In Touch
              </span>
            </Link>
          </div>
          
          <div className="mt-12 flex gap-6 justify-center text-2xl">
            <a href="https://linkedin.com/in/joel-gachihi" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md text-blue-600 hover:-translate-y-1 transition-all duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/joel-mwangi" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md text-neutral-900 hover:-translate-y-1 transition-all duration-300">
              <FaGithub />
            </a>
            <a href="https://twitter.com/joel-gachihi" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md text-blue-400 hover:-translate-y-1 transition-all duration-300">
              <FaTwitter />
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-neutral-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <skill.icon className="text-3xl text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-neutral-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              A selection of my recent work showcasing full-stack development capabilities and modern tech stacks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => {
              const IconComponent = project.techIcons[0]; // Extract the component from the array
              return (
                <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="relative z-10 text-white text-5xl">
                      {IconComponent && <IconComponent />} {/* Correctly render the component */}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-neutral-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techIcons.map((Icon, index) => (
                        <span 
                          key={index} 
                          className="flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          <Icon className="text-blue-600" />
                          {project.tech[index]}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
                    >
                      View Case Study 
                      <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md text-neutral-700 font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              View All Projects
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to build something amazing?
          </h2>
          <p className="text-xl mb-8 text-blue-100 font-light max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time opportunities. Let's turn your ideas into reality.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium hover:-translate-y-0.5"
            >
              Start a Conversation
            </Link>
            
            <a 
              href="/resume.pdf" 
              className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}