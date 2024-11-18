import {v4 as uuidv4} from "uuid";

export default function ResearchItem({title, authors, conf, imageUrl, links}) {
    // title: ""
    // authors: [""]
    // conf: ""
    // imageUrl: "" (url)
    // links: {"<name>": "<link>", ...}

    return (
        <>
            <div className="research_item">
                <div className="item_frame">
                    <img src={imageUrl} alt={""}/>
                </div>
                <div className="item_info">
                    <h4 className="item_title">{title}</h4>
                    <p>
                        {
                            authors
                                .map(a => a === "Yu Zhang"?  (<span style="font-weight: bold;">Yu Zhang</span>) : a)
                                .join(",")
                        }
                        {/*<span style="font-weight: bold;">Yu Zhang</span>, Changyang He, Huanchen Wang, Zhicong Lu*/}
                    </p>
                    <p>{conf}</p>

                    <div className="item_link_container">
                        {
                            Object.keys(links).map(name => (
                                <a key={uuidv4()} href={links[name]} target="_blank">
                                    <span className={""}>{name}</span>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
