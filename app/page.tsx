"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, HelpCircle, Sparkles, Rocket, Users, ShieldCheck, Laugh, Instagram, Share2, Link as LinkIcon, Apple, Play, ArrowRight, Mail } from "lucide-react";

// 👉 IMPORTANT ASSETS MAPPING (place these PNGs in your /public/assets folder)
// File names were provided. Just drop the PNGs into /public/assets/ and it will work.
const ASSETS = {
  oui: "/assets/oui_sans_fond_strict.png",
  non: "/assets/non_sans_fond_strict.png",
  peutetre: "/assets/peut_etre_sans_fond_strict.png",
  wtf: "/assets/wtf_sans_fond_strict.png",
  licorne: "/assets/licorne_originale_sans_fond_strict.png",
  licorneFull: "/assets/licorne_originale.png",
  inviter: "/assets/inviter_sans_fond_strict.png",
  partage: "/assets/partage_sans_fond_strict.png",

function LiveCounter(){
  // Lightweight, client-only vanity metrics to boost buzz effect
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

function FAQSection(){
  const data = [
    {q:"C’est méchant ?", a:"Non. On rit avec les gens, pas des gens. Bouton Passer et signalement 1‑tap + modération."},
    {q:"C’est pour quel âge ?", a:"Public 16–30 ans principalement. NSFW off par défaut."},
    {q:"On joue comment ?", a:"Crée une room, invite tes potes, votez et débattez. 2–5 minutes la manche."},
    {q:"L’app est payante ?", a:"L’appli est gratuite au lancement. Options cosmétiques ensuite (stickers, thèmes)."},
  ];
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl">FAQ</h2>
        <div className="mt-6 space-y-3">
          {data.map((f,i)=> (
            <details key={i} className="group border border-white/10 rounded-xl p-4 bg-black/20">
              <summary className="cursor-pointer font-sans font-semibold list-none flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-[var(--pink)]">+</span>
              </summary>
              <p className="opacity-90 mt-3">{f.a}</p>
            </details>
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

            {/* Lead capture */}
            <form onSubmit={subscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg">
              {/* Honeypot anti-bot */}
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
