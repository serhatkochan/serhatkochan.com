import {ReactNode} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Serhat Koçhan - Araçlar',
    description: 'Serhat Koçhan web sitesi için oluşturulmuş Araçlar sayfası. Kullanmayı tercih ettiğim araçlar burada bulunuyor.',
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
