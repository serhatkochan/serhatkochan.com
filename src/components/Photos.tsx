"use client";
import clsx from "clsx";
import {AnimatePresence, motion} from "framer-motion";
import Image, {StaticImageData} from "next/image";
import {useState, useRef, useEffect, useCallback} from "react";

import {travelImages} from "images/travel";

const possibleRotations = [1.3, -1.3, 1.3, -1.3, 1.3, -1.3];

interface IPhoto {
    img: StaticImageData;
    title: string;
    alt: string;
    idx: number;
}

const Photo = ({img, title, alt, idx}: IPhoto) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <motion.div
            key={img.src}
            initial={{
                scale: 1,
                rotate: possibleRotations[idx % possibleRotations.length],
                opacity: 0,
            }}
            whileHover={{scale: 1.1, rotate: 0, transition: {duration: 0.2}}}
            whileInView={{opacity: 1, transition: {delay: idx / 100}}}
            viewport={{once: true}}
            onHoverStart={() => setIsVisible(true)}
            onHoverEnd={() => setIsVisible(false)}
            className={clsx(
                "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800"
            )}
        >
            <Image
                src={img}
                alt={alt}
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
                placeholder="blur"
            />
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 0.2}}}
                        exit={{opacity: 0}}
                        className="absolute inset-0 w-full bg-gradient-to-t from-black/75 via-black/0 flex items-end"
                    >
                        <h3 className="px-3 py-2 font-mono text-xs font-bold">{title}</h3>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const Photos = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
        setScrollLeft(sliderRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging || !sliderRef.current) return;
            const x = e.pageX - (sliderRef.current.offsetLeft || 0);
            const walk = (x - startX) * 1.5; // Sürükleme hızı
            sliderRef.current.scrollLeft = scrollLeft - walk;
        },
        [isDragging, startX, scrollLeft]
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div className="my-8">
            <div
                ref={sliderRef}
                className="hide-scrollbar -my-4 flex gap-8 overflow-y-auto py-4 px-8 cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                style={{userSelect: "none"}}
            >
                {travelImages.map((travelImage, index) => (
                    <Photo
                        key={travelImage.img.src}
                        img={travelImage.img}
                        title={travelImage.title}
                        alt={travelImage.alt}
                        idx={index}
                    />
                ))}
            </div>
        </div>
    );
};
