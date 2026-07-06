// NavBar.tsx
// component for rendering the main site-wide navbar

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import './NavBar.scss'

type NavLinkItem = {
    to: string;
    label: string;
}

type NavButtonItem = {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const navLinks: NavLinkItem[] = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/bots", label: "Discord Bots" },
    { to: "/socials", label: "Socials" },
];

const navButtons: NavButtonItem[] = [
    { href: "https://github.com/llegonetwork", icon: <FaGithub />, label: "GitHub" },
    { href: "https://discord.gg/ghHCxWxDMG", icon: <FaDiscord />, label: "Discord" },
    { href: "mailto:contact@llegonetwork.dev", icon: <FaEnvelope />, label: "Email"},
    { href: "https://landonlego.dev", icon: <IoPerson />, label: "Portfolio"},
];

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(<>
        <nav className="navbar">
            <div className="navbar-left">
                <a className="navbar-brand" href="/">
                    <img src="/favicon.svg" alt="llegonetwork logo" />
                    llegonetwork 
                    <small>.dev</small>
                </a>

                <nav className="navbar-links">
                    {navLinks.map((link) => (
                        <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
                    ))}
                </nav>
            </div>

            <div className="navbar-right">
                <div className="navbar-buttons">
                    {navButtons.map((btn) => (
                        <a key={btn.href} aria-label={btn.label} href={btn.href}
                            target="_blank" rel="noopener noreferrer">
                            {btn.icon}
                        </a>
                    ))}
                </div>

                <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>

        <div className={`navbar-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}></div>

        <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</NavLink>
            ))}

            <div className="navbar-buttons">
                {navButtons.map((btn) => (
                    <a key={btn.href} aria-label={btn.label} href={btn.href}
                        target="_blank" rel="noopener noreferrer">
                        {btn.icon}
                    </a>
                ))}
            </div>
        </div>
    </>)
}