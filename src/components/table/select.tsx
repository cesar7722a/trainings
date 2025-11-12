import { Check } from "lucide-react";

interface ArrayItem {
  id: number;
  value: number;
  isSelect: boolean;
}

type PropsSelect = {
  className?: string;
  ArrayItem: ArrayItem[];
  handleSelect: (value: number) => void;
};

function Select({ ArrayItem, handleSelect }: PropsSelect) {
  return (
    <div
      className={
        "absolute bottom-24 flex flex-col bg-blue-9 w-16 z-50 right-[340px] rounded-md"
      }
    >
      {ArrayItem.map((element) => (
        <ItemSelect
          onClick={() => handleSelect(element.value)}
          key={element.id}
          value={element.value}
          isSelect={element.isSelect}
        />
      ))}
    </div>
  );
}

function ItemSelect({
  value,
  isSelect,
  onClick,
}: {
  value: number;
  isSelect: boolean;
  onClick: () => void;
}) {
  return isSelect === true ? (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-2 cursor-pointer hover:bg-blue-8 rounded-md duration-200 text-white"
    >
      {value}
      <Check className="size-4" />
    </div>
  ) : (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-2 cursor-pointer hover:bg-blue-8 rounded-md duration-200 text-white"
    >
      {value}
    </div>
  );
}

export { Select, ItemSelect };
