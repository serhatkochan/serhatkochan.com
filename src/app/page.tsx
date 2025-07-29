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
import Script from "next/script";

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_SSL_URL}`),
    title: 'Serhat Koçhan - Frontend Developer & Teknoloji Tutkunu',
    description: 'Serhat Koçhan\'ın kişisel web sitesi. React, JavaScript, TypeScript ile web uygulamaları geliştiren frontend developer. Notlar, projeler ve deneyimler.',
    keywords: ['serhat koçhan', 'frontend developer', 'react', 'javascript', 'typescript', 'web geliştirme', 'kişisel site'],
    authors: [{ name: 'Serhat Koçhan' }],
    creator: 'Serhat Koçhan',
    publisher: 'Serhat Koçhan',
    openGraph: {
        title: 'Serhat Koçhan - Frontend Developer & Teknoloji Tutkunu',
        description: 'React, JavaScript, TypeScript ile web uygulamaları geliştiren frontend developer. Notlar, projeler ve deneyimler.',
        type: 'website',
        url: 'https://serhatkochan.com',
        siteName: 'Serhat Koçhan',
        locale: 'tr_TR',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Serhat Koçhan - Frontend Developer & Teknoloji Tutkunu',
        description: 'React, JavaScript, TypeScript ile web uygulamaları geliştiren frontend developer.',
        creator: '@serhatkochan',
    },
    alternates: {
        canonical: 'https://serhatkochan.com',
    },
};

const Home = async () => {
    const notes = await notesApi.getNotes('desc', 5);
    
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Serhat Koçhan - Kişisel Web Sitesi",
        "url": "https://serhatkochan.com",
        "description": "Serhat Koçhan\'ın kişisel web sitesi. React, JavaScript, TypeScript ile web uygulamaları geliştiren frontend developer.",
        "author": {
            "@type": "Person",
            "name": "Serhat Koçhan"
        },
        "publisher": {
            "@type": "Person",
            "name": "Serhat Koçhan"
        },
        "inLanguage": "tr-TR",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://serhatkochan.com/notes?search={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };
    
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Serhat Koçhan",
        "url": "https://serhatkochan.com",
        "logo": "https://serhatkochan.com/assets/serhatkochan.jpeg",
        "sameAs": [
            "https://github.com/serhatkochan",
            "https://linkedin.com/in/serhatkochan",
            "https://twitter.com/serhatkochan"
        ],
        "founder": {
            "@type": "Person",
            "name": "Serhat Koçhan"
        },
        "description": "Frontend developer ve teknoloji tutkunu Serhat Koçhan\'ın kişisel web sitesi"
    };
    
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://serhatkochan.com"
            }
        ]
    };
    
    return (
        <>
            <Script
                id="website-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
            <Script
                id="organization-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />
            <Script
                id="breadcrumb-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
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