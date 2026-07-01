// SiteSection.tsx
// componnt for rendering a section of text

import './SiteSection.scss'

type SiteSectionProps = {
    header: string;
    description?: string;
    imageUrl?: string;
    align?: 'default' | 'left' | 'center' | 'right';
}

export default function SiteSection({
    header, description = undefined, imageUrl = undefined, align = 'default'
}: SiteSectionProps) {
    return(<>
    <div className="site-section">
        {imageUrl && <img src={imageUrl} />}

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