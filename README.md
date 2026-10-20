# Đinh Thành Vinh – Backend Developer Portfolio

Website portfolio song ngữ (VI/EN), giao diện responsive, chạy offline, phù hợp để gửi cùng CV cho vị trí **Backend Developer Intern / Fresher**.

## Chức năng
- Trang giới thiệu, mục tiêu nghề nghiệp, kỹ năng và timeline thực tập **RikkeiEdu (Rikkeisoft)**.
- **11 dự án**: SinoStock ERP, HealthAI, ShopTech, BookingMovie, MiniERP, Library Management System, Spotify Lite, Quản lý sinh viên, Helpdesk, Flight Booking, LearnHub LMS.
- Mỗi dự án có mô tả bài toán, công nghệ, **team size**, **vai trò**, đầu việc thực hiện, liên kết GitHub; link demo trích từ CV PDF của chủ dự án hoặc README/GitHub repository.
- Bộ lọc dự án theo Java, Node.js, .NET, PHP, AI; modal chi tiết từng dự án.
- Đổi ngôn ngữ Việt ↔ Anh và theme sáng ↔ tối, lưu tùy chọn trình duyệt.
- Email, điện thoại, GitHub, tải CV PDF; không cần backend hay tài khoản.

## Link demo và dự án C# (19/10/2026)

| Dự án | Demo được cung cấp/ghi trên repository | Tình trạng nguồn |
|---|---|---|
| SinoStock ERP (Java) | https://sinostock-erp-api.onrender.com | README repo – endpoint Render; cần kiểm tra frontend khi mở |
| HealthAI (Java + AI) | https://health-ai-steel.vercel.app | README repo & GitHub homepage |
| ShopTech (NestJS) | https://shoptech-ecommerce.vercel.app/ | Hyperlink CV PDF & GitHub homepage |
| Helpdesk (NestJS) | https://helpdest-fe.onrender.com/ | Hyperlink CV PDF |
| Flight Booking (Laravel) | https://flight-booking-seven-flame.vercel.app/ | Hyperlink CV PDF |
| Flight Booking (link khác) | https://flight-booking-tech-d941.vercel.app | GitHub repository homepage – hiện khác CV, được mở bằng nút phụ ở chi tiết dự án |
| LearnHub LMS (Laravel) | https://learn-hub-lms-seven.vercel.app/ | Hyperlink CV PDF & GitHub homepage |
| Quản lý sinh viên (Java) | Chưa xác nhận URL | README/repo hiện không ghi demo website; không tự tạo URL |
| BookingMovie (Java Spring Boot + React) | Chưa xác nhận | Thực tập RikkeiEdu (09–12/2025), team 5 · https://github.com/vdprogramm/BookingMovie |
| MiniERP (C#/.NET) | Chưa có demo | Theo yêu cầu của chủ dự án |
| Library Management System (C#/.NET) | Chưa có demo | Team size: 1 · GitHub: https://github.com/vdprogramm/libraryCS |
| Spotify Lite (C#/.NET) | Chưa có demo | Team size: 1 · GitHub: https://github.com/vdprogramm/Spotify |

**Lưu ý:** Các link trên được xác định từ tài liệu CV / GitHub, **chưa xác thực được toàn bộ website có đang truy cập và vận hành bình thường hay không**. Đừng coi sự tồn tại của liên kết là bằng chứng app hoạt động end-to-end.

## Cách chạy

**Cách 1 – Nhanh nhất:** giải nén toàn bộ thư mục và mở `index.html` trong trình duyệt. Không cần `npm install`.

**Cách 2 – Chạy local qua server:**

```bash
python -m http.server 8000
```

Mở `http://localhost:8000`.

**Cách 3 – Deploy Vercel:** upload toàn bộ thư mục làm GitHub repository mới (ví dụ `portfolio-vinh`), sau đó vào Vercel → Add New → Project → Import repository. Framework Preset: **Other** (static), Build Command: **để trống**, Output Directory: **để trống**, Root Directory: `/`. Vercel sẽ phục vụ `index.html`.

**Cách 4 – Netlify:** kéo thả thư mục chứa `index.html` (hoặc bản zip giải nén) vào Netlify Drop.

## Cập nhật thông tin

- `src/data.js`: sửa email, số điện thoại, links GitHub, demo, **teamSize**, vai trò, mô tả, công nghệ dự án.
- `src/app.js`: nội dung giới thiệu, kinh nghiệm, kỹ năng, bộ lọc, tương tác UI.
- `src/styles.css`: màu sắc, kiểu chữ, responsive.
- `DinhThanhVinh_CV_Backend_Intern.pdf`: CV được gắn với nút Tải CV; thay bằng CV chính thức mới nhất khi cần.

## Lưu ý cần rà soát trước khi công khai

- ShopTech có `teamSize: 5`; Library Management System và Spotify Lite có `teamSize: 1` theo xác nhận mới của chủ dự án. Quy mô các dự án khác được giữ theo hồ sơ đang sử dụng; hãy rà soát nếu cần.
- Thời gian RikkeiEdu: **09/2025–12/2025**, là internship/training theo thông tin chủ sở hữu đã xác nhận, **không ghi thành nhân viên chính thức của Rikkeisoft**.
- Tiếng Anh chỉ mô tả khả năng hiện tại; **không tự khai TOEIC/IELTS**.
- Demo có thể phụ thuộc vào máy chủ bên ngoài, trạng thái database và tài khoản demo. Link demo được lấy từ README của từng repository, **không khẳng định luôn hoạt động**.
- Repo độc lập có thể tiếp tục phát triển; mô tả trong portfolio không thay thế kiểm thử end-to-end.

## Công nghệ website
- React (bundled locally as a UMD runtime) + JavaScript, HTML5, CSS3.
- Không dùng API key, font bên ngoài hay tài nguyên bên thứ ba, chạy được khi offline.
- Đây là bản đóng gói **zero-build** để dễ mang đi triển khai. Khi muốn mở rộng thành codebase React/Vite hiện đại, có thể tách các component trong `src/app.js` và thay runtime UMD bằng React/Vite.

## Cấu trúc

```text
portfolio_vinh/
├── index.html
├── favicon.svg
├── DinhThanhVinh_CV_Backend_Intern.pdf
├── vendor/
│   ├── react.production.min.js
│   └── react-dom.production.min.js
├── src/
│   ├── app.js
│   ├── data.js
│   └── styles.css
└── README.md
```

Tác giả: Đinh Thành Vinh · GitHub: https://github.com/vdprogramm

## Dự án thực tập RikkeiEdu – BookingMovie

- **Repository:** https://github.com/vdprogramm/BookingMovie
- **Team size:** 5 (do chủ portfolio xác nhận).
- **Bối cảnh:** Dự án được thực hiện trong kỳ thực tập/đào tạo Java Backend tại RikkeiEdu (Rikkeisoft), 09/2025–12/2025.
- **Cấu trúc đã kiểm tra:** Có thư mục dành cho API Java dùng cấu hình JDK 21/Gradle và React client; hai thư mục lõi được lưu dưới dạng Git submodule. Nội dung chức năng và module cá nhân phụ trách chưa xác nhận nên không tự bổ sung.
- **Live demo:** Chưa cung cấp hoặc xác minh đường dẫn.
- **Các dự án C#** MiniERP, Library Management và Spotify Lite vẫn được giữ nguyên trên website.
