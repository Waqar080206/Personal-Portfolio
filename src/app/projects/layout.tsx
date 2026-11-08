import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Waqar Akhtar",
  description:
    "Explore Waqar Akhtar's projects: AI applications, full-stack web development, IoT solutions, and hackathon winners.",
  openGraph: {
    type: "website",
    url: "https://waqarakhtar.codes/projects/",
    title: "Projects — Waqar Akhtar",
    description:
      "Explore Waqar Akhtar's projects: AI applications, full-stack web development, IoT solutions, and hackathon winners.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Projects by Waqar Akhtar — AI, full-stack, IoT, and hackathon winners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Waqar Akhtar",
    description:
      "Explore Waqar Akhtar's projects: AI applications, full-stack web development, IoT solutions, and hackathon winners.",
    images: ["/og-image.png"],
  },
  alternates: {
    types: {
      "text/markdown": "/projects.md",
    },
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
