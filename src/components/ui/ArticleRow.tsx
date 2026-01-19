import Link from 'next/link';
import IconWrapper from './IconWrapper';
import { EyeIcon, DownloadIcon, PDFIcon, ReportIcon, ComposeIcon, NewsletterIcon } from './icons';

export interface Article {
	id: string;
	category: string;
	type: string;
	title: string;
	pages: string;
	authors: string[];
	pdfUrl: string;
}

interface ArticleRowProps {
	article: Article;
}

export const ArticleRow = ({ article }: ArticleRowProps) => {
	return (
		<div className="group flex flex-col gap-4 rounded-3xl border border-[#DFE3F1] bg-white p-5 transition-all hover:border-red-100 hover:shadow-md md:flex-row md:items-center md:justify-between">
			
			{/* Left Content: Metadata & Title */}
			<div className="flex flex-1 flex-col gap-2">
				
				{/* Tags */}
				<div className="flex items-center gap-2">
					<span className="rounded-md bg-brand-blue px-3 py-1 text-xs font-normal text-white">
						{article.category}
					</span>
					<span className="rounded-md bg-[#F6F8FF] px-3 py-1 text-[10px] font-semibold text-[#112053]">
						{article.type}
					</span>
				</div>

				{/* Title */}
				<h1 className="flex items-center gap-2 text-base font-bold text-ui-dark-text line-clamp-1 leading-tight">
					<IconWrapper size={16} color="#676A73">
						<PDFIcon />
					</IconWrapper>
					{article.title}
				</h1>

				{/* Metadata (Pages & Authors) */}
				<div className="flex items-center gap-1 text-sm text-ui-dark-text">
					{/* Page Count */}
					<div className="flex items-center gap-1 w-2/8">
						<div className="flex bg-[#F0F0F3] rounded-full p-1">
							<IconWrapper size={14}>
								<ReportIcon />
							</IconWrapper>
						</div>
						<span>Sayfa: <span className="font-bold">{article.pages}</span></span>
					</div>
					
					{/* Authors */}
					<div className="flex items-center gap-1 w-6/8">
						<div className="flex bg-[#F0F0F3] rounded-full p-1">
							<IconWrapper size={14}>
								<ComposeIcon />
							</IconWrapper>
						</div>
						<span className="line-clamp-1 max-w-fit" title={article.authors.join(", ")}>
							{article.authors.join(", ")}
						</span>
					</div>
				</div>
			</div>

			{/* RIGHT ACTIONS: Buttons */}
			<div className="flex items-center gap-2 border-t border-gray-50 pt-3 md:border-t-0 md:pt-0">
				
				{/* Print Button */}
				<button 
						className="flex h-10 w-10 items-center justify-center rounded-full border border-ui-stroke text-ui-dark-text transition-colors hover:bg-gray-50 hover:text-brand-blue cursor-pointer" 
						aria-label="Yazdır"
						title="Yazdır"
				>
					 <IconWrapper size={14}>
							<NewsletterIcon />
					 </IconWrapper>
				</button>

				{/* Download Button */}
				<Link 
					href={article.pdfUrl} 
					download
					className="flex h-10 w-10 items-center justify-center rounded-full border border-ui-stroke text-ui-dark-text transition-colors hover:bg-gray-50 hover:text-brand-blue cursor-pointer" 
					aria-label="İndir"
					title="İndir"
				>
					<IconWrapper size={14}>
							<DownloadIcon />
					</IconWrapper>
				</Link>

				{/* View Button */}
				<Link
					href={article.pdfUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex h-10 items-center gap-2 rounded-full bg-brand-blue px-5 text-base font-normal text-white transition-all hover:bg-[#1a2966] cursor-pointer"
				>
					<IconWrapper size={18}>
							<EyeIcon />
					</IconWrapper>
					<span>Görüntüle</span>
				</Link>
			</div>
		</div>
	);
};