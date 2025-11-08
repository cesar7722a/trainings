import { Table } from "../components/table/table";

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between gap-x-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="w-64 h-36 border border-blue-3 rounded shadow p-3 space-y-5"
          >
            <p className="font-bold">Total of agency</p>
            <div>
              <span className="text-4xl">1.222</span>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xl">Client</span>
          <button className="bg-blue-11 hover:bg-blue-9 text-white p-6 py-2 rounded-md">
            Create account
          </button>
        </div>
        <Table />
      </div>
    </div>
  );
}
