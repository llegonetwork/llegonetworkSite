// SiteSection.tsx
// componnt for rendering a section of text

import './SiteSection.scss'

type SiteSectionProps = {
    header: string;
    description?: string;
    imageUrl?: string;
    imageIcon?: React.ReactNode;
    align?: 'default' | 'left' | 'right';
}

export default function SiteSection({header, description = undefined, imageUrl = undefined, imageIcon = undefined, align = 'default'}: SiteSectionProps) {
    const media = imageIcon ?? (imageUrl ? <img src={imageUrl}/> : null);

    const alignItems = align === 'right' ? 'flex-end' : align === 'left' ? 'flex-start' : 'left';
    const textAlign = align === 'right' ? 'right' : align === 'left' ? 'left' : 'left';

    return(<>
    <div className="site-section">
        {media && (<div className="site-section-media">{media}</div>)}

        <div className="site-section-info" style={{ alignItems, textAlign }}>
            <h2>{header}</h2>

            {description && (<>
                <hr />
                <h4>{description}</h4>
            </>)}
        </div>
    </div>
    </>)
}