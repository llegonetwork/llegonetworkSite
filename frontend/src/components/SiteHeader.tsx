// SiteHeader.tsx
// component for rendering a header for a certain page

import './SiteHeader.scss'

type SiteHeaderProps = {
    header: string;
    description?: string;
    hr?: boolean;
    align?: 'default' | 'center' | 'right' | 'left';
    backLabel?: string;
    backLink?: string;
}

export default function SiteHeader({header, description = undefined, hr = true, align = 'default', backLabel = undefined, backLink = undefined}: SiteHeaderProps) {

    const alignItems =
        align === 'right'
            ? 'flex-end'
        : align === 'left'
            ? 'flex-start'
            : 'center';

    const textAlign =
        align === 'right'
            ? 'right'
        : align === 'left'
            ? 'left'
            : 'center';

    return (
        <div className="site-header" style={{ alignItems, textAlign }}>
            {(backLink && backLabel) && <a href={backLink}>{"← " + backLabel}</a>}
            <h1>{header}</h1>
            {description && <h4>{description}</h4>}
            {hr && <hr />}
        </div>
    )
}