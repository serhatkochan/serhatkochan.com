"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Container from "components/Container";
import {PageTitle} from "components/PageTitle";
import {SocialLink} from "components/SocialLink";
import {About, Name, SocialMedia} from "data/lifeApi";
import {NotePreview} from "components/notes/NotePreview";
import {Resume} from "components/Resume";
import {Photos} from "components/Photos";

interface AnimatedHomeContentProps {
  notes: any[];
}

export const AnimatedHomeContent = ({ notes }: AnimatedHomeContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <Container className="mt-9">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <PageTitle>{Name}</PageTitle>
          <motion.p 
            className="mt-6 max-w-2xl text-base text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {About}
          </motion.p>
          <motion.div 
            className="mt-6 flex gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            {SocialMedia.map((socialProfile) => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`Follow on ${socialProfile.name}`}
                href={socialProfile.link}
                icon={socialProfile.icon}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <Photos/>
      </motion.div>

      <Container className="mt-12">
        <motion.div 
          className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div 
            className="flex flex-col gap-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            {notes.map((blogPost, index) => (
              <motion.div
                key={blogPost.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut",
                  delay: 0.7 + (index * 0.05)
                }}
              >
                <NotePreview note={blogPost} dense/>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="lg:ml-auto space-y-10 lg:pl-12 xl:pl-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <Resume/>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
}; 