"use client"
import React, {useMemo} from 'react';
import AvatarImage from "../../../public/assets/serhatkochan.jpeg";
import Container from "components/Container";
import Image from "next/image";
import {PageTitle} from "components/PageTitle";
import {
    AboutExtended,
    Blogs,
    Books,
    Quotes,
    SocialMedia,
    VideosWorthWatching
} from "data/lifeApi";
import {SocialLink} from "components/SocialLink";
import {Section} from "components/Section";
import {ExternalLink} from "components/ExternalLink";
import {Quote} from "components/Quote";

const Page = () => {
    const randomQuote = useMemo(() => Quotes[Math.floor(Math.random() * Quotes.length)], []) as {content: string, author: string};
    
    const experienceYears = useMemo(() => {
        const startDate = new Date('2021-06-01');
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
        const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
        return Math.round(diffYears);
    }, []);

    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={AvatarImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <PageTitle>Merhaba, Ben Serhat Koçhan.</PageTitle>
                    <div className="mt-6 text-base">{AboutExtended}</div>
                    <div className="mt-6 flex gap-6">
                        {SocialMedia.map((socialProfile) => (
                            <SocialLink
                                key={socialProfile.name}
                                aria-label={`Follow on ${socialProfile.name}`}
                                href={socialProfile.link}
                                icon={socialProfile.icon}
                            />
                        ))}
                    </div>

                    <Section>
                        <Section.Title as="h2">İş Deneyimi</Section.Title>
                        <Section.Content>
                            Kod yazmanın ve problemlere çözüm üretmenin heyecanını erken yaşta keşfettim. İlk çok sayfalı web sitemi, 9 yaşında HTML ve CSS kullanarak, metin belgesiyle oluşturdum. Lise yıllarımda bu ilgi, yazılımın görünen yüzünden daha derinine, ağların ve sistemlerin çalışma mimarisine yöneldi. Mevcut sistemlerin sınırlarını test etme ve güvenlik katmanlarını anlama merakıyla çeşitli denemeler yaptım. Üniversite eğitimim ise bu temeli akademik bir disiplinle birleştirdi; ESP32 ile gömülü sistemler ve nesnelerin interneti (IoT) projeleri geliştirirken, aynı zamanda Java Spring Boot ile güçlü sunucu tarafı uygulamaları ve React ile modern kullanıcı arayüzleri inşa ettim. Teknolojiye olan tutkum ve sınırsız öğrenme arzusuyla, her geçen gün kendimi bu alanda daha da geliştirmekteyim.
                            <br/>
                            <br/>
                            Yaklaşık {experienceYears} yıllık tam zamanlı çalışma deneyimim var. Şu anda{' '}
                            <ExternalLink href={'https://www.ufsteknoloji.com.tr/'}>UFS Teknoloji</ExternalLink>{' '}
                            şirketinde Frontend developer olarak React.js, JavaScript ve TypeScript kullanarak web
                            uygulamaları geliştiriyorum. İş hayatı dışında çeşitli projelerin oluşturulması, review ve refactor edilmesi süreçlerinde
                            de aktif olarak rol alıyorum.
                            <br/>
                            <br/>
                            Eğer benimle çalışmak isterseniz, bana{' '}
                            <ExternalLink href="mailto:serhatkochan@hotmail.com.tr">e-posta</ExternalLink>{' '}ile
                            ulaşabilirsiniz.
                        </Section.Content>
                    </Section>
                    <Section>
                        <Section.Title as="h2">İzlemeye değer videolar</Section.Title>
                        <Section.Content>
                            <ul className="mt-1 list-disc list-inside">
                                {VideosWorthWatching.map((video) => (
                                    <li key={video.name}>
                                        <ExternalLink href={video.link}>{video.name}</ExternalLink>
                                    </li>
                                ))}
                            </ul>
                        </Section.Content>
                    </Section>
                    <Section>
                        <Section.Title as="h2">Yeniden okunmaya değer kitaplar</Section.Title>
                        <Section.Content>
                            <ul className="mt-1 list-disc list-inside">
                                {Books.map((book) => (
                                    <li key={book.name}>
                                        <ExternalLink href={book.link}>{book.name}</ExternalLink>
                                    </li>
                                ))}
                            </ul>
                        </Section.Content>
                    </Section>
                    <Section>
                        <Section.Title as="h2">Takip ettiğim bloglar</Section.Title>
                        <Section.Content>
                            <ul className="mt-1 list-disc list-inside">
                                {Blogs.map((blog) => (
                                    <li key={blog.name}>
                                        <ExternalLink href={blog.link}>{blog.name}</ExternalLink>
                                    </li>
                                ))}
                            </ul>
                        </Section.Content>
                    </Section>
                    <Section>
                        <Section.Title as="h2">Düşünmeye değer bir alıntı</Section.Title>
                        <Section.Content>
                            <div className="mt-8">
                                <Quote quote={randomQuote.content} author={randomQuote.author} />
                            </div>
                        </Section.Content>
                    </Section>
                </div>
            </div>
        </Container>
    );
};

export default Page;
