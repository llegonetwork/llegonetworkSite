// SiteSection.tsx
// componnt for rendering a section of text

import './SiteSection.scss'

type SiteSectionProps = {
    header: string;
    description?: string;
    imageUrl?: string;
    imageIcon?: React.ReactNode;
}

export default function SiteSection({header, description = undefined, imageUrl = undefined, imageIcon = undefined}: SiteSectionProps) {

    const media = imageIcon ?? (imageUrl ? <img src={imageUrl}/> : null);

    return(<>
    <div className="site-section">
        {media && (<div className="site-section-media">{media}</div>)}

        <div className="site-section-info">
            <h2>{header}</h2>

            {description && (<>
                <hr />
                <h4>{description}</h4>
            </>)}
        </div>
    </div>
    </>)
}