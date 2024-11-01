import React from 'react';
import {NoteLayout} from "components/notes/NoteLayout";
import {notesApi} from "lib/notesApi";
import {XIcon} from "components/icons/XIcon";
import {NotionBlockRenderer} from "components/notion/NotionBlockRenderer";
import {Metadata} from "next";
import {notFound} from 'next/navigation';


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
        title: `Serhat Koçhan - ${note.title}`,
        description: note.description,
        openGraph: {
            title: note.title,
            images: [
                {
                    url: openGraphImageUrl,
                },
            ],
            type: 'website'
        },
        twitter: {
            title: note.title,
            images: [
                {
                    url: openGraphImageUrl,
                }
            ]
        }
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
    return (
        <NoteLayout
            meta={{title: note.title, description: note.description, date: note.publishedAt}}
            previousPathname={'/notes'}
        >
            <div className="pb-32">
                {
                    note.inProgress && <h2 className="text-2xl font-semibold text-primary dark:text-primary">
                        Bu makale üzerinde hala çalışılıyor. Lütfen daha sonra tekrar kontrol edin!
                    </h2>
                }
                { !note.inProgress && noteContent?.map((block: any) => (
                    <NotionBlockRenderer key={block.id} block={block}/>
                ))}

                <hr/>

                <a
                    className="group block text-xl font-semibold md:text-3xl no-underline"
                    href={`http://x.com/share?text=${note.title}&url=${url}`}
                >
                    <h4 className="max-w-lg flex cursor-pointer flex-col duration-200 ease-in-out group-hover:text-primary group-hover:fill-primary fill-white text-wrap">
                        <XIcon
                            className="my-6 h-10 w-10 transform transition-transform group-hover:-rotate-12 fill-black dark:fill-white group-hover:fill-primary"/>
                        Bu makaleyi beğendiyseniz X&apos;te arkadaşlarınızla paylaşmak için buraya tıklayın.
                    </h4>
                </a>
            </div>
        </NoteLayout>
    );
};

export default Note;
