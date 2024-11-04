import {ReactNode} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Serhat Koçhan - Projeler',
    description: 'Serhat Koçhan\'ın geliştirdiği projelerin yer aldığı Projeler sayfası. Kişisel ve profesyonel çalışmalarını burada keşfedin.',
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
