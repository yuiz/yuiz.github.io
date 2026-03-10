export interface PaperItem {
    title: string;
    authors: string;
    links: {
        label: string;
        url: string;
    }[];
    venue: string;
    year: number;
    selected: boolean;
    image?: string;
}

export const PUBLICATIONS: PaperItem[] = [
    {
        title: "RevTogether: Supporting Science Story Revision with Multiple AI Agents",
        authors: "Yu Zhang, Kexue Fu, Zhicong Lu",
        links: [
            {
                label: "ACM DL",
                url: "https://dl.acm.org/doi/full/10.1145/3706599.3719888"
            },
            {
                label: "Arxiv",
                url: "https://arxiv.org/abs/2503.01608"
            },
        ],
        venue: "Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA '25)",
        year: 2025,
        selected: true,
        image: "/_resources/revtogether.png"
    },
    {
        title: "Understanding Communication Strategies and Viewer Engagement with Science Knowledge Videos on Bilibili",
        authors: "Yu Zhang, Changyang He, Huanchen Wang, Zhicong Lu",
        links: [
            {
                label: "ACM DL",
                url: "https://dl.acm.org/doi/abs/10.1145/3544548.3581476"
            },
        ],
        venue: "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI '23)",
        year: 2023,
        selected: true,
        image: "/_resources/bilisci2.png"
    },
    {
        title: "Controlling a Car through OBD Injection",
        authors: "Yu Zhang, Binbin Ge, Xiang Li, Bin Shi, Bo Li",
        links: [
            {
                label: "IEEE Xplore",
                url: "https://ieeexplore.ieee.org/abstract/document/7545891"
            },
        ],
        venue: "IEEE 3rd International Conference on Cyber Security and Cloud Computing (CSCloud '16)",
        year: 2016,
        selected: true,
        image: "/_resources/can_injection.png"
    },
    {
        title: "SpeechCap: Leveraging Playful Impact Captions to Facilitate Interpersonal Communication in Social Virtual Reality",
        authors: "Yu Zhang, Yi Wen, Siying Hu, Zhicong Lu",
        links: [
            {
                label: "ACM DL",
                url: "https://dl.acm.org/doi/pdf/10.1145/3757427"
            },
            {
                label: "Arxiv",
                url: "https://arxiv.org/abs/2502.10736"
            },
        ],
        venue: "Proceedings of the ACM on human-computer interaction (CSCW '25)",
        year: 2025,
        selected: true,
        image: "/_resources/speechcap.gif"
    },
    // {
    //     title: "",
    //     authors: "",
    //     links: [
    //         {
    //             name: "",
    //             url: ""
    //         },
    //         {
    //             name: "",
    //             url: ""
    //         }
    //     ],
    //     venue: "",
    //     year: 2025,
    //     selected: true,
    //     image: ""
    // },
];

