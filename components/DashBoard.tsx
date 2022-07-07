import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMoralis } from "react-moralis";

import TransactionsTable from "./TransactionsTable";
import { TransactionHashComponent } from "./TransactonHashComponent";
import { BlockComponent } from "./BlockComponent";
import { AddressComponent } from "./AddressComponent";
import { SkeletonLoader } from "./SkeletonLoader";
import { ValueComponent } from "./ValueComponent";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const DashBoard: React.FC = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Method",
        accessor: "event",
      },
      {
        Header: "TransactionHash",
        accessor: function transactionHash(row: { txnHash: string }) {
          return <TransactionHashComponent {...row} />;
        },
      },
      {
        Header: "Block Number",
        accessor: function transactionHash(row: { blockNo: string }) {
          return <BlockComponent {...row} />;
        },
      },
      {
        Header: "To",
        accessor: function transactionHash(row: { toAddress: string }) {
          return <AddressComponent {...row} />;
        },
      },
      {
        Header: "Value",
        accessor: function transactionValue(row: { value: string }) {
          return <ValueComponent {...row} />;
        },
      },
    ],
    []
  );
  const [transactions, setTransactions] = useState([]);
  const { isAuthenticated, user } = useMoralis();
  useEffect(() => {
    if (isAuthenticated) {
      getHistory();
    }
  }, []);

  const getHistory = async () => {
    const { data } = await axios.get(
      `${serverUrl}/api/v1/transactions/history?adress=${user?.attributes.ethAddress}`
    );
    setTransactions(data);
  };
  return (
    <>
      <div className="px-10 py-3 border b-1 bg-white rounded-lg flex-col my-12 max-h-full w-3/4">
        {transactions.length ? (
          <TransactionsTable columns={columns} data={transactions} />
        ) : (
          <>
            {[...Array.from(Array(8).keys())].map((_, index) => {
              return (
                <div
                  className="grid grid-cols-12 gap-5 border-b-1 border-gray-syn6 py-3"
                  key={index}
                >
                  <div className="flex justify-start space-x-4 items-center w-full col-span-3">
                    <div className="flex-shrink-0">
                      <SkeletonLoader />
                    </div>
                    <SkeletonLoader />
                  </div>
                  {[...Array.from(Array(4).keys())].map((_, index) => {
                    return (
                      <div
                        className="w-full flex items-center col-span-2"
                        key={index}
                      >
                        <SkeletonLoader />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default DashBoard;
