import React from "react";
interface LinkProp {
  etherscanInfo: string | string[];
  customStyles?: string;
  type?: string;
  text?: string;
}
export const EtherscanLink: React.FC<LinkProp> = (props) => {
  const { etherscanInfo, customStyles, text, type = "block" } = props;

  let etherscanLink = `https://etherscan.io/${
    type === "transaction" ? "tx" : "block"
  }/`;

  return (
    <a
      href={`${etherscanLink}${etherscanInfo}`}
      target="_blank"
      className={`text-blue hover:opacity-90 flex items-center focus:outline-none ${
        customStyles && customStyles
      }`}
      rel="noreferrer"
    >
      <p className="flex items-center">{text} </p>
    </a>
  );
};
