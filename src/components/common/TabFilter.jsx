import React from 'react'

export const TabFilter = ({ tabs, active, onChange }) => {
    return (
        <div className="flex gap-2 flex-wrap 5 pb-3">
            {tabs.map((t) => (
                <button
                    key={t}
                    onClick={() => onChange(t)}
                    className={`px-4 py-1 rounded-full text-[12px] font-semibold cursor-pointer transition-all duration-150 border-2
                    ${t === active
                            ? "border-[#0e3a7d] bg-[#0e3a7d] text-white"
                            : "border-slate-200 bg-white text-slate-600"
                        }`}
                >
                    {t}
                </button>
            ))}
        </div>
    )
}
