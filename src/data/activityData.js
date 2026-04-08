
// Kood/Jõhvi
import CertCompletion from "../../static/KoodJohvi/Certificates/Certificate of Completion Henri Karba.pdf";
import GoLangCert from "../../static/KoodJohvi/Certificates/Go Language Certificate.pdf";
import HenriCert from "../../static/KoodJohvi/Certificates/Henri Karba.pdf";
import JSCert from "../../static/KoodJohvi/Certificates/JavaScript Language Certificate.pdf";
import GamesCert from "../../static/KoodJohvi/Certificates/Video Games Specialisation Certificate.pdf";

import KoodJohviImage1 from "../../static/KoodJohvi/graduates-me.webp"
import KoodJohviImage2 from "../../static/KoodJohvi/graduates-group.webp"
import KoodJohviImage3 from "../../static/KoodJohvi/event.webp"


// Hack Zurich
import HackZurichImage1 from "../../static/HackZurich/HackZurichSecondPlace.webp";
import HackZurichImage2 from "../../static/HackZurich/HackZurichParticipants.webp";
import HackZurichImage3 from "../../static/HackZurich/HackZurichArea.webp";

// Hack CodeX
import HackCodeXImage1 from "../../static/HackCodeX/winners.webp";
import HackCodeXImage2 from "../../static/HackCodeX/team.webp";
import HackCodeXImage3 from "../../static/HackCodeX/event.webp";

// Cyber Battle of Estonia
import CyberImage1 from "../../static/CyberBattle/CyberBattle.webp";
import CyberImage2 from "../../static/CyberBattle/CyberMe.webp";
import CyberImage3 from "../../static/CyberBattle/CyberEvent.webp";

export const activityData = [
    {
        id: "koodjohvi",
        date: "2024-11-29",
        title: "Kood/Jõhvi 2022-2024",
        text: "I am proud to have completed my studies at Kood/Jõhvi, a coding school that provided me with a deep understanding of software development and prepared me for real-world programming challenges. Throughout the program, I honed my skills in various programming languages, frameworks, and development tools. The hands-on experience and projects helped me solidify my knowledge and gave me the confidence to tackle complex technical problems.\n\nWhat made Kood/Jõhvi stand out was its focus on practical, project-based learning, allowing me to work on real-world applications and collaborate with peers on exciting, challenging tasks. This experience, combined with my passion for technology and problem solving, has shaped me into the developer I am today.",
        link: "https://kood.tech/en/",
        media: [
            {
                type: "image",
                src: KoodJohviImage1,
                alt: ""
            },
            {
                type: "image",
                src: KoodJohviImage2,
                alt: ""
            },
            {
                type: "image",
                src: KoodJohviImage3,
                alt: ""
            }
        ],
        certificates: [
            {
                title: "Graduation Diploma",
                file: HenriCert
            },
            {
                title: "Certificate of Completion",
                file: CertCompletion
            },
            {
                title: "Go Language Certificate",
                file: GoLangCert
            },
            {
                title: "JavaScript Certificate",
                file: JSCert
            },
            {
                title: "Video Games Specialisation",
                file: GamesCert
            }
        ]
    },
    {
        id: "hackzurich",
        date: "2023-09-15",
        title: "HackZurich 2023 - Second Place Winner",
        text: "At HackZurich 2023, I arrived without a team but quickly connected with others to form a spontaneous group. Without a clear project idea at the start, we brainstormed, collaborated, and worked tirelessly on our project over the course of the event. To our surprise, we secured second place, an unexpected but rewarding outcome that highlighted the power of teamwork and creative problem-solving under pressure. Our success was a testament to the synergy of different perspectives and the drive to push through challenges in real time.",
        link: "https://hackzurich.com/highlights-2023",
        media: [
            {
                type: "image",
                src: HackZurichImage1,
                alt: "HackZurich second place"
            },
            {
                type: "image",
                src: HackZurichImage2,
                alt: "HackZurich participants"
            },
            {
                type: "image",
                src: HackZurichImage3,
                alt: "HackZurich event area"
            },
            {
                type: "video",
                videoId: "CbKFmKIalTw"
            }
        ]
    },
    {
        id: "hackcodex",
        date: "2023-09-15",
        title: "HackCodeX 2023 - Challenge Winner",
        text: "At HackCodeX in Riga, my team and I chose to participate in Emergn's challenge, which was dedicated to improving the quality of life for people with disabilities. We were tasked with creating an app or solution that leveraged ChatGPT or other technologies to solve this issue. The event, a weekend-long experience, was exciting and chaotic at times, especially as we raced to get our introductory video ready before the deadline. Ultimately, our team won the challenge.",
        media: [
            {
                type: "image",
                src: HackCodeXImage1,
                alt: "HackCodeX Emergn challenge winner"
            },
            {
                type: "image",
                src: HackCodeXImage2,
                alt: "HackCodeX our team"
            },
            {
                type: "image",
                src: HackCodeXImage3,
                alt: "HackCodeX event area"
            },
            {
                type: "video",
                videoId: "yZAfwEvLYRw"
            }
        ]
    },
    {
        id: "cyberbattle",
        date: "2021-05-10",
        title: "Cyber Battle of Estonia 2021 – Finalist",
        text: "In 2021, I had the opportunity to participate in the Cyber Battle of Estonia, a prestigious cybersecurity competition. I reached the finals and was placed in a team of 5, with team members randomly assigned based on individual skills to create a level playing field for all participants. Although my team didn't place, the experience was highly rewarding. I gained valuable insights into team-based problem solving in cybersecurity and sharpened my skills in high-pressure scenarios. It was a great opportunity to grow and network with other hobbyists in the field.",
        link: "https://ctftech.com/cyber-battle-of-estonia-2021/",
        media: [
            {
                type: "image",
                src: CyberImage1,
                alt: "Cyber Battle end"
            },
            {
                type: "image",
                src: CyberImage2,
                alt: "Cyber Battle me"
            },
            {
                type: "image",
                src: CyberImage3,
                alt: "Cyber Battle area"
            },
            {
                type: "video",
                videoId: "qiQCBIUtErQ"
            }
        ]
    }
];