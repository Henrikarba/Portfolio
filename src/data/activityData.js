
// QEst Hack
import QestHackImage1 from "../../static/QestHack/winners.webp";
import QestHackImage2 from "../../static/QestHack/event.webp";
import QestHackImage3 from "../../static/QestHack/participants.webp";
import QestHackImage4 from "../../static/QestHack/solution.webp";


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

// Texts
import KoodJohviText from "./texts/activity/koodjohvi.md?raw";
import HackZurichText from "./texts/activity/hackzurich.md?raw";
import HackCodeXText from "./texts/activity/hackcodex.md?raw";
import CyberBattleText from "./texts/activity/cyberbattle.md?raw";
import QestHackText from "./texts/activity/qesthack.md?raw";

export const activityData = [
    {
        id: "qesthack",
        date: "2025-12-05",
        title: "QestHack 2025 - First Place",
        text: QestHackText.trim(),
        link: "https://kvant.ee/qest-hack-2025/",
        media: [
            {
                type: "image",
                src: QestHackImage1,
                alt: "QEst Hack 2025 winners"
            },
            {
                type: "image",
                src: QestHackImage2,
                alt: "QEst Hack 2025 event"
            },
            {
                type: "image",
                src: QestHackImage3,
                alt: "QEst Hack 2025 participants group photo"
            },
            {
                type: "image",
                src: QestHackImage4,
                alt: "QEst Hack 2025 solution diagram"
            }
        ]
    },
    {
        id: "koodjohvi",
        date: "2024-11-29",
        title: "Kood/Jõhvi 2022-2024",
        text: KoodJohviText.trim(),
        link: "https://kood.tech/",
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
        title: "HackZurich 2023 - Second Place",
        text: HackZurichText.trim(),
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
        text: HackCodeXText.trim(),
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
                videoId: "17PfV7ajb3U"
            }
        ]
    },
    {
        id: "cyberbattle",
        date: "2021-05-10",
        title: "Cyber Battle of Estonia 2021 - Finalist",
        text: CyberBattleText.trim(),
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