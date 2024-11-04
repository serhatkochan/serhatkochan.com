import {ReactNode} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Serhat Koçhan - Faydalı',
    description: 'Serhat Koçhan\'ın web sitesindeki Faydalı sayfası. İlginizi çekebilecek ve faydalı bulabileceğiniz içerikler burada yer alıyor.',
    openGraph: {
        title: 'Faydalı',
        type: 'website'
    },
    twitter: {
        title: 'Faydalı',
    }
};
const Layout = ({children}: Readonly<{ children: ReactNode }>) => {
    return children;
};

export default Layout;
