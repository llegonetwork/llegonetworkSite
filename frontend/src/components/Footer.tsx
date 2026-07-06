// Footer.tsx
// component for adding a footer to the page

import './Footer.scss';

type FooterLink = {
    name: string;
    link: string;
    newTab: boolean;
}

export default function() {
    const links: FooterLink[] = [
        {name: "Terms Of Service", link: "/tos", newTab: false},
        {name: "Privacy Policy", link: "/privacy", newTab: false},
        {name: "Github Repo", link: "https://github.com/llegonetwork/llegonetworkSite", newTab: true},
        {name: "Contact Us", link: "mailto:contact@llegonetwork.dev", newTab: true},
    ];

    const notice = <h4>&copy; {new Date().getFullYear()} llegonetwork. All rights reserved.</h4>

    return(<>
    <footer className="footer">
        <div className="left">
            {notice}
        </div>
        <div className="right">
            {links.map((item: FooterLink) => (
                <a key={item.link} href={item.link}
                target={item.newTab ? "_blank" : undefined} rel={item.newTab ? "noopener noreferrer" : undefined}>
                    {item.name}
                </a>
            ))}
        </div>
    </footer>
    </>);
}