import Header from "./Header.jsx";
import Bio from "./Bio.jsx";
import Showcase from "./Showcase.jsx";
import ExternalLinks from "./ExternalLinks.jsx";
import NewsList from "./News.jsx";

export default function Main() {
    return (
        <>
            <Header/>

            <div className={"main_area"}>
                <div className={"primary_panel"}>
                    <Bio/>
                    <Showcase/>
                </div>

                <div className={"secondary_panel"}>
                    <div className={"bio_frame"}>
                        <img src={"/selfie.jpg"} alt="" />
                    </div>
                    <ExternalLinks/>
                    <NewsList/>
                </div>
            </div>
        </>
    );
}
