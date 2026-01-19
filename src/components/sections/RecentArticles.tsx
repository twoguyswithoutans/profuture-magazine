"use client";
import Link from 'next/link';
import IconWrapper from '../ui/IconWrapper';
import { ArticleRow } from '../ui/ArticleRow';
import { LatestIssueCard } from '../ui/LatestIssueCard';
import { ArrowRightIcon } from '../ui/icons';

interface Article {
	id: string;
	category: string;
	type: string;
	title: string;
	pages: string;
	authors: string[];
	pdfUrl: string;
}

interface LatestIssue {
	coverImage: string;
	title: string;
	pdfUrl: string;
	downloadUrl: string;
}

// Mock Data
const mockArticles: Article[] = [
	{
		id: "1",
		category: "İklim",
		type: "Araştırma Makalesi",
		title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
		pages: "12-28",
		authors: ["Elif Başkaya Acar", "Emre Taran", "Halil Başar"],
		pdfUrl: ""
	},
	{
		id: "2",
		category: "İklim",
		type: "Araştırma Makalesi",
		title: "Yapay Zeka ve Sürdürülebilir Kalkınma Hedefleri",
		pages: "29-45",
		authors: ["Mehmet Yılmaz", "Ayşe Demir", "Ayşe Demir ", "Halil Başar", "Emre Taran"],
		pdfUrl: ""
	},
	{
		id: "3",
		category: "İklim",
		type: "Araştırma Makalesi",
		title: "Büyük Veri Analitiğinde Yeni Yaklaşımlar",
		pages: "46-52",
		authors: ["Canan Erkin", "Burak Çelik"],
		pdfUrl: ""
	},
	{
		id: "4",
		category: "İklim",
		type: "Araştırma Makalesi",
		title: "Büyük Veri Analitiğinde Yeni Yaklaşımlar",
		pages: "46-52",
		authors: ["Canan Erkin", "Burak Çelik"],
		pdfUrl: ""
	}
];

const mockIssue: LatestIssue = {
	coverImage: "/article.jpg",
	title: "Veri Odaklı Mekanizmalar",
	pdfUrl: "",
	downloadUrl: ""
};

export default function RecentArticles() {
	
	return (
		<section className="container mx-auto px-4 py-12 md:py-20">
			<div className="flex flex-col gap-8 lg:flex-row lg:items-start">
				
				{/* Left Column: Latest Issue Card */}
				<div className="w-full lg:w-[32%]">
					<LatestIssueCard
						coverImage={mockIssue.coverImage}
						title={mockIssue.title}
						pdfUrl={mockIssue.pdfUrl}
						downloadUrl={mockIssue.downloadUrl}
					/>
				</div>

				{/* Right Column: Recent Articles List */}
				<div className="flex w-full flex-1 flex-col">
					
					{/* Header Section */}
					<div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-start gap-4">
						<div>
							<h3 className="text-xl font-normal text-ui-grey">Profuture Teknoloji Dergisi</h3>
							<h2 className="text-2xl font-bold text-brand-red">Güncel Yazılar</h2>
						</div>

						<Link
							href=""
							className="group flex items-center gap-2 rounded-full border border-ui-stroke bg-white px-5 py-2.5 text-sm font-normal text-ui-dark-text transition-all hover:bg-gray-50 cursor-pointer">
							Tümünü Görüntüle
							<IconWrapper size={14} className="transition-transform group-hover:translate-x-1">
								<ArrowRightIcon />
							</IconWrapper>
						</Link>
					</div>

					{/* List */}
					<div className="flex flex-col gap-3">
						{mockArticles.slice(0, 4).map((article) => (
							<ArticleRow key={article.id} article={article} />
						))}
					</div>

				</div>
			</div>
		</section>
	);
}