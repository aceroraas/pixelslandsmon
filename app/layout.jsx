import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"] ,weight:["400","700"], style:"normal",preload:true});

export const metadata = {
  title: "MONLANDS",
  description: "MONITOREO DE LANDS CON SCROLLS MAGICO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={ubuntuMono.className}>{children}</body>
    </html>
  );
}
