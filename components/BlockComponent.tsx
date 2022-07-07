import { EtherscanLink } from "./LinkToEtherScan";

export const BlockComponent = (row: any) => {
  const { blockNo } = row;

  return (
    <div className="flex space-x-3 px-3 align-center cursor-pointer text-sm bg-slate-300 rounded-lg leading-6">
      <p className="flex my-1 items-center ">
        <EtherscanLink etherscanInfo={blockNo} type="block" text={blockNo} />
      </p>
    </div>
  );
};
