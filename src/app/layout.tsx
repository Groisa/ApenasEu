import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { HeaderContantesTitle } from "./contants/headerContates";


import ClientHeader from "./components/ClientHeader";

export const metadata: Metadata = {
  title: "Gabriel Rosa - Desenvolvedor front-end",
  description: "Gabriel Rosa é um desenvolvedor front-end de 20 anos, apaixonado por tecnologia. Com entusiasmo por inovação e resolução criativa de problemas, ele gosta de trabalhar em projetos que exploram novas possibilidades no mundo da tecnologia. Seus interesses vão além do desenvolvimento, envolvendo provavelmente uma variedade de atividades que estimulam sua curiosidade e vontade de aprender.",
};


import 'animate.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <header className='header'>

          <ClientHeader />

        </header>
        {children}
      </body>
    </html>
  );
}
