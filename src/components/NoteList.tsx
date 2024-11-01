import React from 'react';
import {notesApi} from "lib/notesApi";
import {NotePreview} from "components/notes/NotePreview";

const NoteList = async () => {
    const notes = await notesApi.getNotes('desc', 5);
    return (
        <>
            {notes.map((blogPost) => (
                <NotePreview key={blogPost.slug} note={blogPost} dense />
            ))}
        </>
    );
};

export default NoteList;