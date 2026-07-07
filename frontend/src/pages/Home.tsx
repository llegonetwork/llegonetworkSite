// Home.tsx
// homepage for llegonetwork site

import { FaCloud, FaCloudflare, FaCode, FaDatabase, FaKey, FaLinux, FaServer, FaToolbox, FaWindows } from "react-icons/fa";
import { SiCplusplus, SiPython, SiJavascript, SiCss, SiHtml5, SiLua, SiTypescript, SiReact, SiNodedotjs, SiNpm, SiSass, SiGit, SiGithub, SiVite, SiFastapi, SiDiscorddotjs, SiNginx, SiIntellijidea } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoGoogleCloud, BiLogoVisualStudio } from "react-icons/bi";
import { DiJava, DiVisualstudio } from "react-icons/di";

import SiteHeader from "../components/SiteHeader";
import SiteSection from "../components/SiteSection";
import InfoSection from "../components/InfoSection";
import SkillCard from "../components/SkillCard";

import '../util/containers.scss';

type SkillItem = {
    icon: React.ReactNode;
    name: string;
};

export default function Home() {
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
    ];

    const tools: SkillItem[] = [
        { icon: <BiLogoVisualStudio />, name: "Visual Studio Code" },
        { icon: <DiVisualstudio />, name: "Visual Studio" },
        { icon: <SiIntellijidea />, name: "IntelliJ IDEA"}, 
        { icon: <SiReact />, name: "React" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <SiDiscorddotjs />, name: "DiscordJS" },
        { icon: <SiNginx />, name: "Nginx" },
        { icon: <FaKey />, name: "OAuth 2.0" },
        { icon: <SiVite />, name: "Vite" },
        { icon: <SiNpm />, name: "npm" },
        { icon: <SiGit />, name: "Git" },
        { icon: <SiGithub />, name: "GitHub" },
    ];

    const infrastructure: SkillItem[] = [
        { icon: <FaWindows />, name: "Windows" },
        { icon: <FaLinux />, name: "Linux" },
        { icon: <FaCloudflare />, name: "Cloudflare" },
        { icon: <BiLogoGoogleCloud />, name: "Google Cloud" },
        { icon: <FaServer />, name: "VPS Hosting" },
    ];

    return (<>
    <SiteHeader 
    header="llegonetwork.dev"
    description="llegonetwork is a network of websites and bots made by Landon Lego. This website also acts as a portfolio, however my main portfolio is linked."
    hr={true}
    />

    <SiteSection
    header="About Me"
    description="llegonetwork is made by an upcoming college freshman and includes discord bots, websites, and more! All of these projects were built on my own time for fun and not for any specific reason. Below I have listed some of my skills."
    imageUrl="/favicon.svg"
    />

    {/* <InfoSection header="About Me" imageUrl="/favicon.svg">
        <h4>llegonetwork is made by an upcoming college freshman and includes discord bots, websites, and more! All of these projects were built on my own time for fun and not for any specific reason.</h4>
    </InfoSection> */}

    <InfoSection header="Programming Languages" imageIcon={<FaCode />} background={false}>
        <div className="flex-wrap-container gap">{languages.map((item: SkillItem) => (<SkillCard name={item.name} imageIcon={item.icon} key={item.name}/>))}</div>
    </InfoSection>

    <InfoSection header="Tools / Platforms" imageIcon={<FaToolbox />} background={false}>
        <div className="flex-wrap-container gap">{tools.map((item: SkillItem) => (<SkillCard name={item.name} imageIcon={item.icon} key={item.name} />))}</div>
    </InfoSection>

    <InfoSection header="Infrastructure" imageIcon={<FaCloud />} background={false}>
        <div className="flex-wrap-container gap">{infrastructure.map((item: SkillItem) => (<SkillCard name={item.name} imageIcon={item.icon} key={item.name} />))}</div>
    </InfoSection>
    </>)
}