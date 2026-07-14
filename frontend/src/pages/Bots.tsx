// Bots.tsx
// bots page for llegonetwork site

import SiteHeader from "../components/SiteHeader";

import '../util/containers.scss';
import ProjectCard from "../components/ProjectCard";
import type { Project } from "./Projects";

export const bots: Project[] = [
    {
        name: "Carla-Bot", 
        description: "This bot was made by Landon to act as a universal bot capable of many things, that being moderation, fun, and other cool api features. Spin-off from the popular Carl-Bot Discord Bot.",
        iconUrl: "/carla-backflip.gif",
        repoUrl: "https://github.com/LegoLandon7/carla-bot",
        mainUrl: "https://discord.com/oauth2/authorize?client_id=1445762036087914677&permissions=8&integration_type=0&scope=bot",
        urlLabel: "Invite Bot"
    },
    {
        name: "LegoBot",
        description: "A multifunctional Discord bot built with TypeScript and discord.js, featuring moderation commands, logging, and fun commands. Not currently running.",
        iconUrl: "/favicon.svg",
        repoUrl: "https://github.com/LegoLandon7/LegoBot",
    },
];

export default function Bots() {
    return (<>

    <SiteHeader 
    header="My Discord Bots"
    description="My biggest passion is making discord bots, here are all I have made so far."
    align="left"
    backLink="/"
    backLabel="home"
    />

    <div className="flex-column-container gap">
        {bots.map((project: Project) => (
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