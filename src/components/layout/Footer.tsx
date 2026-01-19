import IconWrapper from '../ui/IconWrapper';
import { ProfileCardIcon, NewsletterIcon, MailIcon, LocationPinIcon } from '../ui/icons'

const IconCircle = ({ children }: { children: React.ReactNode }) => (
	<div
		aria-hidden="true"
		className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-ui-stroke" 
	>
		{children}
	</div>
);

export default function Footer() {
	return (
		// Main footer container with the dark blue background
		<footer className="bg-[#18213A] text-white">
			
			{/* Top Content Section */}
			<div className="container mx-auto px-4 pt-14 pb-10">
				
				{/* Three Columns: Contact Information */}
				<div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 mb-10">
					
					{/* Column 1: Editor Info */}
					<div className="flex items-start gap-3 flex-1">
						<IconCircle>
							<IconWrapper size={22} color="white">
								<ProfileCardIcon />
							</IconWrapper>
						</IconCircle>
						<div>
							<h1 className="text-sm font-light text-white">Dergi Editörü</h1>
							<p className="text-white font-bold text-lg">Kieran Vance</p>
							<a
								href="mailto:codetwocode@gmail.com"
								className="group text-sm font-light text-white hover:text-[#D1D5DB] transition-colors flex items-center gap-1"
							>
								<IconWrapper size={14} color="#DB0D15">
									<NewsletterIcon className="group-hover:text-[#C40510]" />
								</IconWrapper>
								<p>codetwocode@gmail.com</p>
							</a>
						</div>
					</div>

					{/* Column 2: Main Email Address */}
					<div className="flex items-start gap-3 flex-1">
						<IconCircle>
							<IconWrapper size={18} color="white">
								<MailIcon />
							</IconWrapper>
						</IconCircle>
						<div>
							<h1 className="text-sm font-light text-white">Mail Adresi</h1>
							<a href="mailto:codetwocode@gmail.com" className="text-white font-bold text-lg hover:text-brand-red transition-colors">
								codetwocode@gmail.com
							</a>
						</div>
					</div>

					{/* Column 3: Address */}
					<address className="flex items-start gap-3 flex-1 not-italic">
						<IconCircle>
							<IconWrapper size={18} color="white">
								<LocationPinIcon />
							</IconWrapper>
						</IconCircle>
						<div>
							<p className="text-sm font-medium text-white">Profuture Teknoloji Yayınevi</p>
							<p className="text-sm font-medium text-white">
								Sinanpaşa Mahallesi Şair Nedim Cadde No: 14 <br /> Beşiktaş/İstanbul
							</p>
						</div>
					</address>

				</div>

				{/* Separator line */}
				<hr className="border-[#2A3149] my-8" />

				{/* Disclaimer Text */}
				<div className="text-center mx-auto">
					<p className="text-xs font-normal text-white italic">
						Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. Site içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş sayılır.
					</p>
				</div>
			</div>

			{/* Bottom Copyright Bar */}
			<div className="bg-brand-red py-4">
				<div className="container mx-auto px-4 text-center">
					<p className="text-sm font-normal text-white tracking-wide">
						Profuture Teknoloji - Tüm Hakları Saklıdır. © {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</footer>
	);
}