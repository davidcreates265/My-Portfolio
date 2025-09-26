import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "David Malunga Portfolio",
  description: "Welcome to my portfolio website! I'm David Malunga, a passionate software developer specializing in building web applications. Explore my projects, skills, and experience as you navigate through my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
