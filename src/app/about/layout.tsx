import {ReactNode} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Serhat Koçhan - Hakkında',
    description: 'Serhat Koçhan\'ın kendisi hakkında bilgi verdiği, kişisel ve profesyonel yaşamına dair detayların paylaşıldığı Hakkında sayfası.',
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
