import { v4 as uuidv4 } from 'uuid';

export default function PresentItem({data}) {
    return (
        <>
            <div className="research_item">
                <div className="item_frame">
                    <img src={data.imageUrl} alt={""}/>
                </div>
                <div className="item_info">
                    <h4 className="item_title">{data.title}</h4>
                    <p>{data.note}</p>
                    <p>{data.desc}</p>
                </div>
            </div>
        </>
    );
}
