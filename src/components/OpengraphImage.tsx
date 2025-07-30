import React from 'react';
import { ImageResponse } from '@vercel/og';

const OpengraphImage = async (note?: {title?: string; description?: string}): Promise<ImageResponse> => {
    const title = note?.title ||'Serhat Koçhan';
    const description = note?.description || 'Kişisel web sitesi.';
    return new ImageResponse(
        (
            <main tw="h-full w-full bg-[#FB2576] pb-1 flex flex-col">
                <div tw="w-full h-full flex flex-col items-start justify-between bg-zinc-900 text-zinc-100 p-16">
                    <div tw="self-end text-2xl text-zinc-500">serhatkochan.com</div>
                    <div tw="w-full flex items-end justify-between gap-6">
                        <div tw="flex flex-col flex-1 pr-6">
                            <h1 tw="text-4xl leading-tight">{title}</h1>
                            {description && <h2 tw="text-xl text-zinc-200 mt-3 leading-relaxed">{description}</h2>}
                        </div>
                        <img
                            tw="rounded-lg w-20 h-20 flex-shrink-0 object-cover"
                            src={`${process.env.NEXT_SSL_URL}/assets/og-avatar.jpeg`}
                            alt="Avatar"
                        />
                    </div>
                </div>
            </main>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'Inter',
                    data: await fetch(new URL('../fonts/Inter.ttf', import.meta.url)).then((res) =>
                        res.arrayBuffer()
                    ),
                    style: 'normal',
                },
            ],
        },
    );
};

export default OpengraphImage;
