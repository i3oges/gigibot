const event = {
  name: 'resume',
  once: false,
  execute: (replayed: number) => console.log('resume', replayed),
};
export { event };
