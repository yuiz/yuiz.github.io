import React from 'react';
import {LucideIcon} from 'lucide-react';
import {SubPageProps} from "@/app/sections/paperSection";


export type TabKey = 'home' | 'members' | 'publications' | 'leader' | 'join' | 'contact' | 'personal';

export interface TabConfig {
    id: TabKey;
    label: string;
    icon: LucideIcon;
    component: React.ComponentType<SubPageProps>;
}

interface TabButtonProps {
    active: boolean;
    onClick: () => void;
    icon: LucideIcon;
    label: string;
}

export const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon: Icon, label }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-300 ${
            active
                ? 'bg-slate-900 text-white shadow-lg scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`}
    >
        <Icon size={18} />
        <span className="font-medium">{label}</span>
    </button>
);
