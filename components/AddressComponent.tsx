import { formatAddress } from "../utils/formatAddress";

export const AddressComponent = (row: any) => {
  const { toAddress } = row;

  return (
    <div className="flex space-x-3 px-3 align-center text-sm rounded-lg leading-6">
      <p className="flex my-1 items-center ">
        <span className="mr-2">{formatAddress(toAddress, 6, 4)}</span>
      </p>
    </div>
  );
};
