// we use this to format addresses and transaction hashes for rebdering purposes
export const formatAddress = (
  address: string | string[],
  start: number,
  end: number
) => {
  if (address) {
    return `${address.slice(0, start)}......${address.slice(
      address.length - end
    )}`;
  }
  return "";
};
