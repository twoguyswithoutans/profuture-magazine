"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IconWrapper from '../ui/IconWrapper';
import { MailIcon, HomeIcon, UsersIcon, ComposeIcon, MagnifierIcon, HamburgerMenuIcon, CloseIcon } from '../ui/icons/index';
import Logo from '../../../public/logo.svg';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { label: "Amaç ve Kapsam", href: "" },
        { label: "Etik İlkeler ve Yayın Politikası", href: "" },
        { label: "Makale Çağrıları", href: "" },
        { label: "Sayılar", href: "" },
        { label: "İletişim", href: "" },
    ];

    return (
        <header className="relative flex w-full flex-col z-50">
            <div className="hidden lg:flex w-full bg-brand-dark">

                <div className="h-10 w-72 rounded-tr-[12rem] bg-white"></div>

                <div className="flex h-10 flex-1 items-center justify-between px-10 text-white text-sm">
                    <div className="flex items-center gap-2">
                        <IconWrapper color="#FFFFFF" size={16}><MailIcon /></IconWrapper>
                        <a href="mailto:codetwocode@gmail.com" className="font-light hover:underline">
                            codetwocode@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-8">
                        <div>ISSN: <span className="font-bold ml-1">345-255</span></div>
                        <div>Başlangıç: <span className="font-bold ml-1">2025</span></div>
                        <div>Periyot: <span className="font-bold ml-1">Yılda 2 Sayı</span></div>
                    </div>
                </div>
            </div>

            <div className="relative flex h-25 lg:h-fit w-full items-center bg-white lg:bg-transparent shadow-sm lg:shadow-none">

                {/* Logo: Desktop View */}
                <div className="hidden lg:flex z-20 -mt-10 h-32 w-72 items-center justify-center rounded-tr-[5rem] bg-brand-blue shadow-lg">
                    <Link href="/" className="mr-6 flex h-full items-center justify-center px-8 hover:scale-105 transition-transform">
                        <Image
                            src={Logo} 
                            alt="Logo"
                            sizes="(max-width: 768px) 40px, 64px"
                            className="h-16 w-auto brightness-0 invert"
                            priority
                        />
                    </Link>
                </div>

                {/* Logo: Mobile View */}
                <div className="lg:hidden flex items-center w-1/2 h-full pl-4 bg-brand-blue z-10">
                    <Link href="/">
                        <Image
                        src={Logo}
                        alt="Logo"
                        sizes="(max-width: 640px) 40px, 64px"
                        className="h-10 w-auto"
                        priority
                    />
                    </Link>
                </div>

                <div className="hidden lg:flex flex-1 items-center justify-between pr-8 pl-16">
                    <nav className="flex items-center gap-6 xl:gap-8">
                        <Link href="/" aria-label="Home Button" className="text-accent-olive hover:scale-110 transition-transform">
                            <IconWrapper color="#A8B95E" size={20}><HomeIcon /></IconWrapper>
                        </Link>
                        
                        {navLinks.map((link) => (
                            <Link 
                                key={link.label} 
                                href={link.href} 
                                className="text-sm font-medium text-ui-dark-text hover:text-brand-blue transition-colors whitespace-nowrap"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link href="" className="flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-dark transition-colors">
                            <IconWrapper color="#FFFFFF" size={18}><UsersIcon /></IconWrapper>
                            <span className="hidden xl:inline">Dergi Kurulu</span>
                        </Link>
                        
                        <Link href="" className="flex items-center gap-2 rounded-full bg-accent-olive px-4 py-2.5 text-sm font-bold text-white hover:bg-[#2B3016] transition-opacity">
                            <IconWrapper color="#FFFFFF" size={18}><ComposeIcon /></IconWrapper>
                            <span className="hidden xl:inline">Yazar Rehberi</span>
                        </Link>
                        
                        <button aria-label="Search Button" className="flex h-10 w-10 items-center justify-center rounded-full border border-ui-stroke text-ui-grey hover:bg-gray-200 transition-colors cursor-pointer">
                            <IconWrapper size={18}><MagnifierIcon /></IconWrapper>
                        </button>
                    </div>
                </div>

                {/* --- Hamburger Menu --- */}
                <div className="lg:hidden ml-auto pr-4 z-20">
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-brand-blue"
                    >
                        <IconWrapper size={28}><HamburgerMenuIcon /></IconWrapper>
                    </button>
                </div>
            </div>

            {/* --- Mobile Menu Overlay --- */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto">
                    <div className="flex flex-col p-6 min-h-screen">
                        
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="h-fit w-fit p-4 rounded bg-brand-blue">
                                <Image
                                    src={Logo}
                                    alt="Logo"
                                    sizes="(max-width: 640px) 40px, 64px"
                                    className="h-10 w-auto"
                                    priority
                                />
                            </div>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-ui-dark-text">
                                <IconWrapper size={32}><CloseIcon /></IconWrapper>
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <nav className="flex flex-col gap-6 text-lg font-medium text-ui-dark-text">
                            <Link href="/" aria-label="Home Button" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-brand-blue">
                                <IconWrapper size={20}><HomeIcon /></IconWrapper> Ana Sayfa
                            </Link>
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.label} 
                                    href={link.href} 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="border-b border-gray-100 pb-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Action Buttons */}
                        <div className="mt-8 flex flex-col gap-4">
                            <Link href="" className="flex items-center justify-center gap-2 rounded-xl bg-brand-blue p-4 font-bold text-white">
                                <IconWrapper size={20}><UsersIcon /></IconWrapper> Dergi Kurulu
                            </Link>
                            <Link href="" className="flex items-center justify-center gap-2 rounded-xl bg-accent-olive p-4 font-bold text-white">
                                <IconWrapper size={20}><ComposeIcon /></IconWrapper> Yazar Rehberi
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}