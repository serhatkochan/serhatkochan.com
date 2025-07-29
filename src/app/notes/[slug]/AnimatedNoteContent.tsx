"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { XIcon } from "components/icons/XIcon";
import { NotionBlockRenderer } from "components/notion/NotionBlockRenderer";

interface AnimatedNoteContentProps {
  note: any;
  noteContent: any;
  url: string;
}

export const AnimatedNoteContent = ({ note, noteContent, url }: AnimatedNoteContentProps) => {
  return (
    <motion.div 
      className="pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      {
        note.inProgress && (
          <motion.h2 
            className="text-2xl font-semibold text-primary dark:text-primary"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            Bu makale üzerinde hala çalışılıyor. Lütfen daha sonra tekrar kontrol edin!
          </motion.h2>
        )
      }
      { !note.inProgress && noteContent?.map((block: any, index: number) => (
        <motion.div
          key={block.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.4, 
            ease: "easeOut",
            delay: 0.6 + (index * 0.1) // Her blok için 0.1 saniye gecikme
          }}
        >
          <NotionBlockRenderer block={block}/>
        </motion.div>
      ))}

      <motion.hr
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 2.0 }}
      />

      <motion.a
        className="group block text-xl font-semibold md:text-3xl no-underline"
        href={`http://x.com/share?text=${note.title}&url=${url}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 2.3 }}
      >
        <h4 className="max-w-lg flex cursor-pointer flex-col duration-200 ease-in-out group-hover:text-primary group-hover:fill-primary fill-white text-wrap">
          <XIcon
            className="my-6 h-10 w-10 transform transition-transform group-hover:-rotate-12 fill-black dark:fill-white group-hover:fill-primary"/>
          Bu makaleyi beğendiyseniz X&apos;te arkadaşlarınızla paylaşmak için buraya tıklayın.
        </h4>
      </motion.a>
    </motion.div>
  );
}; 