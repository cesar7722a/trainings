import { useForm } from "react-hook-form";
import { Input } from "../components/input";

export function CreateClient({
  onClick,
}: {
  onClick: (value: boolean) => void;
}) {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleClodedModal = () => {
    onClick(false);
  };

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className="bg-white max-w-4xl border p-4 rounded-md shadow space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-3xl">Create new account</p>
      <div className="flex gap-x-4">
        <Input
          control={control}
          name="name"
          placeholder="type the client name"
          label="Name"
        />
        <Input control={control} name="BI" label="BI" />
      </div>
      <div className="flex gap-x-4">
        <Input name="account_type" control={control} label="Account type" />
        <Input control={control} name="gender" label="Gender" />
      </div>
      <div className="flex justify-end gap-x-6">
        <button
          onClick={handleClodedModal}
          className="border border-blue-11 hover:bg-blue-2 p-6 py-2 rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-11 hover:bg-blue-9 text-white p-6 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
}
