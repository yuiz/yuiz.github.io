"use client";

import React, {useState} from 'react';

import {AnimatePresence, motion} from 'framer-motion';
import {Home, Menu, ScrollTextIcon, Send, UserPlus, Users, X, GraduationCap,} from 'lucide-react';

import {PaperSection} from "@/app/sections/paperSection";
import {PersonalPage} from "@/app/sections/personalPage";
import {TabKey, TabConfig, TabButton} from "@/app/sections/tabButton";


export default function StudioWebsite() {
  const [activeTab, setActiveTab] = useState<TabKey>('personal');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const switchPage = (tabId: TabKey) => {
      setActiveTab(tabId);
  };

  const tabs: TabConfig[] = [
      { id: 'personal', label: 'Home', icon: GraduationCap, component: PersonalPage},
      // { id: 'publications', label: 'Publications', icon: ScrollTextIcon, component: PaperSection},
  ];

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || PersonalPage;

  return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <main className="pt-4 pb-20 min-h-screen flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
            >
              <ActiveComponent switchPage={switchPage} />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* 页脚 */}
        <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {"Yu Zhang"}. All rights reserved.</p>
          <p className="mt-2">Designed & Built with Next.js & TypeScript</p>
        </footer>
      </div>
  );
}
