import Image from 'next/image';
import Link from 'next/link';
import IconWrapper from '../ui/IconWrapper';
import { BinderIcon, ArrowRightIcon, DisplayIcon, CalendarIcon, EyeIcon, DownloadIcon, PDFIcon } from '../ui/icons';

export interface MagazineCardProps {
	id: string;
	title: string;
	volume: number;
	issue: number;
	date: string;
	coverImage: string;
	isNew?: boolean;
	isLatest?: boolean;
	pdfUrl: string;
	viewUrl: string;
	downloadUrl: string;
}

export default function MagazineCard({ magazine }: { magazine: MagazineCardProps }) {
	const metaItems = [
		{ icon: <BinderIcon />, label: "Cilt", value: magazine.volume },
		{ icon: <DisplayIcon />, label: "Sayı", value: magazine.issue },
	];

  return (
    <div className="group flex w-full flex-row gap-0 rounded-xl border border-[#E9F4F7] bg-white shadow-sm transition-all hover:shadow-md">
	
		{/* Dynamic Red Label */}
		<div className="relative z-20">
			{magazine.isLatest && (
				<div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-l-2xl bg-brand-red py-2 px-4 text-center text-sm font-extrabold text-white shadow-lg [writing-mode:vertical-lr] rotate-180">
					Son Sayı
				</div>
			)}
		</div>

		<div className="flex w-full flex-col gap-4 p-4 rounded-xl transition-all md:flex-row md:items-stretch">
			{/* Left Side: Cover Image */}
			<div className="relative aspect-3/4 w-full shrink-0 overflow-hidden rounded-3xl md:w-44">
				<Image 
					src={magazine.coverImage}
					alt={`${magazine.title} kapağı`}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, 176px"
				/>
			</div>

			{/* Right Side: Description */}
			<div className="flex flex-1 flex-col py-1">
				<div className="flex items-center justify-between mb-2">
					<IconWrapper size={22} color="#676A73">
						<PDFIcon />
					</IconWrapper>
					{magazine.isNew && (
						<span className="rounded-full bg-accent-cyan px-3 py-0.5 text-[10px] font-bold text-white tracking-wider">
							YENİ
						</span>
					)}
				</div>

				{/* Category Label */}
				<div className="mb-2">
					<span className="rounded-lg bg-[#F6F8FF] px-3 py-1 text-[10px] font-semibold text-brand-blue">
						Dergi
					</span>
				</div>

				{/* Title */}
				<h3 className="mb-4 text-xl font-extrabold text-brand-blue leading-[1.2] line-clamp-2">
					{magazine.title}
				</h3>

				{/* Info Grid */}
				<div className="mb-6 grid grid-cols-2 gap-y-2">
					{metaItems.map((item, idx) => (
						<div key={idx} className="flex items-center gap-2 text-sm text-ui-dark-text">
							<IconWrapper size={16} color="#2A2C31">
								{item.icon}
							</IconWrapper>
							<span className="whitespace-nowrap">
								{item.label}: <strong>{item.value}</strong>
							</span>
						</div>
					))}
					<div className="flex items-center gap-2 text-sm text-ui-dark-text col-span-2">
						<IconWrapper size={16} color="#2A2C31">
							<CalendarIcon />
						</IconWrapper>
						<span className="font-bold">{magazine.date}</span>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="mt-auto flex items-center justify-end gap-3">
					<Link
						href={magazine.viewUrl} 
						aria-label="Görüntüle"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white hover:bg-brand-blue/90 transition-all cursor-pointer"
					>
						<IconWrapper size={20}>
							<EyeIcon />
						</IconWrapper>
					</Link>
					
					<Link
						href={magazine.downloadUrl}
						download
						aria-label="İndir"
						className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E9F4F7] text-brand-blue hover:bg-slate-50 transition-all cursor-pointer"
					>
						<IconWrapper size={18}>
							<DownloadIcon />
						</IconWrapper>
					</Link>

					<Link
						href={magazine.pdfUrl}
						aria-label="Detaylar"
						className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E9F4F7] text-brand-blue hover:bg-slate-50 transition-all cursor-pointer"
					>
						<IconWrapper size={16}>
							<ArrowRightIcon />
						</IconWrapper>
					</Link>
				</div>
			</div>
		</div>
    </div>
  );
}