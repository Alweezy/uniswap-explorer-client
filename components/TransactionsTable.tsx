import { usePagination, useTable } from "react-table";
import Image from "next/image";

// @ts-ignore
const TransactionsTable = ({ columns, data }): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // @ts-ignore
    page,
    // @ts-ignore
    nextPage,
    // @ts-ignore
    previousPage,
    // @ts-ignore
    canNextPage,
    // @ts-ignore
    canPreviousPage,
    // @ts-ignore
    state: { pageSize, pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        // @ts-ignore
        pageSize: 10,
      },
    },
    usePagination
  );

  const firstPage = pageIndex === 0 ? "1" : pageIndex * pageSize;
  let lastPage;
  if (pageIndex > 0) {
    lastPage =
      page.length < pageSize
        ? pageIndex * pageSize + page.length
        : (pageIndex + 1) * pageSize;
  } else if (pageIndex === 0) {
    lastPage =
      page.length < pageSize
        ? (pageIndex + 1) * pageSize + page.length
        : (pageIndex + 1) * pageSize;
  }

  return (
    <div className="overflow-y-hidden ">
      <div className="flex col-span-12 space-x-8 justify-between items-center"></div>
      <table
        {...getTableProps()}
        className={`w-full ${
          page.length ? "border-b-1" : "border-b-0"
        } border-gray-600`}
      >
        <thead className="w-full">
          {page.length
            ? headerGroups.map((headerGroup: any, index: any) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  key={index}
                  className="text-gray-400 text-sm grid grid-cols-12 gap-5 leading-6"
                >
                  {headerGroup.headers.map((column: any, index: any) => {
                    return (
                      <th
                        {...column.getHeaderProps()}
                        key={index}
                        className="flex align-middle rounded-md col-span-2 text-left text-sm font-whyte-light text-gray-400"
                      >
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              ))
            : null}
        </thead>
        <tbody
          className="w-full divide-y divide-gray-500 overflow-y-scroll"
          {...getTableBodyProps()}
        >
          {page.map((row: any, index: number) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={index}
                className={`w-full text-base grid grid-cols-12 gap-5 border-gray-500 text-left`}
                {...row.getRowProps()}
              >
                {row.cells.map((cell: any, cellIndex: any) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={cellIndex}
                      className={`m-0 col-span-2 text-base py-2 text-blue-500`}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* show pagination only when we have more than 10 members */}
      {data.length > 10 ? (
        <div className="flex w-full text-white space-x-4 justify-center my-8 leading-6">
          <button
            className={`pt-1 ${
              !canPreviousPage
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <Image
              src={"/images/arrowBack.svg"}
              height="16"
              width="16"
              alt="Previous"
            />
          </button>
          <p className="">
            {firstPage} - {lastPage}
            {` of `} {data.length}
          </p>

          <button
            className={`pt-1 ${
              !canNextPage
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <Image
              src={"/images/arrowNext.svg"}
              height="16"
              width="16"
              alt="Next"
            />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TransactionsTable;
