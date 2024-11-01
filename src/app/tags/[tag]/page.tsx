import React from 'react';
import {PageLayout} from "components/PageLayout";
import {NotePreview} from "components/notes/NotePreview";
import {notesApi} from "lib/notesApi";
import {Metadata} from "next";

interface Props {
    params: { tag: string; };
    searchParams: { [key: string]: string | undefined };
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = params.tag;
    const description = `${params.tag} Etiketine göre yazılan makaleleri listeleyin.`;
    const openGraphImageUrl = `/tags/${params.tag}/opengraph-image?title=${title}&description=${encodeURIComponent(description)}`;

    return {
        metadataBase: new URL(`${process.env.NEXT_SSL_URL}`),
        title: `Serhat Koçhan - ${title}`,
        description: description,
        openGraph: {
            title: title,
            images: [
                {
                    url: openGraphImageUrl,
                },
            ],
            type: 'website'
        },
        twitter: {
            title: title,
            images: [
                {
                    url: openGraphImageUrl,
                }
            ],
        }
    };
}

const Tag = async ({params: {tag}}: {params: {tag: string}}) => {
    const relatedNotes = await notesApi.getNotesByTag(tag);
    return (
        <PageLayout title="Tags" intro={`#${tag} Hakkında tüm makaleler`}>
            <div className="mt-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                    {relatedNotes.map((note) => (
                        <NotePreview key={note.slug} note={note} />
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

export default Tag;
