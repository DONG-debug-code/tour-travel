import { useState } from "react";

const SORT_OPTIONS = [
  { value: "name-asc",   label: "Tên A-Z" },
  { value: "name-desc",  label: "Tên Z-A" },
  { value: "price-asc",  label: "Giá tăng dần" },
  { value: "price-desc", label: "Giá giảm dần" },
];

export default function SortBar({ onChange }) {
  const [selected, setSelected] = useState("name-asc");

  const handleSelect = (value) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="flex items-center gap-6 bg-white border border-gray-200 rounded-xl px-5 py-3.5">
      <span className="text-sm font-medium text-gray-700 flex-shrink-0">Xếp theo:</span>

      <div className="flex items-center gap-5 flex-wrap">
        {SORT_OPTIONS.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <input
              type="radio"
              name="sort"
              value={opt.value}
              checked={selected === opt.value}
              onChange={() => handleSelect(opt.value)}
              className="sr-only"
            />
            {/* Custom radio */}
            <span
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                ${selected === opt.value
                  ? "border-amber-400"
                  : "border-gray-300 group-hover:border-gray-400"
                }`}
            >
              {selected === opt.value && (
                <span className="w-2 h-2 rounded-full bg-amber-400 block" />
              )}
            </span>
            <span
              className={`text-sm transition-colors
                ${selected === opt.value
                  ? "text-gray-800 font-medium"
                  : "text-gray-500 group-hover:text-gray-700"
                }`}
            >
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}