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
      <body>{/* Plausible */}
<script defer data-domain="https://thatsgay-landing.vercel.app/" src="https://plausible.io/js/script.js"></script>

{/* TikTok Pixel (optionnel) */}
<script dangerouslySetInnerHTML={{__html: `
!function (w, d, t) { w.TiktokAnalyticsObject=t;var tt=w[t]=w[t]||[];tt.methods=["page","track"];tt.setAndDefer=function(t){tt[t]=function(){tt.push([t].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<tt.methods.length;i++)tt.setAndDefer(tt.methods[i]);tt.load=function(e){var i=d.createElement("script");i.async=!0,i.src="https://analytics.tiktok.com/i18n/pixel/events.js?sdkid="+e+"&lib=t";var n=d.getElementsByTagName("script")[0];n.parentNode.insertBefore(i,n)};tt.load("TIKTOK_PIXEL_ID");tt.page();}(window, document, 'ttq');`
}}/>
{children}</body>
    </html>
  );
}
