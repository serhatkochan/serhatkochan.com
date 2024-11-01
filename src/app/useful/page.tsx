"use client"
import React from 'react';
import {PageLayout} from "components/PageLayout";
import {UsefulTools} from "data/lifeApi";
import {Tool} from "components/tools/Tool";

const Useful = () => {
    return (
        <PageLayout
            title="İşime yarayan, yarayacak bağlantılar."
            intro="Faydalı olabileceğini düşündüğüm şeylerin büyük bir listesi."
        >
            <div className="space-y-20">
                {UsefulTools.map((tool) => (
                    <Tool key={tool.title} title={tool.title} href={tool.href}>
                        {tool.description}
                    </Tool>
                ))}
            </div>
        </PageLayout>
    );
};

export default Useful;
