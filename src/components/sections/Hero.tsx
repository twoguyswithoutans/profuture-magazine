import Image from 'next/image';
import Link from 'next/link';
import HeroBackground from '../../../public/hero.jpg';
import MagazineCover from '../../../public/magazine.png';
import IconWrapper from '../ui/IconWrapper';
import { BinderIcon, ArrowRightIcon, DisplayIcon, CalendarIcon } from '../ui/icons/index';

export default function Hero() {
    const metaItems = [
        { icon: <BinderIcon />, text: "Cilt: 2", bold: false },
        { icon: <DisplayIcon />, text: "Sayı: 7", bold: false },
        { icon: <CalendarIcon />, text: "Haziran 2025", bold: true },
    ];

    return (
        <>
            <section className="relative flex min-h-[65svh] w-full items-center bg-brand-dark py-16 md:py-24 lg:py-32 overflow-hidden md:overflow-visible">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={HeroBackground}
                        alt="Profuture Teknoloji Dergisi Arkaplan"
                        fill
                        className="object-cover opacity-40 md:opacity-100" // Dimmed on mobile for text readability
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 768px) 100vw, 100vw"
                    />
                    {/* Overlay for better text contrast on mobile */}
                    <div className="absolute inset-0 bg-black/50 md:bg-transparent" />
                </div>

                <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:flex-row">
                    
                    {/* Left Content */}
                    <div className="w-full text-center md:w-1/2 md:text-left">
                        <div className="mx-auto w-full max-w-lg md:mx-0 lg:w-3/4">
                            <h2 className="text-lg font-bold text-accent-lightblue md:text-2xl">
                                Profuture Teknoloji Dergisi
                            </h2>

                            <h1 className="mb-4 text-2xl font-bold text-accent-lightblue md:mb-5 md:text-3xl lg:text-4xl">
                                Son Sayı Yayında
                            </h1>
                            
                            <p className="mb-6 text-sm text-white/90 md:mb-5 md:text-base md:text-white">
                                Profuture teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.
                            </p>

                            <ul className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-white md:mb-10 md:justify-start md:gap-6">
                                {metaItems.map((item, index) => (
                                    <li key={index} className={`flex items-center gap-2 ${item.bold ? 'font-bold' : ''}`}>
                                        <IconWrapper size={16} className="text-accent-lightblue md:text-white">
                                            {item.icon}
                                        </IconWrapper>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                            
                            <Link
                                href=""
                                className="group mx-auto flex w-fit cursor-pointer items-center justify-center gap-3 rounded-full bg-brand-blue px-6 py-3 text-sm font-normal text-white transition-all hover:bg-white hover:text-brand-blue md:mx-0">
                                Dergiyi Görüntüle
                                <IconWrapper size={14} className="transition-transform group-hover:translate-x-1">
                                    <ArrowRightIcon />
                                </IconWrapper>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image Content */}
                    <div className="hidden relative mt-12 md:flex w-full justify-center md:mt-0 md:w-1/2">
                        <div className="relative w-[70%] rotate-[-5deg] transition-transform duration-500 hover:rotate-0 md:w-full md:translate-y-[75%] md:rotate-[-10deg]">
                            
                            {/* Blur Effect */}
                            <div className="absolute inset-0 -z-10 scale-90 blur-3xl bg-ui-stroke/30"></div>
                            
                            <div className="relative aspect-3/4 w-full md:h-[50svh] lg:h-[60svh]">
                                <Image 
                                    src={MagazineCover} 
                                    alt="Profuture Dergi Kapağı" 
                                    fill 
                                    className="object-contain drop-shadow-2xl"
                                    sizes="(max-width: 768px) 70vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="relative flex min-h-[50svh] w-full items-center bg-backgound-light py-16 lg:py-24">
                <div className="container mx-auto flex flex-col items-center px-4 md:flex-row">
                    
                    {/* Text Content */}
                    <div className="w-full md:w-1/2">
                        <div className="w-full lg:max-w-xl">
                            <h1 className="mb-1 text-base font-medium text-ui-grey md:text-lg">
                                Dergi Amacı ve Kapsamı
                            </h1>

                            <h2 className="mb-4 text-2xl font-bold text-brand-blue md:text-3xl">
                                Profuture Teknoloji Dergisi
                            </h2>
                            
                            <p className="mb-8 text-sm leading-relaxed text-ui-dark-text md:mb-12 md:text-base">
                                Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.
                            </p>
                            
                            <Link
                                href=""
                                className="group flex w-fit cursor-pointer items-center justify-center gap-3 rounded-full border border-ui-stroke bg-white px-6 py-3 text-sm font-normal text-ui-dark-text transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white md:gap-8">
                                Detay
                                <IconWrapper size={14} className="transition-transform group-hover:translate-x-1">
                                    <ArrowRightIcon />
                                </IconWrapper>
                            </Link>
                        </div>
                    </div>

                    {/* Empty Right Column (Preserved for layout balance or future content) */}
                    <div className="hidden w-1/2 md:block"></div>

                </div>
            </section>
        </>
    );
}