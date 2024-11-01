import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Serhat Koçhan Kişisel Web Sitesi',
        short_name: 'Serhat Koçhan',
        description: 'Serhat Koçhan için oluşturulmuş, notlar, hakkında, araçlar, faydalı ve kullanılabilir bağlantıların olduğu kişisel web sitesi.',
        start_url: '/',
        display: 'standalone',
        background_color: '#18181b',
        theme_color: '#18181b',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
