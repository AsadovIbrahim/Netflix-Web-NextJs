import { Select, SelectItem } from "@nextui-org/select";
import { useEffect } from "react";

export const selections = [
  { key: "movie", label: "Movies" },
  { key: "tv", label: "Tv Shows" },
];

export default function SelectType({ conentType, setContentType }) {
  useEffect(() => {}, [conentType]);
  return (
    <Select
      onChange={(e) => setContentType(e.target.value)}
      disabledKeys={conentType === "movie" ? ["movie"] : ["tv"]}
      placeholder={conentType}
      className="outline-none flex mb-[10px] justify-center items-center border rounded-[4px] border-[#808080B2] w-[200px] h-[46px]"
      items={selections}
      aria-label="Type"
    >
      {(type) => (
        <SelectItem className="w-[200px] mt-1 rounded-[4px] bg-white h-[46px] border border-[#808080B2]">
          {type.label}
        </SelectItem>
      )}
    </Select>
  );
}
