import { useState, useRef } from "react";

const CITIES = ["Tất cả", "Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Cần Thơ", "Nha Trang"];

export const FilterBar = () => {
  const [date, setDate] = useState("");
  const [city, setCity] = useState("Tất cả");
  const [ddOpen, setDdOpen] = useState(false);
  const dateRef = useRef(null);

  const formatDate = (val) => {
    if (!val) return "";
    const d = new Date(val + "T00:00:00");
    return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  return (
    <div className="mt-5 mb-5 flex items-stretch bg-white border border-gray-200 rounded-xl overflow-visible shadow-sm">

      {/* Destination */}
      <div className="flex items-center gap-3 px-5 py-4 flex-1 hover:bg-gray-50 transition-colors">
        <LocationIcon />
        <input
          type="text"
          placeholder="Bạn muốn đi đâu?"
          className="flex-1 outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400"
        />
      </div>

      <Divider />

      {/* Departure Date */}
      <div
        className="flex items-center gap-3 px-5 py-4 flex-1 hover:bg-gray-50 cursor-pointer transition-colors"
        onClick={() => dateRef.current?.showPicker()}
      >
        <CalendarIcon />
        <div className="flex-1">
          <p className="text-xs text-gray-400 mb-0.5">Ngày khởi hành</p>
          <p className={`text-sm ${date ? "text-gray-800" : "text-gray-400"}`}>
            {date ? formatDate(date) : "Chọn Ngày khởi hành"}
          </p>
        </div>
        <input
          ref={dateRef}
          type="date"
          className="absolute opacity-0 pointer-events-none w-0 h-0"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <Divider />

      {/* Departure City */}
      <div className="relative flex items-center gap-3 px-5 py-4 flex-1 hover:bg-gray-50 cursor-pointer transition-colors"
        onClick={() => setDdOpen((o) => !o)}
      >
        <PlaneIcon />
        <div className="flex-1">
          <p className="text-xs text-gray-400 mb-0.5">Khởi hành từ</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-gray-800">{city}</span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${ddOpen ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {ddOpen && (
          <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
            {CITIES.map((c) => (
              <li
                key={c}
                onClick={(e) => { e.stopPropagation(); setCity(c); setDdOpen(false); }}
                className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-gray-50
                  ${c === city ? "text-amber-500 font-medium" : "text-gray-700"}`}
              >
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Search Button */}
      <button className="bg-[#E9A820] hover:bg-[#d4971a] active:bg-[#bf8717] text-white font-semibold text-sm tracking-widest px-10 rounded-r-xl transition-colors">
        TÌM
      </button>

    </div>
  );
}

const Divider = () => <div className="w-px bg-gray-200 my-3" />;

const LocationIcon = () => (
  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <circle cx="12" cy="10" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"/><line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round"/>
  </svg>
);

const PlaneIcon = () => (
  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <line x1="22" y1="2" x2="11" y2="13" strokeLinecap="round"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);