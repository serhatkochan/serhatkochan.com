import {ReactNode} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Serhat Koçhan - Faydalı',
    description: 'Serhat Koçhan web sitesi için oluşturulmuş Faydalı sayfası. Faydalı olabileceğini düşündüğüm şeyler burada bulunuyor.',
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
