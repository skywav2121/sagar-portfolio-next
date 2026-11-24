import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport = {
  themeColor: "#090A0F",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  metadataBase: new URL("https://sagar-portfolio-next.vercel.app"),
  title: "Sagar Wavare — Full-Stack .NET Developer & API Engineer",
  description: "Portfolio of Sagar Wavare: 4+ years architecting enterprise .NET Core and ASP.NET MVC web applications, high-throughput REST APIs, SQL Server optimization, and modern responsive frontends.",
  keywords: [
    "Sagar Wavare",
    ".NET Developer",
    ".NET Core",
    "ASP.NET MVC",
    "C#",
    "SQL Server",
    "RESTful API",
    "Full-Stack Developer",
    "Next.js",
    "Web Developer",
    "Techiefleet Technologies",
    "Mumbai Developer"
  ],
  authors: [{ name: "Sagar Wavare", url: "https://in.linkedin.com/in/sagar-wavare-33a815213" }],
  creator: "Sagar Wavare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagar-portfolio-next.vercel.app",
    title: "Sagar Wavare — Full-Stack .NET Developer & API Engineer",
    description: "4+ years crafting high-performance .NET applications, REST APIs, and scalable web platforms.",
    siteName: "Sagar Wavare Portfolio",
    images: [
      {
        url: "/sagar-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Sagar Wavare — Full-Stack .NET Developer"
      }
    ]
  },
  icons: {
    icon: "/favicon.ico",
  }
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('sagar-portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
