import React from "react";
import {motion} from "framer-motion";

import {PaperItem, PUBLICATIONS} from '../content/publications';
import SectionWrapper from "@/app/sections/sectionWrapper";


export interface SubPageProps {
    switchPage: CallableFunction;
}

interface PaperItemComponentProps {
    item: PaperItem;
}

export const PaperItemComponent: React.FC<PaperItemComponentProps> = ({item}) => (
    <div className="shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden border border-slate-200 p-4 md:p-6">
        <div className="flex-col m-0 items-start text-left">
            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {item.title}
                </h3>
                <p className="text-l text-slate-600 mb-1 leading-relaxed">
                    {item.authors}
                </p>
                <p className="text-l font-bold text-slate-600 tracking-wider mb-1">
                    {`${item.venue}, ${item.year}`}
                </p>
            </div>

            <div className="flex flex-wrap gap-3">
                {item.links.map((l, idx) => (
                    <a key={`${idx}_${l.label}`}
                       className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-600 cursor-pointer hover-theme-color"
                       href={l.url}
                       target="_blank"
                    >
                        {l.label}
                    </a>
                ))}
            </div>
        </div>
    </div>
)

export const PaperSection: React.FC<SubPageProps> = ({switchPage}) => (
    <SectionWrapper>
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            List of Publications
        </h2>

        <div className="grid grid-cols-1 gap-8">
            {PUBLICATIONS
                .sort((a, b) => (a.year > b.year)? -1 : 1)
                .map((item, index) => (
                <motion.div
                    key={`paper_${index}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                >
                    <PaperItemComponent item={item}></PaperItemComponent>
                </motion.div>
            ))}
        </div>

        {/*<div className={"w-full flex flex-col items-end mt-8 pr-8 text-xl text-slate-700 hover-theme-color"}>*/}
        {/*    <a href={"https://scholar.google.com/citations?hl=en&user=kXbWREkAAAAJ"} target="_blank">*/}
        {/*        {"View All Publications >"}*/}
        {/*    </a>*/}
        {/*</div>*/}
    </SectionWrapper>
);

