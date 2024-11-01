import {ReactNode} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Serhat Koçhan - Projeler',
    description: 'Serhat Koçhan web sitesi için oluşturulmuş Projeler sayfası. Oluşturduğum projeler burada bulunuyor.',
    openGraph: {
        title: 'Projeler',
        type: 'website'
    },
    twitter: {
        title: 'Projeler'
    }
};
const Layout = ({children}: Readonly<{ children: ReactNode }>) => {
    return children;
};

export default Layout;
