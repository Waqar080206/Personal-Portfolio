import type { Metadata } from "next";

export const metadata: Metadata = {
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
