import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Zap, Target, Layers, Lock } from "lucide-react";
import { Reveal, Navbar, Footer, Magnetic } from "../components/Shared";

// Dummy content fetcher based on ID
const getProjectData = (id: string) => {
  const defaultData = {
    title: id.toUpperCase().replace("-", " "),
    category: "Premium Case Study",
    client: "Confidential",
    role: "Lead UI/UX Designer",
    timeline: "3 Months",
    heroImg: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    problem: "The existing platform suffered from high user drop-off rates and a visually cluttered interface that hindered the premium positioning of the brand. The challenge was to rebuild the entire user journey from the ground up, focusing on conversion and aesthetic supremacy.",
    solution: "We implemented a stark, editorial-inspired design system driven by high-contrast typography and fluid micro-interactions. By adopting a 'less is more' approach, we decluttered the navigation and introduced a robust design token system for consistency across 50+ screens.",
    screens: [
      {
        title: "Onboarding Flow",
        description: "A frictionless 3-step onboarding process designed to capture essential user data without causing cognitive overload. Smooth animations guide the user's eye towards the primary CTA.",
        img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1600"
      },
      {
        title: "Main Dashboard",
        description: "The core dashboard synthesizes complex data into digestible, beautiful widgets. Using deep contextual darkness, we made charts pop with our signature neon accents.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
      },
      {
        title: "Checkout Experience",
        description: "Stripped of all distractions, the checkout flow guarantees security and speed. We utilized skeleton loaders and optimistic UI updates to make the process feel instant.",
        img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1600"
      }
    ]
  };

  if (id === "aceter") {
    defaultData.title = "ACETER — EVENT APP";
    defaultData.category = "Event Ecosystem";
    defaultData.client = "Aceter Booking Network";
    defaultData.heroImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuAjXeNQljqGtEpANTfqraklXp7gHlXSWQY0nMUUB2FrQR9beg2LWn7PhROFYASNp1rSvrJnTJbih7ALnNAUwl72lT0xXvm2_S_YoaREY8fzwxvXjtFwomzaG62mvvLjw4om-4D0qhIzt8XgPabEu9iZLDpMVliwvPH69CEo33TrFbELDI2aLYbuZ1BkGij8UiITNINwEBZpl3UXZqbqAvNJ2Ufx2lKvelCBz4oMOACHPBJIK5OGlaxszY0BMNrysFaPJP_M2ylbZFJU";
    defaultData.problem = "The event management ecosystem was fundamentally broken. Organizers were forced to use entirely separate, disconnected tools to scout artists, book venues, and handle attendee registrations, leading to massive administrative overhead and scheduling conflicts.";
    defaultData.solution = "We designed a unified event ecosystem that consolidates the entire lifecycle. Aceter serves as a singular, beautiful platform where organizers can seamlessly discover and book fine artists, secure premium event venues, and manage high-volume registrations in one place.";
    defaultData.screens = [
      {
        title: "Artist & Venue Discovery",
        description: "A centralized directory designed for fast discovery. Mangers can seamlessly filter fine artists and scout available premium venues, utilizing immersive imagery and live-availability indicators.",
        img: "/Frame 1.png"
      },
      {
        title: "Unified Booking Flow",
        description: "A streamlined, frictionless booking matrix that allows organizers to reserve talent and secure floor maps simultaneously, reducing a multi-day negotiation process into a few clicks.",
        img: "/Frame 2.png"
      },
      {
        title: "Event Registration Portal",
        description: "A high-conversion ticketing and guest-list registration flow for attendees. Complex data collection logic was broken into bite-sized, visually engaging micro-interactions.",
        img: "/Frame 3.png"
      }
    ];
  }

  if (id === "wishkart") {
    defaultData.title = "WISHKART — E-COMMERCE";
    defaultData.category = "Premium E-Commerce (NDA)";
    defaultData.client = "Confidential (NDA Signed)";
    defaultData.heroImg = "/wishkart.png";
    defaultData.problem = "Due to a strict Non-Disclosure Agreement (NDA), the full working context of this high-volume e-commerce application is heavily guarded. The primary objective was to modernize a legacy retail platform to handle massive concurrent traffic without sacrificing a seamless, boutique user experience.";
    defaultData.solution = "We architected a scalable, mobile-first design system utilizing modular components. Critical user flows, such as checkout and cart management, were redesigned completely. To respect the NDA, an abstracted UX presentation detailing the structural strategy is provided in a secure PDF document.";
    (defaultData as any).externalPdf = "https://drive.google.com/file/d/1eg8BqSb2yNVQDHyf1h3uNEyZ20aKOw7j/view?usp=sharing";
  }

  if (id === "best-shop") {
    defaultData.title = "BEST SHOP — STORE MANAGER";
    defaultData.category = "SaaS Dashboard Ecosystem";
    defaultData.client = "Best Shop Retail";
    defaultData.heroImg = "/best-shop/thumbnail.png";
    defaultData.problem = "Retail managers were overwhelmed by fragmented systems for handling dynamic incoming requests, tracking complex sales metrics, and processing wholesale orders. The existing toolsets lacked mobile accessibility, creating severe bottlenecks during peak operational hours.";
    defaultData.solution = "We engineered a robust, mobile-first management dashboard that unifies sales velocity charts, request queues, and cart workflows into a single ecosystem. By utilizing bright, high-contrast UI components against a brilliant backdrop, we maximized legibility and mitigated cognitive load.";
    (defaultData as any).figmaLink = "https://www.figma.com/design/NbWyOMVbr1sjFusLyRH9KI/Best-shop?node-id=0-1&t=WVyMC0rGRUfRQCaW-1";
    defaultData.screens = [
      {
        title: "The Command Center",
        description: "A comprehensive performance dashboard featuring interactive sales charts and top-level KPIs. Clear visual hierarchy helps managers digest daily metrics instantly.",
        img: "/best-shop/mockup-1.png"
      },
      {
        title: "Frictionless Requests",
        description: "An intuitive request queue that allows store admins to quickly verify, acknowledge, and merge wholesale inquiries. Actionable button placements significantly accelerate processing speed.",
        img: "/best-shop/mockup-2.png"
      },
      {
        title: "Streamlined Ordering",
        description: "A meticulous cart interface rendering precise product configurations—such as size, color variant, and storage depth—ensuring strict fulfillment accuracy before confirming.",
        img: "/best-shop/mockup-3.png"
      },
      {
        title: "Inventory Management & Structure",
        description: "A frictionless environment for organizing products and handling statuses. Designed to strip away clutter and ensure zero-training adoption.",
        img: "/best-shop/mockup-4.png"
      },
      {
        title: "Edge Cases & Lifecycle",
        description: "Properly styled edge cases like Empty States, and transparent Post-Purchase tracking layers that reduce customer support friction and maintain visual delight.",
        img: "/best-shop/mockup-5.png"
      }
    ];
  }

  return defaultData;
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    if (id) {
      setData(getProjectData(id));
    }
  }, [id]);

  if (!data) return <div className="min-h-screen bg-background flex items-center justify-center text-primary">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-background text-secondary overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 px-8 pb-20 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label uppercase tracking-widest text-xs mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <Reveal delay={0.1}>
              <span className="font-label text-primary uppercase tracking-[0.2em] mb-4 block">{data.category}</span>
              <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-tight uppercase relative inline-block">
                {data.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-12 lg:justify-end pb-4 border-b border-outline-variant/30">
                <div>
                  <p className="font-label text-xs uppercase text-neutral-500 tracking-widest mb-1">Role</p>
                  <p className="font-headline font-semibold text-white">{data.role}</p>
                </div>
                <div>
                  <p className="font-label text-xs uppercase text-neutral-500 tracking-widest mb-1">Client</p>
                  <p className="font-headline font-semibold text-white">{data.client}</p>
                </div>
                <div>
                  <p className="font-label text-xs uppercase text-neutral-500 tracking-widest mb-1">Timeline</p>
                  <p className="font-headline font-semibold text-white">{data.timeline}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="w-full aspect-[21/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-surface-container-high relative group border border-outline-variant/10">
              <img 
                src={data.heroImg} 
                alt="Hero Cover" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <Reveal>
            <div className="glass-panel p-12 rounded-xl border border-outline-variant/5">
              <Zap className="text-primary w-8 h-8 mb-6" />
              <h3 className="font-headline text-3xl font-bold mb-6 text-white">The Challenge</h3>
              <p className="text-secondary text-lg leading-relaxed font-light">{data.problem}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass-panel p-12 rounded-xl border border-outline-variant/5 bg-primary-container/5">
              <Target className="text-primary w-8 h-8 mb-6" />
              <h3 className="font-headline text-3xl font-bold mb-6 text-white">The Solution</h3>
              <p className="text-secondary text-lg leading-relaxed font-light">{data.solution}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Alternating Layout Showcase */}
      {data.externalPdf ? (
        <section className="py-32 bg-surface text-center">
          <div className="max-w-4xl mx-auto px-8">
            <Reveal>
              <div className="w-24 h-24 rounded-full bg-surface-container-high border border-outline-variant/10 flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-6 uppercase">SECURE CASE STUDY ACCESS</h2>
              <p className="text-secondary text-lg mb-12 max-w-2xl mx-auto leading-relaxed">Due to strict NDA restrictions, the highly detailed UI screens, flows, and architectural workflows are compiled in a secure external document rather than hosted publicly on this site.</p>
              <Magnetic>
                <a href={data.externalPdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-primary-container text-on-primary-container px-12 py-6 rounded-full font-headline font-bold text-xl hover:scale-105 hover:shadow-[0_0_50px_rgba(255,85,61,0.3)] transition-all duration-500">
                   View Master Architecture PDF <ArrowUpRight className="w-6 h-6" />
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </section>
      ) : (
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-32 px-8">
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6">VISUAL EXPLORATION</h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-32">
              {data.screens.map((screen: any, idx: number) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24 px-8`}>
                    <div className="w-full lg:w-1/2">
                      <Reveal delay={isEven ? 0.1 : 0.3}>
                        <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-colors shadow-2xl">
                          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-high relative group">
                             <img 
                              src={screen.img} 
                              alt={screen.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </div>
                      </Reveal>
                    </div>
                    
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <Reveal delay={isEven ? 0.3 : 0.1}>
                        <div className="text-primary font-headline text-6xl font-bold opacity-10 mb-4">{`0${idx + 1}`}</div>
                        <h3 className="font-headline text-4xl font-bold text-white mb-6 tracking-tight">{screen.title}</h3>
                        <p className="text-secondary text-lg leading-relaxed font-light">{screen.description}</p>
                        <div className="mt-8 flex gap-4">
                          <span className="px-4 py-1 rounded-full border border-outline-variant/50 text-xs font-label uppercase tracking-widest text-neutral-400">UI Design</span>
                          <span className="px-4 py-1 rounded-full border border-outline-variant/50 text-xs font-label uppercase tracking-widest text-neutral-400">Interaction</span>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                );
              })}
            </div>

            {data.figmaLink && (
              <Reveal>
                <div className="mt-32 text-center pb-16">
                  <h3 className="font-headline text-3xl md:text-5xl font-bold mb-8 tracking-tight">EXPERIENCE THE PROTOTYPE</h3>
                  <Magnetic>
                    <a href={data.figmaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-primary-container text-on-primary-container px-12 py-6 rounded-full font-headline font-bold text-xl hover:scale-110 hover:shadow-[0_0_50px_rgba(255,85,61,0.3)] transition-all duration-500">
                      Click here to check my work in Figma <ArrowUpRight className="w-6 h-6" />
                    </a>
                  </Magnetic>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Next Project CTA */}
      <section className="py-32 px-8 bg-surface-container-lowest border-t border-outline-variant/10 text-center">
        <Reveal>
          <p className="font-label uppercase text-xs tracking-[0.3em] text-neutral-500 mb-6">Up Next</p>
          <Link to="/" className="group inline-block">
            <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors flex items-center justify-center gap-8">
              BACK TO HOME <ArrowUpRight className="w-12 h-12 transform group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
            </h2>
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
