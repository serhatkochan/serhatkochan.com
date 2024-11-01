import React from 'react';
import Link from "next/link";
import Image from "next/image";
import AvatarImage from "../../public/assets/serhatkochan.jpeg";

const Avatar = () => {
    return (
        <div
            className="size-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
            <Link href="/" aria-label="Home" className="pointer-events-auto">
                <Image
                    src={AvatarImage}
                    alt=""
                    sizes="2.25rem"
                    className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 size-9"
                    priority
                />
            </Link>
        </div>
    );
};

export default Avatar;
