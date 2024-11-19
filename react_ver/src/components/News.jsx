import {v4 as uuidv4} from "uuid";

export default function News() {
    const newsItems = [
        {
            "date": "July-2023",
            "desc": "Back to Beijing",
        },
        {
            "date": "Dec-2023",
            "desc": "Back to Hong Kong",
        },
    ]

    return (
        <>
            <div className={"news_list"}>
                {
                    newsItems.reverse().map(i =>
                        <div className={"news_item"} key={uuidv4()} >
                            <div className={"news_text"}>
                                <span className={"news_date"}>{i.date}</span>
                                {i.desc}
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
