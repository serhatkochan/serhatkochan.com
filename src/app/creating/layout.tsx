import {ReactNode} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Serhat Koçhan - Projeler',
    description: 'Serhat Koçhan\'ın geliştirdiği projelerin yer aldığı sayfa. React, JavaScript, TypeScript ve diğer teknolojilerle oluşturduğu kişisel ve profesyonel çalışmalar.',
    keywords: ['projeler', 'react', 'javascript', 'typescript', 'web geliştirme', 'açık kaynak'],
    openGraph: {
        title: 'Serhat Koçhan - Projeler',
        description: 'React, JavaScript, TypeScript ve diğer teknolojilerle oluşturulan projeler',
        type: 'website',
        url: 'https://serhatkochan.com/creating',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Serhat Koçhan - Projeler',
        description: 'React, JavaScript, TypeScript ve diğer teknolojilerle oluşturulan projeler',
    }
};
const Layout = ({children}: Readonly<{ children: ReactNode }>) => {
    return children;
};

export default Layout;
