import { formatAddress } from "../utils/formatAddress";
import { EtherscanLink } from "./LinkToEtherScan";

export const TransactionHashComponent = (row: any) => {
  const { trxnHash } = row;

  return (
    <div className="flex space-x-3 px-3 align-center cursor-pointer text-base bg-slate-300 rounded-lg leading-6">
      <p className="flex my-1 items-center ">
        <span className="mr-2">
          <EtherscanLink
            etherscanInfo={trxnHash}
            type="transaction"
            text={formatAddress(trxnHash, 6, 6)}
          />
        </span>
      </p>
    </div>
  );
};
