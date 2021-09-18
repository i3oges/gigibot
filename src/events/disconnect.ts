const event = {
  name: 'disconnect',
  once: false,
  execute: (disconnect: CloseEvent) => console.log('disconnect', disconnect),
};
export { event };
