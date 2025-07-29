import {GitHubIcon} from 'components/icons/GitHubIcon';
import {InstagramIcon} from 'components/icons/InstagramIcon';
import {XIcon} from 'components/icons/XIcon';
import UFSTeknolojiLogo from 'images/logos/ufs-teknoloji.png';
import AltinaySavunmaLogo from 'images/logos/altinay.png';
import SKLogo from 'images/logos/sk.png';
import {LinkedInIcon} from 'components/icons/LinkedInIcon';

export const Name = 'Serhat Koçhan';

export const About = (
    <>
        &quot;Quantum-Level Senior Developer, Prompt Whisperer&quot;
    </>
);
export const AboutExtended = `Kocaeli'de yaşıyorum, Düzce Üniversitesi Bilgisayar Mühendisliği mezunuyum. Seyahat etmeyi, satranç oynamayı, kitap okumayı ve hayal gücümü zorlayan şeyler yaratmayı seviyorum.`;

export type Project = {
    title: string;
    techStack: string[];
    description: string;
    logo: any;
    link?: {
        label: string;
        href: string;
    };
};

export const MyCurrentProjects: Project[] = [
    {
        title: 'Nurse Shift Manager',
        techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind', 'Java', 'Spring Boot', 'PostgreSQL'],
        description: 'Hemşireler için spesifik şekilde toplantı planlarını oluşturabilecekleri sistem.',
        logo: SKLogo,
    },
    {
        title: 'serhatkochan.com / 2024',
        techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind', 'Notion API'],
        description: 'Kişisel web sitesi, Next.js ve Typescript ile birlikte Notion API kullanılarak oluşturuldu.',
        logo: SKLogo,
        link: {
            label: 'github.com',
            href: 'https://github.com/serhatkochan/serhatkochan.com',
        },
    },
];

export const MyPastProjects: Project[] = [
    {
        title: 'React.js CRA Template',
        techStack: ['React.js', 'JavaScript', 'React Router', 'Redux Saga', 'i18next', 'Eslint', 'Axios'],
        description: 'React.js için CRA kullanıldığı zaman hızlı bir başlangıç için geliştirdiğim npm paketi.',
        logo: SKLogo,
        link: {
            label: 'npmjs.com',
            href: 'https://www.npmjs.com/package/cra-template-all-in-one'
        }
    },
    {
        title: 'Kişi Bilgi Sistemi',
        techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Maven', 'Microservices'],
        description: 'QR Kodu ile birlikte çalışan kişisel bilgi sistemi, kişinin seçtiği taşıtlara ait bilgileri gösterirmesi ve ilgili kişiyi bilgilendirme amaçlandı.',
        logo: SKLogo,
        link: {
            label: 'github.com',
            href: 'https://github.com/serhatkochan/person-information-system-with-qr-code'
        }
    },
    {
        title: 'serhatkochan.com / 2021',
        techStack: ['PHP', 'MySQL', 'Bootstrap'],
        description: 'Kişisel web sitesi, PHP ve Bootstrap tercih edildi.',
        logo: SKLogo,
        link: {
            label: 'github.com',
            href: 'https://github.com/serhatkochan/web-page-2021-serhatkochan.com',
        },
    },
    {
        title: 'Toplantı Yönetim Sistemi',
        techStack: ['PHP', 'Jquery', 'JavaScript', 'Bootstrap', 'PHPMailler', 'FullCalendar'],
        description: 'Outlook ile senkronize çalışan toplantı yönetim uygulaması.',
        logo: SKLogo,
        link: {
            label: 'github.com',
            href: 'https://github.com/serhatkochan/Outlook-PHP-FullCalendar-PHPMailler-Toplanti-Olusturma-Uygulamasi'
        }
    }
];

export const SocialMedia = [
    {name: 'Twitter', link: 'https://twitter.com/serhatkochan_', icon: XIcon},
    {name: 'Instagram', link: 'https://www.instagram.com/serhatkochan_/', icon: InstagramIcon},
    {name: 'Github', link: 'https://github.com/serhatkochan', icon: GitHubIcon},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/serhatkochan', icon: LinkedInIcon},
] as const;

export const Work = [
    {
        company: 'UFS Teknoloji',
        title: 'Frontend Developer',
        logo: UFSTeknolojiLogo,
        start: '06.2022',
        end: 'Halen',
    },
    {
        company: 'UFS Teknoloji',
        title: 'Software Developer - Stajyer',
        logo: UFSTeknolojiLogo,
        start: '02.2022',
        end: '05.2022',
    },
    {
        company: 'Altınay Savunma Teknolojileri',
        title: 'Software Developer - Stajyer',
        logo: AltinaySavunmaLogo,
        start: '06.2021',
        end: '07.2021',
    },
] as const;

export const Books = [
    {
        name: 'Tongue Fu',
        link: 'https://amzn.eu/d/8aOkNpE',
    },
    {
        name: 'Pür Dikkat',
        link: 'https://amzn.eu/d/0h5zWG5',
    },
    {
        name: 'Atomik Alışkanlıklar',
        link: 'https://amzn.eu/d/esnfZ75',
    },
] as const;

