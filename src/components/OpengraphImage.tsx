import React from 'react';
import { ImageResponse } from '@vercel/og';

const OpengraphImage = async (note?: {title?: string; description?: string}): Promise<ImageResponse> => {
    const title = note?.title ||'Serhat Koçhan';
    const description = note?.description || 'Kişisel web sitesi.';
    return new ImageResponse(
        (
            <main tw="h-full w-full bg-[#FB2576] pb-1 flex flex-col">
                <div tw="w-full h-full flex flex-col items-start justify-start bg-zinc-900 text-zinc-100 p-8">
                    <div tw="self-end text-2xl text-zinc-500">serhatkochan.com</div>
                    <div tw="w-full mt-auto flex items-start justify-start">
                        <div tw="flex flex-col mt-auto max-w-2xl">
                            <h1 tw="text-5xl mt-auto">{title}</h1>
                            {description && <h2 tw="text-2xl text-zinc-200">{description}</h2>}
                        </div>
                        <img
                            tw="rounded-lg w-32 h-32 self-end ml-auto object-cover"
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
