import "./globals.css";
export const metadata = {
  metadataBase: new URL("https://thatsgay-landing.vercel.app/"),
  title: "thatsgay? — Le débat le plus bête (et le plus drôle)",
  description:
    "Une app fun & second degré pour débattre entre potes : est-ce que c'est gay ? On rit avec les gens, pas des gens.",
  openGraph: {
    title: "thatsgay? — Le débat le plus bête (et le plus drôle)",
    description:
      "App fun & second degré. Oui / Non / Peut-être / WTF. On garde le fun, on coupe la méchanceté.",
    url: "/",
    siteName: "thatsgay?",
    images: [{ url: "/assets/licorne_originale.png", width: 1200, height: 630, alt: "thatsgay? — licorne" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thatsgay?",
    description:
      "App fun & second degré. Oui / Non / Peut-être / WTF.",
    images: ["/assets/licorne_originale.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
