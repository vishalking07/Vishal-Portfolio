import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Mail, 
  Linkedin, 
  Play, 
  Layers, 
  Fingerprint, 
  Lock, 
  ArrowRight, 
  ChevronDown,
  Pentagon,
  Globe,
  Zap,
} from "lucide-react";

import { Reveal, Navbar, Footer, Magnetic } from "../components/Shared";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 px-8 overflow-hidden group cursor-pointer">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10 pointer-events-none"></div>
      <img 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-80 object-[center_20%] md:object-[center_15%] hero-image-animate transition-transform duration-[2s] group-hover:scale-105" 
        src="/vishal.png"
      />
    </div>
    <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="flex flex-col justify-center">
        <Reveal>
          <span className="font-label uppercase tracking-[0.4em] text-primary text-sm mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary"></span> UI/UX Designer
          </span>
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="font-headline text-7xl md:text-9xl font-bold tracking-tighter leading-tight mb-8 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-1000 ease-out">
            <span>VISHAL</span> <span className="text-primary block text-neon">A.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="font-body text-xl md:text-2xl text-secondary max-w-lg leading-relaxed mb-12">
            I design intuitive, modern and user-centered digital experiences.
          </p>
        </Reveal>
        <Reveal delay={0.6}>
          <div className="flex items-center gap-8">
            <Magnetic>
              <a className="bg-primary-container text-on-primary-container px-10 py-5 rounded-full font-headline font-bold text-lg hover:scale-105 transition-all flex items-center gap-3" href="#work">
                View Work <ArrowUpRight className="w-6 h-6" />
              </a>
            </Magnetic>
            <div className="hidden md:flex relative w-32 h-32 items-center justify-center opacity-0 group-hover:opacity-100 transform rotate-[-45deg] group-hover:rotate-0 transition-all duration-1000 ease-out delay-200">
              <div className="animate-slow-rotate absolute inset-0">
                <svg className="w-full h-full text-secondary opacity-30" viewBox="0 0 100 100">
                  <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" id="circlePath"></path>
                  <text className="font-label text-[10px] uppercase tracking-[2px] fill-current">
                    <textPath xlinkHref="#circlePath">DESIGN IS AN ART • DESIGN IS AN ART • </textPath>
                  </text>
                </svg>
              </div>
              <ChevronDown className="text-primary w-8 h-8" />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const FeaturedProject = () => (
  <section className="py-32 px-8 bg-surface" id="work">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-outline-variant/20 pb-12">
          <div className="max-w-2xl">
            <span className="font-label uppercase tracking-widest text-primary mb-4 block">Case Study 01 • NDA Restricted</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">ACETER — EVENT APP</h2>
          </div>
          <p className="font-body text-secondary text-lg max-w-sm">
            A unified ecosystem for booking fine artists, securing top venues, and managing event registrations.
          </p>
        </div>
      </Reveal>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          {[
            { title: "Problem", icon: <Zap className="w-4 h-4" />, text: "Organizers faced massive friction switching between disjointed platforms to hire artists, book venues, and track live registrations." },
            { title: "Process", icon: <Globe className="w-4 h-4" />, text: "Mapped out the core workflows for three distinct user types: Organizers, Artists, and Attendees. Built wireframes focusing on a singular, unified platform approach." },
            { title: "Solution", icon: <Pentagon className="w-4 h-4" />, text: "An elegant, all-in-one event application allowing users to effortlessly discover talent, negotiate venue spaces, and issue digital tickets simultaneously." },
            { title: "Impact", icon: <ArrowUpRight className="w-4 h-4" />, text: "Cut average event planning time by 60% and successfully processed over 10,000 unified bookings in the first three months of MVP launch." }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-panel p-8 rounded-lg border border-outline-variant/10">
                <h3 className="font-headline text-xl font-bold mb-3 text-primary flex items-center gap-2">
                  {item.icon} {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Link to="/project/aceter" className="lg:col-span-7 block relative h-[600px] lg:h-auto rounded-lg overflow-hidden group bg-surface-container-high border border-outline-variant/10 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer">
          <Reveal>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm p-12 text-center transition-all group-hover:bg-black/20">
              <Lock className="text-primary w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-headline text-3xl font-bold mb-2">VIEW FULL CASE STUDY</h4>
              <p className="font-label text-xs uppercase tracking-widest text-secondary max-w-xs transition-colors group-hover:text-white">Click to explore the UX Architecture in detail</p>
            </div>
            <img 
              alt="Aceter Mockup" 
              className="w-full h-full object-cover opacity-50 blur-sm scale-150 transition-all duration-700 group-hover:scale-125" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjXeNQljqGtEpANTfqraklXp7gHlXSWQY0nMUUB2FrQR9beg2LWn7PhROFYASNp1rSvrJnTJbih7ALnNAUwl72lT0xXvm2_S_YoaREY8fzwxvXjtFwomzaG62mvvLjw4om-4D0qhIzt8XgPabEu9iZLDpMVliwvPH69CEo33TrFbELDI2aLYbuZ1BkGij8UiITNINwEBZpl3UXZqbqAvNJ2Ufx2lKvelCBz4oMOACHPBJIK5OGlaxszY0BMNrysFaPJP_M2ylbZFJU"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
              <div className="bg-black/80 backdrop-blur-md p-6 rounded-lg border border-white/5">
                <h4 className="font-headline text-2xl font-bold text-white">UX Architecture</h4>
                <p className="text-secondary text-sm">Visual Design & Modular Flow</p>
              </div>
            </div>
          </Reveal>
        </Link>
      </div>
    </div>
  </section>
);

const SelectedWorks = () => (
  <section className="py-32 px-8 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <div className="mb-20">
          <h2 className="font-headline text-4xl font-bold mb-4">SELECTED WORKS</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { 
            id: "wishkart",
            title: "WISHKART", 
            category: "Premium E-Commerce", 
            img: "/wishkart.png" 
          },
          { 
            id: "best-shop",
            title: "BEST SHOP", 
            category: "SaaS Dashboard Ecosystem", 
            img: "/best-shop/thumbnail.png" 
          }
        ].map((project, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <Link to={`/project/${project.id}`} className="group relative block cursor-pointer p-4 rounded-xl border border-transparent hover:border-primary/30 hover:bg-surface-container transition-all duration-500">
              <div className="aspect-[16/10] rounded-lg overflow-hidden mb-6 bg-surface-container-high relative">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={project.img}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-xs font-label uppercase tracking-widest border border-white/20">View Case Study</span>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <span className="font-label text-xs text-primary uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="font-headline text-3xl font-bold">{project.title}</h3>
                </div>
                <ArrowRight className="text-secondary group-hover:text-primary transition-colors mt-2" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const MotionFlow = () => (
  <section className="py-32 px-8 bg-surface">
    <div className="max-w-7xl mx-auto text-center mb-20">
      <Reveal>
        <h2 className="font-headline text-5xl md:text-7xl font-bold mb-6">MOTION & FLOW</h2>
        <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
          Interactive experiences aren't just seen—they're felt. My work focuses on micro-interactions that guide users with cinematic grace.
        </p>
      </Reveal>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {[
        { title: "SPLASH SCREENS", label: "View Prototype", link: "https://www.figma.com/proto/Gl4FOVmQ3rF6IaFIDJLtyS/Splash-Screen?page-id=0%3A1&node-id=1-120&viewport=209%2C583%2C0.13&t=zQKzsMPwVDvTgSvh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A93", icon: <Play className="w-12 h-12" />, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg2ib3KlycWIhq3Y3f5DElCO2Op0Z1q-rMtGLAX7wI6WDZuN-DS35NzukDHi5F9gC966TJLXK73X2q2SKQeUADefhMnfl0_ZSZ0CCt4kGiPBSoAmzqlSZBvAJiqTIVD1Sr2y1wgQmnP0EEkJaRH5_I2g67WmXcneYmDdfjSrENjZuxMfwsRW_wKodBLQhMRVCzPXW_X48iOblm_ExFkA74xZu0JfXLtZQyAIXrWTjaJRdXGDo-rP0VFYQ2ROc7GYxJyGmVi-ErG-mv" },
        { title: "PARALLAX UI", label: "View Experience", link: "https://www.figma.com/proto/GbV2jyxmfz5gZL8ewqTYHX/Animated?page-id=0%3A1&node-id=1-2&p=f&viewport=411%2C408%2C0.08&t=8xhm6qcTSAOA0ZH2-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A2", icon: <Layers className="w-12 h-12" />, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo7KYTk_mo_YghilGuxPOpWE333NZWE_SMN3a5tlhxguuR5VMdUyjHf55cpRhHcgIgIIzmpYxEkIfYDS0ELH_lgTe1ZpyarYd7ZsUPUHoHhKeQ8pjy4hVI3Qu0CNRv_PVSt38DrAyrYwyXMgA-YDiUEspfG9Qeoet3meNTOcpo_QTsPqHhN06Qu-JiLwLq0cbRugWlJzf57bOIlv0mxknQ91z3XezaZk5oIZgy2ZBZ3lo2keTd03Wp3YFk2b-8uy_KG9awxu10beLS", offset: true },
        { title: "MICRO GESTURES", label: "Tactile Feedback", link: "https://www.figma.com/design/DpqVxMVUI4YmX3mRi0HFkG/Alumni?node-id=0-1&t=BiiscjfTbddfYvsR-1", icon: <Fingerprint className="w-12 h-12" />, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYKXdXLJ1t2eY0Y7Ae-vlpEPe_6TlMSeFjpJGR0vCVUfd9xscJMfMcObsRBP-PvT7Z_mKzPEMbhQYSRLGKBJSFs_mz25NQT9x9LrwT5XcoMavtS7R61jBYLY6EgJZL8EEPY0bnaeU1uan2CrNS0i5laraI4sOygMFHA2ZSkOeJYaDqjb6S5WMgm5LpnOOvocb35UoCSAod19igBMB8DOhyU6c700bv88Br18KcJZY3Mb9EpXbuaK2bozESxA08TX5lv__gBY78lGrF" }
      ].map((item, i) => (
        <Reveal key={i} delay={i * 0.2}>
          <a 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block relative overflow-hidden rounded-lg aspect-[9/16] bg-surface-container-high ${item.offset ? 'md:mt-24' : ''} cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-shadow`}
          >
            <img 
              alt={item.title} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105" 
              src={item.img}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/50 backdrop-blur-sm group-hover:bg-black/30 transition-all">
              <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-headline text-2xl font-bold mb-2">{item.title}</h4>
              <p className="text-xs font-label uppercase text-secondary tracking-widest">{item.label}</p>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);

const VisualPosters = () => (
  <section className="py-32 px-8 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <div className="flex items-center gap-12 mb-20">
          <h2 className="font-headline text-4xl font-bold whitespace-nowrap">VISUAL POSTERS</h2>
          <div className="w-full h-[1px] bg-outline-variant/30"></div>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          "/compressed_1.jpg",
          "/compressed_2.jpg",
          "/SOCIOFITT HANDBALL (5).png",
          "/SOCIOFITT HANDBALL (7).png"
        ].map((url, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-high group">
              <img 
                alt={`Poster ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={url}
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-32 px-8 bg-surface" id="about">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <Reveal>
        <div className="relative group">
          <div className="absolute -top-10 -left-10 w-full h-full border border-primary/20 rounded-lg -z-10 group-hover:top-[-15px] group-hover:left-[-15px] transition-all duration-500"></div>
          <div className="aspect-square bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant/10">
            <img 
              alt="Vishal A Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="/profile.jpg"
            />
          </div>
        </div>
      </Reveal>
      <div className="reveal">
        <Reveal>
          <span className="font-label text-primary uppercase tracking-widest mb-4 block">About Me</span>
          <h2 className="font-headline text-5xl font-bold mb-8 leading-tight">CRAFTING DIGITAL <span className="italic text-secondary">POETRY</span> THROUGH DESIGN.</h2>
          <p className="font-body text-secondary text-lg leading-relaxed mb-12">
            I’m a passionate UI/UX Designer focused on crafting modern, intuitive, and user-centered digital experiences. I enjoy transforming ideas into clean and engaging interfaces with strong visual hierarchy and smooth user flows. I have experience working on real-world projects including event platforms and e-commerce applications, where I focused on usability, interaction design, and responsive interfaces.
          </p>
          <div className="space-y-8">
            <h3 className="font-label text-xs uppercase tracking-[0.3em] text-neutral-500 border-b border-outline-variant/30 pb-2">Technical Mastery</h3>
            <div className="flex flex-wrap gap-4">
              {["FIGMA", "UI/UX DESIGN", "FRONTEND (REACT)", "MOTION DESIGN", "BRAND IDENTITY"].map((skill, i) => (
                <span key={i} className="px-6 py-2 rounded-full border border-outline-variant/50 text-secondary text-sm font-label hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section className="px-8 py-32 bg-surface">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <h2 className="font-headline text-4xl mb-16 tracking-tight font-bold">PHILOSOPHY</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-container-low p-12 rounded-lg relative overflow-hidden group border border-outline-variant/5">
          <div className="absolute top-0 right-0 p-8 text-primary/10 text-9xl font-headline font-bold group-hover:text-primary/20 transition-colors pointer-events-none">01</div>
          <h3 className="font-headline text-2xl mb-6 relative z-10 font-bold">Editorial Precision</h3>
          <p className="text-secondary leading-relaxed max-w-md relative z-10 font-light">Rejecting the generic grid for a bespoke canvas. I treat every web layout like a high-fashion magazine spread—prioritizing white space, bold typography, and intentional asymmetry.</p>
        </div>
        <div className="bg-primary-container p-12 rounded-lg text-on-primary-container shadow-2xl shadow-primary-container/20">
          <Zap className="w-10 h-10 mb-8" />
          <h3 className="font-headline text-2xl mb-6 font-bold">Atmospheric Light</h3>
          <p className="opacity-90 leading-relaxed font-medium">Color isn't just a hex code; it's a mood. I use vibrant accents to guide the eye through cinematic darkness.</p>
        </div>
        <div className="bg-surface-container-high p-12 rounded-lg border border-outline-variant/10">
          <h3 className="font-headline text-2xl mb-6 font-bold">Digital Craft</h3>
          <p className="text-secondary leading-relaxed font-light">Code is the brush, the browser is the gallery. I bridge the gap between static design and living interaction.</p>
        </div>
        <div className="md:col-span-2 bg-surface-container-low p-12 rounded-lg flex flex-col md:flex-row items-center gap-12 border border-outline-variant/5">
          <div className="w-full md:w-1/2">
            <h3 className="font-headline text-2xl mb-6 font-bold">Intentional Motion</h3>
            <p className="text-secondary leading-relaxed font-light">Animation should never be decoration. It is a functional layer that explains the relationship between elements.</p>
          </div>
          <div className="w-full md:w-1/2 h-40 bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant/5">
            <div className="w-16 h-16 border-2 border-primary-container rounded-full flex items-center justify-center animate-pulse">
               <Play className="text-primary w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Journey = () => (
  <section className="bg-surface-container-low py-32 px-8 border-y border-outline-variant/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <Reveal>
            <h2 className="font-headline text-4xl tracking-tight mb-8 font-bold">THE JOURNEY</h2>
            <div className="w-16 h-1 bg-primary-container"></div>
          </Reveal>
        </div>
        <div className="md:w-2/3 space-y-16">
          {[
            { year: "2023", title: "Foundations & UI/UX Mastery", text: "Started learning UI/UX and began implementing designs in the second half of the year, focusing on the core principles of human-centered design." },
            { year: "2024", title: "Leadership & Real-world Impact", text: "Started real-time projects for college management. Served as UI/UX Team Lead for both my batch and the junior batch. Began freelancing, which was a significant learning period for client relations and production workflows." },
            { year: "2025", title: "Strategic Growth & Specialization", text: "Joined the college digital marketing team. Served as Brand Identity Lead and Videography Team Head for juniors. After 5 months, shifted focus to learning new things while continuing to deliver high-impact projects for clients." }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.2}>
              <div className="flex gap-12 relative">
                <div className="text-primary font-headline font-bold pt-1 text-2xl w-16 flex-shrink-0">{item.year}</div>
                <div className={`pl-12 ${i !== 2 ? 'pb-12 border-l border-outline-variant/30 -ml-6' : ''}`}>
                  <h4 className="font-headline text-xl mb-4 font-bold tracking-tight">{item.title}</h4>
                  <p className="text-secondary leading-relaxed font-light">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-32 px-8 bg-surface-container-lowest" id="contact">
    <div className="max-w-7xl mx-auto text-center">
      <Reveal>
        <h2 className="font-headline text-6xl md:text-9xl font-bold mb-12 tracking-tighter">LET'S WORK <br /> <span className="text-primary text-neon italic">TOGETHER</span></h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
          <a className="group flex items-center gap-4 text-2xl font-headline font-medium hover:text-primary transition-colors" href="mailto:spideyvishal05@gmail.com">
            <span className="p-4 rounded-full bg-surface-container-high group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
              <Mail className="w-8 h-8" />
            </span>
            Email
          </a>
          <a className="group flex items-center gap-4 text-2xl font-headline font-medium hover:text-primary transition-colors" href="https://www.linkedin.com/in/vishal-a-designer" target="_blank" rel="noopener noreferrer">
            <span className="p-4 rounded-full bg-surface-container-high group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
              <Linkedin className="w-8 h-8" />
            </span>
            LinkedIn
          </a>
        </div>
        <div className="mt-24 pt-24 border-t border-outline-variant/10">
          <p className="font-body text-secondary text-sm mb-6 uppercase tracking-widest">Available for new opportunities</p>
          <Magnetic>
            <a href="mailto:spideyvishal05@gmail.com" className="inline-block bg-primary-container text-on-primary-container px-12 py-6 rounded-full font-headline font-bold text-xl hover:scale-110 hover:shadow-[0_0_50px_rgba(255,85,61,0.3)] transition-all duration-500">
              Start a Project
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-secondary overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <SelectedWorks />
      <Philosophy />
      <MotionFlow />
      <Journey />
      <VisualPosters />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
