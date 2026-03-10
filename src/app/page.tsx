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

        {/* 顶部导航 */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div
                className="font-bold text-xl tracking-tight cursor-pointer flex items-center gap-2"
                onClick={() => setActiveTab('home')}
            >
              {/*<div className="w-8 h-8 theme-color-bg rounded-lg flex items-center justify-center text-white">*/}
              {/*  /!*<span className="text-lg">:)</span>*!/*/}
              {/*</div>*/}
              {/*<span className={"theme-color"}>{"SMILE"}</span>Lab*/}
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex items-center gap-2 p-1">
              {tabs.map(tab => (
                  <TabButton
                      key={tab.id}
                      active={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      icon={tab.icon}
                      label={tab.label}
                  />
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <button
                className="md:hidden p-2 text-slate-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* 移动端下拉菜单 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden fixed top-16 left-0 right-0 bg-white border-b border-slate-200 z-40 overflow-hidden shadow-xl"
              >
                <div className="p-4 flex flex-col gap-2">
                  {tabs.map(tab => (
                      <button
                          key={tab.id}
                          onClick={() => {
                            setActiveTab(tab.id);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`flex items-center gap-3 p-4 rounded-xl transition-colors ${
                              activeTab === tab.id
                                  ? 'bg-slate-100 text-slate-900 font-bold'
                                  : 'text-slate-600 hover:bg-slate-50'
                          }`}
                      >
                        <tab.icon size={20} />
                        {tab.label}
                      </button>
                  ))}
                </div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* 主要内容区域 */}
        <main className="pt-24 pb-20 min-h-screen flex flex-col">
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
