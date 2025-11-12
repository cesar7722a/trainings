import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  EllipsisVertical,
} from "lucide-react";
import { clients } from "../../type-data/data-user";
import { useState } from "react";
import { Modal } from "../modal";
import { Select } from "./select";

const ArrayItem = [
  { id: 0, value: 5, isSelect: true },
  { id: 1, value: 10, isSelect: false },
  { id: 2, value: 20, isSelect: false },
  { id: 3, value: 30, isSelect: false },
];

export function Table() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [valueRow, setValueRow] = useState(5);
  const [changeItemArray, setChangeItemArray] = useState(ArrayItem);
  const [nextPage, setNextPage] = useState(valueRow);
  const [previousPage, setPreviousPage] = useState(0);

  const handleSelect = (value: number) => {
    setChangeItemArray((prev) =>
      prev.map((item) =>
        item.value === value
          ? { ...item, isSelect: true }
          : { ...item, isSelect: false }
      )
    );
    setNextPage(value);
    setValueRow(value);
  };

  const handleNextPage = () => {
    setNextPage(nextPage + valueRow);
    setPreviousPage(previousPage + valueRow);
  };

  const handlePreviousPagePage = () => {
    setNextPage(nextPage - valueRow);
    setPreviousPage(previousPage - valueRow);
  };

  const handleLastPage = () => {
    setNextPage(clients.length);
    setPreviousPage(clients.length - valueRow);
  };

  const firstPage = () => {
    setPreviousPage(0);
    setNextPage(valueRow);
  };

  return (
    <>
      <div className="border w-full border-gray-8 rounded-md">
        <table className="w-full">
          <tr>
            <th className="py-2 rounded-full">Name</th>
            <th className="py-2 border border-t-0 border-b-0 border-gray-8">
              Status
            </th>
            <th className="py-2 border border-gray-8 border-t-0 border-b-0">
              Account type
            </th>
            <th className="py-2">Account number</th>
            <th className="border border-gray-8 border-l-0 border-r-0 border-t-0 py-2 w-3"></th>
          </tr>
          <tbody>
            {clients.slice(previousPage, nextPage).map((element) => (
              <tr
                key={element.account_number}
                className="border border-gray-8 border-l-0 border-r-0 hover:bg-blue-3 last:border-b-0"
              >
                <td className="py-2 px-2">{element.name}</td>
                <td className="border border-t-0 border-b-0 border-gray-8 py-2 px-2">
                  {element.status}
                </td>
                <td className="border border-gray-8 border-t-0 border-b-0 py-2 px-2">
                  {element.account_type}
                </td>
                <td className="px-2">{element.account_number}</td>
                <td className="border border-gray-8 border-l-0 border-r-0 border-b-0 py-2 px-2 w-3 hover:cursor-pointer">
                  <EllipsisVertical className="size-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center">
        <div>0 of {clients.length} row(s) selected.</div>
        <div className="flex w-[480px] justify-between items-center">
          <div className="flex items-center gap-x-3">
            <span>Rows per page</span>
            <span
              onClick={() => setIsOpenModal(true)}
              className="flex items-center gap-x-2 bg-blue-4 px-3 py-0.5 border border-blue-6 hover:bg-blue-5 cursor-pointer rounded-md"
            >
              {valueRow}
              <ChevronDown className="size-5" />
            </span>
          </div>
          <div className="flex justify-between w-64">
            <span>Page 1 of {Math.round(clients.length / valueRow)}</span>
            <div className="flex gap-x-2">
              {previousPage == 0 ? (
                <span className="flex items-center bg-blue-2 border border-blue-6 cursor-pointer rounded-md px-1 py-0.5">
                  <ChevronsLeft className="size-5" />
                </span>
              ) : (
                <span
                  onClick={firstPage}
                  className="flex items-center bg-blue-4 border border-blue-6 hover:bg-blue-5 cursor-pointer rounded-md px-1 py-0.5"
                >
                  <ChevronsLeft className="size-5" />
                </span>
              )}

              {previousPage == 0 ? (
                <span className="flex items-center bg-blue-2 border border-blue-6 cursor-pointer rounded-md px-1 py-0.5">
                  <ChevronLeft className="size-5" />
                </span>
              ) : (
                <span
                  onClick={handlePreviousPagePage}
                  className="flex items-center bg-blue-4 border border-blue-6 hover:bg-blue-5 cursor-pointer rounded-md px-1 py-0.5"
                >
                  <ChevronLeft className="size-5" />
                </span>
              )}

              {nextPage == clients.length ? (
                <span className="flex items-center bg-blue-2 border border-blue-6 cursor-pointer rounded-md px-1 py-0.5">
                  <ChevronRight className="size-5" />
                </span>
              ) : (
                <span
                  onClick={handleNextPage}
                  className="flex items-center bg-blue-4 border border-blue-6 hover:bg-blue-5 cursor-pointer rounded-md px-1 py-0.5"
                >
                  <ChevronRight className="size-5" />
                </span>
              )}

              {nextPage == clients.length ? (
                <span className="flex items-center bg-blue-2 border border-blue-6 cursor-pointer rounded-md px-1 py-0.5">
                  <ChevronsRight className="size-5" />
                </span>
              ) : (
                <span
                  onClick={handleLastPage}
                  className="flex items-center bg-blue-4 border border-blue-6 hover:bg-blue-5 cursor-pointer rounded-md px-1 py-0.5"
                >
                  <ChevronsRight className="size-5" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <Modal onClick={() => setIsOpenModal(false)}>
          <Select ArrayItem={changeItemArray} handleSelect={handleSelect} />
        </Modal>
      )}
    </>
  );
}
