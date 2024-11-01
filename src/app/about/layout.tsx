import {ReactNode} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Serhat Koçhan - Hakkında',
    description: 'Serhat Koçhan web sitesi için oluşturulmuş Hakkında sayfası. Kendimden bahsettiğim bölüm burada bulunuyor.',
    openGraph: {
        title: 'Hakkında',
        type: 'website'
    },
    twitter: {
        title: 'Hakkında'
    }
};
const Layout = ({children}: Readonly<{ children: ReactNode }>) => {
    return children;
};

export default Layout;
