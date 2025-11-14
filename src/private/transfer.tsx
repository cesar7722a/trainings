import { useState } from "react";
import { Heading } from "../components/heading";
import { Input, Label } from "../components/input";
import { Modal } from "../components/modal";

export default function Transfer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="space-y-10">
        <div>
          <Heading>Transfer</Heading>
          <h2>Fill in the form to make transfer</h2>
        </div>
        <form className="bg-white max-w-4xl mx-auto rounded-md px-6 pt-6 pb-8 space-y-4 shadow-md">
          <div className="space-y-2">
            <p className="text-xl">Enter the starting account details.</p>
            <div className="flex gap-x-10">
              <Input name="number-account">
                <Label>Number of account</Label>
              </Input>
              <Input name="number-account">
                <Label>Amount to be transferred</Label>
              </Input>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xl">Destination account details.</p>
            <div className="flex gap-x-10">
              <Input name="number-account">
                <Label>Number of account</Label>
              </Input>
            </div>
          </div>
          <div className="pt-10">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="h-10 w-full border rounded-md bg-blue-9 hover:bg-blue-10 text-blue-contrast"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
      {isOpen && (
        <Modal className="" onClick={() => setIsOpen(false)}>
          <div>hello</div>
        </Modal>
      )}
    </>
  );
}
