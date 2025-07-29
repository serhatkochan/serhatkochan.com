import React from 'react';
import {NoteLayout} from "components/notes/NoteLayout";
import {notesApi} from "lib/notesApi";
import {XIcon} from "components/icons/XIcon";
import {NotionBlockRenderer} from "components/notion/NotionBlockRenderer";
import {Metadata} from "next";
import {notFound} from 'next/navigation';
import Script from "next/script";
import { AnimatedNoteContent } from './AnimatedNoteContent';


interface Props {
    params: { slug: string; };
    searchParams: { [key: string]: string | undefined };
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const allNotes = await notesApi.getNotes();
    const note = allNotes?.find((note) => note.slug === params.slug);

    if (!note) return notFound();
    const openGraphImageUrl = `/notes/${params.slug}/opengraph-image?title=${encodeURIComponent(note.title)}&description=${encodeURIComponent(note.description)}`;

    return {
        metadataBase: new URL(`${process.env.NEXT_SSL_URL}`),
        title: note.title,
        description: note.description,
        keywords: [...note.tags, 'yazılım', 'programlama', 'teknoloji', 'notlar'],
        authors: [{ name: 'Serhat Koçhan' }],
        openGraph: {
            title: note.title,
            description: note.description,
            type: 'article',
            url: `https://serhatkochan.com/notes/${params.slug}`,
            images: [
                {
                    url: openGraphImageUrl,
                    width: 1200,
                    height: 630,
                    alt: note.title,
                },
            ],
            publishedTime: note.publishedAt,
            modifiedTime: note.lastEditedAt,
            authors: ['Serhat Koçhan'],
        },
        twitter: {
            card: 'summary_large_image',
            title: note.title,
            description: note.description,
            images: [
                {
                    url: openGraphImageUrl,
                    alt: note.title,
                }
            ],
            creator: '@serhatkochan',
        },
        alternates: {
            canonical: `https://serhatkochan.com/notes/${params.slug}`,
        },
    };
}

const Note = async ({params}: Props) => {
    const url = `${process.env.NEXT_PUBLIC_URL}/notes/${params.slug}`;
    const allNotes = await notesApi.getNotes();
    const note = allNotes.find((note) => note.slug === params.slug);
    if (!note) {
        return notFound();
    }
    const noteContent = await notesApi.getNote(note.id);
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": note.title,
        "description": note.description,
        "author": {
            "@type": "Person",
            "name": "Serhat Koçhan",
            "url": "https://serhatkochan.com"
        },
        "publisher": {
            "@type": "Person",
            "name": "Serhat Koçhan",
            "url": "https://serhatkochan.com"
        },
        "datePublished": note.publishedAt,
        "dateModified": note.lastEditedAt,
        "url": `https://serhatkochan.com/notes/${params.slug}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://serhatkochan.com/notes/${params.slug}`
        },
        "keywords": note.tags.join(", "),
        "articleSection": "Technology",
        "inLanguage": "tr-TR"
    };
    
    return (
        <>
            <Script
                id="article-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <NoteLayout
                meta={{title: note.title, description: note.description, date: note.publishedAt}}
                previousPathname={'/notes'}
            >
                <AnimatedNoteContent 
                    note={note} 
                    noteContent={noteContent} 
                    url={url}
                />
            </NoteLayout>
        </>
    );
};

export default Note;
