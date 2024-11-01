"use client";
import React from 'react';

import { NavLink, NavigationItems } from './Navigation';

export const Footer = () => {
  return (
      <footer className="mt-32">
        <div className="sm:px-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:flex-wrap">
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {NavigationItems.map((item) => (
                          <NavLink key={item.href} href={item.href}>
                            {item.name}
                          </NavLink>
                      ))}
                    </div>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500 text-center sm:text-left">
                      &copy; {new Date().getFullYear()} Serhat Koçhan. Tüm Hakları Saklıdır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};
