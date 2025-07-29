import {ReactNode} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Serhat Koçhan - Hakkında',
    description: 'Serhat Koçhan\'ın kişisel ve profesyonel yaşamı, deneyimleri, favori kitapları, videoları ve alıntıları. Frontend developer ve teknoloji tutkunu.',
    keywords: ['serhat koçhan', 'frontend developer', 'react', 'javascript', 'typescript', 'hakkında', 'deneyim'],
    openGraph: {
        title: 'Serhat Koçhan - Hakkında',
        description: 'Frontend developer ve teknoloji tutkunu Serhat Koçhan\'ın kişisel ve profesyonel yaşamı',
        type: 'website',
        url: 'https://serhatkochan.com/about',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Serhat Koçhan - Hakkında',
        description: 'Frontend developer ve teknoloji tutkunu Serhat Koçhan\'ın kişisel ve profesyonel yaşamı',
    }
};
const Layout = ({children}: Readonly<{ children: ReactNode }>) => {
    return children;
};

export default Layout;
