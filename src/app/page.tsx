import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { JoinCommunitySection } from "@/components/landing/JoinCommunitySection";
import { AuthorQuoteSection } from "@/components/landing/AuthorQuoteSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { BooksPreviewSection } from "@/components/landing/BooksPreviewSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/*Header de la pagina*/}
      <Navbar />

      {/*Titulo principal con logo de la pagina*/}

      <HeroSection />

      {/*  <BooksPreviewSection />  working on what to display here */}

      {/*Section cómo funciona*/}

      <HowItWorksSection />

      {/*Section  Unete a nuestra comunidad*/}

      <JoinCommunitySection />

      {/*Componente Frase de autor*/}

      <AuthorQuoteSection />

      {/*Footer de la pagina*/}

      <FooterSection />
    </div>
  );
}
