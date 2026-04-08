// Project Images
import QualityDocumentAppImage from "../../static/Projects/QualityDocumentApp.svg";
import PortfolioImage from "../../static/Projects/Portfolio.webp";
import OvilonImage from "../../static/Projects/Ovilon.webp";

// Texts
import QualityDocumentAppText from "./texts/projects/quality-document-app.md?raw";
import OvilonWebsiteText from "./texts/projects/ovilon-website.md?raw";
import PortfolioWebsiteText from "./texts/projects/portfolio-website.md?raw";
import LapikudWebsiteText from "./texts/projects/lapikud-website.md?raw";

/*
TEMPLATE Project

{
        id: "",
        title: "",
        text: "",
        links: {
            github: "",
            website: "",
        },
        technologies: ["Svelte", "Framework7", "JavaScript", "Tailwind CSS"],
        media:
            {
                type: "image",
                src: placeholderImage,
                alt: "image"
            }
    },
*/

export const projectsData = [
    {
        id: "quality-document-app",
        title: "Quality Documentation App",
        text: QualityDocumentAppText.trim(),
        links: {},
        technologies: ["React Native", "Web Admin", "JavaScript", "PDF Generation", "Golang"],
        media:
        {
            type: "image",
            src: QualityDocumentAppImage,
            alt: "Quality documentation app placeholder preview",
        }
    },
    {
        id: "ovilon-website",
        title: "Ovilon Website",
        text: OvilonWebsiteText.trim(),
        links: {
            website: "https://ovilon.ee/"
        },
        technologies: ["Svelte", "Framework7", "JavaScript", "Tailwind CSS", "Golang"],
        media:
        {
            type: "image",
            src: OvilonImage,
            alt: "Ovilon website screenshot",
        }
    },
    {
        id: "portfolio-website",
        title: "Personal Portfolio Website",
        text: PortfolioWebsiteText.trim(),
        links: {
            github: "https://github.com/Henrikarba/portfolio"
        },
        technologies: ["Svelte", "Framework7", "JavaScript", "Tailwind CSS"],
        media:
        {
            type: "image",
            src: PortfolioImage,
            alt: "Portfolio website screenshot"
        }
    }/*,
    {
        id: "Lapikud-website",
        title: "LAPikud Website",
        text: LapikudWebsiteText.trim(),
        links: {
            github: "https://github.com/Lapikud/lapikud.github.io",
            website: "https://www.lapikud.ee/",
        },
        technologies: ["Svelte", "JavaScript", "Tailwind CSS"],
        media:
            {
                type: "image",
                src: placeholderImage,
                alt: "image"
            }
    }*/
];