"use client"
import React, {CSSProperties, useEffect, useRef} from 'react';
import Container from "components/Container";
import {DesktopNavigation, MobileNavigation} from "components/Navigation";
import {ThemeToggle} from "components/ThemeToggle";
import useIsClient from "hooks/useIsClient";
import Avatar from "components/Avatar";

const Header = () => {
    const isClient = useIsClient();

    const headerRef = useRef<HTMLDivElement | null>(null);
    let isInitial = useRef(true);

    const clamp = (number: number, a: number, b: number) => {
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        return Math.min(Math.max(number, min), max);
    };

    function setProperty(property: any, value: any) {
        document.documentElement.style.setProperty(property, value);
    }

    function removeProperty(property: any) {
        document.documentElement.style.removeProperty(property);
    }

    const updateHeaderStyles = () => {
        let {top, height} = headerRef.current!.getBoundingClientRect();
        let scrollY = clamp(window.scrollY, 0, document.body.scrollHeight - window.innerHeight);

        let downDelay = 0;
        let upDelay = 64;

        if (isInitial.current) {
            setProperty('--header-position', 'sticky');
        }

        setProperty('--content-offset', `${downDelay}px`);

        if (isInitial.current || scrollY < downDelay) {
            setProperty('--header-height', `${downDelay + height}px`);
            setProperty('--header-mb', `${-downDelay}px`);
        } else if (top + height < -upDelay) {
            let offset = Math.max(height, scrollY - upDelay);
            setProperty('--header-height', `${offset}px`);
            setProperty('--header-mb', `${height - offset}px`);
        } else if (top === 0) {
            setProperty('--header-height', `${scrollY + height}px`);
            setProperty('--header-mb', `${-scrollY}px`);
        }

        if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
            setProperty('--header-inner-position', 'fixed');
            removeProperty('--header-top');
            removeProperty('--avatar-top');
        } else {
            removeProperty('--header-inner-position');
            setProperty('--header-top', '0px');
            setProperty('--avatar-top', '0px');
        }
    }

    const updateStyles = () => {
        updateHeaderStyles();
        isInitial.current = false;
    }


    useEffect(() => {
        if (isClient) return;
        updateStyles();
        window.addEventListener('scroll', updateStyles, {passive: true});
        window.addEventListener('resize', updateStyles);
        return () => {
            window.removeEventListener('scroll', updateStyles, {passive: true} as any)
            window.removeEventListener('resize', updateStyles);
        }

    }, [])

    return (
        <header
            className="pointer-events-none relative z-50 flex flex-col"
            style={{
                height: 'var(--header-height)',
                marginBottom: 'var(--header-mb)',
            }}
        >
            <div
                ref={headerRef}
                className="top-0 z-10 h-16 pt-6"
                style={{position: 'var(--header-position)'} as unknown as CSSProperties}
            >
                <Container
                    className="top-[var(--header-top,theme(spacing.6))] w-full"
                    style={{ position: 'var(--header-inner-position)' } as unknown as React.CSSProperties}
                >
                    <div className="flex gap-4 ">
                        <div className="flex flex-1 ">
                            <Avatar />
                        </div>
                        <div className="flex flex-1 justify-end md:justify-center">
                            <MobileNavigation className="pointer-events-auto md:hidden"/>
                            <DesktopNavigation className="pointer-events-auto hidden md:block"/>
                        </div>
                        <div className="flex justify-end md:flex-1">
                            <div className="pointer-events-auto">
                                <ThemeToggle/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default Header;
