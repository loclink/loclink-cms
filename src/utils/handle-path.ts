const handleTailRemove = (message: string, symbol: string): string => {
  if (message.endsWith(symbol)) {
    return message.slice(0, message.length - 1);
  } else {
    return message;
  }
};
export { handleTailRemove };
