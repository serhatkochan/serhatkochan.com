import React from 'react';
import {Metadata} from 'next'
import {notesApi} from "lib/notesApi";
import Script from "next/script";
import { AnimatedHomeContent } from './AnimatedHomeContent';

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_SSL_URL}`),
    title: 'Serhat Koçhan - Fullstack Developer & Teknoloji Tutkunu',
    description: 'Serhat Koçhan\'ın kişisel web sitesi. React, JavaScript, TypeScript, Java Spring Boot ile fullstack uygulamalar geliştiren yazılım geliştirici. Notlar, projeler ve deneyimler.',
    keywords: ['serhat koçhan', 'fullstack developer', 'react', 'javascript', 'typescript', 'java', 'spring boot', 'web geliştirme', 'mobil geliştirme', 'kişisel site'],
    authors: [{ name: 'Serhat Koçhan' }],
    creator: 'Serhat Koçhan',
    publisher: 'Serhat Koçhan',
    openGraph: {
        title: 'Serhat Koçhan - Fullstack Developer & Teknoloji Tutkunu',
        description: 'React, JavaScript, TypeScript, Java Spring Boot ile fullstack uygulamalar geliştiren yazılım geliştirici. Notlar, projeler ve deneyimler.',
        type: 'website',
        url: 'https://serhatkochan.com',
        siteName: 'Serhat Koçhan',
        locale: 'tr_TR',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Serhat Koçhan - Fullstack Developer & Teknoloji Tutkunu',
        description: 'React, JavaScript, TypeScript, Java Spring Boot ile fullstack uygulamalar geliştiren yazılım geliştirici.',
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
        "description": "Serhat Koçhan\'ın kişisel web sitesi. React, JavaScript, TypeScript, Java Spring Boot ile fullstack uygulamalar geliştiren yazılım geliştirici.",
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
        "description": "Fullstack developer ve teknoloji tutkunu Serhat Koçhan\'ın kişisel web sitesi"
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
            <AnimatedHomeContent notes={notes} />
        </>
    );
};

export default Home;