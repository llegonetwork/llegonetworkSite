// Socials.tsx
// socials page for llegonetwork site

import { FaDiscord, FaEnvelope, FaGithub, FaSteam, FaTiktok, FaYoutube } from "react-icons/fa";
import SocialCard from "../components/SocialCard";
import SiteHeader from "../components/SiteHeader";

type Social = {
    icon: React.ReactNode;
    name: string;
    link: string;
    color: string;
}

export default function Socials() {
    const socials: Social[] = [
        { icon: <FaDiscord />, name: "Discord Server", link: "https://discord.gg/ghHCxWxDMG", color: "#5865F2" },
        { icon: <FaEnvelope />, name: "Email", link: "mailto:contact@llegonetwork.dev", color: "#EA4335" },
        { icon: <FaGithub />, name: "llegonetwork", link: "https://github.com/llegonetwork", color: "#343434" },
        { icon: <FaGithub />, name: "LegoLandon7 (old)", link: "https://github.com/LegoLandon7", color: "#343434" },
        { icon: <FaDiscord />, name: "legomaster_01", link: "https://discord.com/users/623964733799923733", color: "#5865F2" },
        { icon: <FaYoutube />, name: "legomaster_01", link: "https://youtube.com/@legomaster_01", color: "#FF0000" },
        { icon: <FaTiktok />, name: "legomaster_00", link: "https://tiktok.com/@legomaster_00", color: "#fe2c55" },
        { icon: <FaTiktok />, name: "thelegoguy_0", link: "https://tiktok.com/@thelegoguy_0", color: "#fe2c55" },
        { icon: <FaSteam />, name: "TheLegoGuy", link: "https://steamcommunity.com/profiles/76561199151336681", color: "#1B2838" },
    ];

    return(<>
    <SiteHeader
    header="My Socials"
    description="Links to all my socials that deal with llegonetwork and on a personal level as well."
    align="left"
    backLabel="home"
    backLink="/"
    />

    {socials.map((item: Social) => (
        <SocialCard 
        icon={item.icon}
        name={item.name}
        link={item.link}
        color={item.color}
        />
    ))}
    </>);
}