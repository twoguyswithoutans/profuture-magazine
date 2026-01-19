import Image from 'next/image';
import Link from 'next/link';
import IconWrapper from './IconWrapper';
import { EyeIcon, DownloadIcon } from './icons';

interface LatestIssueCardProps {
	coverImage: string;
	title: string;
	pdfUrl: string;
	downloadUrl: string;
}

export const LatestIssueCard = ({ coverImage, title, pdfUrl, downloadUrl }: LatestIssueCardProps) => {
	return (
		<div className="w-full">
			<div className="relative flex flex-col items-center rounded-4xl border-4 border-[#FFD9DA] bg-white px-3 pt-5 pb-2 shadow-xl shadow-[#FFD9DA]/40">
				{/* Red Label */}
				<div className="absolute left-0 top-1/2 z-40 flex h-32 w-12 -translate-y-1/2 items-center justify-center rounded-r-xl bg-brand-red text-white shadow-lg shadow-brand-red-600/20">
					<span className="whitespace-nowrap font-bold text-xl tracking-wide [writing-mode:vertical-lr] rotate-180">
						Son Sayı
					</span>
				</div>

				{/* Cover Image Container */}
				<div className="relative z-30 mb-6 aspect-3/4 w-full overflow-hidden rounded-2xl shadow-sm bg-gray-50">
					<Image 
						src={coverImage}
						alt={`${title} Kapağı`}
						fill
						className="object-cover"
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>

				{/* Action Buttons */}
				<div className="flex w-full items-center justify-center gap-3">
					{/* Download Link */}
					<Link 
						download
						href={downloadUrl}
						className="flex h-12 w-12 items-center justify-center rounded-full border border-ui-stroke text-ui-dark-text transition-colors hover:bg-gray-50 cursor-pointer"
						aria-label="Sayıyı İndir"
					>
						<IconWrapper size={16}>
							<DownloadIcon />
						</IconWrapper>
					</Link>
					
					{/* View Link */}
					<Link
						href={pdfUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-3 rounded-full bg-brand-blue px-4 py-3 text-sm font-normal text-white transition-all hover:bg-[#1a2966] cursor-pointer"
					>
						<IconWrapper size={18}>
							<EyeIcon />
						</IconWrapper>
						<span>Görüntüle</span>
					</Link>
				</div>
			</div>
		</div>
	);
};