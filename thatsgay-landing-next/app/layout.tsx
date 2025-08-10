export const metadata = {
  title: "thatsgay? – Le débat le plus bête (et le plus drôle)",
  description: "Une app fun & second degré pour débattre entre potes : est‑ce que c'est gay ?",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
