import BrandsSection from "@/components/BrandsSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import ServiciiSection from "@/components/ServiciiSection";

export default function MainPage() {
	return (
		<div>
			<HeroSection/>
			<ServiciiSection/>
			<ContactSection/>
			<BrandsSection/>
			<ReviewsSection/>
		</div>
	);
}
  