import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  EllipsisVertical,
} from "lucide-react";
import { clients } from "../../type-data/data-user";

export function Table() {
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
            {clients.slice(0, 10).map((element) => (
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
        <div>0 of 68 row(s) selected.</div>
        <div className="flex w-[480px] justify-between items-center">
          <div className="flex items-center gap-x-3">
            <span>Rows per page</span>
            <span className="flex items-center gap-x-2 bg-blue-4 px-3 py-0.5 border border-blue-6 hover:bg-blue-5 cursor-pointer rounded-md">
              5
              <ChevronDown className="size-5" />
            </span>
          </div>
          <div className="flex justify-between w-64">
            <span>Page 1 of 7</span>
            <div className="flex gap-x-2">
              <span className="flex items-center bg-blue-4 border border-blue-6 hover:bg-blue-5 cursor-pointer rounded-md px-1 py-0.5">
                <ChevronsLeft className="size-5" />
              </span>
              <span className="flex items-center bg-blue-4 border border-blue-6 hover:bg-blue-5 cursor-pointer rounded-md px-1 py-0.5">
                <ChevronLeft className="size-5" />
              </span>
              <span className="flex items-center bg-blue-4 border border-blue-6 hover:bg-blue-5 cursor-pointer rounded-md px-1 py-0.5">
                <ChevronRight className="size-5" />
              </span>
              <span className="flex items-center bg-blue-4 border border-blue-6 hover:bg-blue-5 cursor-pointer rounded-md px-1 py-0.5">
                <ChevronsRight className="size-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
