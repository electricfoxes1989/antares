import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "@/index.css";

export const metadata: Metadata = {
  title: "ANTARES | 40m Royal Huisman Ketch for Sale",
  description:
    "ANTARES — a 40-metre aluminum ketch by Royal Huisman, designed by Bill Dixon. 10 guests, 4 staterooms. EUR 8,500,000. Listed by Georges Bourgoignie at Fraser Yachts.",
  openGraph: {
    title: "ANTARES | 40m Royal Huisman Ketch for Sale",
    description:
      "A 40m Royal Huisman aluminum ketch. Bill Dixon design. EUR 8,500,000.",
    images: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323529567/TQwomYMxnNmmsboh.jpg",
    ],
    type: "website",
  },
  icons: {
    icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323529567/VOXvnnWBtznofRwi.jpg",
  },
  other: {
    "theme-color": "#040f29",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
