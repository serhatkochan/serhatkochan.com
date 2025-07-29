import React from 'react';
import {PageLayout} from "components/PageLayout";
import {notesApi} from "lib/notesApi";
import {Metadata} from "next";
import { AnimatedTagContent } from './AnimatedTagContent';

interface Props {
    params: { tag: string; };
    searchParams: { [key: string]: string | undefined };
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = `#${params.tag} Etiketi`;
    const description = `${params.tag} etiketi ile ilgili yazılım, programlama ve teknoloji notları. Serhat Koçhan\'ın ${params.tag} konusundaki yazıları ve deneyimleri.`;
    const openGraphImageUrl = `/tags/${params.tag}/opengraph-image?title=${title}&description=${encodeURIComponent(description)}`;

    return {
        metadataBase: new URL(`${process.env.NEXT_SSL_URL}`),
        title: title,
        description: description,
        keywords: [params.tag, 'yazılım', 'programlama', 'teknoloji', 'notlar', 'etiket'],
        authors: [{ name: 'Serhat Koçhan' }],
        openGraph: {
            title: title,
            description: description,
            type: 'website',
            url: `https://serhatkochan.com/tags/${params.tag}`,
            images: [
                {
                    url: openGraphImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [
                {
                    url: openGraphImageUrl,
                    alt: title,
                }
            ],
            creator: '@serhatkochan',
        },
        alternates: {
            canonical: `https://serhatkochan.com/tags/${params.tag}`,
        },
    };
}

const Tag = async ({params: {tag}}: {params: {tag: string}}) => {
    const relatedNotes = await notesApi.getNotesByTag(tag);
    return (
        <PageLayout title="Tags" intro={`#${tag} Hakkında tüm makaleler`}>
            <AnimatedTagContent notes={relatedNotes} />
        </PageLayout>
    );
};

export default Tag;