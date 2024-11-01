"use client"

import Link from 'next/link';

import { PageTitle } from '../components/PageTitle';

export default function ServerError() {
    return (
        <>
            <div className="flex min-h-full flex-col pt-16 pb-12">
                <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-base font-semibold text-primary">500</p>
                            <PageTitle>Sunucu Hatası</PageTitle>
                            <p className="mt-2 text-base text-gray-500">
                                Üzgünüm, sunucumda bazı sorunlar var.
                            </p>
                            <div className="mt-6">
                                <Link href="/" className="text-base font-medium hover:text-primary">
                                    Anasayfaya dön
                                    <span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
