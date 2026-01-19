"use client";
import IconWrapper from './IconWrapper';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

interface Props {
    onNextAction: () => void;
    onPrevAction: () => void;
    canNext?: boolean;
    canPrev?: boolean;
}

export default function SectionPagination({ onNextAction, onPrevAction, canNext = true, canPrev = false }: Props) {
    const activeStyle = "bg-[#F4F7FF] text-brand-blue hover:bg-[#E8EEFF] active:scale-90 cursor-pointer shadow-sm";
    const inactiveStyle = "bg-[#F0F2F5] text-[#B0B3B8] cursor-not-allowed opacity-60";
    const commonStyle = "flex h-11 w-11 md:h-8 md:w-8 items-center justify-center rounded-xl transition-all duration-200";

    return (
        <div className="flex items-center gap-3 md:gap-2" role="group" aria-label="Sayfalama Kontrolleri">
            <button
                type="button"
                onClick={onPrevAction}
                disabled={!canPrev}
                className={`${commonStyle} ${canPrev ? activeStyle : inactiveStyle}`}
                aria-label="Önceki sayfa"
            >
                <IconWrapper size={16} className="md:w-3 md:h-3">
                    <ArrowLeftIcon />
                </IconWrapper>
            </button>

            <button
                type="button"
                onClick={onNextAction}
                disabled={!canNext}
                className={`${commonStyle} ${canNext ? activeStyle : inactiveStyle}`}
                aria-label="Sonraki sayfa"
            >
                <IconWrapper size={16} className="md:w-3 md:h-3">
                    <ArrowRightIcon />
                </IconWrapper>
            </button>
        </div>
    );
}