const event = {
  name: 'warn',
  once: false,
  execute: (info: string) => console.log('warn', info),
};
export { event };
