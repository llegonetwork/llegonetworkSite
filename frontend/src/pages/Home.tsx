import SiteHeader from "../components/SiteHeader";
import SiteSection from "../components/SiteSection";

export default function Home() {
    return (<>
    <SiteHeader 
    header="llegonetwork.dev"
    description="llegonetwork is a network of websites and bots made by Landon Lego. This website also acts as a portfolio sort of."
    hr={true} />

    <SiteSection
    header="About Me"
    description="llegonetwork is made by an ucpoming college freshman and includes discord bots, websites, and more! All of these projects were built on my own time for fun and not for any specific reason."
    imageUrl="/favicon.svg"
    />
    
    </>)
}