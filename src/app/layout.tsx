import {ReactNode} from "react";
import { Analytics } from '@vercel/analytics/react';
import type {Metadata} from "next";
import {GeistSans} from 'geist/font/sans';
import {ThemeProvider} from "next-themes";

import Header from "components/Header";
import clsx from "clsx";

import 'styles/index.css';
import 'styles/prism.css';
import {Footer} from "components/Footer";

export const metadata: Metadata = {
    title: "Serhat Koçhan - Kişisel Web Sitesi",
    description: 'Serhat Koçhan\'ın notlarını, projelerini ve favori araçlarını paylaştığı, kişisel ve profesyonel içeriklerin bulunduğu web sitesi.',
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className="h-screen antialiased" suppressHydrationWarning>
            <body className='flex flex-col h-full'>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <div
                        className={clsx(GeistSans.className, 'flex flex-col bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-300')}>
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
