const event = {
  name: 'debug',
  once: false,
  execute: (debug: string) => console.log('debug', debug),
};
export { event };
