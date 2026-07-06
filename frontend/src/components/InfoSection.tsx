// InfoSection.tsx
// component for making a box for information
import './InfoSection.scss';
import type { PropsWithChildren } from "react";

type InfoSectionProps = PropsWithChildren<{
    header: string;
    imageUrl?: string;
    imageIcon?: React.ReactNode;
    background?: boolean;
}>;

export default function InfoSection({header, imageUrl = undefined, imageIcon = undefined, background = true, children}: InfoSectionProps) {
    const media = imageIcon ?? (imageUrl ? <img src={imageUrl}/> : null);

    return (<>
    <div className={`info-section ${background && 'info-section-background'}`}>
        <div className="info-section-header">
            {media && (<div className="info-section-media">{media}</div>)}
            <h2>{header}</h2>
        </div>

        <hr /> {children}
    </div>
    </>)
}