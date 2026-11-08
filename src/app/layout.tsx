import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap', // Add this for better loading
  preload: true, // Add this for critical fonts
});

export const metadata: Metadata = {
  title: "WA",
  description: "Waqar Akhtar - AI & Data Science Student | Full Stack Developer",
  metadataBase: new URL('https://waqarakhtar.codes'),
  openGraph: {
    type: "website",
    url: "https://waqarakhtar.codes/",
    siteName: "Waqar Akhtar — Portfolio",
    title: "Waqar Akhtar — AI & Data Science Student | Full-Stack Developer",
    description:
      "Portfolio of Waqar Akhtar: AI-driven projects, full-stack development, professional experience, education, and skills.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Waqar Akhtar — AI & Data Science Student | Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waqar Akhtar — AI & Data Science Student | Full-Stack Developer",
    description:
      "Portfolio of Waqar Akhtar: AI-driven projects, full-stack development, professional experience, education, and skills.",
    images: ["/og-image.png"],
  },
  alternates: {
    types: {
      "text/markdown": "/home.md",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://waqarakhtar.codes/#person",
      "name": "Waqar Akhtar",
      "givenName": "Waqar",
      "familyName": "Akhtar",
      "jobTitle": "Full-Stack Developer & B.Tech AI & Data Science Student",
      "description":
        "Motivated B.Tech AI & Data Science student at GGSIPU with hands-on experience in full-stack development, AI-driven applications, and technical leadership roles.",
      "url": "https://waqarakhtar.codes/",
      "email": "mailto:syed.waqar.akhtar08@gmail.com",
      "knowsAbout": [
        "Artificial Intelligence",
        "Data Science",
        "Full-Stack Development",
        "Machine Learning",
        "Next.js",
        "TypeScript",
        "Python",
        "Node.js",
        "MongoDB",
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Guru Gobind Singh Indraprastha University (GGSIPU)",
        "sameAs": "https://ipu.ac.in/",
      },
      "homeLocation": {
        "@type": "Place",
        "name": "Delhi, India",
      },
      "sameAs": [
        "https://github.com/Waqar080206",
        "https://www.linkedin.com/in/waqar08",
        "https://x.com/WaqarAkhtar_08",
        "https://dev.to/waqar_akhtar_f4a1df2340f1",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://waqarakhtar.codes/#website",
      "url": "https://waqarakhtar.codes/",
      "name": "Waqar Akhtar — Portfolio",
      "description":
        "Personal portfolio of Waqar Akhtar: projects, experience, education, and skills in AI, data science, and full-stack development.",
      "inLanguage": "en",
      "publisher": { "@id": "https://waqarakhtar.codes/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://waqarakhtar.codes/",
      "url": "https://waqarakhtar.codes/",
      "name": "Waqar Akhtar — Home",
      "isPartOf": { "@id": "https://waqarakhtar.codes/#website" },
      "mainEntity": { "@id": "https://waqarakhtar.codes/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl xl:max-w-3xl mx-auto py-12 sm:py-24 px-6 overflow-x-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
