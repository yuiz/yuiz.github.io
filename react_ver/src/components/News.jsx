import {v4 as uuidv4} from "uuid";

export default function News() {
    const newsItems = [
        {
            "date": "July-2023",
            "desc": "Intern at MSRA",
        },
        {
            "date": "Oct-2024",
            "desc": "A paper submitted to CSCW'25 Revision",
        },
    ]

    return (
        <>
            <div className={"news_list"}>
                {
                    newsItems.reverse().map(i =>
                        <div className={"news_item"} key={uuidv4()} >
                            <p>
                                <span className={"news_date"}>{i.date}</span>
                                {i.desc}
                            </p>
                        </div>
                    )
                }
            </div>
        </>
    )
}
