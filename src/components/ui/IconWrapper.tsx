import { ReactNode, isValidElement, cloneElement, ReactElement, SVGProps } from 'react';

interface IconWrapperProps {
    children: ReactNode;
    color?: string;
    size?: number | string;
    className?: string;
}

const IconWrapper = ({ children, color, size = 24, className = "" }: IconWrapperProps) => {
    const iconWithStyles = isValidElement(children)
        ? cloneElement(children as ReactElement<SVGProps<SVGSVGElement>>, {
            width: "100%",
            height: "100%",
            fill: "currentColor"
        }) : children;

    return (
        <div
            className={`inline-flex items-center justify-center shrink-0 ${className}`}
            style={{
                color: color,
                width: size,
                height: size,
                fontSize: typeof size === 'number' ? `${size}px` : size
            }}
        >
            {iconWithStyles}
        </div>
    );
};
export default IconWrapper;