import { MapPin, Phone, Mail, Globe, Facebook, Youtube, Instagram, ChevronRight, Award } from "lucide-react";
import { useState } from "react";


export const Footer = () => {
  const [email, setEmail] = useState("");

  const footerLinks = {
    "Về Chúng Tôi": [
      { label: "Giới thiệu DaNang Tour", href: "#" },
      { label: "Hỏi đáp", href: "#" },
      { label: "Tin tức & Blog", href: "#" },
      { label: "Thư viện ảnh", href: "#" },
      { label: "Tuyển dụng", href: "#" },
      { label: "Liên hệ", href: "#" },
    ],
    "Tour Trong Nước": [
      { label: "Tour Miền Bắc", href: "#" },
      { label: "Tour Miền Trung", href: "#" },
      { label: "Tour Miền Nam", href: "#" },
      { label: "Tour Hạ Long", href: "#" },
      { label: "Tour Sapa", href: "#" },
      { label: "Tour Phú Quốc", href: "#" },
    ],
    "Tour Nước Ngoài": [
      { label: "Tour Đông Nam Á", href: "#" },
      { label: "Tour Nhật Bản", href: "#" },
      { label: "Tour Hàn Quốc", href: "#" },
      { label: "Tour Thái Lan", href: "#" },
      { label: "Tour Châu Âu", href: "#" },
      { label: "Tour Dubai", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#0b2d6b] text-white font-[Segoe_UI]">

      {/* MAIN */}
      <div className="ml-25 mr-25 mx-auto py-12">

        <div className="grid grid-cols-4 gap-10">

          {/* COL 1 */}
          <div>

            {/* LOGO */}
            <div className="mb-5">
              <div className="flex items-end gap-1">
                <span className="text-[30px] font-black italic">DaNang</span>
                <span className="text-yellow-400 text-[22px] font-bold italic">Tour</span>

                <svg width="20" height="13" viewBox="0 0 22 14" className="mb-1" fill="none">
                  <path d="M2 12 L10 4 L18 8 L20 2"
                    stroke="#facc15"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M14 2 L20 2 L20 8"
                    stroke="#facc15"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="text-yellow-400 text-[10px] italic tracking-[3px] -mt-1 ml-1">
                Enjoy your life
              </div>
            </div>

            <p className="text-slate-300 text-[13px] leading-[1.7] mb-5">
              Công ty TNHH Du lịch và Thương mại DaNang Tour — đơn vị lữ hành uy tín
              chuyên cung cấp dịch vụ tour, du thuyền và khách sạn chất lượng cao.
            </p>

            {/* CONTACT */}
            <div className="flex flex-col gap-2">

              {[
                { icon: <MapPin size={14} className="text-yellow-400" />, text: "Số 17, Đường Nguyễn Chí Thanh, TP Đà Nẵng" },
                { icon: <Phone size={14} className="text-yellow-400" />, text: "0797306295 - 0932434237" },
                { icon: <Mail size={14} className="text-yellow-400" />, text: "info@danangtour.com.vn" },
                { icon: <Globe size={14} className="text-yellow-400" />, text: "www.danangtour.com.vn" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-[13px] text-slate-300">
                  <span className="mt-1">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}

            </div>

            {/* SOCIAL */}
            <div className="flex gap-2 mt-5">

              {[
                { icon: <Facebook size={16} />, bg: "bg-[#1877f2]" },
                { icon: <Youtube size={16} />, bg: "bg-[#ff0000]" },
                { icon: <Instagram size={16} />, bg: "bg-[#e1306c]" }
              ].map((s, i) => (
                <a key={i}
                  href="#"
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white ${s.bg} transition hover:scale-110`}
                >
                  {s.icon}
                </a>
              ))}

            </div>

          </div>

          {/* COL 2 3 4 */}
          {Object.entries(footerLinks).map(([title, links]) => (

            <div key={title}>

              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                <span className="w-1 h-4 bg-yellow-400 rounded"></span>

                <h4 className="text-[13.5px] font-bold uppercase tracking-[0.5px]">
                  {title}
                </h4>
              </div>

              <ul className="flex flex-col gap-2">

                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-1 text-slate-300 text-[13px] hover:text-yellow-400 transition"
                    >
                      <ChevronRight size={12} className="text-yellow-400 opacity-60" />
                      {link.label}
                    </a>
                  </li>
                ))}

              </ul>

            </div>

          ))}

        </div>

        {/* NEWSLETTER */}

        <div className="mt-10 p-6 bg-white/5 rounded-xl border border-white/10 flex items-center gap-6 flex-wrap">

          <div className="flex-1 min-w-12">
            <h4 className="text-[15px] font-bold mb-1">
              Đăng ký nhận ưu đãi
            </h4>

            <p className="text-[13px] text-slate-400">
              Nhận ngay thông tin tour giảm giá và khuyến mãi độc quyền.
            </p>
          </div>

          <div className="flex gap-2">

            <input
              type="email"
              placeholder="Nhập email của bạn..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-60bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-[13px] text-white outline-none"
            />

            <button className="bg-yellow-400 text-[#0b2d6b] font-bold rounded-lg px-5 py-2 text-[13px]">
              Đăng ký
            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-white/10 bg-[#091f4d] px-5 py-3">

        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2">

          <p className="text-[12px] text-slate-500 m-0">
            © {new Date().getFullYear()}
            <strong className="text-white"> DaNang Tour</strong>.
            Bản quyền thuộc về Công ty TNHH Du lịch và Thương mại DaNang Tour.
          </p>

          <div className="flex gap-5">

            {["ĐKKD: 0106822929", "LHQT: 01-688/2015/TCDL"].map(c => (
              <span key={c} className="flex items-center gap-1 text-[12px] text-slate-500">
                <Award size={13} className="text-yellow-400" /> {c}
              </span>
            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}