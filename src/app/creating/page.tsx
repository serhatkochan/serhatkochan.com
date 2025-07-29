"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {PageLayout} from "components/PageLayout";
import {MyCurrentProjects, MyPastProjects} from "data/lifeApi";
import {ProjectCard} from "components/ProjectCard";
import {Metadata} from "next";

const Creating = () => {
    return (
        <PageLayout
            title="Değer katmak ve faydalı hale getirmek için çabalıyorum."
            intro="Tonlarca küçük proje üzerinde çalıştım ama aralarından seçtiklerim burada. Bazıları açık kaynaklı, bu yüzden ilginizi çeken bir şey görürseniz, kodu kontrol edin!"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                    <h2 className="text-2xl font-bold tracking-tight">Şimdi</h2>
                    <p className="mt-2 text-base">Şu anda üzerinde çalıştığım projeler.</p>
                </motion.div>

                <motion.ul
                    role="list"
                    className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    {MyCurrentProjects.map((project, index) => (
                        <motion.li
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                ease: "easeOut",
                                delay: 0.3 + (index * 0.05)
                            }}
                        >
                            <ProjectCard project={project} />
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                >
                    <h2 className="mt-24 text-2xl font-bold tracking-tight">Geçmiş</h2>
                    <p className="mt-2 text-base">
                        Üzerinde çalıştığım projeler. İnternet işlerinin doğası gereği hepsi hala çevrimiçi değil.
                    </p>
                </motion.div>

                <motion.ul
                    role="list"
                    className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                    {MyPastProjects.map((project, index) => (
                        <motion.li
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                ease: "easeOut",
                                delay: 0.7 + (index * 0.05)
                            }}
                        >
                            <ProjectCard key={project.title} project={project} />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </PageLayout>
    );
};

export default Creating;
