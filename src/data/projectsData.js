// Project Images
import PortfolioImage from "../../static/Projects/Portfolio.webp";
import OvilonImage from "../../static/Projects/Ovilon.webp";

/*
TEMPLATE Project

{
        id: "",
        title: "",
        text: "",
        links: {
            github: "",
            demo: "",
            website: "",
            documentation: "",
            blogPost: ""
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
        id: "ovilon-website",
        title: "Ovilon Website",
        text: "...",
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
        text: "This portfolio website showcases my development skills and professional journey. Built with Framework7 and Svelte, it features responsive design, dark/light mode support based on system settings, and interactive elements like the timeline navigation on the Activity page. The site is optimized for both mobile and desktop viewing experiences.",
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
    }
];