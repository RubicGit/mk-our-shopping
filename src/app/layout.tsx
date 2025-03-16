import type { Metadata } from "next";
import { Open_Sans, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeContext";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

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
      <body className={`${openSans.variable} ${sourceCodePro.variable} antialiased flex flex-col gap-20 bg-bg dark:bg-bg-dark`}>
        <ThemeProvider>
          <NavBar loggedIn={false} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
