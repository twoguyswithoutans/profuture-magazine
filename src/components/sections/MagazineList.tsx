"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MagazineCard from '../ui/MagazineCard';
import SectionPagination from '../ui/SectionPagination';
import IconWrapper from '../ui/IconWrapper';
import { ArrowRightIcon } from '../ui/icons/index';

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

// Mock Data
const magazineData: MagazineCardProps[] = [
    {
        id: "1",
        title: "Teknoloji ve Dijital Dergisi",
        volume: 1,
        issue: 1,
        date: "Aralık 2026",
        coverImage: "/magazine-card.png",
        isNew: true,
        pdfUrl: "",
        viewUrl: "",
	    downloadUrl: ""
    },
    {
        id: "2",
        title: "Teknoloji ve Dijital Dergisi",
        volume: 2,
        issue: 3,
        date: "Aralık 2026",
        coverImage: "/magazine-card.png",
        isNew: true,
        pdfUrl: "",
        viewUrl: "",
	    downloadUrl: ""
    },
    {
        id: "3",
        title: "Teknoloji ve Dijital Dergisi",
        volume: 3,
        issue: 3,
        date: "Aralık 2026",
        coverImage: "/magazine-card.png",
        isNew: true,
        isLatest: true,
        pdfUrl: "",
        viewUrl: "",
	    downloadUrl: ""
    },
    {
        id: "4",
        title: "Veri Bilimi",
        volume: 3,
        issue: 4,
        date: "Ocak 2021",
        coverImage: "/magazine-card.png",
        isNew: false,
        pdfUrl: "",
        viewUrl: "",
	    downloadUrl: ""
    }
];

export default function MagazineList() {
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(magazineData.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const currentMagazines = magazineData.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <section className="container mx-auto px-4 py-12">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-6">
                <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 w-full md:w-auto">
                    <div>
                        <h1 className="text-lg font-medium text-ui-grey">Sayılar</h1>
                        <h2 className="text-2xl font-bold text-brand-blue">Dergiler</h2>
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div>
                            <SectionPagination 
                                onPrevAction={handlePrev}
                                onNextAction={handleNext}
                                canPrev={currentPage > 0}
                                canNext={currentPage < totalPages - 1}
                            />
                        </div>
                    )}
                </div>

                <Link
                    href=""
                    className="hidden md:flex group w-fit cursor-pointer items-center justify-center gap-2 rounded-full border border-ui-stroke bg-white px-6 py-3 text-sm font-normal text-ui-dark-text transition-all hover:bg-brand-blue hover:text-white active:scale-95"
                >
                    Tümünü Görüntüle
                    <IconWrapper size={14} className="transition-transform group-hover:translate-x-1">
                        <ArrowRightIcon />
                    </IconWrapper>
                </Link>
            </div>

            {/* Magazines */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
                {currentMagazines.map((mag) => (
                    <MagazineCard key={mag.id} magazine={mag} />
                ))}
            </div>

            {/* Mobile View */}
            <div className="mt-8 flex justify-center md:hidden">
                 <Link
                    href=""
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-ui-stroke bg-white px-6 py-3 text-sm font-normal text-ui-dark-text active:scale-95"
                >
                    Tümünü Görüntüle
                    <IconWrapper size={14}>
                        <ArrowRightIcon />
                    </IconWrapper>
                </Link>
            </div>
        </section>
    );
}