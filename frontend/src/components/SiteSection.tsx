// SiteSection.tsx
// componnt for rendering a section of text

import './SiteSection.scss'

type SiteSectionProps = {
    header: string;
    description?: string;
    imageUrl?: string;
    imageIcon?: React.ReactNode;
    align?: 'default' | 'left' | 'right';
    linkTo?: string;
    linkLabel?: string;
}

export default function SiteSection({header, description = undefined, imageUrl = undefined, imageIcon = undefined, align = 'default', linkTo = undefined, linkLabel = undefined}: SiteSectionProps) {
    const media = imageIcon ?? (imageUrl ? <img src={imageUrl}/> : null);

    const alignItems = align === 'right' ? 'flex-end' : align === 'left' ? 'flex-start' : 'flex-start';
    const textAlign = align === 'right' ? 'right' : align === 'left' ? 'left' : 'left';

    return(<>
    <div className="site-section">
        {media && (<div className="site-section-media">{media}</div>)}

        <div className="site-section-info" style={{ alignItems, textAlign }}>
            <div className="site-section-header">
                <h2>{header}</h2>

                {(linkTo && linkLabel) && (
                    <a href={linkTo}>{linkLabel}</a>
                )}
            </div>

            {description && (<>
                <hr />
                <h4>{description}</h4>
            </>)}
        </div>
    </div>
    </>)
}