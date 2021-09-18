const event = {
  name: 'userNoteUpdate',
  once: false,
  execute: (oldNote: string, newNote: string) => console.log('userNoteUpdate', oldNote, newNote),
};
export { event };
