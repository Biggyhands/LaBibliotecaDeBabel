import { AuthorQuoteSection } from "@/components/landing/AuthorQuoteSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { JoinCommunitySection } from "@/components/landing/JoinCommunitySection";

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen'>
			{/*Titulo principal con logo de la pagina*/}

			<HeroSection />

			{/*         <BooksPreviewSection /> working on what to display here */}

			{/*Section cómo funciona*/}

			<HowItWorksSection />

			{/*Section  Unete a nuestra comunidad*/}

			<JoinCommunitySection />

			{/*Componente Frase de autor*/}

			<AuthorQuoteSection />
		</div>
	);
}
