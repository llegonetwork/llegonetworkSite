// ProjectCard.tsx
// Card for showcasing a project

import './ProjectCard.scss';

type ProjectCardProps = {
    name: string;
    description: string;
    iconUrl: string;
    repoUrl?: string;
    mainUrl?: string;
    urlLabel?: string;
};

export default function ProjectCard({name, description, iconUrl, repoUrl = undefined, mainUrl = undefined, urlLabel = undefined}: ProjectCardProps) {
    return(<>
    <div className="project-card">
        <img src={iconUrl} />

        <div className="project-card-content">
            <div className="project-card-header">
                <h3>{name}</h3>
                {mainUrl && <a href={mainUrl} target="_blank" rel="noopener noreferrer">{urlLabel ? urlLabel : "Check it out!"}</a>}
                {repoUrl && <a href={repoUrl} target="_blank" rel="noopener noreferrer">Github Repo</a>}
            </div>
            
            <p>{description}</p>
        </div>
    </div>
    </>);
}