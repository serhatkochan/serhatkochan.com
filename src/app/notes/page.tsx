import React from 'react';
import {notesApi} from "lib/notesApi";
import {PageLayout} from "components/PageLayout";
import {Metadata} from "next";
import { AnimatedNotesContent } from './AnimatedNotesContent';

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_SSL_URL}`),
    title: 'Serhat Koçhan - Notlar',
    description: 'Serhat Koçhan\'ın yazılım, ürün geliştirme ve teknoloji üzerine yazdığı notlar. JavaScript, React, yapay zeka ve daha fazlası hakkında içerikler.',
    keywords: ['yazılım', 'programlama', 'javascript', 'react', 'yapay zeka', 'teknoloji', 'notlar'],
    openGraph: {
        title: 'Serhat Koçhan - Notlar',
        description: 'Yazılım, ürün geliştirme ve teknoloji üzerine notlar',
        type: 'website',
        url: 'https://serhatkochan.com/notes',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Serhat Koçhan - Notlar',
        description: 'Yazılım, ürün geliştirme ve teknoloji üzerine notlar',
    },
};

const Notes = async () => {
    const notes = await notesApi.getNotes('desc');
    const tags = Array.from(new Set(notes.map((post) => post.tags).flat()))
    return (
        <PageLayout
            title="Yazılım, ürün geliştirme ve diğer şeyler üzerine notlar."
            intro="Programlama, ürün geliştirme, liderlik, seyahat ve diğer rastgele şeyler hakkındaki tüm düşüncelerim."
        >
            <AnimatedNotesContent notes={notes} tags={tags} />
        </PageLayout>
    );
};

export default Notes;
