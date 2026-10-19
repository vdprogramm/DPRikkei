/* Edit personal info, team size, links, and project descriptions here. */
window.PORTFOLIO = {
  person: {
    name: 'Đinh Thành Vinh', initials: 'DV',
    role: 'Backend Developer',
    email: 'dinhthanhvinhnb205@gmail.com',
    phone: '0943053133', city: 'Hà Nội, Việt Nam',
    github: 'https://github.com/vdprogramm',
    cv: './DinhThanhVinh_CV_Backend_Intern.pdf',
    education: 'Đại học CMC',
    major: 'Công nghệ thông tin',
  },
  projects: [
    {
      id: 'sinostock', number: '01', category: ['Java', 'Fullstack'], visual: 'erp',
      name: 'SinoStock ERP', year: '2026', teamSize: '1',
      role: {vi:'Full-stack Developer • Java Backend', en:'Full-stack Developer • Java Backend'},
      overview: {
        vi:'Hệ thống quản lý mua hàng, kho, bán hàng và công nợ, mô phỏng luồng vận hành doanh nghiệp.',
        en:'ERP application covering purchasing, inventory, sales and accounts receivable workflows.'
      },
      detail: {
        vi:['Thiết kế REST API với Spring Boot, mô hình dữ liệu PostgreSQL và JPA/Hibernate.', 'Xây dựng luồng mua hàng → nhập kho → xác nhận đơn bán → ghi nhận thu tiền.', 'Tích hợp Spring Security, JWT, RBAC, kiểm thử bằng JUnit/MockMvc và giao diện React.'],
        en:['Designed Spring Boot REST APIs, PostgreSQL schemas and JPA/Hibernate entities.','Built purchase-to-stock, order confirmation and receivable workflows.','Added Spring Security, JWT/RBAC, API tests and a React frontend.']
      },
      stack: ['Java 21','Spring Boot','PostgreSQL','React','JWT','JPA'],
      github: 'https://github.com/vdprogramm/SinoStock-ERP',
      demo: 'https://sinostock-erp-api.onrender.com', demoLabel: {vi:'Mở bản demo', en:'Open live demo'},
      featured: true
    },
    {
      id:'healthai', number:'02', category:['Java','AI','Fullstack'], visual:'health',
      name:'HealthAI', year:'2026', teamSize:'1',
      role:{vi:'Full-stack & AI Developer',en:'Full-stack & AI Developer'},
      overview:{vi:'Hệ thống đặt lịch khám, quản lý bác sĩ và gợi ý chuyên khoa bằng trợ lý AI.',en:'Healthcare appointment platform with doctor management and AI-assisted specialty suggestions.'},
      detail:{vi:['Phát triển Java Spring Boot API cho bệnh nhân, bác sĩ, lịch khám và cuộc hẹn.','Triển khai JWT/RBAC, PostgreSQL (Neon), kết nối React frontend.','Tách dịch vụ AI FastAPI để phân tích triệu chứng và gợi ý chuyên khoa; không dùng thay thế chẩn đoán.'],en:['Built Java Spring Boot APIs for patients, doctors, schedules and appointments.','Integrated JWT/RBAC, PostgreSQL (Neon) and React.','Connected a separate FastAPI service for specialty suggestions; not a medical diagnosis tool.']},
      stack:['Java','Spring Boot','React','PostgreSQL','FastAPI','JWT'],
      github:'https://github.com/vdprogramm/HealthAI', demo:'https://health-ai-steel.vercel.app', demoLabel:{vi:'Mở web demo',en:'Open web demo'},
      featured:true
    },
    {
      id:'shoptech', number:'03', category:['Node.js','AI','Fullstack'], visual:'commerce',
      name:'ShopTech', year:'2026', teamSize:'5',
      role:{vi:'Backend & AI Developer',en:'Backend & AI Developer'},
      overview:{vi:'Nền tảng thương mại điện tử nhiều nhà bán hàng, gồm web, mobile và chatbot tư vấn sản phẩm.',en:'Multi-vendor e-commerce platform featuring web, mobile and AI-powered product assistance.'},
      detail:{vi:['Xây dựng module NestJS cho đăng nhập, sản phẩm, giỏ hàng, đơn hàng và phân quyền người dùng.','Kết nối MongoDB/Mongoose, REST APIs, thanh toán và các ứng dụng React/React Native.','Phát triển AI FastAPI dùng RAG, vector search để hỗ trợ hỏi đáp và gợi ý sản phẩm.'],en:['Built NestJS auth, catalog, cart, orders and role-based access modules.','Connected MongoDB/Mongoose APIs with React and React Native apps.','Developed a FastAPI RAG service for product search and recommendations.']},
      stack:['NestJS','MongoDB','React','React Native','FastAPI','RAG'],
      github:'https://github.com/vdprogramm/Shoptech-ecommerce',demo:'https://shoptech-ecommerce.vercel.app/', featured:true
    },
    {
      id:'minierp', number:'04', category:['.NET','Fullstack'], visual:'warehouse',
      name:'MiniERP', year:'2026', teamSize:'1',
      role:{vi:'Backend / Full-stack Developer',en:'Backend / Full-stack Developer'},
      overview:{vi:'Nền tảng quản lý kho, xuất nhập hàng, nhân viên và hóa đơn với phân quyền theo bộ phận.',en:'Inventory, employee and invoice management system with role-based and branch-level access.'},
      detail:{vi:['Xây dựng ASP.NET Core Web API và Entity Framework Core với PostgreSQL.','Xử lý nghiệp vụ tồn kho, xuất/nhập, nhân viên, hóa đơn và kiểm soát quyền theo chi nhánh.','Viết và chạy unit tests; kiểm tra truy vấn, chỉ mục dữ liệu và luồng nghiệp vụ.'],en:['Built ASP.NET Core APIs with EF Core and PostgreSQL.','Implemented stock, employees, invoices and branch access controls.','Wrote unit tests and reviewed indexes and database queries.']},
      stack:['C#','.NET','EF Core','PostgreSQL','JWT','xUnit'],
      github:'https://github.com/vdprogramm/MiniERP',demo:null,demoStatus:{vi:'Chưa triển khai bản demo',en:'No deployed demo yet'},featured:false
    },
    {
      id:'student', number:'05', category:['Java','Fullstack'], visual:'campus',
      name:'Quản lý sinh viên', year:'2026', teamSize:'1',
      role:{vi:'Full-stack Developer • Java Backend',en:'Full-stack Developer • Java Backend'},
      overview:{vi:'Hệ thống đào tạo phân vai Admin, Giảng viên, Sinh viên và quản lý đăng ký môn/điểm.',en:'Student management platform with Admin, Lecturer and Student roles.'},
      detail:{vi:['Thiết kế API Java Spring Boot cho sinh viên, lớp học, môn học, đăng ký và điểm số.','Áp dụng Spring Security để giới hạn truy cập dữ liệu theo 3 vai trò.','Tách React frontend và Java backend; cấu hình MySQL, Render, Vercel.'],en:['Implemented Java Spring Boot APIs for students, classes, courses, enrollments and grades.','Protected role-specific endpoints using Spring Security.','Separated React frontend and Spring Boot backend with MySQL integration.']},
      stack:['Java','Spring Boot','MySQL','React','Spring Security'],
      github:'https://github.com/vdprogramm/QuanLySinhVien',demo:null,demoStatus:{vi:'Chưa xác nhận đường dẫn demo',en:'Demo URL not verified'},featured:false
    },
    {
      id:'helpdesk', number:'06', category:['Node.js','Fullstack'], visual:'chat',
      name:'Helpdesk SaaS', year:'2026', teamSize:'1',
      role:{vi:'Full-stack Developer',en:'Full-stack Developer'},
      overview:{vi:'Hệ thống quản lý ticket và hỗ trợ khách hàng qua live chat thời gian thực.',en:'Real-time customer support platform combining ticket management and live conversations.'},
      detail:{vi:['Xây dựng API NestJS quản lý ticket, phòng ban, nhân viên, hội thoại và tin nhắn.','Thiết kế dữ liệu PostgreSQL bằng Prisma, bảo vệ tài nguyên với JWT/RBAC.','Kết nối Socket.IO để chat trực tuyến, hiển thị ở giao diện React.'],en:['Developed NestJS modules for tickets, teams, agents, conversations and messages.','Modeled PostgreSQL data using Prisma and JWT/RBAC.','Integrated Socket.IO real-time chat with a React frontend.']},
      stack:['NestJS','PostgreSQL','Prisma','Socket.IO','React'],
      github:'https://github.com/vdprogramm/helpdest',demo:'https://helpdest-fe.onrender.com/',featured:false
    },
    {
      id:'flight', number:'07', category:['PHP','Fullstack'], visual:'flight',
      name:'Flight Booking', year:'2026', teamSize:'1',
      role:{vi:'Full-stack Developer',en:'Full-stack Developer'},
      overview:{vi:'Ứng dụng tìm chuyến bay, giữ ghế và đặt vé với xử lý đồng thời tránh trùng ghế.',en:'Flight reservation platform with seat holding and concurrency-aware booking flows.'},
      detail:{vi:['Thiết kế Laravel REST API cho hãng bay, sân bay, chuyến bay, ghế và booking.','Xử lý giữ ghế, booking, giao dịch đồng thời bằng locking nhằm giảm nguy cơ đặt trùng.','Tích hợp giao diện React/TypeScript cho người dùng và quản trị viên.'],en:['Developed Laravel APIs for flights, airports, seats and bookings.','Implemented seat-hold flows and database locking for concurrent bookings.','Integrated React/TypeScript interfaces for customers and administrators.']},
      stack:['Laravel','PHP','PostgreSQL','React','TypeScript'],
      github:'https://github.com/vdprogramm/Flight-booking',demo:'https://flight-booking-seven-flame.vercel.app/',alternateDemo:'https://flight-booking-tech-d941.vercel.app',featured:false
    },
    {
      id:'learnhub', number:'08', category:['PHP','Fullstack'], visual:'lms',
      name:'LearnHub LMS', year:'2026', teamSize:'1',
      role:{vi:'Full-stack Developer',en:'Full-stack Developer'},
      overview:{vi:'Nền tảng học trực tuyến, quản lý khóa học, tiến độ học và phát hành chứng chỉ PDF.',en:'Learning management system for courses, progress tracking and certificate generation.'},
      detail:{vi:['Phát triển Laravel API cho Admin, Instructor, Student cùng nghiệp vụ khóa học và enrollment.','Sử dụng Laravel Queue tạo chứng chỉ PDF bất đồng bộ sau khi hoàn thành khóa học.','Xây dựng giao diện React, xác thực Laravel Sanctum và xác minh chứng chỉ.'],en:['Built Laravel APIs for Admin, Instructor and Student workflows.','Used Laravel Queue for asynchronous certificate generation.','Developed React UI with Sanctum authentication and certificate verification.']},
      stack:['Laravel','PHP','React','PostgreSQL','Queue'],
      github:'https://github.com/vdprogramm/LearnHub-LMS',demo:'https://learn-hub-lms-seven.vercel.app/',featured:false
    }
  ]
};
