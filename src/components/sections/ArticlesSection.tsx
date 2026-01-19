import Image from 'next/image';
import Link from 'next/link';
import IconWrapper from '../ui/IconWrapper';
import { MegaphoneIcon, ArrowRightIcon } from '../ui/icons';
import ArticlesBackground from '../../../public/articles-bg.jpg';
import ArticlesMobileBackground from '../../../public/articles-mobile-bg.jpg';
import ArticlesCover from '../../../public/article-cover.jpg';

export default function ArticlesSection() {
    return (
        <section className="container h-fit mx-auto px-4 md:pt-44 pb-12">
            <div className="relative bg-transparent">

                <div className="absolute inset-0 z-0 overflow-hidden rounded-4xl md:rounded-[3rem] bg-[#E1EFFF] shadow-lg">
                    {/* Desktop Background */}
                    <div className="hidden md:block relative h-full w-full">
                        <Image
                            src={ArticlesBackground}
                            alt="Profuture Background Desktop"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        />
                    </div>
                    {/* Mobile Background */}
                    <div className="block md:hidden relative h-full w-full">
                        <Image
                            src={ArticlesMobileBackground}
                            alt="Profuture Background Mobile"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        />
                    </div>
                </div>

                {/* 2. CONTENT LAYER */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-8">

                    <div className="hidden md:flex md:w-[25%] lg:w-[30%]"></div>

                    {/* Center: Text Content */}
                    <div className="relative z-20 flex w-full md:w-[50%] lg:w-[40%] flex-col items-center justify-center text-center pt-10 pb-12 md:pt-8 md:pb-12">
                        <div className="mb-4 flex flex-col items-center justify-center">
                            <div className="text-brand-red -rotate-12 md:-rotate-30 mb-2">
                                <IconWrapper size={32} className="md:w-10 md:h-10">
                                    <MegaphoneIcon />
                                </IconWrapper>
                            </div>
                            <span className="text-sm md:text-lg font-medium text-ui-grey">Makale Çağrısı</span>
                        </div>
                        
                        <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-brand-blue leading-tight px-4 md:px-0">
                            Türkiye Ulusal Dijital Veri ve Altyapıları
                        </h2>

                        <p className="mb-6 md:mb-8 px-2 text-sm md:text-base text-ui-dark-text leading-relaxed">
                            Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
                        </p>
                        
                        {/* Send Article Button */}
                        <Link
                            href=""
                            className="group flex items-center gap-3 md:gap-4 rounded-full bg-brand-red px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-white transition-all hover:scale-105 hover:bg-[#9D0006] cursor-pointer shadow-xl shadow-red-500/20">
                            Makale Gönder
                            <IconWrapper size={14} className="transition-transform group-hover:translate-x-1">
                                <ArrowRightIcon />
                            </IconWrapper>
                        </Link>
                    </div>

                    {/* Right: Magazine Cover */}
                    <div className="hidden md:flex w-[25%] lg:w-[30%] justify-center">
                        <div className="relative aspect-[3/4.5] w-full max-w-80 -mt-24 -mr-4 drop-shadow-2xl transition-transform hover:-translate-y-2">
                            <Image
                                src={ArticlesCover}
                                alt="Article Cover Dark"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 320px, 384px"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}