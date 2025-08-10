\
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

export default function Page() {
  return (
    <div className="min-h-screen bg-ink text-cloud">
      <StyleBrand />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <SocialProof />
      <Roadmap />
      <CTASection />
      <Footer />
    </div>
  );
}

function StyleBrand() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
      :root{
        --ink:#0D0F14; --cloud:#F3F5F7; --pink:#FF2DA1; --blue:#2D7BFF; --lime:#CCFF00; --purple:#8B5CFF; --yellow:#FFD400; --peach:#FF8A5B; --teal:#26E0C8;
      }
      .bg-ink{ background: var(--ink); }
      .text-cloud{ color: var(--cloud); }
      .font-display{ font-family: "Space Grotesk", Poppins, system-ui, sans-serif; }
      .font-sans{ font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
      .btn-primary{ background: var(--pink); color: var(--ink); border-radius: 9999px; padding: .875rem 1.25rem; font-weight: 700; }
      .btn-primary:hover{ filter: brightness(1.05); box-shadow: 0 0 0 6px rgba(255,45,161,.25); }
      .btn-ghost{ border:1px solid rgba(243,245,247,.15); border-radius:9999px; padding:.875rem 1.25rem; }
      .card{ background: #0F1219; border-radius:24px; box-shadow: 0 6px 24px -8px rgba(13,15,20,.25); }
      .tag{ border:1px solid rgba(13,15,20,.24); border-radius:9999px; padding:.375rem .75rem; font-size:.875rem; }
      .unicorn-text{ background: linear-gradient(90deg, var(--pink), var(--blue), var(--lime)); -webkit-background-clip:text; background-clip:text; color: transparent; }
      .night-pop{ background: radial-gradient(80rem 60rem at 20% -10%, rgba(255,45,161,.25), transparent 40%),
                               radial-gradient(60rem 40rem at 100% 0%, rgba(45,123,255,.25), transparent 35%),
                               radial-gradient(50rem 40rem at 0% 100%, rgba(204,255,0,.15), transparent 40%), var(--ink); }
      .section{ padding: 6rem 1rem; }
      @media (min-width: 1024px){ .section{ padding: 8rem 0; } }

      .sticker { filter: drop-shadow(0 10px 30px rgba(0,0,0,.35)); }
      .float-slow { animation: float 6s ease-in-out infinite; }
      .float-mid { animation: float 5s ease-in-out infinite; }
      .float-fast{ animation: float 4s ease-in-out infinite; }
      @keyframes float{ 0%{ transform: translateY(0)} 50%{ transform: translateY(-10px)} 100%{ transform: translateY(0)} }

      @media (prefers-reduced-motion: reduce){ *{ animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important; scroll-behavior:auto !important; } }
    `}</style>
  );
}

function Hero(){
  return (
    <header className="relative night-pop overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <GridBackground />
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 lg:pb-24 relative">
        <div className="flex items-center gap-2 mb-6">
          <span className="tag bg-[rgba(255,45,161,.12)] border-none text-[var(--pink)]">Nouveau</span>
          <span className="tag">Humour bienveillant</span>
          <span className="tag">16–30 ans</span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
          Le débat le plus bête de l’année — et c’est pour ça qu’on l’adore.
          <br/>
          <span className="inline-flex items-center gap-3 mt-3">« est‑ce que <Sparkles className="inline w-8 h-8"/> c'est gay ? »</span>
        </h1>
        <p className="font-sans text-lg sm:text-xl mt-6 max-w-2xl opacity-90">
          On rit <strong>avec</strong> les gens, pas <strong>des</strong> gens. Parties rapides, vannes consenties, débats absurdes. 200% camaraderie.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#download" className="btn-primary inline-flex items-center gap-2">
            <Rocket className="w-5 h-5"/> Télécharge l'app
          </a>
          <a href="#demo" className="btn-ghost inline-flex items-center gap-2">
            <Laugh className="w-5 h-5"/> Essayer la démo web
          </a>
        </div>

        <motion.img alt="Sticker Oui" src={ASSETS.oui} className="sticker absolute -right-8 top-16 w-28 rotate-6 float-slow" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}/>
        <motion.img alt="Sticker Non" src={ASSETS.non} className="sticker absolute right-16 -bottom-8 w-28 -rotate-6 float-mid" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}/>
        <motion.img alt="Sticker Peut-être" src={ASSETS.peutetre} className="sticker absolute -left-8 top-28 w-28 rotate-3 float-fast" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}/>
        <motion.img alt="Sticker WTF" src={ASSETS.wtf} className="sticker absolute left-24 bottom-6 w-24 -rotate-3 float-mid" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}/>
        <motion.img alt="Licorne" src={ASSETS.licorne} className="sticker absolute left-1/2 -translate-x-1/2 -bottom-28 w-44 rotate-2 float-slow" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}/>
      </div>

      <motion.div className="absolute -right-16 -bottom-20 rotate-6" initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{duration:.8, delay:.1}} aria-hidden>
        <GradientBlob size={420} />
      </motion.div>
      <motion.div className="absolute -left-24 -top-24 -rotate-6" initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:.8, delay:.2}} aria-hidden>
        <GradientBlob size={360} variant="blue" />
      </motion.div>
    </header>
  );
}

function Chip({icon, label}:{icon:React.ReactNode, label:string}){
  return (
    <div className="tag inline-flex items-center gap-2 bg-[rgba(255,255,255,.03)]">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function GradientBlob({ size=360, variant }:{ size?:number, variant?:"blue"|"lime"|"pink"}){
  const bg = variant === "blue" ? "var(--blue)" : variant === "lime" ? "var(--lime)" : "var(--pink)";
  return (
    <div style={{width:size, height:size, background:`radial-gradient(circle at 30% 30%, ${bg}, transparent 60%)`}}/>
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

function TrustBar(){
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {icon:<Check className="w-5 h-5"/>, t:"Safe by design"},
            {icon:<ShieldCheck className="w-5 h-5"/>, t:"Signalement 1‑tap"},
            {icon:<Users className="w-5 h-5"/>, t:"Jusqu’à 8 potes"},
            {icon:<Sparkles className="w-5 h-5"/>, t:"Unicorn vibes"},
          ].map((item, i)=> (
            <div key={i} className="card p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background:"rgba(255,45,161,.15)", color:"var(--pink)"}}>
                {item.icon}
              </div>
              <span className="font-sans">{item.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks(){
  const steps = [
    { title:"Lance une partie", desc:"Invite tes potes ou rejoins une room. Joker ‘Passer’ disponible.", icon:<Rocket className="w-5 h-5"/> },
    { title:"Débattez sans méchanceté", desc:"Chaque carte pose une situation absurde. Vote Oui / Non / Peut‑être / WTF.", icon:<Laugh className="w-5 h-5"/> },
    { title:"Partage & enchaîne", desc:"Résultats instantanés, partage en story, relance d’un nouveau thème.", icon:<Share2 className="w-5 h-5"/> },
  ];
  return (
    <section id="demo" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">Comment ça marche ?</h2>
            <p className="font-sans text-lg opacity-90 mt-4 max-w-xl">Des manches courtes, des punchlines, et un bouton ‘Passer’ pour rester safe. On garde le fun, on coupe la méchanceté.</p>
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

function MockupPhone(){
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30" style={{background:"radial-gradient(40% 40% at 30% 30%, var(--pink), transparent), radial-gradient(40% 40% at 70% 60%, var(--blue), transparent)"}}/>
      <div className="rounded-[2rem] border border-[rgba(255,255,255,.08)] p-3 bg-[#0B0E13]">
        <div className="rounded-[1.6rem] overflow-hidden bg-[#0F1219]">
          <header className="p-4 flex items-center justify-between">
            <span className="font-display text-lg">thatsgay?</span>
            <span className="tag">Room #AB3</span>
          </header>
          <div className="p-4 space-y-3">
            <CardOption color="pink" Icon={Check} label="OUI (tell me more)"/>
            <CardOption color="blue" Icon={X} label="NON (next)"/>
            <CardOption color="lime" Icon={HelpCircle} label="PEUT‑ÊTRE (débat)"/>
            <CardOption color="purple" Icon={Sparkles} label="WTF (plot twist)"/>
          </div>
          <div className="p-4 flex items-center justify-between border-t border-[rgba(255,255,255,.06)]">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 opacity-80"/>
              <span className="text-sm opacity-80">6 en ligne</span>
            </div>
            <Button className="btn-primary inline-flex items-center gap-2"><Share2 className="w-4 h-4"/> Partager</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardOption({ color, Icon, label }:{ color:"pink"|"blue"|"lime"|"purple", Icon:any, label:string }){
  const map:any = { pink:"var(--pink)", blue:"var(--blue)", lime:"var(--lime)", purple:"var(--purple)" };
  return (
    <div className="rounded-2xl p-4 flex items-center justify-between cursor-pointer select-none" style={{background:`linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.00))`, border:"1px solid rgba(255,255,255,.08)"}}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:`color-mix(in lab, ${map[color]} 18%, transparent)`}}>
          <Icon className="w-5 h-5" style={{color: map[color]}}/>
        </div>
        <p className="font-sans font-semibold">{label}</p>
      </div>
      <ArrowRight className="w-5 h-5 opacity-60"/>
    </div>
  );
}

function SocialProof(){
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl">Pourquoi ça buzz ?</h2>
        <p className="font-sans text-lg opacity-90 mt-4 max-w-2xl">Courbes néon, licorne mascotte, punchlines potaches – parfait pour les stories. Ligne claire: fun mais safe.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[{title:"Fait pour TikTok",desc:"Formats courts, réactions en chaîne, partage 1‑tap."},{title:"Convivial",desc:"Joue IRL ou en ligne, jusqu’à 8."},{title:"Inclusif",desc:"‘Passer’ toujours dispo. Modération stricte."}].map((c,i)=> (
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
          ))}
        </div>
      </div>
      <div className="mt-4 relative h-56">
        {cards.map((c,i)=> (
          <motion.div key={i} className="absolute inset-0 grid place-items-center" animate={{opacity: index===i?1:0, scale: index===i?1:0.98}} transition={{duration:.4}}>
            <div className="relative w-full max-w-xs aspect-[9/16] rounded-[1.25rem] overflow-hidden border border-white/10 bg-black/20">
              <img src={c.img} alt="sticker" className="absolute inset-0 w-28 h-28 object-contain m-auto sticker"/>
              <div className="absolute inset-x-3 bottom-3 p-3 rounded-xl bg-black/50 backdrop-blur">
                <p className="text-sm">{c.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Roadmap(){
  const items = [
    { tag:"v1 • Lancement", title:"Core game + rooms + partage story", notes:["Oui/Non/Peut-être/WTF","Rooms privées","Signalement 1‑tap"] },
    { tag:"v1.1 • 2025", title:"Stickers combo & thèmes", notes:["Packs événementiels","Sons 8‑bit","Pack créateur"] },
    { tag:"v2 • 2025", title:"Création communautaire", notes:["Éditeur de cartes","Défis hebdos","Classements"] },
  ];
  return (
    <section id="roadmap" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl">Roadmap</h2>
        <p className="font-sans opacity-90 mt-3 max-w-2xl">Transparence totale : voici ce qui arrive. Tu veux voter les priorités ? Rejoins le Discord.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it,i)=> (
            <div key={i} className="card p-6 relative overflow-hidden">
              <div className="tag inline-block mb-3">{it.tag}</div>
              <h3 className="font-sans font-semibold text-lg">{it.title}</h3>
              <ul className="mt-3 space-y-2 opacity-90">
                {it.notes.map((n,ix)=> (
                  <li key={ix} className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--teal)]"/> <span>{n}</span></li>
                ))}
              </ul>
              <img src={ASSETS.licorne} alt="licorne" className="absolute -right-4 -bottom-6 w-24 opacity-60 pointer-events-none"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection(){
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle"|"ok"|"error">("idle");
  async function subscribe(e: React.FormEvent){
    e.preventDefault();
    setStatus("idle");
    const ok = email && email.indexOf('@') > 0 && email.split('@')[1] && email.split('@')[1].indexOf('.') > 0;
    if(!ok){ setStatus("error"); return; }
    try{
      const res = await fetch('/api/subscribe', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, hp }) });
      if(!res.ok) throw new Error('bad');
      setStatus("ok");
      setEmail("");
      setHp("");
    }catch(err){
      setStatus("error");
    }
  }
  return (
    <section id="download" className="section night-pop">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">Prêt à jouer ?</h2>
            <p className="font-sans text-lg opacity-90 mt-4">Télécharge l’app ou rejoins la bêta. Tu peux aussi tester une démo web directement.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary inline-flex items-center gap-2" href="#">
                <Apple className="w-5 h-5"/> App Store
              </a>
              <a className="btn-primary inline-flex items-center gap-2" href="#">
                <Play className="w-5 h-5"/> Google Play
              </a>
              <a className="btn-ghost inline-flex items-center gap-2" href="#">
                <Rocket className="w-5 h-5"/> TestFlight / Beta
              </a>
            </div>

            <form onSubmit={subscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg">
              <input type="text" value={hp} onChange={e=>setHp(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="flex-1">
                <label className="sr-only" htmlFor="email">Email</label>
                <input id="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Ton email (bêta privée)" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/15 focus:outline-none focus:ring-2 focus:ring-[var(--pink)]"/>
              </div>
              <Button type="submit" className="btn-primary inline-flex items-center gap-2"><Mail className="w-5 h-5"/> Rejoindre la bêta</Button>
            </form>
            {status!=="idle" && (
              <p className={`mt-2 text-sm ${status==='ok'? 'text-[var(--lime)]':'text-red-400'}`}>
                {status==='ok'? 'Merci ! Tu es sur liste d’attente ✨' : 'Oups, réessaie avec un email valide.'}
              </p>
            )}
          </div>
          <div className="card p-6">
            <h3 className="font-sans font-semibold">Rejoins‑nous sur les réseaux</h3>
            <p className="opacity-80 mt-1">Memes, teasers, appels à idées.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn-ghost inline-flex items-center gap-2" href="#"><Instagram className="w-5 h-5"/> Instagram</a>
              <a className="btn-ghost inline-flex items-center gap-2" href="#"><Share2 className="w-5 h-5"/> TikTok</a>
              <a className="btn-ghost inline-flex items-center gap-2" href="#"><LinkIcon className="w-5 h-5"/> Discord</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="section pt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl">thatsgay?</p>
            <p className="opacity-80 mt-2 max-w-sm">On rit avec les gens, pas des gens. Bouton ‘Passer’, NSFW off par défaut, modération stricte.</p>
          </div>
          <div>
            <h4 className="font-sans font-semibold">Produit</h4>
            <ul className="mt-3 space-y-2 opacity-90">
              <li><a href="#demo" className="underline">Comment ça marche</a></li>
              <li><a href="#roadmap" className="underline">Roadmap</a></li>
              <li><a href="#download" className="underline">Télécharger</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold">Légal</h4>
            <ul className="mt-3 space-y-2 opacity-90">
              <li><a href="#" className="underline">CGU</a></li>
              <li><a href="#" className="underline">Charte communauté</a></li>
              <li><a href="#" className="underline">Contact</a></li>
            </ul>
          </div>
        </div>
        <p className="opacity-60 mt-10 text-sm">© 2025 thatsgay? • Fonts: Space Grotesk + Inter • Icons: lucide</p>
      </div>
    </footer>
  );
}
