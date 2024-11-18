import { v4 as uuidv4 } from 'uuid';

import ResearchItem from "./ResearchItem.jsx";
import PresentItem from "./PresentItem.jsx";


export default function Showcase() {
    const selected = [
        {
            "title": "Understanding Communication Strategies and Viewer Engagement with Science Knowledge Videos on Bilibili",
            "authors": ["Yu Zhang", "Changyang He", "Huanchen Wang", "Zhicong Lu"],
            "conf": "2023 CHI Conference on Human Factors in Computing Systems",
            "imageUrl": "/bilisci.png",
            "links": {"ACM Digital Lib": "https://dl.acm.org/doi/full/10.1145/3544548.3581476"}
        },
        {
            "title": "Controlling a Car Through OBD Injection",
            "authors": ["Yu Zhang", "Binbin Ge", "Xiang Li", "Bin Shi", "Bo Li"],
            "conf": "2016 IEEE 3rd International Conference on Cyber Security and Cloud Computing",
            "imageUrl": "/can_injection.png",
            "links": {"IEEExplore": "https://ieeexplore.ieee.org/abstract/document/7545891/"}
        }
    ]

    const present = [
        {
            "title": "SpeechCap: Leveraging Playful Impact Captions to Facilitate Interpersonal Communication in Social Virtual Reality",
            "desc": "Introduced a speech-driven captioning mechanism with unique visual and interaction design to facilitate interpersonal communication in social VR.",
            "note": "As the 1st author. CSCW’25 in revision.",
            "imageUrl": null,
        },
        {
            "title": "SciMic: Scaffolding Science Storytelling through Human-AI Co-Creation of Comics",
            "desc": "Using large language models and generative AI to scaffold science storytelling and comic creation for based on given academic paper.",
            "note": "As the 1st author. CHI’25 in revision.",
            "imageUrl": null,
        },
        {
            "title": "Understanding Audience Engagement with AI Talk Shows: Parasocial Interaction with and Humanlikeness of AI-generated Characters",
            "desc": "A mix-methods study on Bilibili videos with AI-generated characters, showing how humanlikeness and AI awareness influence parasocial interactions and proposing a framework for improving AI character design.",
            "note": "As the 3rd author. CSCW’25 in submission.",
            "imageUrl": null,
        },
        {
            "title": "Virtual Reality-Empowered Fire Escape Training for Ethnic Minorities in Hong Kong",
            "desc": "A VR simulation teaching people how to escape from fire emergency in a virtual apartment space that is re-constructed from a realistic building in Sham Shui Po district. The system has been deployed and experienced by more than fifty users from the local community.",
            "note": "As the 1rd author. In progress.",
            "imageUrl": null,
        }
    ]

    const collaboratives = [
        {
            "title": "Engage Wider Audience or Facilitate Quality Answers? a Mixed-methods Analysis of Questioning Strategies for Research Sensemaking on a Community Q&A Site",
            "authors": ["Changyang He", "Yue Deng", "Lu He", "Qingyu Guo", "Yu Zhang", "Zhicong Lu", "Bo Li"],
            "conf": "2024 The ACM SIGCHI Conference on Computer-Supported Cooperative Work and Social Computing",
            "imageUrl": null,
            "links": {"ACM Digital Lib": "https://dl.acm.org/doi/abs/10.1145/3637327"}
        },
        {
            "title": "\"It Felt Like Having a Second Mind\": Investigating Human-AI Co-creativity in Prewriting with Large Language Models",
            "authors": ["Qian Wan", "Siying Hu", "Yu Zhang", "Piaohong Wang", "Bo Wen", "Zhicong Lu"],
            "conf": "2024 The ACM SIGCHI Conference on Computer-Supported Cooperative Work and Social Computing",
            "imageUrl": null,
            "links": {"ACM Digital Lib": "https://dl.acm.org/doi/abs/10.1145/3637361"}
        }
    ]

    return (
        <>
            <div className={"showcase"}>
                <div className={"showcase_header"}>
                    Selected Research
                </div>
                {
                    selected.map(d => <ResearchItem
                        key={uuidv4()}
                        title={d.title}
                        authors={d.authors}
                        conf={d.conf}
                        imageUrl={d.imageUrl}
                        links={d.links}
                    />)
                }

                {/*<div className={"showcase_header"}>*/}
                {/*    Collaborative Research*/}
                {/*</div>*/}
                {/*{*/}
                {/*    collaboratives.map(d => <ResearchItem*/}
                {/*        key={uuidv4()}*/}
                {/*        title={d.title}*/}
                {/*        authors={d.authors}*/}
                {/*        conf={d.conf}*/}
                {/*        imageUrl={d.imageUrl}*/}
                {/*        links={d.links}*/}
                {/*    />)*/}
                {/*}*/}

                <div className={"showcase_header"}>
                    In Progress
                </div>
                { present.map(p => <PresentItem key={uuidv4()} data={p} />) }
            </div>
        </>
    );
}




