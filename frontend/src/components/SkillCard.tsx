// SkillCard.tsx
// component for making a card for a skill

import './SkillCard.scss';

type SkillCardProps = {
    name: string;
    imageIcon: React.ReactNode;
};

export default function SkillCard({name, imageIcon}: SkillCardProps) {

    return (<>
    <div className="skill-card">
        {imageIcon}
        <h4>{name}</h4>
    </div>
    </>)
}