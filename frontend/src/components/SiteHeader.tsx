// SiteHeader.tsx
// componnt for rendering a header for a certain page

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
        align === 'default' 
            ? 'center'
        : align === 'center' 
            ? 'center' 
        : align === 'right'  
            ? 'flex-end' 
            : 'flex-start';

    return(<>
    <div className="site-header" style={{alignItems}}>
        {(backLink && backLabel) && <a href={backLink}>{"<- " + backLabel}</a>}
        <h2>{header}</h2>
        {description && <h4>{description}</h4>}
        {hr && <hr />}
    </div>
    </>)
}