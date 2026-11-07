import "./globals.css";

export const viewport = {
  themeColor: "#040406",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  metadataBase: new URL("https://in.linkedin.com/in/sagar-wavare-33a815213"),
  title: "Sagar Wavare — Full-Stack .NET Developer & Web Engineer",
  description: "Portfolio of Sagar Wavare: 4+ years architecting enterprise .NET MVC & .NET Core web applications, high-throughput REST APIs, SQL Server optimization, and modern responsive frontends.",
  keywords: [
    "Sagar Wavare",
    ".NET Developer",
    ".NET Core",
    "ASP.NET MVC",
    "C#",
    "SQL Server",
    "RESTful API",
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
    url: "https://in.linkedin.com/in/sagar-wavare-33a815213",
    title: "Sagar Wavare — Full-Stack .NET Developer",
    description: "4+ years crafting high-performance .NET applications, REST APIs, and modern web platforms.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
