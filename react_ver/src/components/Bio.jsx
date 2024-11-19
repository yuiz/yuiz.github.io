export default function Bio() {
    return (
        <>
            <div className={"bio_intro"}>
                <p className={"bio_text"}>
                    Hi there!
                    I am a Ph.D. student at the Department of Computer Science, <a href="https://www.cityu.edu.hk/" target="_blank" className={"custom_link"}>City University of Hong Kong</a>,
                    {" advised by "}
                    <a href="https://www.cs.cityu.edu.hk/~zhiconlu/" target="_blank" className={"custom_link"}>
                        Dr. Zhicong LU
                    </a>.
                </p>

                <p className={"bio_text"}>
                    My research focuses on human-computer interaction (HCI) and social computing,
                    regarding science communication and virtual reality (VR) applications.
                </p>

                <p className={"bio_text"}>
                    Prior Ph.D. study,
                    I worked at <a href="https://www.thoughtworks.com/" target="_blank" className={"custom_link"}>Thoughtworks</a> as a full-stack
                    software engineer for about two years.
                    I hold a master's degree in professional computing and data science from <a href="https://www.anu.edu.au/" target="_blank" className={"custom_link"}>Australian National University</a>,
                    and a bachelor's degree in computer science from <a href="https://ev.buaa.edu.cn/" target="_blank" className={"custom_link"}>Beihang University (BUAA)</a>.
                </p>
            </div>
        </>
    );
}
