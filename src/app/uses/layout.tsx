import {ReactNode} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Serhat Koçhan - Araçlar',
    description: 'Serhat Koçhan\'ın web sitesindeki Araçlar sayfası. Kendi favori araçlarımı ve tavsiyelerimi burada bulabilirsiniz.',
    openGraph: {
        title: 'Araçlar',
        type: 'website'
    },
    twitter: {
        title: 'Araçlar',
    }
};
const Layout = ({children}: Readonly<{ children: ReactNode }>) => {
    return children;
};

export default Layout;
