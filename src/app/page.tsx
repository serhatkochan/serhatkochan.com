import React from 'react';
import {Metadata} from 'next'
import Container from "components/Container";
import {PageTitle} from "components/PageTitle";
import {SocialLink} from "components/SocialLink";
import {About, Name, SocialMedia} from "data/lifeApi";
import {NotePreview} from "components/notes/NotePreview";
import {Resume} from "components/Resume";
import {notesApi} from "lib/notesApi";
import {Photos} from "components/Photos";

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_SSL_URL}`),
    title: 'Serhat Koçhan - Kişisel Web Sitesi',
    description: 'Serhat Koçhan\'ın notlarını, projelerini ve favori araçlarını paylaştığı, kişisel ve profesyonel içeriklerin bulunduğu web sitesi.',
    openGraph: {
        type: 'website'
    }
};

const Home = async () => {
    const notes = await notesApi.getNotes('desc', 5);
    return (
        <>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <PageTitle>{Name}</PageTitle>
                    <p className="mt-6 max-w-2xl text-base text-balance">{About}</p>
                    <div className="mt-6 flex gap-6">
                        {SocialMedia.map((socialProfile) => (
                            <SocialLink
                                key={socialProfile.name}
                                aria-label={`Follow on ${socialProfile.name}`}
                                href={socialProfile.link}
                                icon={socialProfile.icon}
                            />
                        ))}
                    </div>
                </div>
            </Container>
            <Photos/>
            <Container className="mt-12">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        {notes.map((blogPost) => (
                            <NotePreview key={blogPost.slug} note={blogPost} dense/>
                        ))}
                    </div>
                    <div className="lg:ml-auto space-y-10 lg:pl-12 xl:pl-20">
                        <Resume/>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;
