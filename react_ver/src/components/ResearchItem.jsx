import {v4 as uuidv4} from "uuid";

export default function ResearchItem({data}) {
    // title: ""
    // authors: ""
    // desc: ""
    // conf: ""
    // imageUrl: "" (url)
    // links: {"<name>": "<link>", ...}

    const title = data.title;
    const authors = data.authors.split(",");
    const conf = data.conf;
    const desc = data.desc;
    const imageUrl = data.imageUrl;
    const links = data.links;

    const addComma = (authorName) => {
        if (authorName !== authors[0]) {
            return `, ${authorName}`
        }
    }

    return (
        <>
            <div className="research_item">
                <div className="item_frame">
                    <img src ={imageUrl} alt = {""}/>
                </div>
                <div className="item_info">
                    <div className="item_title">{title}</div>
                    <div className="item_authors">
                        {
                            authors.map(aName => aName === ("Yu Zhang")?
                                (<span className={"item_author_highlight"} key={uuidv4()}>Yu Zhang</span>)
                                : (<span key={uuidv4()}>{addComma(aName)}</span>))
                        }
                    </div>
                    <div className="item_conf">
                        {conf}
                    </div>
                    <div className="item_desc">
                        {desc}
                    </div>

                    <div className="item_link_container">
                        {
                            Object.keys(links).map(name => (
                                <a key={uuidv4()} href={links[name]} target="_blank" className={"item_link"}>
                                    <span className="">{name}</span>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
