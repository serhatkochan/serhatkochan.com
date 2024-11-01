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
        &quot;Quantum-Level Senior Developer&quot;
    </>
);
export const AboutExtended = `Kocaeli'de yaşıyorum, Düzce Üniversitesi Bilgisayar Mühendisliği mezunuyum. Motosiklet ile yolculuk etmeyi, satranç oynamayı, kitap okumayı ve hayal gücümü zorlayan şeyler yaratmayı seviyorum.`;

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
        name: 'Stoacının Günlüğü',
        link: 'https://amzn.eu/d/5TuipIG',
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
        content: 'İki hayatımız vardır ve ikincisi, sadece bir tane hayatımız olduğunu fark ettiğimizde başlar.',
        author: '― Confucius',
    },
    {
        content: 'Bir dağı yerinden oynatan adam, küçük taşları taşıyarak işe başlar.',
        author: '― Confucius',
    },
    {
        content: 'Bir soru soran kişi bir dakikalığına aptaldır, soru sormayan ömür boyu aptaldır.',
        author: '― Confucius',
    },
    {
        content:
            "Yirmi yıl sonra, yapmadıkların için, yaptıklarından daha fazla hayal kırıklığına uğrayacaksın. Bu yüzden bağlarını çöz. Güvenli limandan ayrıl. Rüzgarları yakala. Keşfet. Hayal et. Bul.",
        author: '― Mark Twain',
    },
    {
        content:
            "Diğer insanların başarman gerektiğini düşündüğü şeyleri başarmak zorunda değilsin. Ben de onların beklediği gibi olmak zorunda değilim. Bu onların hatası, benim başarısızlığım değil.",
        author: '― Mark Twain',
    },
    {
        content:
            'Düşüncelerine dikkat et, onlar sözlerin olur; sözlerine dikkat et, onlar eylemlerin olur; eylemlerine dikkat et, onlar alışkanlıkların olur; alışkanlıklarına dikkat et, onlar karakterin olur; karakterine dikkat et, o kaderin olur.',
        author: '― Laozi',
    },
    {
        content: 'Cehennemden geçiyorsan, devam et.',
        author: '― Winston S. Churchill',
    },
    {
        content: 'Tavır, küçük bir şeydir ama büyük fark yaratır.',
        author: '― Winston S. Churchill',
    },
    {
        content:
            'Düşünmek kolaydır. Hareket etmek zordur. Ancak dünyadaki en zor şey, düşüncelerine uygun şekilde hareket etmektir.',
        author: '― Johann Wolfgang von Goethe',
    },
    {
        content: 'Bir insanın korkması gereken şey ölüm değil, hiç yaşamaya başlamamış olmaktır.',
        author: '― Marcus Aurelius',
    },
    {
        content: 'Eğer doğru değilse, yapma; eğer gerçek değilse, söyleme.',
        author: '― Marcus Aurelius',
    },
    {
        content:
            'Zihnin üzerinde gücün var - dış olaylar üzerinde değil. Bunu fark edersen, güç bulacaksın.',
        author: '― Marcus Aurelius',
    },
    {
        content: 'Hayatının mutluluğu, düşüncelerinin kalitesine bağlıdır.',
        author: '― Marcus Aurelius',
    },
    {
        content:
            'Eğer dışarıdan gelen bir şey seni üzüyor ise, acı, şeyin kendisinden değil, ona verdiğin değerden kaynaklanır; ve bunu her an geri alma gücüne sahipsin.',
        author: '― Marcus Aurelius',
    },
    {
        content: 'Yerden yıldızlara giden kolay bir yol yoktur.',
        author: '― Seneca',
    },
    {
        content: 'Gerçekte değil, hayal gücümüzde daha sık acı çekeriz.',
        author: '― Seneca',
    },
] as const;

