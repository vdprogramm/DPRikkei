/* React-powered static portfolio. No API keys or backend required. */
(function () {
  'use strict';
  var e = React.createElement;
  var dataset = window.PORTFOLIO;
  var P = dataset.person;
  var projects = dataset.projects;
  var EMAIL = 'mailto:' + P.email + '?subject=Co%20hoi%20hop%20tac%20Backend%20Developer';

  var text = {
    vi: {
      navAbout:'Giới thiệu',navSkills:'Kỹ năng',navProjects:'Dự án',navExperience:'Kinh nghiệm',navContact:'Liên hệ',
      available:'Sẵn sàng cho cơ hội Intern / Fresher', hello:'XIN CHÀO, MÌNH LÀ', heroLead:'Tạo ra những hệ thống', heroFocus:'backend đáng tin cậy.',
      heroDesc:'Sinh viên năm cuối Công nghệ thông tin tại Đại học CMC. Mình tập trung vào Java Spring Boot, NestJS và cơ sở dữ liệu — từ thiết kế API đến xử lý nghiệp vụ, xác thực và tích hợp AI.',
      myWork:'Khám phá dự án',viewCV:'Tải CV (PDF)', connect:'Kết nối với mình',scroll:'CUỘN ĐỂ KHÁM PHÁ',
      years:'Sinh viên năm cuối', projectLabel:'Dự án công khai',focusLabel:'Backend-first',expLabel:'Thực tập tại RikkeiEdu',
      sectionAbout:'01 / GIỚI THIỆU',aboutTitle:'Từ bài toán nghiệp vụ đến', aboutAccent:'giải pháp kỹ thuật.',
      aboutP1:'Mình thích xây dựng những tính năng có thể đo lường và kiểm thử: thiết kế database, viết REST API, xử lý phân quyền, giao dịch và tích hợp giữa các dịch vụ.',
      aboutP2:'Qua các dự án ERP, thương mại điện tử và y tế, mình rèn luyện cách chia module, làm việc với Git, gỡ lỗi và kết nối frontend với backend.',
      aboutGoal:'Định hướng',aboutGoalValue:'Java Backend / Full-stack Developer',aboutLocation:'Địa điểm mong muốn',aboutLocationValue:'Hà Nội',aboutLang:'Tiếng Anh',aboutLangValue:'Đọc hiểu tài liệu kỹ thuật ở mức cơ bản; đang cải thiện nghe/nói',
      sectionSkills:'02 / KỸ NĂNG',skillsTitle:'Công nghệ mình',skillsAccent:'đang sử dụng.',skillSub:'Ưu tiên công nghệ đã ứng dụng trong dự án, không liệt kê theo chứng chỉ.',
      sectionExperience:'03 / KINH NGHIỆM',experienceTitle:'Bắt đầu từ',experienceAccent:'thực hành thực tế.',
      internship:'Java Backend Intern',rikkeEdu:'RikkeiEdu · Chương trình thực tập/đào tạo thuộc Rikkeisoft',
      fromTo:'09/2025 — 12/2025', internDesc:'Tham gia chương trình đào tạo và thực tập, thực hành lập trình backend với Java/Spring Boot.',
      exp1:'Tham gia dự án nhóm BookingMovie (5 thành viên), thực hành quy trình xây dựng ứng dụng Java và React.',
      exp2:'Thực hành xác thực, phân quyền, kiểm thử API bằng Postman và quản lý mã nguồn với Git.',
      exp3:'Phối hợp tích hợp API, gỡ lỗi và hoàn thiện bài tập/dự án thực hành.',
      studyTitle:'Công nghệ thông tin · Sinh viên năm cuối',studyMeta:'Đại học CMC · 2023 — hiện tại',studyDesc:'Kiến thức nền tảng: OOP, cơ sở dữ liệu, cấu trúc dữ liệu và giải thuật, công nghệ phần mềm, phát triển web.',
      sectionProjects:'04 / SẢN PHẨM ĐÃ XÂY DỰNG',projectsTitle:'Không chỉ học công nghệ.',projectsAccent:'Mình dùng nó để giải bài toán.',
      projectsSub:'11 dự án có mã nguồn trên GitHub, bao gồm BookingMovie - dự án thực tập RikkeiEdu (team 5). Chọn dự án để xem vai trò, công nghệ và liên kết.',
      all:'Tất cả',featured:'NỔI BẬT',members:'Thành viên',role:'Vai trò',readMore:'Xem chi tiết',source:'Mã nguồn',live:'Bản demo',noDemo:'Chưa công bố demo',
      features:'Những phần đã thực hiện',tech:'Công nghệ chính',teamSize:'Quy mô nhóm',close:'Đóng',
      contactEyebrow:'05 / LIÊN HỆ',contactTitle:'Có một dự án hoặc vị trí',contactAccent:'phù hợp?',contactDesc:'Mình đang tìm cơ hội thực tập hoặc vị trí Fresher Backend Developer tại Hà Nội. Rất vui được trao đổi về kỹ thuật, dự án và cơ hội làm việc.',
      sendEmail:'Gửi email',copyEmail:'Sao chép email',copied:'Đã sao chép email',phone:'Điện thoại',footer:'Thiết kế & phát triển portfolio bởi Đinh Thành Vinh.',backTop:'Lên đầu trang',
      codeComment:'// Tập trung vào chất lượng API',terminalSubtitle:'Mô hình mình thường xây dựng',terminalA:'Database design',terminalB:'Authentication / RBAC',terminalC:'Business logic + testing',terminalD:'API integration',
      accessibleMenu:'Mở menu',current:'ĐANG SẴN SÀNG',sourceOnly:'Xem trên GitHub',noFiltering:'Chưa có dự án trong nhóm này.'
    },
    en: {
      navAbout:'About',navSkills:'Skills',navProjects:'Projects',navExperience:'Experience',navContact:'Contact',
      available:'Open to Intern / Fresher opportunities', hello:'HI, MY NAME IS',heroLead:'Building reliable',heroFocus:'backend systems.',
      heroDesc:'Final-year IT student at CMC University focused on Java Spring Boot, NestJS and databases — from API design and business rules to authorization and AI integrations.',
      myWork:'Explore projects',viewCV:'Download CV (PDF)',connect:'Get in touch',scroll:'SCROLL TO EXPLORE',
      years:'Final-year IT student',projectLabel:'Public projects',focusLabel:'Backend-first',expLabel:'RikkeiEdu Internship',
      sectionAbout:'01 / ABOUT',aboutTitle:'From business problems to',aboutAccent:'technical solutions.',
      aboutP1:'I enjoy building testable features: database models, REST APIs, authorization, transaction handling and service integrations.',
      aboutP2:'Through ERP, e-commerce and healthcare projects, I practice modular design, Git collaboration, debugging and frontend-backend integration.',
      aboutGoal:'Career focus',aboutGoalValue:'Java Backend / Full-stack Developer',aboutLocation:'Preferred location',aboutLocationValue:'Hanoi, Vietnam',aboutLang:'English',aboutLangValue:'Basic technical reading; improving listening and speaking',
      sectionSkills:'02 / SKILLS',skillsTitle:'Technologies',skillsAccent:'I work with.',skillSub:'Skills demonstrated through projects rather than certificates.',
      sectionExperience:'03 / EXPERIENCE',experienceTitle:'Learning through',experienceAccent:'hands-on practice.',
      internship:'Java Backend Intern',rikkeEdu:'RikkeiEdu · Training / internship program within Rikkeisoft',
      fromTo:'Sep 2025 — Dec 2025',internDesc:'Participated in a training internship focused on backend development using Java and Spring Boot.',
      exp1:'Participated in BookingMovie, a five-member Java / React internship team project.',
      exp2:'Practiced authentication, role-based access, API testing with Postman and Git.',
      exp3:'Collaborated on API integration, debugging and practical exercises/projects.',
      studyTitle:'Information Technology · Final-year Student',studyMeta:'CMC University · 2023 — Present',studyDesc:'Relevant coursework: OOP, databases, data structures and algorithms, software engineering and web development.',
      sectionProjects:'04 / SELECTED WORK',projectsTitle:'More than learning tools.',projectsAccent:'Solving real problems.',
      projectsSub:'Eleven projects with source code, including the five-member BookingMovie internship team project. Select a project to explore its scope and links.',
      all:'All',featured:'FEATURED',members:'members',role:'Role',readMore:'Case study',source:'Source code',live:'Live demo',noDemo:'Demo not published',
      features:'My contributions',tech:'Tech stack',teamSize:'Team size',close:'Close',
      contactEyebrow:'05 / CONTACT',contactTitle:'Have an internship or',contactAccent:'backend role in mind?',contactDesc:'I am looking for Backend Developer Intern / Fresher opportunities in Hanoi. Happy to discuss engineering challenges and project work.',
      sendEmail:'Send email',copyEmail:'Copy email',copied:'Email copied',phone:'Phone',footer:'Portfolio designed & built by Đinh Thành Vinh.',backTop:'Back to top',
      codeComment:'// Building quality APIs',terminalSubtitle:'A typical backend workflow',terminalA:'Database design',terminalB:'Authentication / RBAC',terminalC:'Business logic + testing',terminalD:'API integration',
      accessibleMenu:'Open menu',current:'OPEN TO WORK',sourceOnly:'View source',noFiltering:'No projects match this filter.'
    }
  };

  function Icon(props) {
    var type = props.name, size = props.size || 19;
    var attributes = { width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','strokeWidth':1.8,'strokeLinecap':'round','strokeLinejoin':'round','aria-hidden':'true',className:props.className||''};
    var d = {
      arrow:'M5 12h14m-6-6 6 6-6 6', external:'M13 5h6v6m0-6-9 9M19 13v6H5V5h6',
      github:'M9 19c-5 2-5-3-7-3m14 6v-4a3.3 3.3 0 0 0-1-2.5c4-.5 8-2 8-9a7 7 0 0 0-2-5 6.5 6.5 0 0 0-.1-4s-1 0-4 2a14 14 0 0 0-8 0C5-2 4-2 4-2a6.5 6.5 0 0 0-.1 4 7 7 0 0 0-2 5c0 7 4 8.5 8 9a3.3 3.3 0 0 0-1 2.5v4',
      download:'M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4',
      mail:'M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm-2 2 10 7 10-7',
      phone:'M7 2h4l1 5-3 2a15 15 0 0 0 6 6l2-3 5 1v4c0 2-2 4-4 4C9 21 3 15 3 6c0-2 2-4 4-4z',
      pin:'M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0zm-8-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6',
      copy:'M8 4h11a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM3 16V3a1 1 0 0 1 1-1h12',
      check:'M4 12l5 5L20 6',close:'M6 6l12 12M18 6 6 18', menu:'M4 7h16M4 12h16M4 17h16',
      sun:'M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4m0-12.8L17 7M7 17l-1.4 1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
      moon:'M20 15.2A8 8 0 0 1 8.8 4 8 8 0 1 0 20 15.2z',
      up:'M12 19V5M5 12l7-7 7 7', code:'M7 7l-5 5 5 5m10-10 5 5-5 5m-3-14-4 18',
      layers:'M12 2 2 8l10 6 10-6-10-6zM2 12l10 6 10-6M2 16l10 6 10-6',
      shield:'M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4zM9 12l2 2 4-4',
      terminal:'M4 4h16v16H4zM8 9l3 3-3 3m5 0h3'
    };
    return e('svg',attributes,e('path',{d:d[type]||d.code}));
  }
  function Pill(props) { return e('span',{className:'pill '+(props.kind||'')},props.children); }
  function LinkIcon(props){return e(Icon,{name:props.name||'external',size:props.size||16});}
  function TagList(props){return e('div',{className:'tags'},props.items.map(function(s){return e('span',{key:s,className:'tech-tag'},s)}));}

  function Visual(props) {
    var name=props.kind;
    var bars=[34,56,43,73,58,84,68];
    if(name==='erp'||name==='warehouse') return e('div',{className:'visual visual-erp'},
      e('div',{className:'visual-top'},e('span',null,'●',e('span',{className:'visual-top-muted'},' ● ●')),e('span',null,'ERP / ANALYTICS')),
      e('div',{className:'erp-metrics'},
        e('div',null,e('small',null,'REVENUE'),e('strong',null,'128.4M'),e('span',null,'↗ 12.8%')),
        e('div',null,e('small',null,'ORDERS'),e('strong',null,'1,284'),e('span',null,'↗ 8.2%'))),
      e('div',{className:'visual-bar-chart'},bars.map(function(v,i){return e('i',{key:i,style:{height:v+'%'}})})),
      e('div',{className:'visual-card-label'},name==='erp'?'Inventory / Sales / Finance':'Inventory / Receipts / Invoices'));
    if(name==='health') return e('div',{className:'visual visual-health'},
      e('div',{className:'visual-top'},e('span',null,'+  HEALTH AI'),e('span',null,'PATIENT PORTAL')),
      e('div',{className:'health-hero'},e('div',{className:'health-heart'},'✳'),e('div',null,e('small',null,'SMART TRIAGE'),e('b',null,'Find the right care'),e('span',null,'AI-assisted specialty routing'))),
      e('div',{className:'health-slots'},['09:00','10:30','14:00'].map(function(a){return e('span',{key:a},a)})));
    if(name==='commerce')return e('div',{className:'visual visual-commerce'},
      e('div',{className:'visual-top'},e('span',null,'SHOPTECH / MARKETPLACE'),e('span',null,'SHOP · APP')), 
      e('div',{className:'commerce-grid'},['⌁','◈','▣'].map(function(s,i){return e('div',{key:i,className:'device device-'+i},e('div',{className:'device-symbol'},s),e('div',{className:'device-line'}),e('div',{className:'device-line short'}))})),
      e('div',{className:'commerce-float'},'✦ AI PRODUCT ASSISTANT'));
    if(name==='campus') return e('div',{className:'visual visual-campus'},e('div',{className:'visual-top'},e('span',null,'CAMPUS / ADMIN'),e('span',null,'STUDENTS')),
      e('div',{className:'campus-score'},e('div',{className:'campus-ring'},'85%'),e('div',null,e('small',null,'ACTIVE COURSES'),e('strong',null,'24'),e('span',null,'Enrollment & grades'))),e('div',{className:'campus-lines'},e('i'),e('i'),e('i')));
    if(name==='chat') return e('div',{className:'visual visual-chat'},e('div',{className:'visual-top'},e('span',null,'HELPDESK / LIVE'),e('span',null,'● ONLINE')),
      e('div',{className:'bubble left'},'Xin chào! Mình cần hỗ trợ…'),e('div',{className:'bubble right'},'Chúng tôi sẵn sàng hỗ trợ bạn.'),e('div',{className:'chat-input'},'Nhập tin nhắn…',e('span',null,'➤')));
    if(name==='flight') return e('div',{className:'visual visual-flight'},e('div',{className:'visual-top'},e('span',null,'FLIGHT / BOOKING'),e('span',null,'BOARDING PASS')),
      e('div',{className:'ticket'},e('small',null,'FLIGHT DETAILS'),e('div',{className:'flight-route'},e('b',null,'HAN'),e('span',null,'✈ ─ ─ ─'),e('b',null,'SGN')),e('div',{className:'flight-date'},'Seat selected',e('span',null,'CONFIRMED'))));
    if(name==='cinema') return e('div',{className:'visual visual-cinema'},
      e('div',{className:'visual-top'},e('span',null,'BOOKINGMOVIE / CINEMA'),e('span',null,'RIKKEIEDU · TEAM 05')),
      e('div',{className:'cinema-screen'},e('span',null,'▶'),e('strong',null,'MOVIE TICKETS'),e('small',null,'INTERNSHIP TEAM PROJECT')),
      e('div',{className:'cinema-seats'},[1,2,3,4,5,6,7,8,9,10,11,12].map(function(n){return e('i',{key:n,className:n===3||n===4||n===9?'selected':''})})),
      e('div',{className:'cinema-hint'},'JAVA BACKEND   ×   REACT CLIENT'));
    if(name==='lms') return e('div',{className:'visual visual-lms'},e('div',{className:'visual-top'},e('span',null,'LEARNHUB / COURSES'),e('span',null,'LMS')),e('div',{className:'lms-course'},e('div',{className:'lms-play'},'▶'),e('div',null,e('b',null,'Backend Fundamentals'),e('small',null,'Complete lessons • Get certified'),e('div',{className:'lms-track'},e('i')))),e('div',{className:'lms-badge'},'✓ Certificate ready'));
    if(name==='library') return e('div',{className:'visual visual-library'},
      e('div',{className:'visual-top'},e('span',null,'LIBRARY / MANAGEMENT'),e('span',null,'C# · .NET')),
      e('div',{className:'library-book-stack'},
        e('div',{className:'book-book book-a'},'BOOKS'),
        e('div',{className:'book-book book-b'},'LOANS'),
        e('div',{className:'book-book book-c'},'USERS')),
      e('div',{className:'library-side'},e('strong',null,'LIBRARY HUB'),e('small',null,'Books · Borrowing · Returns'),e('span',null,'ROLE-BASED ACCESS')));
    if(name==='music') return e('div',{className:'visual visual-music'},
      e('div',{className:'visual-top'},e('span',null,'SPOTIFY LITE / MUSIC'),e('span',null,'C# · .NET')),
      e('div',{className:'music-album'},e('span',null,'♫')),
      e('div',{className:'music-info'},e('strong',null,'YOUR PLAYLIST'),e('span',null,'Music • Favorites • History'),
        e('div',{className:'music-progress'},e('i'))),
      e('div',{className:'music-controls'},'◀◀　 ▶　 ▶▶'));
    return e('div',{className:'visual'});
  }
  function ProjectCard(props) {
    var pr=props.project, t=props.t, lang=props.lang;
    return e('article',{className:'project-card'},
      e('button',{className:'project-visual-button',onClick:function(){props.open(pr)},'aria-label':t.readMore+' '+pr.name},
        e(Visual,{kind:pr.visual}), pr.featured?e('span',{className:'featured-ribbon'},t.featured):null),
      e('div',{className:'project-content'},
        e('div',{className:'project-index'},e('span',null,'CASE / '+pr.number),e('span',null,pr.year)),
        e('h3',null,pr.name),
        e('p',{className:'project-excerpt'},pr.overview[lang]),
        e('div',{className:'project-role-team'},e('div',null,e('small',null,t.role),e('strong',null,pr.role[lang])),e('div',null,e('small',null,t.teamSize),e('strong',null,pr.teamSize+' '+t.members))),
        e(TagList,{items:pr.stack.slice(0,5)}),
        e('div',{className:'project-actions'},e('button',{className:'text-link',onClick:function(){props.open(pr)}},t.readMore,' ',e(Icon,{name:'arrow',size:16})),
          e('div',{className:'project-external'},
            pr.demo?e('a',{className:'demo-link',href:pr.demo,target:'_blank',rel:'noopener noreferrer','aria-label':pr.name+' '+t.live,title:t.live},t.live,' ↗'):null,
            e('a',{className:'icon-link',href:pr.github,target:'_blank',rel:'noopener noreferrer','aria-label':pr.name+' GitHub',title:t.source},e('span',{className:'github-mark'},'GH'),e(Icon,{name:'external',size:15}))))));
  }
  function ProjectModal(props){var pr=props.project,t=props.t,lang=props.lang; return e('div',{className:'modal-wrap',role:'presentation',onMouseDown:function(ev){if(ev.target===ev.currentTarget)props.close();}},
    e('section',{className:'modal-card',role:'dialog','aria-modal':'true','aria-labelledby':'project-modal-heading'},
      e('div',{className:'modal-top'},e('span',{className:'section-label'},'PROJECT / '+pr.number),e('button',{className:'icon-btn',onClick:props.close,'aria-label':t.close},e(Icon,{name:'close',size:21}))),
      e('div',{className:'modal-visual'},e(Visual,{kind:pr.visual})),
      e('div',{className:'modal-body'},e('h2',{id:'project-modal-heading'},pr.name),e('p',{className:'modal-overview'},pr.overview[lang]),
        e('div',{className:'modal-metadata'},e('div',null,e('small',null,t.role),e('strong',null,pr.role[lang])),e('div',null,e('small',null,t.teamSize),e('strong',null,pr.teamSize+' '+t.members)),e('div',null,e('small',null,'YEAR'),e('strong',null,pr.year))),
        e('h3',null,t.features),e('ul',{className:'modal-list'},pr.detail[lang].map(function(str,i){return e('li',{key:i},e('span',null,'✓'),str)})),
        e('h3',null,t.tech),e(TagList,{items:pr.stack}),
        e('div',{className:'modal-links'},e('a',{href:pr.github,target:'_blank',rel:'noopener noreferrer',className:'btn btn-primary'},e(Icon,{name:'code',size:18}),t.source,e(Icon,{name:'external',size:16})),pr.demo?e('a',{href:pr.demo,target:'_blank',rel:'noopener noreferrer',className:'btn btn-outline'},t.live,e(Icon,{name:'external',size:16})):e('span',{className:'no-demo'},pr.demoStatus?pr.demoStatus[lang]:t.noDemo),pr.alternateDemo?e('a',{href:pr.alternateDemo,target:'_blank',rel:'noopener noreferrer',className:'btn btn-outline'},lang==='vi'?'Link trên GitHub':'GitHub homepage',e(Icon,{name:'external',size:16})):null)))
  );}

  class App extends React.Component {
    constructor(props){super(props);this.state={lang:'vi',filter:'all',theme:'dark',selected:null,mobileMenu:false,toast:false};this.esc=this.esc.bind(this);this.progress=this.progress.bind(this);}
    componentDidMount(){
      try{var lang=localStorage.getItem('vinh-portfolio-language');var theme=localStorage.getItem('vinh-portfolio-theme');this.setState({lang:lang==='en'?'en':'vi',theme:theme==='light'?'light':'dark'});if(theme==='light')document.documentElement.setAttribute('data-theme','light');}catch(err){}
      document.addEventListener('keydown',this.esc);window.addEventListener('scroll',this.progress,{passive:true});this.progress();
    }
    componentWillUnmount(){document.removeEventListener('keydown',this.esc);window.removeEventListener('scroll',this.progress)}
    progress(){var bar=document.querySelector('.progress-bar__line');if(!bar)return;var max=Math.max(1,document.documentElement.scrollHeight-innerHeight);bar.style.width=Math.min(100,Math.max(0,scrollY/max*100))+'%'}
    esc(ev){if(ev.key==='Escape'){this.setState({selected:null,mobileMenu:false});}}
    setLang(lang){this.setState({lang:lang});document.documentElement.lang=lang;try{localStorage.setItem('vinh-portfolio-language',lang)}catch(err){}}
    toggleTheme(){var theme=this.state.theme==='dark'?'light':'dark';this.setState({theme:theme});document.documentElement.setAttribute('data-theme',theme);try{localStorage.setItem('vinh-portfolio-theme',theme)}catch(err){}}
    copyEmail(){var self=this;function done(){self.setState({toast:true});setTimeout(function(){self.setState({toast:false})},2400)};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(P.email).then(done).catch(function(){window.prompt('Email:',P.email)})}else{window.prompt('Email:',P.email)}}
    showProject(pr){this.setState({selected:pr});}
    navAction(){this.setState({mobileMenu:false})}
    render(){
      var self=this,lang=this.state.lang,t=text[lang],filters=[['all',t.all],['Java','Java / Spring'],['Node.js','Node.js / NestJS'],['.NET','C# / .NET'],['PHP','PHP / Laravel'],['AI','AI Integration']];
      var filtered=projects.filter(function(p){return self.state.filter==='all'||p.category.indexOf(self.state.filter)!==-1});
      var navs=[['#about',t.navAbout],['#skills',t.navSkills],['#experience',t.navExperience],['#projects',t.navProjects],['#contact',t.navContact]];
      return e('div',{className:'site'},
        e('div',{className:'progress-bar','aria-hidden':'true'},e('div',{className:'progress-bar__line'})),
        e('header',{className:'site-header'},e('div',{className:'container nav-inner'},
          e('a',{className:'brand',href:'#top',onClick:this.navAction.bind(this)},e('span',{className:'brand-square'},'DV'),e('span',null,e('b',null,'Đinh Thành Vinh'),e('small',null,'BACKEND DEVELOPER'))),
          e('nav',{className:'desktop-nav','aria-label':'Primary'},navs.map(function(n){return e('a',{href:n[0],key:n[0]},n[1])})),
          e('div',{className:'header-actions'},
            e('button',{className:'language-toggle',onClick:this.setLang.bind(this,lang==='vi'?'en':'vi'),title:'VI / EN','aria-label':'Switch language'},lang==='vi'?'EN':'VI'),
            e('button',{className:'theme-toggle',onClick:this.toggleTheme.bind(this),title:this.state.theme==='dark'?'Light mode':'Dark mode','aria-label':'Toggle color theme'},e(Icon,{name:this.state.theme==='dark'?'sun':'moon',size:18})),
            e('a',{className:'header-contact',href:'#contact'},t.connect,' ',e('span',null,'↗')),
            e('button',{className:'mobile-toggle',onClick:function(){self.setState({mobileMenu:!self.state.mobileMenu})},'aria-label':t.accessibleMenu},e(Icon,{name:this.state.mobileMenu?'close':'menu',size:22}))))),
        this.state.mobileMenu?e('nav',{className:'mobile-nav'},navs.map(function(n){return e('a',{href:n[0],key:n[0],onClick:self.navAction.bind(self)},n[1])})):null,
        e('main',{id:'top'},
          e('section',{className:'hero section'},e('div',{className:'hero-ambient ambient-a'}),e('div',{className:'hero-ambient ambient-b'}),e('div',{className:'container hero-layout'},
            e('div',{className:'hero-copy'},
              e('div',{className:'status-line'},e('i',{className:'status-dot'}),t.available),
              e('p',{className:'overline hero-hello'},t.hello),
              e('h1',null,e('span',{className:'hero-name'},P.name),e('br'),e('span',{className:'hero-lead'},t.heroLead),e('br'),e('span',{className:'gradient-word'},t.heroFocus)),
              e('p',{className:'hero-description'},t.heroDesc),
              e('div',{className:'hero-buttons'},e('a',{className:'btn btn-primary',href:'#projects'},t.myWork,e(Icon,{name:'arrow',size:18})),e('a',{className:'btn btn-outline',href:P.cv,download:'DinhThanhVinh_CV_Backend_Intern.pdf'},e(Icon,{name:'download',size:18}),t.viewCV)),
              e('div',{className:'hero-micro'},e('span',null,e(Icon,{name:'pin',size:16}),' ',P.city),e('span',{className:'micro-divider'}),e('a',{href:P.github,target:'_blank',rel:'noopener noreferrer'},'GitHub ↗'))),
            e('div',{className:'hero-side'},
              e('div',{className:'code-header'},e('div',{className:'traffic-lights'},e('i'),e('i'),e('i')),e('span',null,'backend-profile.ts'),e('span',{className:'code-header-badge'},'● ACTIVE')),
              e('div',{className:'code-lines'},
                e('div',null,e('span',{className:'code-comment'},t.codeComment)),
                e('div',null,e('span',{className:'code-purple'},'const'), ' developer = ',e('span',{className:'code-purple'},'{')),
                e('div',{className:'indent'},'name: ',e('span',{className:'code-green'},'"Đinh Thành Vinh"'),','),
                e('div',{className:'indent'},'focus: ',e('span',{className:'code-green'},'"Backend Engineering"'),','),
                e('div',{className:'indent'},'stack: [',e('span',{className:'code-orange'},'"Java"'),', ',e('span',{className:'code-orange'},'"NestJS"'),', ',e('span',{className:'code-orange'},'"SQL"'),'],'),
                e('div',{className:'indent'},'mindset: ',e('span',{className:'code-green'},'"Build • Test • Improve"')),
                e('div',null,e('span',{className:'code-purple'},'}'),';')),
              e('div',{className:'terminal-rule'}),
              e('div',{className:'terminal-subtitle'},t.terminalSubtitle),
              e('div',{className:'terminal-list'},[t.terminalA,t.terminalB,t.terminalC,t.terminalD].map(function(s,i){return e('div',{key:s},e('span',{className:'term-index'},'0'+(i+1)),s,e('span',{className:'term-check'},'✓'))}))),
            e('div',{className:'hero-ticker'},e('div',null,e('strong',null,String(projects.length).padStart(2,'0')),e('span',null,t.projectLabel)),e('div',null,e('strong',null,'JAVA + NODE'),e('span',null,t.focusLabel)),e('div',null,e('strong',null,'2025'),e('span',null,t.expLabel)))))),
          e('section',{id:'about',className:'section about-section'},e('div',{className:'container about-grid'},
            e('div',{className:'section-intro'},e('div',{className:'section-label'},t.sectionAbout),e('h2',{className:'section-heading'},t.aboutTitle,' ',e('span',{className:'accent'},t.aboutAccent))),
            e('div',{className:'about-content'},e('p',null,t.aboutP1),e('p',null,t.aboutP2),
              e('div',{className:'about-facts'},e('div',null,e('small',null,t.aboutGoal),e('strong',null,t.aboutGoalValue)),e('div',null,e('small',null,t.aboutLocation),e('strong',null,t.aboutLocationValue)),e('div',{className:'facts-wide'},e('small',null,t.aboutLang),e('strong',null,t.aboutLangValue)))))),
          e('section',{id:'skills',className:'section skills-section'},e('div',{className:'container'},
            e('div',{className:'section-label'},t.sectionSkills),e('div',{className:'section-row'},e('h2',{className:'section-heading'},t.skillsTitle,' ',e('span',{className:'accent'},t.skillsAccent)),e('p',null,t.skillSub)),
            e('div',{className:'skills-grid'},[
              {label:'01 / BACKEND',name:'Backend & Frameworks',icon:'terminal',items:['Java • Spring Boot','Node.js • NestJS','C# • ASP.NET Core','PHP • Laravel','RESTful API • JWT • RBAC']},
              {label:'02 / DATABASE',name:'Databases & ORM',icon:'layers',items:['PostgreSQL • MySQL','MongoDB','JPA / Hibernate','Prisma • Mongoose','EF Core • Eloquent']},
              {label:'03 / FRONTEND',name:'Frontend & Integrations',icon:'code',items:['React • TypeScript','React Native','Socket.IO / WebSocket','Python • FastAPI','AI / RAG Integration']},
              {label:'04 / ENGINEERING',name:'Developer Workflow',icon:'shield',items:['OOP • DSA Fundamentals','Git / GitHub','Postman / Swagger','Docker','Unit Testing • Debugging']}
            ].map(function(s){return e('div',{className:'skill-card',key:s.name},e('div',{className:'skill-card-top'},e('span',null,s.label),e(Icon,{name:s.icon,size:21})),e('h3',null,s.name),e('ul',null,s.items.map(function(item){return e('li',{key:item},e('span',{className:'skills-line'}),item)})))})))),
          e('section',{id:'experience',className:'section experience-section'},e('div',{className:'container'},e('div',{className:'section-label'},t.sectionExperience),e('h2',{className:'section-heading'},t.experienceTitle,' ',e('span',{className:'accent'},t.experienceAccent)),
            e('div',{className:'timeline'},e('div',{className:'timeline-entry'},e('div',{className:'timeline-dot'}),e('div',{className:'timeline-left'},e('span',{className:'timeline-date'},t.fromTo),e('h3',null,t.internship),e('span',{className:'timeline-company'},t.rikkeEdu)),e('div',{className:'timeline-right'},e('p',null,t.internDesc),e('ul',null,[t.exp1,t.exp2,t.exp3].map(function(v){return e('li',{key:v},v)})))),
              e('div',{className:'timeline-entry'},e('div',{className:'timeline-dot'}),e('div',{className:'timeline-left'},e('span',{className:'timeline-date'},'2023 — 2026'),e('h3',null,t.studyTitle),e('span',{className:'timeline-company'},t.studyMeta)),e('div',{className:'timeline-right'},e('p',null,t.studyDesc)))))),
          e('section',{id:'projects',className:'section projects-section'},e('div',{className:'container'},e('div',{className:'section-label'},t.sectionProjects),e('div',{className:'projects-intro'},e('div',null,e('h2',{className:'section-heading'},t.projectsTitle,e('br'),e('span',{className:'accent'},t.projectsAccent)),e('p',null,t.projectsSub))),
            e('div',{className:'filter-row',role:'group','aria-label':'Project categories'},filters.map(function(f){return e('button',{key:f[0],className:'filter-chip'+(self.state.filter===f[0]?' active':''),onClick:function(){self.setState({filter:f[0]})},'aria-pressed':self.state.filter===f[0]},f[1])})),
            filtered.length?e('div',{className:'projects-grid'},filtered.map(function(p){return e(ProjectCard,{key:p.id,project:p,lang:lang,t:t,open:self.showProject.bind(self)})})):e('p',{className:'no-filter'},t.noFiltering))),
          e('section',{id:'contact',className:'section contact-section'},e('div',{className:'container contact-layout'},
            e('div',null,e('div',{className:'section-label'},t.contactEyebrow),e('h2',{className:'section-heading contact-heading'},t.contactTitle,e('br'),e('span',{className:'gradient-word'},t.contactAccent)),e('p',{className:'contact-desc'},t.contactDesc),e('div',{className:'contact-buttons'},e('a',{className:'btn btn-primary',href:EMAIL},e(Icon,{name:'mail',size:19}),t.sendEmail,e(Icon,{name:'arrow',size:17})),e('button',{className:'btn btn-outline',onClick:this.copyEmail.bind(this)},e(Icon,{name:'copy',size:17}),t.copyEmail))),
            e('div',{className:'contact-card'},e('div',{className:'contact-card-header'},e('span',null,'CONTACT / 2026'),e('span',{className:'status-dot'})),e('a',{className:'contact-entry',href:'mailto:'+P.email},e('small',null,'EMAIL'),e('strong',null,P.email),e(Icon,{name:'external',size:17})),e('a',{className:'contact-entry',href:'tel:+84'+P.phone.substring(1)},e('small',null,t.phone),e('strong',null,P.phone),e(Icon,{name:'external',size:17})),e('a',{className:'contact-entry',href:P.github,target:'_blank',rel:'noopener noreferrer'},e('small',null,'GITHUB'),e('strong',null,'github.com/vdprogramm'),e(Icon,{name:'external',size:17})),e('div',{className:'contact-bottom'},e(Icon,{name:'pin',size:16}),P.city)))),
        e('footer',{className:'site-footer'},e('div',{className:'container footer-inner'},e('div',null,e('span',{className:'footer-monogram'},'DV'),e('span',null,'© 2026 · '+t.footer)),e('a',{href:'#top'},t.backTop,' ',e(Icon,{name:'up',size:16})))),
        this.state.toast?e('div',{className:'toast',role:'status'},e(Icon,{name:'check',size:17}),t.copied):null,
        this.state.selected?e(ProjectModal,{project:this.state.selected,t:t,lang:lang,close:function(){self.setState({selected:null})}}):null
      );
    }
  }
  ReactDOM.render(e(App),document.getElementById('root'));
}());
