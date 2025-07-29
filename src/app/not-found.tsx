import Link from 'next/link';

import { PageTitle } from 'components/PageTitle';
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı - 404",
  description: "Aradığınız sayfa bulunamadı. Serhat Koçhan\'ın kişisel web sitesinde gezinmeye devam edin.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
      <div className="flex flex-col pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-primary">404</p>
              <PageTitle>Sayfa Bulunamadı.</PageTitle>
              <p className="mt-2 text-base text-gray-500">
                Üzgünüz, aradığınız sayfayı bulamadık.
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
  );
}