export const VideosWorthWatching = [
    {
        name: 'Yazılım (gerçekten) size göre mi?',
        link: 'https://www.youtube.com/watch?v=meXBHDGEpBc'
    },
    {
        name: 'Accessibility Nedir?',
        link: 'https://www.youtube.com/watch?v=cDBocYbOalk',
    },
] as const;

export const Blogs = [
    {
        name: 'Tayfun Erbilen',
        link: 'https://www.erbilen.net/',
    },
    {
        name: 'Bora Kaşmer',
        link: 'https://www.borakasmer.com/',
    },
    {
        name: 'Anthony Fu',
        link: 'https://antfu.me/'
    }
] as const;

export const Quotes = [
    {
        content: 'En iyi, iyinin düşmanıdır.',
        author: '― Voltaire',
    },
    {
        content: 'Tatmin edici sonuçların izlediği davranışlar tekrarlanma eğilimi gösterir',
        author: '― Thorndike',
    },
    {
        content: 'Arzu başlatır. Haz sürdürür. İstemek ve beğenmek davranışın itici gücüdür. Bir şey sizde arzu uyandırmıyorsa onu yapmanız için hiçbir neden yoktur. Arzu ve istek bir davranışı başlatan şeylerdir. Ama bir şey keyifli değilse onu tekrarlamak için bir nedeniniz olmaz. Haz ve tatmin, davranışı sürdüren şeylerdir. Motive hissetmek sizi eyleme geçirir. Başarılı hissetmek ise o eylemi tekrarlamanızı sağlar.',
        author: '― Atomik Alışkanlıklar',
    },
    {
        content: 'Hiç kimse akıl almak istemez, istedikleri sadece teyit edilmektir',
        author: '― John Steinbeck',
    },
    {
        content: 'İncelik, düşman yaratmadan sözünü söyleyebilme sanatıdır.',
        author: '― Anonim',
    },
    {
        content: 'Kuvvetlerle mücadele etmeyin, onları kullanın.',
        author: '― R. Buckminster Fuller',
    },
    {
        content: 'Başkaları hakkında olumsuz konuşmak kendimizi övmenin onursuz bir yoludur.',
        author: '― Will Durant',
    },
    {
        content: 'Bilgeliğin zirvesi bugünde yaşamak, geleceği planlamak ve geçmişten kar sağlamaktır.',
        author: '― Anonim',
    },
    {
        content: 'Eğitimin sırrı öğrencilere saygı duymakta yatar.',
        author: '― Ralph Waldo Emerson',
    },
    {
        content: 'Hata bir öğretmendir, acımasızdır ama en iyisidir. Hatalarınızı sizin için çalışır hale getirin.',
        author: '― Tongue Fu',
    },
    {
        content: 'Öğretmen olmayı arzu edenlerin gerçek amacı kendi görüşlerini aktarmak değil, kafaları tutuşturmak olmalıdır.',
        author: '― Frederick Robertson',
    },
    {
        content: 'Eğer elinizdeki tek alet bir çekiçse, her problemi bir çivi olarak görmeye başlarsınız.',
        author: '― Abraham Maslow',
    },
    {
        content: 'Kendinizi yükseltmek istiyorsanız, başka birisini yükseltin.',
        author: '― Booker T. Washington',
    },
    {
        content: 'Eylem, umutsuzluğa kapılmanın karşı kutbudur.',
        author: '― Joan Baez',
    },
    {
        content: 'Size başarının değil ama başarısızlığın formülünü verebilirim: Herkese hoş görünmeye çalışın.',
        author: '― Bill Cosby',
    },
    {
        content: 'Dünyanın yarısı söyleyecek bir şeyi olan ama söyleyemeyen, öteki yarısı da söyleyecek bir şeyi olmayan ama durmadan konuşan insanlardan oluşur.',
        author: '― Robert Frost',
    },
    {
        content: 'Üzerine gittiğiniz her şeyi değiştiremezsiniz, ama üzerine gitmediğiniz şeyleri hiç değiştiremezsiniz.',
        author: '― John. F. Kennedy',
    },
    {
        content: 'Eğer herhangi dışsal bir olgu size sıkıntı veriyorsa, çektiğiniz acı o şeyden değil, sizin ona ilişkin tasavvurlarınızdan kaynaklanıyordur; ve siz her an bunu iptal etme gücüne sahipsinizdir.',
        author: '― Marcus Aurelius',
    },
    {
        content: 'Kalite arzu ediyorsanız, ona sahipmişsiniz gibi davranın. \'-mış gibi\' tekniğini deneyin.',
        author: '― William James',
    },
    {
        content: 'Bilmek yetmez, uygulamamız gerekir. İstemek yetmez, yapmamız gerekir.',
        author: '― Johann Goethe',
    },
    {
        content: 'İlk seferde başaramadıysanız, ortalamanın üzerindesiniz demektir.',
        author: '― Anonim',
    },
    {
        content: 'Mutluluk bir amaç değildir. Bir yan üründür.',
        author: '― Eleanor Roosevelt',
    },
    {
        content: 'En büyük zayıflığımız kolay vazgeçmemizdir. Başarının en emin yolu her zaman bir kere daha denemektir.',
        author: '― Thomas Edison',
    },
    {
        content: 'Yaşamınızı değiştirmek istiyorsanız hemen başlayın, hiçbir istisnaya izin vermeyin, atak olun.',
        author: '― William James',
    },
] as const;
