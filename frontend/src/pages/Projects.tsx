// Projects.tsx
// projects page for llegonetwork site

import SiteHeader from "../components/SiteHeader";

import '../util/containers.scss';
import ProjectCard from "../components/ProjectCard";

export type Project = {
    name: string;
    description: string;
    iconUrl: string;
    repoUrl?: string;
    mainUrl?: string;
    urlLabel?: string;
}

export const projects: Project[] = [
    {
        name: "Glorp Shooter", 
        description: "This project was made during my senior year of high school during a competition called KodeKlash. It is coded in Java and is a 3D first-person shooter game. I use the rendering technique of raycasting to render the 3d scene. I was freshly learning Java coding this game.",
        iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jZDovP-FgZ_I6Wm0N-b-rIYWPRwv6XKloIXLeEX7elfLxusgGz-cNKfL&s=10",
        repoUrl: "https://github.com/LegoLandon7/KodeKlash2026",
    },
    {
        name: "Teenarazzi Website", 
        description: "This website is coded in React Typescript and was made for a teenager-focused discord server.",
        iconUrl: "https://teenarazzi.com/favicon.png",
        repoUrl: "https://github.com/LegoLandon7/teenarazziSite",
    },
    {
        name: "DDA Raycaster",
        description: "A JavaScript raycaster that uses the DDA (Digital Differential Analysis) algorithm to render a 3D scene from a top-down 2D map, similar to classic games like Wolfenstein 3D.",
        iconUrl: "/favicon.svg",
        repoUrl: "https://github.com/LegoLandon7/DDARaycasterJS",
    },
];

export default function Projects() {
    return (<>

    <SiteHeader 
    header="My Projects"
    description="I have made many projects over the years, here you can find almost all of them."
    align="left"
    backLink="/"
    backLabel="home"
    />

    <div className="flex-column-container gap">
        {projects.map((project: Project) => (
            <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                iconUrl={project.iconUrl}
                repoUrl={project.repoUrl}
                mainUrl={project.mainUrl}
                urlLabel={project.urlLabel}
            />
        ))}
    </div>
    </>)
}