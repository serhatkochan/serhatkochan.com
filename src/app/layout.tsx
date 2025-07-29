import {ReactNode} from "react";
import { Analytics } from '@vercel/analytics/react';
import type {Metadata} from "next";
import {GeistSans} from 'geist/font/sans';
import {ThemeProvider} from "next-themes";
import Script from "next/script";

import Header from "components/Header";
import clsx from "clsx";

import 'styles/index.css';
import 'styles/prism.css';
import {Footer} from "components/Footer";

export const metadata: Metadata = {
    title: {
        default: "Serhat Koçhan - Fullstack Developer & Teknoloji Tutkunu",
        template: "%s | Serhat Koçhan"
    },
    description: 'Serhat Koçhan\'ın kişisel web sitesi. React, JavaScript, TypeScript, Java Spring Boot ile fullstack uygulamalar geliştiren yazılım geliştirici. Notlar, projeler ve deneyimler.',
    keywords: ['serhat koçhan', 'fullstack developer', 'react', 'javascript', 'typescript', 'java', 'spring boot', 'web geliştirme', 'mobil geliştirme', 'kişisel site'],
    authors: [{ name: 'Serhat Koçhan' }],
    creator: 'Serhat Koçhan',
    publisher: 'Serhat Koçhan',
    metadataBase: new URL(`${process.env.NEXT_SSL_URL}`),
    alternates: {
        canonical: 'https://serhatkochan.com',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="tr" className="h-screen antialiased" suppressHydrationWarning>
            <head>
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Serhat Koçhan",
                            "givenName": "Serhat",
                            "familyName": "Koçhan",
                            "url": "https://serhatkochan.com",
                            "image": "https://serhatkochan.com/assets/serhatkochan.jpeg",
                            "sameAs": [
                                "https://github.com/serhatkochan",
                                "https://linkedin.com/in/serhatkochan",
                                "https://twitter.com/serhatkochan"
                            ],
                            "jobTitle": "Frontend Developer",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "UFS Teknoloji",
                                "url": "https://www.ufsteknoloji.com.tr/"
                            },
                            "description": "React, JavaScript, TypeScript, Java Spring Boot ile fullstack uygulamalar geliştiren yazılım geliştirici",
                            "knowsAbout": ["React", "JavaScript", "TypeScript", "Java", "Spring Boot", "Web Development", "Mobile Development", "Fullstack Development", "Next.js", "Node.js", "React Native"],
                            "alumniOf": {
                                "@type": "Organization",
                                "name": "Düzce Üniversitesi",
                                "url": "https://www.duzce.edu.tr/"
                            },
                            "hasOccupation": {
                                "@type": "Occupation",
                                "name": "Frontend Developer",
                                "occupationLocation": {
                                    "@type": "Place",
                                    "name": "Kocaeli, Türkiye"
                                }
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Kocaeli",
                                "addressCountry": "TR"
                            },
                            "nationality": "Turkish",
                            "birthPlace": {
                                "@type": "Place",
                                "name": "Türkiye"
                            },
                            "knowsLanguage": ["Turkish", "English"],
                            "hasCredential": {
                                "@type": "EducationalOccupationalCredential",
                                "credentialCategory": "Bachelor's Degree",
                                "recognizedBy": {
                                    "@type": "Organization",
                                    "name": "Düzce Üniversitesi"
                                }
                            }
                        })
                    }}
                />
            </head>
            <body className='flex flex-col h-full bg-zinc-50 dark:bg-zinc-900'>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <div
                        className={clsx(GeistSans.className, 'flex flex-col bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300')}>
                        <div className="fixed inset-0 flex justify-center sm:px-8">
                            <div className="flex w-full max-w-7xl lg:px-8">
                                <div
                                    className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"/>
                            </div>
                        </div>
                        <Header/>
                        <main className="z-10">
                            {children}
                            <Analytics />
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
