'use client';
import { useState } from "react";
import { Header } from "./core/header"
import { ToggleButton } from "./core/toggle-button"
import { Video } from "./core/video"
import { useSearchParams } from "next/navigation";

interface RoleContent {
    name: string;
    src: string;
    linkText: string;
    link: 'developer' | 'designer'
}

const content: Record<'developer' | 'designer', RoleContent> = {
    designer: {
        name: 'Pure Harmony for Designers.',
        src: 'https://www.loom.com/embed/eaac01c69446429b968f0af6335d5011?sid=4e1a0146-0765-4169-9648-104fc7ee5926',
        linkText: 'I am a developer.',
        link: 'developer'
    },
    developer: {
        name: 'Pure Harmony for Developers.',
        src: 'https://www.loom.com/embed/ebbf59d3793d41f2a9216ec411ff7a99?sid=5a96b421-9959-49a9-86d8-6ac176dad977',
        linkText: 'I am a product designer.',
        link: 'designer'
    }
}

export const DesignerDeveloperSwitcher: React.FunctionComponent = () => {
    const [role, setRole] = useState<'designer' | 'developer'>('designer');
    const data = content[role];

    return (
        <div className="container-3">
            <div className="header-wrapper mb-10">
                <Header className="!text-[50px]" level={1}>{data.name}</Header>
                <button className="text-base md:text-xl text-[#88939d] hover:text-[#11283b]" onClick={() => setRole(data.link)}>{data.linkText}</button>
            </div>
            <div className="mb-5">
                <Video key={data.name} src={data.src}/>
            </div>
      </div>
    )
}