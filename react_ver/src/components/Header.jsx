export default function Header() {
    return (
        <>
            <div className={"my_header"}>
                <div className={"header_content"}>
                    <div className={"header_title"}>
                        Yu ZHANG | 張宇
                    </div>
                    <div className={"header_links"}>
                        <div className={"header_link_item"}>
                            <a className={"header_link_clickable"}
                               href={"https://scholar.google.com/citations?user=IoPD6n4AAAAJ&hl=en"}
                               target="_blank">
                                Publications
                            </a>
                        </div>
                        <div className={"header_link_item"}>
                            <a className={"header_link_clickable"}
                               href={"/cv_yz_241118.pdf"}
                               target="_blank">
                                CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}




