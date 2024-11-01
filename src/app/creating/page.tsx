"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {PageLayout} from "components/PageLayout";
import {MyCurrentProjects, MyPastProjects} from "data/lifeApi";
import {ProjectCard} from "components/ProjectCard";
import {ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS} from "lib/animation";
import {Metadata} from "next";

const Creating = () => {
    return (
        <PageLayout
            title="Değer katmak ve faydalı hale getirmek için çabalıyorum."
            intro="Tonlarca küçük proje üzerinde çalıştım ama aralarından seçtiklerim burada. Bazıları açık kaynaklı, bu yüzden ilginizi çeken bir şey görürseniz, kodu kontrol edin!"
        >
            <h2 className="text-2xl font-bold tracking-tight">Şimdi</h2>
            <p className="mt-2 text-base">Şu anda üzerinde çalıştığım projeler.</p>
            <ul
                role="list"
                className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {MyCurrentProjects.map((project) => (
                    <motion.li
                        key={project.title}
                        initial={ANIMATION_FROM_PROPS}
                        whileInView={ANIMATION_TO_PROPS}
                        viewport={{ once: true }}
                    >
                        <ProjectCard project={project} />
                    </motion.li>
                ))}
            </ul>

            <h2 className="mt-24 text-2xl font-bold tracking-tight">Geçmiş</h2>
            <p className="mt-2 text-base">
                Üzerinde çalıştığım projeler. İnternet işlerinin doğası gereği hepsi hala çevrimiçi değil.
            </p>
            <ul
                role="list"
                className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {MyPastProjects.map((project) => (
                    <motion.li
                        key={project.title}
                        initial={ANIMATION_FROM_PROPS}
                        whileInView={ANIMATION_TO_PROPS}
                        viewport={{ once: true }}
                    >
                        <ProjectCard key={project.title} project={project} />
                    </motion.li>
                ))}
            </ul>
        </PageLayout>
    );
};

export default Creating;
