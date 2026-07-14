// Home.tsx
// homepage for llegonetwork site

import { FaCertificate, FaCloud, FaCloudflare, FaCode, FaDatabase, FaKey, FaLinux, FaProjectDiagram, FaRobot, FaSchool, FaServer, FaToolbox, FaUnity, FaUniversity, FaUserTie, FaWindows, FaWrench } from "react-icons/fa";
import { SiCplusplus, SiPython, SiJavascript, SiCss, SiHtml5, SiLua, SiTypescript, SiReact, SiNodedotjs, SiNpm, SiSass, SiGit, SiGithub, SiVite, SiFastapi, SiDiscorddotjs, SiNginx, SiIntellijidea, SiBlender, SiGnubash } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoGoogleCloud, BiLogoVisualStudio } from "react-icons/bi";
import { DiJava, DiVisualstudio } from "react-icons/di";

import SiteHeader from "../components/SiteHeader";
import SiteSection from "../components/SiteSection";
import InfoSection from "../components/InfoSection";
import SkillCard from "../components/SkillCard";

import '../util/containers.scss';
import { VscTerminalPowershell } from "react-icons/vsc";
import ProjectCard from "../components/ProjectCard";

import { projects } from "./Projects";
import { bots } from "./Bots";

type SkillItem = {
    icon: React.ReactNode;
    name: string;
};

const languages: SkillItem[] = [
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <TbBrandCSharp />, name: "C#" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiLua />, name: "Lua" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiCss />, name: "CSS" },
    { icon: <SiSass />, name: "Sass" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: < SiGnubash />, name: "Bash" },
    { icon: < VscTerminalPowershell />, name: "Powershell" },
];

const tools: SkillItem[] = [
    { icon: <BiLogoVisualStudio />, name: "Visual Studio Code" },
    { icon: <DiVisualstudio />, name: "Visual Studio" },
    { icon: <SiIntellijidea />, name: "IntelliJ IDEA"}, 
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiNpm />, name: "npm" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiNginx />, name: "Nginx" },
    { icon: <FaKey />, name: "OAuth 2.0" },
    { icon: <SiDiscorddotjs />, name: "DiscordJS" },
    { icon: <FaUnity />, name: "Unity" },
    { icon: <SiBlender />, name: "Blender" },
];

const infrastructure: SkillItem[] = [
    { icon: <FaWindows />, name: "Windows" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <FaCloudflare />, name: "Cloudflare" },
    { icon: <BiLogoGoogleCloud />, name: "Google Cloud" },
    { icon: <FaServer />, name: "VPS Hosting" },
];

export default function Home() {

    const featuredProject = projects[0];
    const featuredBot = bots[0];

    return (<>
    <SiteHeader 
    header="llegonetwork.dev"
    description="llegonetwork is a network of websites and bots made by Landon Lego. This website also acts as a portfolio, however my main portfolio is linked."
    hr={true}
    />

    <SiteSection
    header="About Me"
    description="llegonetwork is made by an upcoming college freshman and includes discord bots, websites, and more! All of these projects were built on my own time for fun and not for any specific reason. Below I have some more about me."
    imageUrl="/favicon.svg"
    linkTo="/socials"
    linkLabel="My Socials"
    />

    {/* <InfoSection header="About Me" imageUrl="/favicon.svg">
        <h4>llegonetwork is made by an upcoming college freshman and includes discord bots, websites, and more! All of these projects were built on my own time for fun and not for any specific reason.</h4>
    </InfoSection> */}

    <InfoSection header="My Skills" imageIcon={<FaWrench />} background={false} size="lg" border={true}>

        <InfoSection header="Programming Languages" imageIcon={<FaCode />} background={false} size="sm">
            <div className="flex-wrap-container gap">{languages.map((item: SkillItem) => (<SkillCard name={item.name} imageIcon={item.icon} key={item.name}/>))}</div>
        </InfoSection>

        <InfoSection header="Tools / Platforms" imageIcon={<FaToolbox />} background={false} size="sm">
            <div className="flex-wrap-container gap">{tools.map((item: SkillItem) => (<SkillCard name={item.name} imageIcon={item.icon} key={item.name} />))}</div>
        </InfoSection>

        <InfoSection header="Infrastructure" imageIcon={<FaCloud />} background={false} size="sm">
            <div className="flex-wrap-container gap">{infrastructure.map((item: SkillItem) => (<SkillCard name={item.name} imageIcon={item.icon} key={item.name} />))}</div>
        </InfoSection>

    </InfoSection>

    <InfoSection header="My Experience" imageIcon={<FaUserTie />} background={false} size="lg" border={true}>

        <InfoSection header="High School" imageIcon={<FaSchool />} background={false} size="sm">
            <h4>I spent three years in a secondary vocational programming program, where I learned Visual Basic, C#, Java, and SQL, along with the core fundamentals of programming. In high school, I took computer science classes in two separate years, focusing on Python and Java. Before that, in middle school, I took an introductory course in Scratch, which taught me many of the fundamentals I'd build on later. Beyond the classroom, most of my growth as a programmer came from working on my own projects as a hobby throughout high school.</h4>
        </InfoSection>

        <InfoSection header="College" imageIcon={<FaUniversity />} background={false} size="sm">
            <h4>As I write this, I'm an upcoming college freshman about to study Software Development, and I'm excited to see what I'll learn.</h4>
        </InfoSection>

        <InfoSection header="Certifications" imageIcon={<FaCertificate />} background={false} size="sm">
            <small>I needa figure this out eventually....</small>
        </InfoSection>

    </InfoSection>

    <InfoSection header="Featured Projects" imageIcon={<FaProjectDiagram />} background={false} size="lg" border={true} linkTo="/projects" linkLabel="View All Projects">
        <div className="flex-column-container gap">

            <ProjectCard 
            name={featuredProject.name}
            description={featuredProject.description}
            iconUrl={featuredProject.iconUrl}
            repoUrl={featuredProject.repoUrl}
            />
        </div>
    </InfoSection>

    <InfoSection header="Featured Discord Bots" imageIcon={<FaRobot />} background={false} size="lg" border={true} linkTo="/bots" linkLabel="View All Discord Bots">
        <div className="flex-column-container gap">

            <ProjectCard 
            name={featuredBot.name}
            description={featuredBot.description}
            iconUrl={featuredBot.iconUrl}
            repoUrl={featuredBot.repoUrl}
            mainUrl={featuredBot.mainUrl}
            urlLabel={featuredBot.urlLabel}
            />
        </div>
    </InfoSection>

    </>)
}