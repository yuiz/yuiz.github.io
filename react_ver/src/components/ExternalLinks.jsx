import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogleScholar, faGithub, faLinkedin, faOrcid, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {v4 as uuidv4} from "uuid";

const linkItems = [
    {
        link: "https://scholar.google.com/citations?user=IoPD6n4AAAAJ&hl=en",
        icon: faGoogleScholar
    },
    {
        link: "https://orcid.org/0000-0002-8574-111X",
        icon: faOrcid
    },
    {
        link: "https://github.com/YuiZ",
        icon: faGithub
    },
    {
        link: "https://www.linkedin.com/in/yuiz-818128121/",
        icon: faLinkedin
    },
    {
        link: "",
        icon: faXTwitter,
    },
    {
        link: "mailto:yui.zhang@my.cityu.edu.hk",
        icon: faEnvelope
    },
]


export default function ExternalLinks() {
    return (
        <>
            <div className={"external_links"}>
                {
                    linkItems.map(i => (
                        <div className="link_item" key={uuidv4()}>
                            <a href={i.link} target="_blank" className={"link_item_clickable"}>
                                <FontAwesomeIcon icon={i.icon}/>
                            </a>
                        </div>))
                }
            </div>
        </>
    );
}




