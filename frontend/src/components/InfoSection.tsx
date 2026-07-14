// InfoSection.tsx
// component for making a box for information
import './InfoSection.scss';
import type { PropsWithChildren } from "react";

type InfoSectionProps = PropsWithChildren<{
    header: string;
    imageUrl?: string;
    imageIcon?: React.ReactNode;
    background?: boolean;
    size?: 'sm' | 'lg';
    border?: boolean;
    linkTo?: string;
    linkLabel?: string;
}>;

export default function InfoSection({header, imageUrl = undefined, imageIcon = undefined, background = true, size = 'lg', border = false, linkTo = undefined, linkLabel = undefined, children}: InfoSectionProps) {
    const media = imageIcon ?? (imageUrl ? <img src={imageUrl}/> : null);

    return (<>
    <div className={`info-section ${background ? 'info-section-background' : ''}`}>
        <div className="info-section-header">
            {media && (<div className="info-section-media">{media}</div>)}
            {size === "lg" ? <h2>{header}</h2> : <h3>{header}</h3>}
            {(linkTo && linkLabel) && (<a href={linkTo}>{linkLabel}</a>)}
        </div>

        {size === "lg" && <hr />}
        {/* <hr /> */}
        
        <div className={border ? 'info-section-border' : ''}>
            {children}
        </div>
    </div>
    </>)
}