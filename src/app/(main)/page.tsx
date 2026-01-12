"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "@/app/futuristic.css";
import { portfolioContent } from "@/data/mock-content";

// Dynamic import for 3D Scene to avoid SSR issues
const Scene = dynamic(() => import("@/components/3d/Scene"), { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-black z-[-10]" />
});

function Section({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center items-center p-8 relative ${className}`}>
            {children}
        </section>
    );
}

function GlassCard({ children, className = "", delay = 0, hover = true }: { children: React.ReactNode; className?: string; delay?: number; hover?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={hover ? { scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" } : {}}
            transition={{ duration: 0.6, delay, type: "spring", stiffness: 50 }}
            className={`glass-card p-8 border border-white/5 bg-black/40 backdrop-blur-xl rounded-2xl ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const bioRef = useRef<HTMLDivElement>(null);

    return (
        <SmoothScroll>
            <Scene />
            
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[--neon-blue] to-[--neon-purple] origin-left z-50 mix-blend-screen"
                style={{ scaleX }}
            />

            <main className="text-white futuristic-container selection:bg-[--neon-purple] selection:text-white">
                
                {/* HERO SECTION */}
                <Section className="z-10 perspective-[1000px]">
                    <motion.div
                        className="text-center z-10 relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <div className="absolute -inset-20 bg-gradient-to-r from-[--neon-blue] to-[--neon-purple] opacity-10 blur-[100px] rounded-full animate-pulse" />
                        
                        <motion.h2 
                            initial={{ letterSpacing: "1em", opacity: 0 }}
                            animate={{ letterSpacing: "0.5em", opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-[--neon-blue] tracking-[0.5em] mb-6 text-sm md:text-xl uppercase font-bold"
                        >
                            {portfolioContent.about.hero.tagline}
                        </motion.h2>
                        
                        <h1 className="hero-title neon-heading mb-6 text-7xl md:text-9xl font-black relative">
                            {portfolioContent.about.hero.headline.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{ delay: i * 0.05 + 0.5, duration: 0.8 }}
                                    className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-t hover:from-white hover:to-transparent transition-all duration-300 cursor-default"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
                        >
                            {portfolioContent.about.hero.subheadline}
                        </motion.h3>

                        <motion.p
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             transition={{ delay: 2.0, duration: 1 }}
                             className="mt-8 text-gray-400 max-w-lg mx-auto leading-relaxed"
                        >
                            {portfolioContent.about.hero.description}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute bottom-10 opacity-70 flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[--neon-blue]">Initialize System</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[--neon-blue] to-transparent" />
                    </motion.div>
                </Section>

                {/* JOURNEY / BIO SECTION */}
                <Section>
                    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                             <motion.h2 
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="section-title neon-heading text-left mb-8"
                            >
                                The Evolution
                            </motion.h2>
                            <div className="space-y-12">
                                {portfolioContent.about.bio.map((chapter, i) => (
                                    <div key={i} className="relative pl-8 border-l border-white/10 hover:border-[--neon-purple] transition-colors duration-300 group">
                                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[--neon-blue] rounded-full group-hover:scale-150 group-hover:shadow-[0_0_10px_var(--neon-blue)] transition-all" />
                                        <span className="text-xs text-[--neon-purple] font-mono mb-2 block tracking-widest">{chapter.year}</span>
                                        <h3 className="text-2xl font-bold text-white mb-2">{chapter.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{chapter.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <GlassCard className="relative h-[500px] flex items-center justify-center overflow-hidden !p-0">
                             <div className="absolute inset-0 bg-[url('/images/profile.jpg')] bg-cover bg-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                             <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold text-white">Shilpa</h3>
                                <p className="text-[--neon-blue]">System Architect</p>
                             </div>
                        </GlassCard>
                    </div>
                </Section>

                {/* PROJECT STARGATE (Case Studies) */}
                <Section className="py-24">
                    <div className="max-w-7xl w-full">
                        <motion.h2 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="section-title neon-heading text-center mb-20"
                        >
                            Select Missions
                        </motion.h2>

                        <div className="space-y-32">
                            {portfolioContent.caseStudies.map((project, index) => (
                                <motion.div 
                                    key={project.id}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Visual Representation (Abstract for now, would be images) */}
                                    <GlassCard className="w-full md:w-3/5 h-[400px] relative overflow-hidden group !p-0 border-0">
                                        <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105" 
                                             style={{ 
                                                 background: `linear-gradient(135deg, ${project.color}22, black)`,
                                             }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                            <span className="text-9xl font-black text-white/5">{index + 1}</span>
                                        </div>
                                        {/* Mock UI Elements */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                             <div className="flex gap-2 mb-4">
                                                 {project.tags.map(tag => (
                                                     <span key={tag} className="px-3 py-1 rounded-full border border-white/20 text-xs uppercase bg-black/50 backdrop-blur-md">{tag}</span>
                                                 ))}
                                             </div>
                                        </div>
                                    </GlassCard>

                                    {/* Content Info */}
                                    <div className="w-full md:w-2/5">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="w-12 h-[1px] bg-white/50" />
                                            <span className="text-[--neon-blue] text-sm tracking-wider">{project.category} // {project.year}</span>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-bold mb-6 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[--neon-blue] hover:to-[--neon-purple] transition-all cursor-pointer"
                                            style={{ textShadow: `0 0 30px ${project.color}44` }}
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="text-xl text-white mb-8 border-l-2 border-[--neon-purple] pl-4 italic">
                                            "{project.challenge}"
                                        </p>
                                        <div className="space-y-6 text-gray-400">
                                            <p><strong className="text-white block mb-1 uppercase text-xs tracking-wider">Solution</strong> {project.solution}</p>
                                            <p><strong className="text-[--neon-green] block mb-1 uppercase text-xs tracking-wider" style={{ color: '#00ff9d' }}>Impact</strong> {project.impact}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* TESTIMONIALS & STATS */}
                <Section className="grid-bg">
                    <div className="max-w-6xl w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                            {portfolioContent.stats.map((stat, i) => (
                                <GlassCard key={i} className="text-center" delay={i * 0.1} hover={false}>
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                                </GlassCard>
                            ))}
                        </div>

                        <h2 className="section-title neon-heading text-center mb-16">Transmissions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {portfolioContent.testimonials.map((t, i) => (
                                <GlassCard key={i} delay={0.2 + i * 0.1} className="relative">
                                    <div className="text-[--neon-purple] text-6xl absolute top-4 left-4 opacity-50">"</div>
                                    <p className="text-gray-300 relative z-10 mb-6 mt-8 leading-relaxed">
                                        {t.text}
                                    </p>
                                    <div>
                                        <div className="text-white font-bold">{t.name}</div>
                                        <div className="text-[--neon-blue] text-sm">{t.role}</div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* FOOTER CTA */}
                <Section className="min-h-[70vh]">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                        <div className="w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="w-[600px] h-[600px] border border-white/5 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="w-[400px] h-[400px] border border-white/10 rounded-full absolute" />
                    </div>

                    <GlassCard className="text-center max-w-3xl py-20 border-[--neon-blue] relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black neon-heading mb-8">Ready to Initialize?</h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto">
                            The future is not just something we wait for. It's something we build. Let's engineer your next breakthrough.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                             <a href="mailto:shilpapaira84@gmail.com" className="group relative px-10 py-5 bg-white text-black font-bold text-lg rounded-none clip-path-polygon hover:bg-[--neon-blue] transition-all overflow-hidden">
                                <span className="relative z-10">SEND TRANSMISSION</span>
                                <div className="absolute inset-0 bg-[--neon-blue] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </a>
                        </div>
                        <div className="mt-24 text-xs text-gray-600 font-mono">
                            SYSTEM STATUS: ONLINE // YEAR: 2126 // DESIGNED BY SHILPA PAIRA
                        </div>
                    </GlassCard>
                </Section>
            </main>
        </SmoothScroll>
    );
}
