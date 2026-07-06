// SocialCard.tsx
// component for making a card for a social

import './SocialCard.scss';

type SocialCardProps = {
    icon: React.ReactNode;
    name: string;
    link: string;
    color: string;
}

export default function SocialCard({icon, name, link, color}: SocialCardProps) {
    return(<>
    <a className="social-card" target="_blank" rel="noopener noreferrer" href={link}
    style={{ backgroundColor: color }}>
        {icon} <h3>{name}</h3>
    </a>
    </>);
}