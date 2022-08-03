const formatDate = (unix: number) => {
  if (!unix) return null;
  const time = new Date(unix * 1000);
  const year = time.getFullYear();
  const month = handleNumZeroPrefix(time.getUTCMonth() + 1);
  const day = handleNumZeroPrefix(time.getUTCDay());
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const handleNumZeroPrefix = (num: number) => {
  if (num < 10) return '0' + num;
  else return num;
};

export { formatDate };
