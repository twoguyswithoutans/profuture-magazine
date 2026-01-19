import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import MagazineList from "@/components/sections/MagazineList";
import ArticlesSection from "@/components/sections/ArticlesSection";
import RecentArticles from "@/components/sections/RecentArticles";
import Footer from "@/components/layout/Footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-backgound-light font-sans text-ui-dark-text"> 
			<Header />
			<Hero />
			<MagazineList />
			<ArticlesSection />
			<RecentArticles />
			<Footer />
		</main>
	);
}