import React from 'react';
import Image from "next/image";
import {
    GraduationCap,
    Mail,
    MapPin,
    ExternalLink,
    Terminal,
    Microscope,
} from 'lucide-react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogleScholar, faLinkedin, faOrcid, faGithub} from "@fortawesome/free-brands-svg-icons";

import SectionWrapper from "@/app/sections/sectionWrapper";
import {NEWS} from "@/app/content/news";
import {PUBLICATIONS} from "@/app/content/publications";


const PERSONAL_DATA = {
    name: "Yu ZHANG",
    role: "Postdoctoral Fellow",
    university: "City University of Hong Kong",
    email: "yui.zhang [at] cityu [dot] edu [dot] hk",
    location: "Kowloon, Hong Kong",

    interests: ["Agentic AI", "Human-Computer Interaction", "Software Engineering", "Social Computing"],
};

export const PersonalPage: React.FC = () => (
    <SectionWrapper className="max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left Column */}
            <div className="md:col-span-4 lg:col-span-3">
                <div className="md:sticky md:top-24 flex flex-col items-center md:items-start text-center md:text-left">
                    <Image src={"/self.jpg"} alt={"Avatar"}
                           width={240}
                           height={180}
                           loading="eager"
                           unoptimized={true}
                           className="w-48 h-48 rounded-full mb-2"
                    />

                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{PERSONAL_DATA.name}</h2>
                    <p className="text-lg text-slate-600 font-medium mb-1">{PERSONAL_DATA.role}</p>
                    <p className="text-slate-500 mb-6">{PERSONAL_DATA.university}</p>

                    <div className="flex flex-col gap-2 mb-8 w-full text-sm text-slate-600">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <Mail size={16} />
                            <a href={`mailto:${PERSONAL_DATA.email}`} className="hover:text-blue-600 transition-colors">{PERSONAL_DATA.email}</a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <MapPin size={16} />
                            <span>{PERSONAL_DATA.location}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                            <a href="https://scholar.google.com/citations?user=IoPD6n4AAAAJ&hl=en" target="_blank" className="text-xl p-1 rounded-md hover:bg-slate-200 transition-colors text-slate-700">
                                <FontAwesomeIcon icon={faGoogleScholar}></FontAwesomeIcon>
                            </a>
                            <a href="https://www.linkedin.com/in/yui-zhang/" target="_blank" className="text-xl p-1 rounded-md hover:bg-slate-200 transition-colors text-slate-700">
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                            </a>
                            <a href="https://github.com/yuiz" target="_blank" className="text-xl p-1 rounded-md hover:bg-slate-200 transition-colors text-slate-700">
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </a>
                            <a href="https://orcid.org/0000-0002-8574-111X" target="_blank" className="text-xl p-1 rounded-md hover:bg-slate-200 transition-colors text-slate-700">
                                <FontAwesomeIcon icon={faOrcid}></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>

                    <div className="w-full border-t border-slate-200 pt-6">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Interests</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            {PERSONAL_DATA.interests.map(interest => (
                                <span key={interest} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-8 lg:col-span-9">
                <div className="mb-12">
                    <p className="text-slate-700 leading-relaxed text-lg">
                        Hi there!
                        I am Yu Zhang (张宇). Currently I am a Postdoctoral Fellow at College of Computing, City University of Hong Kong
                        under the supervision of
                        <a href={"https://www.cs.cityu.edu.hk/~jianwang/index.html"} target="_blank">&nbsp;Prof. Jianping WANG</a> and
                        <a href={"https://smile.cs.cityu.edu.hk/"} target="_blank">&nbsp;Asst. Prof. Jiawei MA</a>.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-lg">
                        Beyond research topics including social virtual reality and science communication through a human-computer interaction (HCI) perspective during my Ph.D.,
                        I am now working on projects that aim for introducing agentic AI into real-world application scenarios across various domains.
                        Particularly, I am interested in developing agentic AI systems that are reliable, transparent, aligned with human goals, and create true values.
                    </p>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Latest News</h3>
                    <ul className="space-y-4">
                        {NEWS.map((n, idx) => (
                            <div key={`news_item_${idx}`} className={"flex gap-2 items-center p-1"}>
                                <div>
                                    <b>{n.date}</b>
                                </div>
                                <div>
                                    {n.content}
                                </div>
                                <div>
                                    {(n.link !== "") && <a className={"text-sm hover-theme-color cursor-pointer"} href={n.link} target={"\"_blank\""}> <ExternalLink/></a>}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Selected Publications</h3>
                    <div className="space-y-8">
                        {
                            PUBLICATIONS
                                .sort((a, b) => (a.year > b.year) ? -1 : 1)
                                .map(
                                    (paper, idx) => (
                                        <div key={`p_${idx}`} className="flex flex-col sm:flex-row gap-6">
                                            <div style={{position: "relative"}}
                                                 className={"w-full sm:w-48 h-30 shrink-0 flex justify-center text-slate-400/50"}>
                                                <Image src={`${paper.image}`}
                                                       alt={`figure_${idx}`}
                                                       fill
                                                       sizes={"10vw"}
                                                       unoptimized={true}
                                                       className="rounded-sm"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 mb-1">{paper.title}</h4>
                                                <p className="text-slate-600 mb-1">{paper.authors}</p>
                                                <p className="text-sm text-slate-500 italic mb-3">{paper.venue}, {paper.year}</p>
                                                <div className="flex gap-3">
                                                    {paper.links.map((link, i) => (
                                                        <a
                                                            key={`link_${i}`}
                                                            href={link.url}
                                                            className="text-xs font-bold text-slate-900 border border-slate-600 px-2 py-0.5 rounded hover:bg-slate-200"
                                                        >
                                                            {link.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>)
                                )
                        }
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Working Experiences</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="mt-1 text-slate-400"><Microscope size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Postdoctoral Fellow</h4>
                                <p className="text-slate-600">City University of Hong Kong, 2025 - Present</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 text-slate-400"><Microscope size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Research Intern</h4>
                                <p className="text-slate-600">Microsoft Research Asia, 2023</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 text-slate-400"><Terminal size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Full Stack Developer & Technical Consultant</h4>
                                <p className="text-slate-600">ThoughtWorks, 2019 - 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Education</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="mt-1 text-slate-400"><GraduationCap size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Ph.D. in Computer Science</h4>
                                <p className="text-slate-600">City University of Hong Kong, 2021 - 2025</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 text-slate-400"><GraduationCap size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Master of Computing</h4>
                                <p className="text-slate-600">Australian National University, 2017 - 2019</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 text-slate-400"><GraduationCap size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">B.E. in Computer Science and Technology</h4>
                                <p className="text-slate-600">Beihang University (BUAA), 2013 - 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SectionWrapper>
);
