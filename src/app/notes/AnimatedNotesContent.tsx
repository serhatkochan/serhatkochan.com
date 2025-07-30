"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "components/Badge";
import { NotePreview } from "components/notes/NotePreview";

interface AnimatedNotesContentProps {
  notes: any[];
  tags: string[];
}

export const AnimatedNotesContent = ({ notes, tags }: AnimatedNotesContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Etiketler</h2>
        <div className="mt-4 flex max-w-xl flex-wrap gap-1 font-mono">
          {tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                delay: 0.2 + (index * 0.02)
              }}
            >
              <Badge href={`/tags/${tag}`}>
                #{tag}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <motion.div 
          className="flex max-w-3xl flex-col space-y-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {notes.map((note, index) => (
            <motion.div
              key={note.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.4 + (index * 0.05)
              }}
            >
              <NotePreview note={note} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}; 