export const Tools = {
    Workstation: {
        title: 'İş İstasyonu',
        list: [
            {
                title: 'Asus Rog Strix Z790-A Gaming WiFi 7800MHz',
                description: 'Ana Kart',
                href: 'https://amzn.eu/d/97kv0RL',
            },
            {
                title: 'Intel Core i9-13900K 5.8GHz',
                description: 'İşlemci',
                href: 'https://amzn.eu/d/amMplal',
            },
            {
                title: 'ASUS ROG STRIX LC II 280 ARGB ',
                description: "Sıvı Soğutma",
                href: 'https://amzn.eu/d/bOJ8QUM',
            },
            {
                title: 'ASUS GeForce TUF RTX 4080 16GB',
                description: 'Ekran Kartı',
                href: 'https://amzn.eu/d/foI6ZMy',
            },
            {
                title: 'Samsung 990 PRO',
                description: 'M.2',
                href: 'https://amzn.eu/d/dCgRCLJ',
            },
            {
                title: 'ASUS ROG-STRIX-1000G',
                description: 'Güç Kaynağı',
                href: 'https://amzn.eu/d/1u7nRTx',
            },
            {
                title: 'ASUS TUF Gaming GT502 V2 White',
                description: 'Kasa',
                href: 'https://amzn.eu/d/86hRGMt',
            },
            {
                title: 'ASUS 27" TUF GAMING VG27AQZ 165Hz 1ms WQHD',
                description: 'Ana Monitör',
                href: 'https://www.gaming.gen.tr/urun/174790/asus-tuf-gaming-vg27aqz-27-inc-165hz-1ms-wqhd-adaptive-sync-ips-gaming-monitor/'
            },
            {
                title: 'Asus 23.6" Tuf Gaming VG24VQ 144Hz 1ms Curved',
                description: "Yan Monitör",
                href: "https://www.hepsiburada.com/asus-tuf-gaming-vg24vq-23-6-144hz-1ms-hdmi-display-freesync-curved-monitor-p-HBV00000R2YJX"
            },
            {
                title: 'Elgato Key Light Air',
                description: `Studio ışığı için ideal.`,
                href: 'https://amzn.eu/d/12E2u4G',
            },
            {
                title: 'Philips Hue Iris',
                description: 'Güçlü Philips ekosistemi ve ışık kalitesi',
                href: 'https://amzn.eu/d/hJJNiSs'
            },
            {
                title: 'Philips Hue Play',
                description: 'Güçlü Philips ekosistemi ve ışık kalitesi',
                href: 'https://amzn.eu/d/f27XSQ2'
            },
        ]
    },
    Software: {
        title: 'Yazılım',
        list: [
            {
                title: 'Intellij IDEA',
                description: `WebStorm üzerinde gelen bütün özelliklere ek olarak üzerinde gelen Veritabanı konfigürasyonu ve Java projelerim için vazgeçemediğim bir ide.`,
                href: 'https://www.jetbrains.com/idea/',
            },
            {
                title: 'Figma',
                description: `Hedefim tasarımcı olmak değil ama güçlü bir şekilde kullanmaya çalışıyorum.`,
                href: 'https://www.figma.com/',
            },
            {
                title: 'Notion',
                description: `Aklıma gelen her şey için ilk uğradığım yer burası.`,
                href: 'https://www.notion.so/',
            },
        ],
    }
} as const;

export const UsefulTools = [
    {
        title: 'clip-path maker',
        description: 'Karmaşık kırpma işlemlerinizi hızlıca yapın.',
        href: 'https://bennettfeely.com/clippy/',
    },
    {
        title: 'Filter Generator',
        description: 'Karmaşık CSS filtrelerini zahmetsizce oluşturun ve uygulayın.',
        href: 'https://bennettfeely.com/clippy/'
    },
    {
        title: 'Glow Generator',
        description: 'Özel parlama efektinizle tasarımlarınıza ışıltı katın.',
        href: 'https://cssbud.com/css-generator/css-glow-generator/'
    },
    {
        title: 'Glassmorphism Generator',
        description: 'Cam efektiyle modern bir görünüm kazandırın.',
        href: 'https://css.glass/'
    },
    {
        title: 'Neumorphism Generator',
        description: 'Yumuşak gölgelerle 3D görünüm oluşturun.',
        href: 'https://neumorphism.io/',
    },
    {
        title: 'Custom Shape Dividers',
        description: 'Özel şekillerle dalga efekti oluşturun.',
        href: 'https://www.shapedivider.app/'
    },
    {
        title: 'Blobmaker',
        description: 'Hayal gücünüzdeki damla efektleriyle tasarımlarınızı zenginleştirin.',
        href: 'https://www.blobmaker.app/'
    },
    {
        title: 'Email Template Send and Test',
        description: 'Email şablonlarınızı gönderin ve test edin.',
        href: 'https://app.postdrop.io/'
    },
    {
        title: 'Tailwind CSS Color Generator',
        description: 'Tailwind CSS için renk paletleri hızlıca oluşturun.',
        href: 'https://uicolors.app/create'
    },
    {
        title: 'React Shimmer Effect',
        description: 'Modern React projelerine shimmer yükleme efektleri ekleyin.',
        href: 'https://www.npmjs.com/package/react-shimmer-effect'
    },
    {
        title: 'React Email',
        description: 'React ile email şablonlarını kolayca oluşturun ve yönetin.',
        href: 'https://react.email/docs/introduction'
    },
    {
        title: 'Notion Number',
        description: 'Notion panolarınıza dinamik efekt ile sayılar ekleyin.',
        href: 'https://motion-number.barvian.me/'
    },
    {
        title: 'Nes css',
        description: 'Retro video oyun stilinde CSS tasarımları yapın.',
        href: 'https://nostalgic-css.github.io/NES.css/'
    }

] as const
