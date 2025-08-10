"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle, Sparkles, Rocket, Users, ShieldCheck, Laugh, Instagram, Share2, Link as LinkIcon, Apple, Play, ArrowRight, Mail } from "lucide-react";

const ASSETS = {
  oui: "/assets/oui_sans_fond_strict.png",
  non: "/assets/non_sans_fond_strict.png",
  peutetre: "/assets/peut_etre_sans_fond_strict.png",
  wtf: "/assets/wtf_sans_fond_strict.png",
  licorne: "/assets/licorne_originale_sans_fond_strict.png",
  licorneFull: "/assets/licorne_originale.png",
  inviter: "/assets/inviter_sans_fond_strict.png",
  partage: "/assets/partage_sans_fond_strict.png",
};

function StyleBrand() {
  // On ne garde ici que l’import de fontes (tout le reste du style est dans app/globals.css)
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
    `}</style>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-ink text-cloud" id="top">
      <StyleBrand />
      <Navbar />
      <BannerStrip />
      <HeroV2 />
      <FeaturesStrip />
      <AboutSection />
      <HowItWorks />
      <GalleryStickers />
      <SocialProof />
      <Roadmap />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ---------- UI bits ---------- */

function Navbar(){
  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-display text-xl flex items-center gap-2">
          <img src={ASSETS.licorne} alt="logo" className="w-6 h-6"/>
          thatsgay?
        </a>
        <div className="hidden sm:flex items-center gap-5 text-sm">
          <a href="#about" className="opacity-90 hover:opacity-100">À propos</a>
          <a href="#features" className="opacity-90 hover:opacity-100">Fonctionnalités</a>
          <a href="#demo" className="opacity-90 hover:opacity-100">Comment jouer</a>
          <a href="#roadmap" className="opacity-90 hover:opacity-100">Roadmap</a>
          <a href="#download" className="btn-primary">Télécharger</a>
        </div>
      </div>
    </nav>
  );
}

function BannerStrip(){
  return (
    <div className="gradient-bar text-ink text-sm">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <span className="font-sans">🚀 Bêta ouverte — rejoins la liste d’attente</span>
        <a href="#download" className="underline font-semibold">Rejoindre</a>
      </div>
    </div>
  );
}

function GridBackground(){
  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(243,245,247,.06)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
    </svg>
  );
}

function HeroV2(){
  return (
    <header className="relative night-pop overflow-hidden section">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <GridBackground />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">Humour bienveillant</span>
              <span className="badge">16–30 ans</span>
              <span className="badge">Parties 2–5 min</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.05]">
              L’app qui transforme
              <span className="unicorn-text"> les débats absurdes </span>
              en fous rires entre potes.
            </h1>
            <p className="font-sans text-lg mt-5 opacity-90 max-w-xl">
              Choisis une carte, vote <b>Oui / Non / Peut-être / WTF</b>, pars en débat —
              on garde le fun, on coupe la méchanceté.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#download" className="btn-primary">Télécharger</a>
              <a href="#demo" className="btn-ghost">Essayer la démo web</a>
            </div>
          </div>
          <div className="relative">
            <MockupPhone />
            <img src={ASSETS.oui} className="sticker absolute -right-6 -top-6 w-24 rotate-6 float-slow" alt="oui"/>
            <img src={ASSETS.non} className="sticker absolute right-10 -bottom-8 w-24 -rotate-6 float-mid" alt="non"/>
            <img src={ASSETS.peutetre} className="sticker absolute -left-6 top-10 w-24 rotate-3 float-fast" alt="peut-etre"/>
            <img src={ASSETS.wtf} className="sticker absolute left-16 bottom-0 w-20 -rotate-3 float-mid" alt="wtf"/>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeaturesStrip(){
  const feats = [
    { t:"Consentement 1-tap", d:"Bouton Passer + signalement simple" },
    { t:"Jusqu’à 8 potes", d:"En ligne ou IRL" },
    { t:"Partage instant", d:"Stories & memes auto" },
    { t:"Modération active", d:"Ligne claire : fun mais safe" },
  ];
  return (
    <section id="features" className="bg-[#0F1219] section section-wave-top">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {feats.map((f,i)=> (
            <div key={i} className="card p-5">
              <h3 className="font-sans font-semibold">{f.t}</h3>
              <p className="opacity-80 mt-1 text-sm">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection(){
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl">C’est quoi thatsgay ?</h2>
          <p className="font-sans text-lg opacity-90 mt-4">
            Un jeu social <b>second degré</b> pour rire avec ses potes, pas d’eux. Des cartes absurdes,
            des votes rapides, et un débat safe.
          </p>
          <ul className="mt-5 space-y-3 opacity-90">
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[var(--teal)] mt-1"/> Règles simples : Oui / Non / Peut-être / WTF</li>
            <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-[var(--pink)] mt-1"/> Bouton Passer, NSFW off par défaut, modération stricte</li>
            <li className="flex items-start gap-3"><Users className="w-5 h-5 text-[var(--blue)] mt-1"/> Joue en privé ou en public jusqu’à 8 amis</li>
          </ul>
        </div>
        <div className="relative">
          <img src={ASSETS.licorneFull} alt="licorne" className="w-full max-w-md mx-auto sticker"/>
        </div>
      </div>
    </section>
  );
}

function HowItWorks(){
  const steps = [
    { title:"Lance une partie", desc:"Invite tes potes ou rejoins une room. Joker ‘Passer’ dispo.", icon:<Rocket className="w-5 h-5"/> },
    { title:"Vote & débat", desc:"Oui / Non / Peut-être / WTF — parle sans méchanceté.", icon:<Laugh className="w-5 h-5"/> },
    { title:"Partage & enchaîne", desc:"Résultats instantanés, partage en story, relance de thème.", icon:<Share2 className="w-5 h-5"/> },
  ];
  return (
    <section id="demo" className="section section-wave-top">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">Comment jouer ?</h2>
            <p className="font-sans text-lg opacity-90 mt-4 max-w-xl">
              Parties 2–5 minutes, parfait pour les pauses et les pré-soirs. Règle d’or :
              on rit <b>avec</b> les gens, pas <b>des</b> gens.
            </p>
            <ul className="mt-6 space-y-4">
              {steps.map((s,i)=> (
                <li key={i} className="flex gap-3">
                  <div className="mt-1 w-9 h-9 rounded-xl flex items-center justify-center" style={{background:"rgba(45,123,255,.15)", color:"var(--blue)"}}>{s.icon}</div>
                  <div>
                    <p className="font-sans font-semibold">{s.title}</p>
                    <p className="opacity-80">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="#download" className="btn-primary inline-flex items-center gap-2"><Rocket className="w-5 h-5"/> Commencer</a>
              <a href="#download" className="btn-ghost inline-flex items-center gap-2"><HelpCircle className="w-5 h-5"/> Voir un exemple</a>
            </div>
          </div>
          <motion.div className="card p-6 relative overflow-hidden" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once:true }}>
            <MockupPhone />
            <img src={ASSETS.inviter} alt="inviter" className="absolute -right-3 -top-4 w-20 sticker"/>
            <img src={ASSETS.partage} alt="partage" className="absolute -left-3 -bottom-5 w-24 sticker"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GalleryStickers(){
  const imgs = [ASSETS.oui, ASSETS.non, ASSETS.peutetre, ASSETS.wtf, ASSETS.licorne];
  return (
    <section className="section bg-[#0F1219]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl">Stickers & vibes</h2>
        <p className="opacity-90 mt-3 max-w-2xl">Un look assumé, néon et licorne. Parfait pour les stories et le partage viral.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {imgs.map((src, i)=> (
            <div key={i} className="aspect-square rounded-2xl border border-white/10 grid place-items-center bg-black/20 overflow-hidden">
              <img src={src} alt="sticker" className="w-24 h-24 object-contain sticker"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof(){
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl">Pourquoi ça buzz ?</h2>
        <p className="font-sans text-lg opacity-90 mt-4 max-w-2xl">Courbes néon, licorne mascotte, punchlines potaches – parfait pour les stories. Ligne claire : fun mais safe.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[{title:"Fait pour TikTok",desc:"Formats courts, réactions en chaîne, partage 1-tap."},{title:"Convivial",desc:"Joue IRL ou en ligne, jusqu’à 8."},{title:"Inclusif",desc:"‘Passer’ toujours dispo. Modération stricte."}].map((c,i)=> (
            <div key={i} className="card p-6">
              <h3 className="font-sans font-semibold text-lg">{c.title}</h3>
              <p className="opacity-80 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          <LiveCounter />
          <UGCCarousel />
        </div>
      </div>
    </section>
  );
}

function LiveCounter(){
  const [plays, setPlays] = useState(12480);
  const [debates, setDebates] = useState(4680);
  useEffect(()=>{
    const it = setInterval(()=>{
      setPlays(v => v + Math.floor(Math.random()*7));
      setDebates(v => v + Math.floor(Math.random()*3));
    }, 1200);
    return ()=>clearInterval(it);
  },[]);
  return (
    <div className="card p-6">
      <h3 className="font-sans font-semibold text-lg">Cette semaine</h3>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 rounded-2xl bg-[rgba(255,45,161,.08)]">
          <p className="text-sm opacity-80">Parties jouées</p>
          <p className="font-display text-4xl mt-1">{plays.toLocaleString('fr-FR')}</p>
        </div>
        <div className="p-4 rounded-2xl bg-[rgba(45,123,255,.08)]">
          <p className="text-sm opacity-80">Débats lancés</p>
          <p className="font-display text-4xl mt-1">{debates.toLocaleString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
}

function UGCCarousel(){
  const cards = useMemo(()=>[
    {img:ASSETS.oui, caption:"Porter un tote bag de ton ex, c’est…?"},
    {img:ASSETS.non, caption:"Pleurer devant Fast & Furious, c’est…?"},
    {img:ASSETS.peutetre, caption:"Partager son dessert avec le prof de sport, c’est…?"},
    {img:ASSETS.wtf, caption:"Mettre 3 pulls à la plage, c’est…?"},
  ],[]);
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    const it = setInterval(()=> setIndex(i => (i+1)%cards.length), 2500);
    return ()=>clearInterval(it);
  },[cards.length]);
  return (
    <div className="card p-4 overflow-hidden">
      <div className="flex items-center justify-between px-2">
        <h3 className="font-sans font-semibold text-lg">Stories qui font parler</h3>
        <div className="flex gap-1">
          {cards.map((_,i)=> (
            <span key={i} className={`h-1 w-6 rounded-full ${i===index? 'bg-[var(--pink)]':'bg-white/20'}`} />
