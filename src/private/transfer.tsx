import { useState } from "react";
import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { Modal } from "../components/modal";
import { useForm } from "react-hook-form";
import { clients } from "../type-data/data-user";
import type { Client } from "../type-data/type/clients-type";

type FormData = {
  number_account: string;
  Amount_transferred: number;
  destination_account: string;
};

export default function Transfer() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataUserTransfer, setDataUserTransfer] = useState<Client>();
  const { control, handleSubmit } = useForm<FormData>();
  const [amount, setAmount] = useState<number>();
  const [dataUserDestination, setDataUserDestination] = useState<Client>();
  const onSubmit = (data: FormData) => {
    const transferUser = clients.find(
      (user) => user.account_number == data.number_account
    );
    const destinationUser = clients.find(
      (user) => user.account_number == data.destination_account
    );

    setDataUserTransfer(transferUser);
    setDataUserDestination(destinationUser);
    setAmount(data.Amount_transferred);
  };
  return (
    <div className="space-y-10">
      <div>
        <Heading>Transfer</Heading>
        <h2>Fill in the form to make transfer</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white max-w-4xl mx-auto rounded-md px-6 pt-6 pb-8 space-y-4 shadow-md"
      >
        <div className="space-y-2">
          <p className="text-xl">Enter the starting account details.</p>
          <div className="flex gap-x-10">
            <Input
              label="Number of account"
              control={control}
              name="number_account"
            />
            <Input
              label="Amount to be transferred"
              type="number"
              control={control}
              name="Amount_transferred"
            />
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xl">Destination account details.</p>
          <div className="flex gap-x-10">
            <Input
              label="Number of account"
              control={control}
              name="destination_account"
            />
          </div>
        </div>
        <div className="pt-10">
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="h-10 w-full border rounded-md bg-blue-9 hover:bg-blue-10 text-blue-contrast"
          >
            Confirmar
          </button>
        </div>
        {isOpen && (
          <Modal
            className="flex justify-center items-center"
            onClick={() => setIsOpen(false)}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="w-[520px] bg-white border-blue-4 border rounded-md shadow-md p-3 py-4 space-y-6"
            >
              <h2 className="text-center text-2xl font-semibold">
                confirm transfer
              </h2>
              <div>
                <strong>Transfer of:</strong>
                <p>
                  name: <strong>{dataUserTransfer?.name}</strong>
                </p>
                <p>
                  number account:
                  <strong>{dataUserTransfer?.account_number}</strong>
                </p>
                <p>
                  Amount: <strong>{amount} kz</strong>
                </p>
              </div>
              <div>
                <strong>To</strong>
                <p>
                  name: <strong>{dataUserDestination?.name}</strong>
                </p>
                <p>
                  number account:{" "}
                  <strong>{dataUserDestination?.account_number}</strong>
                </p>
              </div>
              <div className="flex justify-end gap-x-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="border border-blue-9 px-6 rounded-md hover:bg-blue-2"
                >
                  Cancel
                </button>
                <button
                  className="h-10 px-6 border rounded-md bg-blue-9 hover:bg-blue-10 text-blue-contrast"
                  // onClick={handleSubmit(onSubmit)}
                >
                  confirm
                </button>
              </div>
            </div>
          </Modal>
        )}
      </form>
    </div>
  );
}
