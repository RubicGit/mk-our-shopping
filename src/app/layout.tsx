import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata: Metadata = {
  title: "MK Our Shopping",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* ...existing code... */}
      </head>
      <body className="antialiased flex flex-col gap-20 bg-bg dark:bg-bg-dark">
        <ThemeProvider>
          <NavBar loggedIn={false} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
