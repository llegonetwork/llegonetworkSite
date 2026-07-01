// SiteHeader.tsx
// componnt for rendering a header for a certain page

import './SiteHeader.scss'

type SiteHeaderProps = {
    header: string;
    description?: string;
    hr?: boolean;
}

export default function SiteHeader({
    header, description = undefined, hr = true
}: SiteHeaderProps) {
    return(<>
    <div className="site-header">
        <h1>{header}</h1>
        {description && <h3>{description}</h3>}
        {hr && <hr />}
    </div>
    </>)
}