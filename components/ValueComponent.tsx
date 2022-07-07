import { formatAddress } from "../utils/formatAddress";

export const ValueComponent = (row: any) => {
  const { ethValue } = row;

  return (
    <div className="flex space-x-3 px-3 align-center text-sm rounded-lg leading-6">
      <p className="flex my-1 items-center ">
        <span className="mr-2">{(ethValue / 10 ** 18).toFixed(2)} Ether</span>
      </p>
    </div>
  );
};
