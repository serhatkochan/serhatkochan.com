import React from 'react';
import {notesApi} from "lib/notesApi";
import {PageLayout} from "components/PageLayout";
import {Badge} from "components/Badge";
import {NotePreview} from "components/notes/NotePreview";
import {Metadata} from "next";

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_SSL_URL}`),
    title: 'Serhat Koçhan - Notlar',
    description: 'Serhat Koçhan\'ın web sitesindeki Notlar sayfası. Kendi oluşturduğu notları keşfedin ve etiketlere göre filtreleyin.',
    openGraph: {
        type: 'website'
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
            <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Etiketler</h3>
            <div className="mt-4 flex max-w-xl flex-wrap gap-1 font-mono">
                {tags.map((tag) => (
                    <Badge key={tag} href={`/tags/${tag}`}>
                        #{tag}
                    </Badge>
                ))}
            </div>

            <div className="mt-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                    {notes.map((note) => (
                        <NotePreview key={note.slug} note={note} />
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

export default Notes;
