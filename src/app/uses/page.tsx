"use client"
import React from 'react';
import {PageLayout} from "components/PageLayout";
import {ToolsSection} from "components/tools/ToolsSection";
import {Tools} from "data/lifeApi";
import {Tool} from "components/tools/Tool";


const Uses = () => {
    return (
        <PageLayout
            title="Kullandığım yazılımlar, sevdiğim araçlar."
            intro="Kendimi üretken olduğuma inandırmak için satın aldığım, kullandığım bazı şeyler. İşte favori eşyalarımın büyük bir listesi."
        >
            <div className="space-y-20">
                {Object.entries(Tools).map(([, {title, list}]) => (
                    <ToolsSection key={title} title={title}>
                        {list.map((tool) => (
                            <Tool key={tool.title} title={tool.title} href={tool.href}>
                                {tool.description}
                            </Tool>
                        ))}
                    </ToolsSection>
                ))}
            </div>
        </PageLayout>
    );
};

export default Uses;
