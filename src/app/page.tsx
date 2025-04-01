import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { JoinCommunitySection } from "@/components/landing/JoinCommunitySection";
import { AuthorQuoteSection } from "@/components/landing/AuthorQuoteSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { BooksPreviewSection } from "@/components/landing/BooksPreviewSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <BooksPreviewSection />
      <HowItWorksSection />
      <JoinCommunitySection />
      <AuthorQuoteSection />
      <FooterSection />
    </div>
  );
}
