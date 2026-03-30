# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tour Hàng Châu – Thượng Hải (Disneyland) – Bộc Viện Cổ Trấn 6N5Đ | Elite Tour</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand:  '#1a3c6e',
            gold:   '#e5a623',
            green2: '#2e7d52',
            red2:   '#d63030',
          },
          fontFamily: { sans: ['"Be Vietnam Pro"', 'sans-serif'] },
        }
      }
    }
  </script>
  <style>
    *{box-sizing:border-box}
    body{font-family:'Be Vietnam Pro',sans-serif;background:#f4f6f9;color:#1f2937;font-size:14px;margin:0}

    /* SLIDER */
    .slider-wrap{position:relative;overflow:hidden;border-radius:8px;background:#111}
    .slide{display:none;height:100%}
    .slide.active{display:block}
    .slide img{width:100%;height:100%;object-fit:cover;display:block}
    .slider-btn{position:absolute;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.5);color:#fff;border:none;border-radius:50%;width:36px;height:36px;cursor:pointer;font-size:22px;line-height:1;display:flex;align-items:center;justify-content:center;z-index:5;transition:background .2s}
    .slider-btn:hover{background:rgba(0,0,0,.75)}
    .prev{left:10px}.next{right:10px}
    .slide-dots{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:6px}
    .dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.45);cursor:pointer;transition:background .2s}
    .dot.active{background:#fff}
    .slide-num{position:absolute;bottom:10px;right:12px;background:rgba(0,0,0,.5);color:#fff;font-size:11px;padding:2px 8px;border-radius:10px}

    /* TABS */
    .tab-bar{display:flex;border-bottom:2px solid #e8ecf1;background:#fff;overflow-x:auto;scrollbar-width:none}
    .tab-bar::-webkit-scrollbar{display:none}
    .tab-btn{padding:12px 18px;font-size:12.5px;font-weight:600;color:#6b7a8d;cursor:pointer;border:none;background:none;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .2s;display:flex;align-items:center;gap:6px;white-space:nowrap;font-family:'Be Vietnam Pro',sans-serif}
    .tab-btn:hover{color:#1a3c6e}
    .tab-btn.active{color:#1a3c6e;border-bottom-color:#1a3c6e;background:#f7f9fc}
    .tab-pane{display:none}
    .tab-pane.active{display:block}

    /* ACCORDION */
    .acc-item{border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;margin-bottom:8px;background:#fff}
    .acc-header{display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;transition:background .15s;user-select:none}
    .acc-header:hover{background:#f8fafc}
    .acc-day{min-width:68px;background:#1a3c6e;color:#fff;border-radius:5px;font-size:11px;font-weight:700;padding:4px 8px;text-align:center;text-transform:uppercase;letter-spacing:.03em;flex-shrink:0}
    .acc-title{flex:1;font-weight:600;font-size:13px;color:#1f2937;line-height:1.4}
    .acc-meals{display:flex;gap:4px;flex-wrap:wrap;flex-shrink:0}
    .meal-tag{font-size:10.5px;background:#edf7f1;color:#2e7d52;border:1px solid #c6e9d6;border-radius:3px;padding:1px 5px;white-space:nowrap}
    .meal-tag.gold{background:#fef9c3;color:#854d0e;border-color:#fde047}
    .acc-arrow{width:16px;height:16px;color:#9ca3af;transition:transform .25s;flex-shrink:0}
    .acc-arrow.open{transform:rotate(180deg)}
    .acc-body{display:none;padding:4px 14px 14px;border-top:1px solid #f0f4f8}
    .acc-body.open{display:block}
    .trow{display:flex;gap:12px;padding:7px 0;border-bottom:1px dashed #eef0f3;align-items:flex-start;font-size:13px}
    .trow:last-child{border-bottom:none}
    .tlabel{min-width:72px;font-weight:700;color:#1a3c6e;font-size:11.5px;flex-shrink:0;padding-top:1px}
    .tcontent{color:#374151;line-height:1.65}
    .tipbox{margin-top:8px;background:#fffbeb;border-left:3px solid #e5a623;border-radius:4px;padding:8px 12px;font-size:12px;color:#92400e;line-height:1.5}

    /* LISTS */
    .chk-li{display:flex;align-items:flex-start;gap:7px;padding:5px 0;border-bottom:1px solid #f4f6f9;font-size:13px;line-height:1.55}
    .chk-li:last-child{border-bottom:none}

    /* NOTE */
    .notebox{background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:14px 16px;margin-bottom:14px}
    .nrow{display:flex;gap:8px;padding:4px 0;align-items:flex-start;font-size:13px;line-height:1.55;color:#374151}

    /* SIDEBAR */
    .scard{background:#fff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;margin-bottom:14px}
    .shead{background:#1a3c6e;color:#fff;padding:11px 16px;font-weight:700;font-size:13.5px}

    /* PRICE */
    .pnow{font-size:27px;font-weight:800;color:#e5a623;line-height:1}
    .pold{font-size:12.5px;color:#9ca3af;text-decoration:line-through}
    .pbadge{background:#d63030;color:#fff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:4px;letter-spacing:.02em}

    /* DEP TABLE */
    .dtable{width:100%;border-collapse:collapse}
    .dtable th{background:#f4f6f9;font-size:10.5px;color:#6b7a8d;font-weight:700;text-align:left;padding:8px 10px;text-transform:uppercase;letter-spacing:.04em;border-bottom:1px solid #e8ecf1}
    .dtable td{padding:9px 10px;border-bottom:1px solid #f0f3f7;font-size:12.5px;vertical-align:middle}
    .dtable tr:last-child td{border-bottom:none}
    .dtable tr:hover td{background:#fafbfc}
    .dtable td:first-child{font-weight:600;color:#1a3c6e}
    .sfew{background:#fff3cd;color:#856404;font-size:10.5px;font-weight:600;padding:2px 7px;border-radius:10px;white-space:nowrap}
    .sopen{background:#d1fae5;color:#065f46;font-size:10.5px;font-weight:600;padding:2px 7px;border-radius:10px;white-space:nowrap}
    .shot{background:#fee2e2;color:#991b1b;font-size:10.5px;font-weight:600;padding:2px 7px;border-radius:10px;white-space:nowrap}

    /* FORM */
    .flabel{font-size:12px;font-weight:600;color:#374151;margin-bottom:4px;display:block}
    .finput,.fselect{width:100%;border:1px solid #d1d5db;border-radius:6px;padding:9px 12px;font-size:13px;color:#1f2937;font-family:'Be Vietnam Pro',sans-serif;outline:none;transition:border-color .2s;background:#fff}
    .finput:focus,.fselect:focus{border-color:#1a3c6e;box-shadow:0 0 0 3px rgba(26,60,110,.08)}
    .btnbook{background:#1a3c6e;color:#fff;border:none;border-radius:6px;padding:12px 0;width:100%;font-weight:700;font-size:14px;cursor:pointer;transition:background .2s;letter-spacing:.04em;font-family:'Be Vietnam Pro',sans-serif;text-transform:uppercase}
    .btnbook:hover{background:#234d8c}
    .btnbook:disabled{background:#9ca3af;cursor:not-allowed}
    .btnprint{background:#e5a623;color:#fff;border:none;border-radius:6px;padding:9px 0;width:100%;font-weight:600;font-size:13px;cursor:pointer;font-family:'Be Vietnam Pro',sans-serif;display:flex;align-items:center;justify-content:center;gap:7px;transition:background .2s}
    .btnprint:hover{background:#c48a10}

    /* INFO TAG */
    .itag{display:inline-flex;align-items:center;gap:5px;background:#eef2f8;color:#1a3c6e;border-radius:20px;padding:4px 11px;font-size:12px;font-weight:500}

    /* SECTION TITLE */
    .stitle{font-size:14.5px;font-weight:700;color:#1a3c6e;padding-bottom:8px;border-bottom:2px solid #e8ecf1;margin-bottom:14px}

    /* HIGHLIGHT CARD */
    .hlcard{display:flex;gap:10px;padding:11px;background:#f8fafc;border:1px solid #e8ecf1;border-radius:8px}
    .hlicon{font-size:22px;flex-shrink:0;line-height:1}

    /* QUICK INFO TABLE */
    .qitable{width:100%;border-collapse:collapse}
    .qitable tr{border-bottom:1px solid #f0f3f7}
    .qitable tr:last-child{border-bottom:none}
    .qitable td{padding:8px 6px;font-size:13px;vertical-align:top}
    .qitable td:first-child{font-weight:600;color:#6b7a8d;width:140px;white-space:nowrap}

    /* CONTACT */
    .cbar{background:#eef2f8;border-radius:8px;padding:12px 14px;display:flex;align-items:center;gap:10px;margin-bottom:10px;text-decoration:none}

    /* FORM SECTION */
    .formsec{background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:22px 24px;margin-top:8px}

    @media(min-width:1024px){.sticky-col{position:sticky;top:14px}}
    @media(max-width:1023px){.main-layout{flex-direction:column}.sidebar-col{width:100%}}
    ::-webkit-scrollbar{width:5px;height:5px}
    ::-webkit-scrollbar-track{background:#f1f1f1}
    ::-webkit-scrollbar-thumb{background:#c1c7d0;border-radius:3px}
  </style>
</head>
<body>
<div class="max-w-[1180px] mx-auto px-4 py-4">

  <!-- BREADCRUMB -->
  <nav class="flex items-center text-xs text-gray-500 mb-3 flex-wrap gap-1">
    <a href="#" class="text-blue-700 hover:underline">Trang chủ</a>
    <span class="mx-1">/</span>
    <a href="#" class="text-blue-700 hover:underline">Tour Hàng Châu Trung Quốc</a>
    <span class="mx-1">/</span>
    <span class="text-gray-600 font-medium">Tour Hàng Châu – Thượng Hải (Disneyland) – Bộc Viện Cổ Trấn 6N5Đ</span>
  </nav>

  <!-- MAIN LAYOUT -->
  <div class="flex gap-5 main-layout">

    <!-- =========================================
         LEFT: NỘI DUNG CHI TIẾT
    ========================================= -->
    <div class="flex-1 min-w-0">

      <!-- SLIDER -->
      <div class="slider-wrap mb-4" style="height:420px">
        <div class="slide active"><img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=900&q=80" alt="Thượng Hải"/></div>
        <div class="slide"><img src="https://images.unsplash.com/photo-1610642372651-fe6e4d2c7b86?w=900&q=80" alt="Ô Trấn"/></div>
        <div class="slide"><img src="https://images.unsplash.com/photo-1586455122328-cf3e9a4b2cd6?w=900&q=80" alt="Tây Hồ"/></div>
        <div class="slide"><img src="https://images.unsplash.com/photo-1563731219614-7a46b7beff46?w=900&q=80" alt="Disneyland"/></div>
        <div class="slide"><img src="https://images.unsplash.com/photo-1598887142034-30f6f2588b66?w=900&q=80" alt="Bộc Viện"/></div>
        <button class="slider-btn prev" onclick="moveSlide(-1)">&#8249;</button>
        <button class="slider-btn next" onclick="moveSlide(1)">&#8250;</button>
        <div class="slide-dots" id="dots"></div>
        <div class="slide-num" id="slideNum">1 / 5</div>
      </div>

      <!-- TABS -->
      <div class="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
        <div class="tab-bar" id="tabBar">
          <button class="tab-btn active" onclick="switchTab('tq',this)">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg>
            TỔNG QUAN
          </button>
          <button class="tab-btn" onclick="switchTab('lt',this)">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
            LỊCH TRÌNH
          </button>
          <button class="tab-btn" onclick="switchTab('dv',this)">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            DỊCH VỤ
          </button>
          <button class="tab-btn" onclick="switchTab('ly',this)">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            LƯU Ý
          </button>
        </div>

        <!-- TAB: TỔNG QUAN -->
        <div id="tab-tq" class="tab-pane active p-5">
          <div class="flex flex-wrap gap-2 mb-5">
            <span class="itag"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg> Hàng Châu</span>
            <span class="itag"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg> 6 Ngày 5 Đêm</span>
            <span class="itag"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg> Bay thẳng HAN – PVG</span>
            <span class="itag"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/></svg> Tối thiểu 15 khách</span>
          </div>

          <p class="stitle">✨ Điểm nổi bật của tour</p>
          <div class="grid sm:grid-cols-2 gap-2.5 mb-5">
            <div class="hlcard"><span class="hlicon">🏰</span><div><p class="font-bold text-[#1a3c6e] text-[12.5px] mb-1">Disneyland Thượng Hải</p><p class="text-xs text-gray-500 leading-relaxed">Công viên Disney đầu tiên tại TQ đại lục – lâu đài Enchanted Storybook lớn nhất thế giới, pháo hoa rực rỡ mỗi đêm.</p></div></div>
            <div class="hlcard"><span class="hlicon">🏯</span><div><p class="font-bold text-[#1a3c6e] text-[12.5px] mb-1">Ô Trấn Cổ Kính</p><p class="text-xs text-gray-500 leading-relaxed">Mệnh danh "Venice của châu Á" – hơn 1.300 năm lịch sử, dòng kênh thơ mộng, kiến trúc gỗ đặc trưng Giang Nam.</p></div></div>
            <div class="hlcard"><span class="hlicon">🎬</span><div><p class="font-bold text-[#1a3c6e] text-[12.5px] mb-1">Bộc Viện 5 Sao Tặng Kèm</p><p class="text-xs text-gray-500 leading-relaxed">Đặc quyền Elite Tour – 1 đêm khách sạn 5 sao trong phim trường cổ trang nổi tiếng nhất Trung Quốc.</p></div></div>
            <div class="hlcard"><span class="hlicon">⛵</span><div><p class="font-bold text-[#1a3c6e] text-[12.5px] mb-1">Du Thuyền Tây Hồ</p><p class="text-xs text-gray-500 leading-relaxed">Ngắm Tây Hồ từ thuyền – di sản UNESCO 2011, Hoa Cảng Quan Ngư và Miếu Nhạc Phi lịch sử ngàn năm.</p></div></div>
            <div class="hlcard"><span class="hlicon">☕</span><div><p class="font-bold text-[#1a3c6e] text-[12.5px] mb-1">Điểm Trend Douyin</p><p class="text-xs text-gray-500 leading-relaxed">Check-in Rei Flower Coffee ven sông, Lục Gia Chuỷ skyline – những góc sống ảo đang viral trên MXH.</p></div></div>
            <div class="hlcard"><span class="hlicon">✈️</span><div><p class="font-bold text-[#1a3c6e] text-[12.5px] mb-1">Bay Thẳng – 20kg Ký Gửi</p><p class="text-xs text-gray-500 leading-relaxed">Vietjet Air thẳng HAN–PVG, 20kg ký gửi + 7kg xách tay, không trung chuyển, tiết kiệm thời gian.</p></div></div>
          </div>

          <p class="stitle">📋 Giới thiệu chương trình</p>
          <div class="text-[13.5px] leading-relaxed text-gray-700 space-y-3 mb-5">
            <p>Tour <strong>Hàng Châu – Thượng Hải – Disneyland – Bộc Viện Cổ Trấn 6N5Đ</strong> là hành trình khám phá vùng đất Giang Nam huyền thoại – nơi "trên có thiên đàng, dưới có Tô – Hàng" mà người Trung Hoa đã ngàn năm truyền tụng.</p>
            <p>Hành trình đưa bạn qua 4 điểm đến đặc sắc: <strong>Thượng Hải</strong> – trung tâm tài chính bậc nhất châu Á; <strong>Disneyland Thượng Hải</strong> với lâu đài Enchanted Storybook lớn nhất thế giới; <strong>Ô Trấn</strong> – cổ trấn hơn 1.300 năm tuổi; <strong>Bộc Viện</strong> – phim trường cổ trang nổi tiếng nhất Trung Quốc; và <strong>Hàng Châu</strong> với Tây Hồ được UNESCO công nhận.</p>
            <p>Đặc biệt, Elite Tour tặng kèm <strong>1 đêm nghỉ 5 sao tại Bộc Viện</strong> – đặc quyền chỉ có tại chương trình này – cùng bữa ăn trọn gói, vé tham quan đầy đủ và hướng dẫn viên Tiếng Việt đồng hành suốt hành trình.</p>
          </div>

          <p class="stitle">🗂️ Thông tin nhanh</p>
          <table class="qitable mb-2">
            <tr><td>Mã tour</td><td><span class="font-mono text-[#1a3c6e] font-semibold">ET-CN-HCSH-6N5D</span></td></tr>
            <tr><td>Điểm khởi hành</td><td>Hà Nội (Sân bay Nội Bài – HAN)</td></tr>
            <tr><td>Điểm đến</td><td>Thượng Hải → Ô Trấn → Bộc Viện → Hàng Châu</td></tr>
            <tr><td>Phương tiện</td><td>Vietjet Air – bay thẳng HAN ↔ PVG (Shanghai Pudong)</td></tr>
            <tr><td>Khách sạn</td><td>4 sao tiêu chuẩn + <span class="text-[#2e7d52] font-semibold">1 đêm 5★ Bộc Viện (tặng)</span></td></tr>
            <tr><td>Số bữa ăn</td><td>15 bữa theo chương trình (mức ăn 40 NDT/khách)</td></tr>
            <tr><td>HDV</td><td>HDV Tiếng Việt đi suốt tuyến + HDV địa phương tại TQ</td></tr>
          </table>
        </div>

        <!-- TAB: LỊCH TRÌNH -->
        <div id="tab-lt" class="tab-pane p-5">
          <div class="flex items-center gap-2 text-xs text-gray-500 mb-4 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2.5">
            <svg class="w-4 h-4 text-[#1a3c6e] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
            <span>Hành trình: <strong class="text-[#1a3c6e]">Hà Nội → Thượng Hải → Ô Trấn → Bộc Viện → Hàng Châu → Thượng Hải → Hà Nội</strong></span>
          </div>

          <!-- N1 -->
          <div class="acc-item">
            <div class="acc-header" onclick="toggleAcc(this)">
              <span class="acc-day">Ngày 1</span>
              <div class="acc-title">Hà Nội → Thượng Hải (Bay đêm)</div>
              <div class="acc-meals"><span class="meal-tag">🌙 Bay đêm</span></div>
              <svg class="acc-arrow" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </div>
            <div class="acc-body">
              <div class="trow"><span class="tlabel">17:30</span><div class="tcontent">Xe và Hướng dẫn viên đón đoàn tại điểm hẹn tại Hà Nội, đưa ra sân bay Nội Bài.</div></div>
              <div class="trow"><span class="tlabel">21:15</span><div class="tcontent">Đoàn làm thủ tục check-in. Khởi hành chuyến bay <strong>VJ7238</strong> Hà Nội – Thượng Hải.</div></div>
              <div class="trow"><span class="tlabel">01:15 (+1)</span><div class="tcontent">Đến sân bay Thượng Hải Phố Đông (PVG). Xe đưa đoàn về khách sạn nhận phòng, nghỉ ngơi.</div></div>
              <div class="tipbox">💡 <strong>Mẹo:</strong> Nên ngủ trên máy bay để tỉnh táo cho ngày tham quan tiếp theo. Mang áo mỏng vì điều hòa máy bay lạnh.</div>
            </div>
          </div>

          <!-- N2 -->
          <div class="acc-item">
            <div class="acc-header" onclick="toggleAcc(this)">
              <span class="acc-day">Ngày 2</span>
              <div class="acc-title">Thượng Hải – Phật Ngọc – Bắc Bến – Disneyland</div>
              <div class="acc-meals"><span class="meal-tag">🍳 Sáng</span><span class="meal-tag">🍜 Trưa</span><span class="meal-tag">🍽️ Tối</span></div>
              <svg class="acc-arrow" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </div>
            <div class="acc-body">
              <div class="trow"><span class="tlabel">Sáng</span><div class="tcontent">Ăn sáng tại khách sạn. Tham quan <strong>Công viên Bắc Bến Thượng Hải</strong> – check-in Tháp Đông Phương Minh Châu, Shanghai Tower 128 tầng, ngắm toàn cảnh Lục Gia Chuỷ. Thăm <strong>Chùa Phật Ngọc</strong> – 2 tượng phật ngọc bích quý hiếm.</div></div>
              <div class="trow"><span class="tlabel">Trưa</span><div class="tcontent">Ăn trưa tại nhà hàng. Check-in <strong>Rei Flower Coffee</strong> đang viral trên Douyin – view thẳng Tháp Đông Phương Minh Châu.</div></div>
              <div class="trow"><span class="tlabel">Chiều – Tối</span><div class="tcontent"><strong>Công viên Disneyland Thượng Hải</strong> – 8 khu chủ đề: Mickey Avenue, Fantasyland (lâu đài lớn nhất thế giới), Tomorrow Land (tàu TRON), Adventure Isle, Treasure Cove, Toy Story Land, Zootopia… Thưởng thức show <strong>Light of the Dream</strong> – pháo hoa, nhạc nước, laser rực rỡ.</div></div>
              <div class="tipbox">💡 Quý khách có thể tách đoàn vui chơi tự do cả ngày tại Disneyland (chi phí vé và ăn uống tự túc, không trừ tiền 2 bữa).</div>
            </div>
          </div>

          <!-- N3 -->
          <div class="acc-item">
            <div class="acc-header" onclick="toggleAcc(this)">
              <span class="acc-day">Ngày 3</span>
              <div class="acc-title">Thượng Hải → Ô Trấn → Bộc Viện (Ngủ 5★)</div>
              <div class="acc-meals"><span class="meal-tag">🍳 Sáng</span><span class="meal-tag">🍜 Trưa</span><span class="meal-tag">🍽️ Tối</span><span class="meal-tag gold">⭐ 5 sao Bộc Viện</span></div>
              <svg class="acc-arrow" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </div>
            <div class="acc-body">
              <div class="trow"><span class="tlabel">Sáng</span><div class="tcontent">Ăn sáng, check-out. Khởi hành đến <strong>Ô Trấn</strong> – "Venice phương Đông", một trong sáu cổ trấn đẹp nhất Giang Nam. Tham quan Ô Trấn Tây Sách: kiến trúc gỗ cổ nghìn năm, kênh nước, rạp hát truyền thống, bảo tàng đồ cưới và bảo tàng giường độc đáo.</div></div>
              <div class="trow"><span class="tlabel">Trưa</span><div class="tcontent">Ăn trưa tại nhà hàng. Tiếp tục khám phá những con ngõ hẹp và dòng kênh lãng mạn của Ô Trấn.</div></div>
              <div class="trow"><span class="tlabel">Chiều</span><div class="tcontent">Di chuyển đến <strong>Bộc Viện</strong> – phim trường cổ trang lớn và nổi tiếng nhất Trung Quốc, nơi ghi hình hàng trăm bộ phim kinh điển. Nhận phòng <strong>khách sạn 5 sao tặng kèm</strong>.</div></div>
              <div class="trow"><span class="tlabel">Tối</span><div class="tcontent">Ăn tối. Tự do tản bộ khám phá Bộc Viện lung linh dưới ánh đèn lồng – như bước vào phim cổ trang thực sự.</div></div>
            </div>
          </div>

          <!-- N4 -->
          <div class="acc-item">
            <div class="acc-header" onclick="toggleAcc(this)">
              <span class="acc-day">Ngày 4</span>
              <div class="acc-title">Bộc Viện → Hàng Châu – Tây Hồ – Hoa Cảng</div>
              <div class="acc-meals"><span class="meal-tag">🍳 Sáng</span><span class="meal-tag">🍜 Trưa</span><span class="meal-tag">🍽️ Tối</span></div>
              <svg class="acc-arrow" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </div>
            <div class="acc-body">
              <div class="trow"><span class="tlabel">Sáng</span><div class="tcontent">Ăn sáng tại khách sạn 5 sao Bộc Viện. Khởi hành đến <strong>Hàng Châu</strong> – "thiên đường hạ giới" của Trung Quốc, thủ phủ tỉnh Chiết Giang.</div></div>
              <div class="trow"><span class="tlabel">Trưa</span><div class="tcontent">Ăn trưa. Thăm <strong>Hoa Cảng Quan Ngư</strong> – vườn cá vàng đặc sắc bên bờ Tây Hồ, điểm tham quan không thể bỏ qua.</div></div>
              <div class="trow"><span class="tlabel">Chiều</span><div class="tcontent"><strong>Du thuyền Tây Hồ</strong> – di sản UNESCO 2011. Ngắm Đoạn Kiều, Lôi Phong Tháp, cầu đá cổ và công trình thời Tống. Thăm <strong>Miếu Nhạc Phi</strong> – tưởng niệm danh tướng chống quân Kim.</div></div>
              <div class="trow"><span class="tlabel">Tối</span><div class="tcontent">Ăn tối. <span class="text-blue-600 font-medium">[Tự túc]</span> Xem show <strong>Tống Thành Thiên Cổ Tình</strong> – vở diễn 3D laser do Trương Nghệ Mưu dàn dựng (~380 tệ/người).</div></div>
            </div>
          </div>

          <!-- N5 -->
          <div class="acc-item">
            <div class="acc-header" onclick="toggleAcc(this)">
              <span class="acc-day">Ngày 5</span>
              <div class="acc-title">Hàng Châu → Thượng Hải – Nam Kinh Lộ – Mua sắm</div>
              <div class="acc-meals"><span class="meal-tag">🍳 Sáng</span><span class="meal-tag">🍜 Trưa</span><span class="meal-tag">🍽️ Tối</span></div>
              <svg class="acc-arrow" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </div>
            <div class="acc-body">
              <div class="trow"><span class="tlabel">Sáng</span><div class="tcontent">Ăn sáng. Khởi hành về Thượng Hải. Ghé <strong>Shop Cao su</strong> nổi tiếng – đệm, gối cao su thiên nhiên chất lượng cao.</div></div>
              <div class="trow"><span class="tlabel">Trưa</span><div class="tcontent">Ăn trưa. Tham quan <strong>Phố Nam Kinh Lộ</strong> – "Trung Hoa đệ nhất phố" dài 1,2km sầm uất nhất Thượng Hải với hàng trăm thương hiệu quốc tế.</div></div>
              <div class="trow"><span class="tlabel">Chiều</span><div class="tcontent">Tự do mua sắm tại khu <strong>Outlet</strong> – thương hiệu quốc tế giá giảm sâu. Ghé <strong>Điền Tử Phường</strong> – khu phố nghệ thuật trong hẻm cổ Thượng Hải.</div></div>
              <div class="trow"><span class="tlabel">Tối</span><div class="tcontent">Ăn tối. <span class="text-blue-600 font-medium">[Tự túc]</span> Du thuyền <strong>sông Hoàng Phố</strong> ngắm hai bờ Đông – Tây rực rỡ ánh đèn (~200 tệ/người).</div></div>
            </div>
          </div>

          <!-- N6 -->
          <div class="acc-item">
            <div class="acc-header" onclick="toggleAcc(this)">
              <span class="acc-day">Ngày 6</span>
              <div class="acc-title">Thượng Hải → Hà Nội – Kết thúc tour</div>
              <div class="acc-meals"><span class="meal-tag">🍳 Sáng</span><span class="meal-tag">🛬 Bay về</span></div>
              <svg class="acc-arrow" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </div>
            <div class="acc-body">
              <div class="trow"><span class="tlabel">Sáng</span><div class="tcontent">Ăn sáng. Tự do mua sắm, check-out trước 12:00.</div></div>
              <div class="trow"><span class="tlabel">02:00</span><div class="tcontent">Xe và HDV tiễn đoàn ra sân bay PVG. Làm thủ tục chuyến bay <strong>VJ7239</strong> Thượng Hải → Hà Nội.</div></div>
              <div class="trow"><span class="tlabel">04:45</span><div class="tcontent">Về đến sân bay Nội Bài. Xe đưa đoàn về điểm hẹn trong thành phố. <strong>Kết thúc chương trình – Hẹn gặp lại quý khách!</strong></div></div>
            </div>
          </div>
        </div>

        <!-- TAB: DỊCH VỤ -->
        <div id="tab-dv" class="tab-pane p-5">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- BAO GỒM -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <div class="w-6 h-6 rounded-full bg-[#2e7d52] flex-shrink-0 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 class="font-bold text-[#2e7d52] text-[14px]">Dịch vụ bao gồm</h3>
              </div>
              <ul>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>Vé máy bay khứ hồi Hà Nội – Thượng Hải (Vietjet Air, vé đoàn)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>Thuế sân bay, phụ phí an ninh và xăng dầu</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>Hành lý ký gửi <strong>20kg</strong> + 7kg xách tay</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>Khách sạn <strong>4 sao</strong> tiêu chuẩn địa phương (2 khách/phòng)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span class="font-semibold text-[#2e7d52]">🌟 Tặng 1 đêm 5 sao tại Bộc Viện (đặc quyền Elite Tour)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>15 bữa ăn theo chương trình (40 NDT/bữa)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>Xe ô tô máy lạnh đời mới đưa đón toàn chương trình</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>Vé vào cửa tất cả điểm tham quan trong chương trình</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>HDV Tiếng Việt đi suốt tuyến + HDV địa phương tại TQ</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>Visa Trung Quốc cho công dân Việt Nam</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>Bảo hiểm du lịch quốc tế (bồi thường tối đa 200 triệu/vụ)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>Mũ du lịch Elite Tour + nước uống trên xe mỗi ngày</span></li>
              </ul>
            </div>
            <!-- KHÔNG BAO GỒM -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <div class="w-6 h-6 rounded-full bg-[#d63030] flex-shrink-0 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
                </div>
                <h3 class="font-bold text-[#d63030] text-[14px]">Dịch vụ không bao gồm</h3>
              </div>
              <ul>
                <li class="chk-li"><svg class="w-4 h-4 text-[#d63030] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg><span>Tiền tip lái xe và HDV (~5 USD/khách/ngày)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#d63030] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg><span>Chi phí làm hộ chiếu (passport)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#d63030] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg><span>Chi phí cá nhân: đồ uống thêm, giặt ủi, minibar...</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#d63030] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg><span>Phụ thu phòng đơn (liên hệ tư vấn viên)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#d63030] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg><span>Vé + ăn uống khi tự do cả ngày tại Disneyland (tùy chọn)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#d63030] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg><span>Show Tống Thành Thiên Cổ Tình (~380 tệ – tự túc)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#d63030] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg><span>Du thuyền sông Hoàng Phố tối (~200 tệ – tự túc)</span></li>
                <li class="chk-li"><svg class="w-4 h-4 text-[#d63030] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg><span>Chi phí xuất hóa đơn thuế VAT</span></li>
              </ul>
              <div class="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <p class="font-semibold text-xs text-blue-800 mb-1.5">💰 Giá trẻ em</p>
                <p class="text-xs text-blue-700">• Trẻ 2–10 tuổi: 90% giá người lớn (có chỗ ngồi)</p>
                <p class="text-xs text-blue-700 mt-0.5">• Trẻ dưới 2 tuổi: 30% giá người lớn (không ghế, không suất ăn)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB: LƯU Ý -->
        <div id="tab-ly" class="tab-pane p-5">
          <div class="notebox">
            <p class="font-bold text-amber-800 text-[13px] mb-2 flex items-center gap-1.5"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg> Giấy tờ &amp; Visa</p>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Hộ chiếu (passport) phải còn hạn ít nhất <strong>6 tháng</strong> từ ngày khởi hành.</span></div>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Tên trên vé máy bay phải <strong>khớp chính xác</strong> với hộ chiếu. Kiểm tra kỹ khi đăng ký.</span></div>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Visa Trung Quốc đã bao gồm giá tour. Nộp hộ chiếu gốc trước <strong>10 ngày làm việc</strong>.</span></div>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Trẻ dưới 14 tuổi cần giấy khai sinh bản gốc và phải đi cùng bố/mẹ.</span></div>
          </div>
          <div class="notebox">
            <p class="font-bold text-amber-800 text-[13px] mb-2 flex items-center gap-1.5"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg> Thanh toán &amp; Chính sách huỷ</p>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Đặt cọc <strong>5.000.000đ/người</strong> để giữ chỗ ngay khi đăng ký.</span></div>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Thanh toán <strong>100%</strong> trước ngày khởi hành 30 ngày.</span></div>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Huỷ trước 30 ngày: hoàn <strong>80%</strong> | Huỷ 15–29 ngày: hoàn <strong>50%</strong> | Dưới 15 ngày: <strong>không hoàn</strong>.</span></div>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Không được cấp visa: hoàn lại tiền trừ phí dịch vụ visa và phí hành chính.</span></div>
          </div>
          <div class="notebox">
            <p class="font-bold text-amber-800 text-[13px] mb-2 flex items-center gap-1.5"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg> Lưu ý khi đi tour</p>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Facebook, Instagram, YouTube, Google bị chặn tại TQ – cài VPN trước khi đi.</span></div>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Thanh toán phổ biến qua WeChat Pay / Alipay hoặc dùng tiền mặt NDT.</span></div>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Tỷ giá tham khảo: 1 NDT ≈ 3.450 VNĐ. Nên đổi NDT tại Việt Nam trước.</span></div>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Trang phục lịch sự, kín đáo khi tham quan đền chùa.</span></div>
            <div class="nrow"><svg class="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg><span>Đoàn cam kết không có điểm mua sắm bắt buộc – chương trình hoàn toàn minh bạch.</span></div>
          </div>
        </div>
      </div><!-- end tabs -->

      <!-- FORM ĐẶT TOUR -->
      <div class="formsec" id="booking-form">
        <h2 class="text-[16px] font-bold text-[#1a3c6e] mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
          <svg class="w-5 h-5 text-[#e5a623]" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm11 1a1 1 0 00-1 1v3h-1a1 1 0 100 2h4a1 1 0 100-2h-1v-3a1 1 0 00-1-1z"/></svg>
          ĐẶT TOUR NGAY
        </h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div><label class="flabel">Họ và tên <span class="text-red-500">*</span></label><input id="f-name" type="text" class="finput" placeholder="Nguyễn Văn A" /></div>
          <div><label class="flabel">Số điện thoại <span class="text-red-500">*</span></label><input id="f-phone" type="tel" class="finput" placeholder="0912 120 208" /></div>
          <div><label class="flabel">Email</label><input type="email" class="finput" placeholder="email@example.com" /></div>
          <div>
            <label class="flabel">Ngày khởi hành <span class="text-red-500">*</span></label>
            <select id="f-date" class="fselect">
              <option value="">-- Chọn ngày khởi hành --</option>
              <option>20/06/2025 – Còn 8 chỗ</option>
              <option>04/07/2025 – Còn 14 chỗ</option>
              <option>18/07/2025 – Mở đặt chỗ</option>
              <option>01/08/2025 – Mở đặt chỗ</option>
              <option>15/08/2025 – Mở đặt chỗ</option>
            </select>
          </div>
          <div>
            <label class="flabel">Số người lớn <span class="text-red-500">*</span></label>
            <div class="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button onclick="changeQty('adults',-1)" class="px-3 py-2.5 bg-gray-100 hover:bg-gray-200 font-bold text-base text-gray-600 border-r border-gray-300">−</button>
              <input type="number" id="adults" value="2" min="1" class="finput border-0 text-center rounded-none" style="box-shadow:none;flex:1" />
              <button onclick="changeQty('adults',1)" class="px-3 py-2.5 bg-gray-100 hover:bg-gray-200 font-bold text-base text-gray-600 border-l border-gray-300">+</button>
            </div>
          </div>
          <div>
            <label class="flabel">Trẻ em (2–10 tuổi)</label>
            <div class="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button onclick="changeQty('children',-1)" class="px-3 py-2.5 bg-gray-100 hover:bg-gray-200 font-bold text-base text-gray-600 border-r border-gray-300">−</button>
              <input type="number" id="children" value="0" min="0" class="finput border-0 text-center rounded-none" style="box-shadow:none;flex:1" />
              <button onclick="changeQty('children',1)" class="px-3 py-2.5 bg-gray-100 hover:bg-gray-200 font-bold text-base text-gray-600 border-l border-gray-300">+</button>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label class="flabel">Yêu cầu đặc biệt</label>
            <textarea class="finput" rows="3" placeholder="Phòng đơn, ăn chay, hỗ trợ người cao tuổi..."></textarea>
          </div>
        </div>
        <!-- Tổng tiền -->
        <div class="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between flex-wrap gap-3">
          <div>
            <p class="text-xs text-gray-500">Tổng ước tính</p>
            <p class="font-bold text-[#1a3c6e] text-[15px]" id="totalPrice">37.980.000đ</p>
            <p class="text-xs text-gray-400" id="totalNote">2 người lớn × 18.990.000đ</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-gray-500">Đặt cọc ngay</p>
            <p class="font-bold text-[#2e7d52] text-[15px]" id="depositAmt">10.000.000đ</p>
            <p class="text-xs text-gray-400" id="depositNote">5tr/người × 2</p>
          </div>
        </div>
        <button class="btnbook mt-4" id="submitBtn" onclick="submitBooking()">ĐẶT GIỮ CHỖ NGAY</button>
        <div class="mt-3 flex items-start gap-2 text-xs text-gray-500">
          <svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          <span>Thông tin của bạn được bảo mật tuyệt đối. Tư vấn viên sẽ liên hệ trong vòng <strong>30 phút</strong> làm việc.</span>
        </div>
        <div id="successMsg" class="hidden mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
          <svg class="w-8 h-8 text-[#2e7d52] mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          <p class="font-bold text-[#2e7d52] text-[14px]">Đặt tour thành công!</p>
          <p class="text-[13px] text-gray-600 mt-1">Cảm ơn bạn đã tin tưởng Elite Tour. Tư vấn viên sẽ liên hệ trong vòng 30 phút.</p>
        </div>
      </div>
    </div><!-- /left -->

    <!-- =========================================
         RIGHT: SIDEBAR
    ========================================= -->
    <div class="sidebar-col w-full lg:w-[310px] flex-shrink-0">
      <div class="sticky-col">

        <!-- PRICE CARD -->
        <div class="scard">
          <div class="shead">Tour Hàng Châu – Thượng Hải 6N5Đ</div>
          <div class="p-4">
            <div class="inline-flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mb-3">
              <svg class="w-3.5 h-3.5 text-[#1a3c6e]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
              Hàng Châu
            </div>
            <div class="flex items-start justify-between mb-1">
              <div>
                <p class="pnow">14.690.000<span class="text-base font-normal text-gray-400">đ</span></p>
                <p class="pold mt-0.5">Giá mới: 17.990.000đ</p>
              </div>
              <span class="pbadge text-center leading-tight">Tiết kiệm<br/>–18%</span>
            </div>
            <p class="text-[11px] text-gray-400 mb-3">/ người • đã bao gồm vé máy bay khứ hồi</p>
            <button class="btnprint mb-3">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a1 1 0 001 1h8a1 1 0 001-1v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1zm2 0h6v3H7V4zm-1 9v-1h8v1H6zm8 1v1H6v-1h8z" clip-rule="evenodd"/></svg>
              In chương trình tour
            </button>
            <p class="text-[11.5px] text-gray-500 mb-3">🗺️ Hành trình: <strong class="text-gray-700">Hà Nội – Hàng Châu</strong></p>
            <button class="btnbook" onclick="document.getElementById('booking-form').scrollIntoView({behavior:'smooth'})">ĐẶT GIỮ CHỖ NGAY</button>
          </div>
        </div>

        <!-- DEPARTURE TABLE -->
        <div class="scard">
          <div class="shead">📅 Lịch khởi hành</div>
          <div class="p-3">
            <table class="dtable">
              <thead><tr><th>Ngày</th><th>Giá/người</th><th>Tình trạng</th></tr></thead>
              <tbody>
                <tr><td>20/06/2025</td><td class="text-[#e5a623] font-bold">14.690.000đ</td><td><span class="shot">Còn 8 chỗ</span></td></tr>
                <tr><td>04/07/2025</td><td class="text-[#e5a623] font-bold">14.690.000đ</td><td><span class="sfew">Còn 14 chỗ</span></td></tr>
                <tr><td>18/07/2025</td><td class="text-[#e5a623] font-bold">18.990.000đ</td><td><span class="sopen">Mở đặt chỗ</span></td></tr>
                <tr><td>01/08/2025</td><td class="text-[#e5a623] font-bold">18.990.000đ</td><td><span class="sopen">Mở đặt chỗ</span></td></tr>
                <tr><td>15/08/2025</td><td class="text-[#e5a623] font-bold">18.990.000đ</td><td><span class="sopen">Mở đặt chỗ</span></td></tr>
              </tbody>
            </table>
            <p class="text-[10.5px] text-gray-400 mt-2">* Giá có thể thay đổi theo thời điểm đặt</p>
          </div>
        </div>

        <!-- CONTACT -->
        <div class="scard">
          <div class="shead">📞 Liên hệ tư vấn</div>
          <div class="p-4 space-y-2">
            <a href="tel:02435642888" class="cbar">
              <div class="w-8 h-8 bg-[#1a3c6e] rounded-full flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg></div>
              <div><p class="font-bold text-[#1a3c6e] text-[13px]">024 3564 2888</p><p class="text-[11px] text-gray-500">Hotline hỗ trợ 24/7</p></div>
            </a>
            <a href="tel:0912120208" class="cbar">
              <div class="w-8 h-8 bg-[#2e7d52] rounded-full flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg></div>
              <div><p class="font-bold text-[#2e7d52] text-[13px]">0912 120 208</p><p class="text-[11px] text-gray-500">Zalo / Viber hỗ trợ</p></div>
            </a>
            <div class="text-center pt-1">
              <p class="text-[11px] text-gray-400">📍 Phòng 3618–3619, Tòa C5 D'Capitale</p>
              <p class="text-[11px] text-gray-400">119 Trần Duy Hưng, Hà Nội</p>
            </div>
          </div>
        </div>

        <!-- TRUST -->
        <div class="bg-white border border-gray-200 rounded-lg p-4">
          <p class="font-bold text-[12.5px] text-gray-700 mb-3 text-center">✅ Cam kết của Elite Tour</p>
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-[12px] text-gray-600"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>Giá tốt nhất – hoàn tiền nếu tìm được giá rẻ hơn</div>
            <div class="flex items-center gap-2 text-[12px] text-gray-600"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>Không có điểm mua sắm bắt buộc</div>
            <div class="flex items-center gap-2 text-[12px] text-gray-600"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>Bảo hiểm du lịch quốc tế 200 triệu</div>
            <div class="flex items-center gap-2 text-[12px] text-gray-600"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>Tư vấn viên hỗ trợ 24/7 trong hành trình</div>
            <div class="flex items-center gap-2 text-[12px] text-gray-600"><svg class="w-4 h-4 text-[#2e7d52] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>15+ năm kinh nghiệm tổ chức tour quốc tế</div>
          </div>
        </div>

      </div>
    </div><!-- /sidebar -->

  </div>
</div>

<script>
// SLIDER
let cur = 0, total = 5;
const dotsEl = document.getElementById('dots');
for(let i=0;i<total;i++){
  const d=document.createElement('div');
  d.className='dot'+(i===0?' active':'');
  d.onclick=()=>goTo(i);
  dotsEl.appendChild(d);
}
function goTo(n){
  document.querySelectorAll('.slide')[cur].classList.remove('active');
  document.querySelectorAll('.dot')[cur].classList.remove('active');
  cur=(n+total)%total;
  document.querySelectorAll('.slide')[cur].classList.add('active');
  document.querySelectorAll('.dot')[cur].classList.add('active');
  document.getElementById('slideNum').textContent=(cur+1)+' / '+total;
}
function moveSlide(d){goTo(cur+d);}
setInterval(()=>moveSlide(1),4500);

// TABS
function switchTab(id,btn){
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  btn.classList.add('active');
}

// ACCORDION
function toggleAcc(hdr){
  const body=hdr.nextElementSibling, arrow=hdr.querySelector('.acc-arrow');
  const open=body.classList.contains('open');
  document.querySelectorAll('.acc-body').forEach(b=>b.classList.remove('open'));
  document.querySelectorAll('.acc-arrow').forEach(a=>a.classList.remove('open'));
  if(!open){body.classList.add('open');arrow.classList.add('open');}
}
document.addEventListener('DOMContentLoaded',()=>{
  const f=document.querySelector('.acc-header');
  if(f)toggleAcc(f);
});

// QTY + TOTAL
const PRICE=18990000, DEPOSIT=5000000;
function changeQty(id,d){
  const el=document.getElementById(id);
  el.value=Math.max(id==='adults'?1:0,(parseInt(el.value)||0)+d);
  updateTotal();
}
function updateTotal(){
  const a=parseInt(document.getElementById('adults').value)||0;
  const c=parseInt(document.getElementById('children').value)||0;
  const total=a*PRICE+c*Math.round(PRICE*.9);
  const dep=(a+c)*DEPOSIT;
  document.getElementById('totalPrice').textContent=total.toLocaleString('vi-VN')+'đ';
  document.getElementById('totalNote').textContent=a+' người lớn'+(c?' + '+c+' trẻ em':'')+' × '+PRICE.toLocaleString('vi-VN')+'đ';
  document.getElementById('depositAmt').textContent=dep.toLocaleString('vi-VN')+'đ';
  document.getElementById('depositNote').textContent='5tr/người × '+(a+c);
}
document.getElementById('adults').addEventListener('input',updateTotal);
document.getElementById('children').addEventListener('input',updateTotal);

// SUBMIT
function submitBooking(){
  const name=document.getElementById('f-name').value.trim();
  const phone=document.getElementById('f-phone').value.trim();
  const date=document.getElementById('f-date').value;
  if(!name){alert('Vui lòng nhập họ và tên.');return;}
  if(!phone){alert('Vui lòng nhập số điện thoại.');return;}
  if(!date){alert('Vui lòng chọn ngày khởi hành.');return;}
  const btn=document.getElementById('submitBtn');
  btn.disabled=true;btn.textContent='✔ Đã gửi yêu cầu';btn.style.background='#2e7d52';
  document.getElementById('successMsg').classList.remove('hidden');
  document.getElementById('booking-form').scrollIntoView({behavior:'smooth'});
}
</script>
</body>
</html>