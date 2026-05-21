/* =========================================================
   Babakr Saad — Portfolio: dual-mode interactions
   ========================================================= */

/* ---------- DATA ---------- */
const DATA = {
  tech: {
    short: 'IT',
    full: 'IT & Software',
    role: 'Software Developer & IT Professional',
    summary:
      "17+ years building web applications, IoT systems, and ERP platforms. I turn business problems into reliable, scalable software — from sensor networks measuring fuel tanks to enterprise resource planning rollouts.",
    about: [
      "I'm <strong>Babakr</strong> — a software developer and IT professional with over <strong>17 years</strong> in IT systems, software engineering, and cloud technologies. My work spans full-stack web development, IoT systems architecture, and ERP implementation.",
      "I've built <strong>industrial monitoring systems</strong> for fuel storage and electrical transformers, integrated <strong>Odoo ERP</strong> end-to-end, and now lead the digital workflows for a contracting establishment in Saudi Arabia. I lean hard on AI-assisted development to ship faster without cutting corners.",
      "I care about <strong>clean architecture, dependable systems, and automation</strong> — the kind of work that quietly saves hours every day."
    ],
    skills: [
      { title: 'Programming & Development', items: ['JavaScript','Python','Node.js','React','Laravel','ASP.NET','REST APIs'] },
      { title: 'AI & Modern Tools', items: ['ChatGPT','Google Gemini','AI Coding Assistants','Prompt Engineering','Generative AI Workflows','Productivity Automation'] },
      { title: 'Systems & Cloud', items: ['Linux Server Admin','Windows Server','AWS Cloud','OpenStack','Docker','Git'] },
      { title: 'Databases', items: ['MySQL','PostgreSQL','MongoDB','Database Design'] },
      { title: 'IoT Development', items: ['IoT Architecture','Sensor Integration','Data Acquisition','Node-RED','ThingsBoard','OpenRemote','Industrial IoT'] },
      { title: 'ERP & Business Systems', items: ['Odoo Implementation','Functional Configuration','Process Analysis','ERP Customization','User Training'] },
      { title: 'Web & Infrastructure', items: ['WordPress','cPanel & Hosting','System Monitoring','Email Systems'] }
    ],
    timeline: [
      {
        period: 'Mar 2024 – Present',
        title: 'IT & Systems Coordinator',
        company: 'Naif Obaid Al-Shammari Contracting Establishment · Saudi Arabia',
        current: true,
        bullets: [
          { text: 'Administer Daftra ERP — invoicing, reports, user management', key: true },
          { text: 'Manage internal digital workflows and business systems' },
          { text: 'Support IT infrastructure and technical operations' },
          { text: 'Implement digital solutions to improve operational efficiency' }
        ]
      },
      {
        period: 'Feb 2021 – Jun 2023',
        title: 'Web System Administrator & IoT Software Developer',
        company: 'Gezira Telecom Solutions · Sudan',
        bullets: [
          { text: 'Developed software applications for IoT platforms and connected devices', key: true },
          { text: 'Built systems for data collection and remote monitoring' },
          { text: 'Integrated IoT platforms with web applications and databases' },
          { text: 'Performed testing and optimization for security and performance' },
          { text: 'Implemented and supported Odoo ERP — installation, configuration, process mapping' }
        ]
      },
      {
        period: 'Aug 2009 – Jan 2021',
        title: 'IT Technical Support & System Administrator',
        company: 'Gezira Hila Impex Co. Ltd · Sudan',
        bullets: [
          { text: 'Provided enterprise IT support and infrastructure maintenance' },
          { text: 'Managed servers, backups, and system updates' },
          { text: 'Configured networks, user accounts, and security policies' },
          { text: 'Implemented internal IT solutions and documentation systems' }
        ]
      }
    ],
    projectsTitle: 'Projects',
    projects: [
      {
        title: 'Fuel Tank Monitoring System',
        meta: ['Canar Company', '2022 – 2023'],
        body: 'IoT system measuring and monitoring fuel levels across storage tanks. Sensors integrate with IoT gateways feeding a real-time web dashboard for remote monitoring and accurate fuel tracking.',
        tags: ['IoT', 'Sensors', 'Web Dashboard', 'Real-time']
      },
      {
        title: 'Electrical Transformer Monitoring',
        meta: ['Sudanese Electricity Company', '2022 – 2023'],
        body: 'IoT-based system monitoring electrical current in power transformers. Sensors and data acquisition devices capture electrical measurements; centralized dashboard tracks performance and detects anomalies.',
        tags: ['IoT', 'Industrial', 'Anomaly Detection', 'Dashboards']
      },
      {
        title: 'Odoo ERP Rollout',
        meta: ['Gezira Telecom Solutions', '2021 – 2023'],
        body: 'End-to-end Odoo ERP implementation — installation, functional configuration, business process mapping, and user training. Aligned ERP modules with operational realities of the business.',
        tags: ['Odoo', 'ERP', 'Process Mapping', 'Training']
      },
      {
        title: 'Daftra ERP Operations',
        meta: ['Naif Obaid Al-Shammari Contracting', '2024 – Present'],
        body: 'Administering a live Daftra ERP for a contracting business — invoicing pipelines, equipment records, reports, and user management. Built the digital backbone of day-to-day operations.',
        tags: ['ERP', 'Daftra', 'Operations', 'Reporting']
      }
    ],
    cv: 'Babakr Saad CV - 2026 (IT).pdf',
    contact: {
      headline: 'Let’s build something dependable.',
      sub: 'Open to software development, IoT, ERP, and IT systems roles. Reach out — I respond fast.'
    }
  },

  build: {
    short: 'Build',
    full: 'Construction & Tendering',
    role: 'Tendering & Operations Coordinator',
    summary:
      "Tendering, contracts, and ERP-driven operations in the construction sector. I bridge technical systems with procurement and warehouse workflows — keeping bids competitive and operations tight.",
    about: [
      "I'm <strong>Babakr</strong> — a Tendering &amp; Operations Coordinator with hands-on experience in <strong>government tenders, equipment rental contracts, inventory management, and ERP systems</strong> in the construction sector.",
      "Day-to-day I monitor tenders through the <strong>Etimad</strong> platform and Tender Alerts, prepare bid documentation, run quantity analyses, and manage invoicing through the <strong>Daftra</strong> accounting system.",
      "What sets me apart: I bring a <strong>technical systems</strong> background — built from years of IT and ERP work — into the world of contracts, warehouses, and procurement. The result is sharper data, tighter workflows, and bids that hold up under scrutiny."
    ],
    skills: [
      { title: 'Tendering & Procurement', items: ['Etimad Platform','Tender Alerts','Bid Documentation','Tender Analysis','Quantity Reports'] },
      { title: 'Contracts & Equipment', items: ['Equipment Rental Contracts','Administrative Documentation','Business Correspondence','Reports'] },
      { title: 'Inventory & Warehouse', items: ['Warehouse Supervision','Inventory Control','Stock Monitoring','Supply Chain Coordination','Materials Tracking'] },
      { title: 'Financial & ERP Systems', items: ['Daftra ERP Admin','Invoice Management','Equipment Records','Reports & Data Analysis'] },
      { title: 'IT & Digital Systems', items: ['Business Systems Admin','Email & Communication','Document Management'] },
      { title: 'Tools & Platforms', items: ['MS Excel (Advanced)','Daftra','Odoo','Etimad','Tender Alerts'] }
    ],
    timeline: [
      {
        period: 'Mar 2024 – Present',
        title: 'IT & Tendering Coordinator',
        company: 'Naif Obaid Al-Shammari Contracting Establishment · Saudi Arabia',
        current: true,
        bullets: [
          { text: 'Monitor and analyze government tenders via Etimad and Tender Alerts', key: true },
          { text: 'Prepare tender documentation and submission files for construction projects', key: true },
          { text: 'Analyze previous tenders and prepare quantity reports for bidding' },
          { text: 'Prepare and manage equipment rental contracts' },
          { text: 'Issue and manage invoices through Daftra accounting system' },
          { text: 'Administer Daftra — equipment records, reports, user accounts' },
          { text: 'Manage official company communications and documentation' }
        ]
      },
      {
        period: 'Aug 2014 – Jan 2021',
        title: 'Inventory Manager',
        company: 'Gezira Overseas for Trading & Investment Co. Ltd · Sudan',
        bullets: [
          { text: 'Managed warehouse operations and inventory control procedures', key: true },
          { text: 'Monitored stock levels to ensure availability of materials and supplies' },
          { text: 'Coordinated with procurement and logistics for supply chain efficiency' },
          { text: 'Implemented ERP tools to track inventory movement and documentation' },
          { text: 'Analyzed inventory data to forecast demand and optimize stock levels' },
          { text: 'Prepared management reports on inventory performance and shortages' }
        ]
      },
      {
        period: 'Aug 2009 – Jan 2021',
        title: 'IT Technical Support & System Administrator',
        company: 'Gezira Hila Impex Co. Ltd · Sudan',
        bullets: [
          { text: 'Provided IT technical support for company operations' },
          { text: 'Managed internal systems and digital infrastructure' },
          { text: 'Supported business operations with technical solutions and system administration' }
        ]
      }
    ],
    projectsTitle: 'Casework',
    projects: [
      {
        title: 'Etimad Tender Pipeline',
        meta: ['Naif Obaid Al-Shammari', 'Ongoing'],
        body: 'Daily monitoring of government tenders on Etimad and Tender Alerts. Filter, score, and shortlist opportunities; assemble compliant submission packages aligned with each authority’s requirements.',
        tags: ['Etimad', 'Bid Strategy', 'Compliance', 'Documentation']
      },
      {
        title: 'Quantity Analysis & Reporting',
        meta: ['Construction Sector', 'Ongoing'],
        body: 'Analyzed previous tenders to extract pricing patterns, build quantity reports, and benchmark bids — informing competitive pricing while protecting margins.',
        tags: ['Analysis', 'Pricing', 'Excel', 'Reports']
      },
      {
        title: 'Equipment Rental Contracts',
        meta: ['Naif Obaid Al-Shammari', 'Ongoing'],
        body: 'Authored and managed equipment rental contracts end-to-end — drafting, documentation, billing alignment, and Daftra-based invoicing for transparent billing cycles.',
        tags: ['Contracts', 'Daftra', 'Billing', 'Operations']
      },
      {
        title: 'Inventory & Supply Chain Optimization',
        meta: ['Gezira Overseas', '2014 – 2021'],
        body: 'Ran warehouse operations across multiple product lines. Implemented ERP-driven stock tracking, demand forecasting, and supplier coordination — cutting stockouts and holding costs.',
        tags: ['Warehouse', 'ERP', 'Forecasting', 'Logistics']
      }
    ],
    cv: 'Babeker Saad CV - 2026 (Construction & Tendering).pdf',
    contact: {
      headline: 'Got a tender or contracting role?',
      sub: 'I help contracting teams win cleaner bids and run tighter operations. Let’s talk.'
    }
  }
};

/* Live builds — visible in IT mode only */
const BUILDS = [
  {
    name: 'Babakr Saad Portfolio',
    mark: 'BS', sub: 'beko-cloud.work',
    url: 'https://beko-cloud.work',
    displayUrl: 'beko-cloud.work',
    ghUrl: 'https://github.com/bekoblast/portfolio',
    desc: 'The site you\'re on right now. Dual-mode profile with click-anchored radial-wipe theme transitions, animated particle background, and a content layer that re-renders per mode. Continuous deployment from GitHub to Cloudflare.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cloudflare'],
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)'
  },
  {
    name: 'JNCO Trading & Contracting',
    mark: 'JNCO', sub: 'since 1973',
    url: 'https://naifjnco.com',
    displayUrl: 'naifjnco.com',
    ghUrl: 'https://github.com/bekoblast/jnco',
    desc: 'Corporate site for Jufal & Naif Obaid Al-Shammari Trading & Contracting — five decades of heavy construction across roads, bridges, water systems, and industrial development in Saudi Arabia.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Multi-page', 'Custom Domain'],
    gradient: 'linear-gradient(135deg, #0f766e 0%, #facc15 100%)'
  },
  {
    name: 'GCC Advanced Contracting',
    mark: 'GCC', sub: 'middle east contractor',
    url: 'https://gcc-advanced.pages.dev',
    displayUrl: 'gcc-advanced.pages.dev',
    ghUrl: 'https://github.com/bekoblast/gcc-advanced',
    desc: 'Clean static rebuild of a UAE-based contractor\'s corporate site — civil engineering, MEP services, steel structures, and infrastructure development. Replaces a compromised WordPress install with a fast, secure single-page site.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cloudflare', 'Static'],
    gradient: 'linear-gradient(135deg, #be123c 0%, #f59e0b 100%)'
  },
  {
    name: 'GTS Hi-Tech',
    mark: 'GTS', sub: 'ict · iot · cloud',
    url: 'https://gts-hitech.com',
    displayUrl: 'gts-hitech.com',
    desc: 'Corporate site for an ICT solutions company with offices in Dubai, Khartoum, and Juba. Services: networking, wireless, CCTV/access control, IoT, cloud, cybersecurity, and solar power.',
    tags: ['WordPress', 'Corporate', 'Multi-region', 'ICT'],
    gradient: 'linear-gradient(135deg, #4338ca 0%, #06b6d4 100%)'
  },
  {
    name: 'Gezira Hila Impex',
    mark: 'GHI', sub: 'est. 1997',
    url: 'https://ghi.beko1986.workers.dev',
    displayUrl: 'ghi.beko1986.workers.dev',
    ghUrl: 'https://github.com/bekoblast/GHI',
    desc: 'Corporate site for Sudan\'s leading exporter of gum arabic and natural commodities — sesame, hibiscus, groundnut — serving clients across four continents from Khartoum and Dubai.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Corporate', 'Branding'],
    gradient: 'linear-gradient(135deg, #064e3b 0%, #d97706 100%)'
  },
  {
    name: 'Nile Petroleum (Nilepet)',
    mark: 'NILEPET', sub: "powering Sudan",
    url: 'https://nile-petroleum.pages.dev',
    displayUrl: 'nile-petroleum.pages.dev',
    ghUrl: 'https://github.com/bekoblast/nile-petroleum',
    desc: 'Bilingual EN/AR corporate site for Sudan\'s national petroleum company. Integrated energy operations: exploration, refining, distribution, and 450+ retail stations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bilingual', 'RTL'],
    gradient: 'linear-gradient(135deg, #2A2882 0%, #06b6d4 100%)'
  },
  {
    name: 'Canar Fuel Tanker Monitor',
    mark: 'CANAR', sub: 'iot · 2023 → 2026',
    url: 'https://fuel-tanker-monitor.pages.dev',
    displayUrl: 'fuel-tanker-monitor.pages.dev',
    ghUrl: 'https://github.com/bekoblast/fuel-tanker-monitor',
    desc: 'Faithful React rebuild of a 2023 industrial IoT dashboard originally built on Node-RED + ThingsBoard for Canar (Sudan). Decodes 140-byte binary packets from Tekelec ultrasonic sensors — model, BCD IMEI, alarms, battery, 28 historical readings — and visualizes the fleet on an OSM map with per-tank gauges and charts. The platform was lost during the 2023 conflict; the flows survived.',
    tags: ['Next.js 16', 'React 19', 'Tailwind 4', 'Leaflet', 'Recharts', 'IoT', 'Binary Protocol'],
    gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)'
  },
  {
    name: 'SEDC Transformer Monitor',
    mark: 'SEDC', sub: 'iot · khartoum grid',
    url: 'https://sedc-transformer-monitor.pages.dev',
    displayUrl: 'sedc-transformer-monitor.pages.dev',
    ghUrl: 'https://github.com/bekoblast/sedc-transformer-monitor',
    desc: 'Companion IoT rebuild for the Sudanese Electrical Distribution Company — 3-phase distribution transformer monitoring across Khartoum. 24-field telemetry per device: voltages (L-N + L-L), currents, power factor, frequency, plus per-phase timeseries. Built on the same architecture as the Canar rebuild.',
    tags: ['Next.js 16', 'React 19', 'Tailwind 4', 'Leaflet', 'Recharts', 'IoT', '3-phase'],
    gradient: 'linear-gradient(135deg, #facc15 0%, #b91c1c 100%)'
  },
  {
    name: 'Aqarati Property Manager',
    type: 'github',
    mark: 'AQARATI', sub: 'property manager',
    url: null,
    displayUrl: 'github.com/bekoblast/property-manager',
    ghUrl: 'https://github.com/bekoblast/property-manager',
    desc: 'Arabic RTL web application for managing company-owned real estate in Saudi Arabia — buildings, units, tenants, contracts, payments, and maintenance — with Excel and PDF export. React + TypeScript front-end backed by an Express + SQLite local API.',
    tags: ['React', 'TypeScript', 'Vite', 'Express', 'SQLite', 'RTL Arabic'],
    gradient: 'linear-gradient(135deg, #047857 0%, #0d9488 100%)'
  },
  {
    name: 'ACC Next — Accounting Platform',
    mark: 'ACC', sub: 'next.js · prisma',
    url: null,
    displayUrl: 'self-hosted · private',
    desc: 'In-progress modern accounting platform replacing a legacy CodeIgniter system. Chart of accounts (self-referencing tree), journal entries, posting workflow, and financial reports.',
    tags: ['Next.js 16', 'React 19', 'Prisma', 'MariaDB', 'Tailwind', 'shadcn/ui'],
    gradient: 'linear-gradient(135deg, #1e293b 0%, #ef4444 100%)',
    private: true
  },
  {
    type: 'docker',
    name: 'Goals Tracker',
    mark: 'GT', sub: 'docker hub',
    url: 'https://hub.docker.com/r/bekoblast/goals-tracker',
    displayUrl: 'hub.docker.com/r/bekoblast/goals-tracker',
    pullCmd: 'docker pull bekoblast/goals-tracker',
    desc: 'Team goals tracking app with Arabic RTL React UI, role-based access (admin / manager / employee), notifications, and backup/restore. Ships as a single 64 MB container — frontend + Express API + JSON persistence.',
    tags: ['React', 'Express', 'Node.js', 'Docker', 'RTL Arabic'],
    gradient: 'linear-gradient(135deg, #0db7ed 0%, #2496ed 100%)',
    ghUrl: 'https://github.com/bekoblast/goals-tracker',
    stars: 36
  }
];

/* Credentials shared between modes */
const CREDS = {
  featured: [
    { issuer: 'Google',  title: 'Google IT Support Professional Certificate', meta: '2025 · 4 courses · Coursera' },
    { issuer: 'Meta',    title: 'Meta Back-End Developer Certificate', meta: '2025 · 5 courses · Coursera' },
    { issuer: 'Google',  title: 'Google AI Essentials', meta: '2025 · Specialization' },
    { issuer: 'AWS',     title: 'AWS Cloud Technical Essentials', meta: '2025 · Foundational' },
    { issuer: 'Google',  title: 'Generative AI Learning Path', meta: '2025 · Completed' },
    { issuer: 'EF SET',  title: 'English Certificate — C2 Proficient', meta: '2023' },
    { issuer: 'Sudan University', title: 'B.Sc. Computer Science & IT', meta: '2010 · Sudan University of Science & Technology' },
    { issuer: 'Edraak',  title: 'Outsource Inventory Management', meta: 'Certificate' }
  ],
  programs: [
    {
      issuer: 'Google',
      title: 'Google IT Support Professional Certificate',
      meta: '4 courses · Coursera',
      modules: [
        'Technical Support Fundamentals',
        'The Bits and Bytes of Computer Networking',
        'Operating Systems & You — Becoming a Power User',
        'System Administration & IT Infrastructure Services'
      ]
    },
    {
      issuer: 'Meta',
      title: 'Meta Back-End Developer Certificate',
      meta: '5 courses · Coursera',
      modules: [
        'Introduction to Back-End Development',
        'Programming in Python',
        'Version Control',
        'Introduction to Databases for Back-End Development',
        'Database Structures & Management with MySQL'
      ]
    },
    {
      issuer: 'Meta',
      title: 'Meta React Native Specialization',
      meta: '4 courses · Coursera',
      modules: [
        'Introduction to Mobile Development',
        'Programming with JavaScript',
        'React Basics',
        'Version Control'
      ]
    },
    {
      issuer: 'Google',
      title: 'AI Specializations',
      meta: 'Coursera & Google',
      modules: [
        'Generative AI Leader',
        'Generative AI Learning Path (Completed)',
        'Google AI Essentials Specialization (Completed)'
      ]
    },
    {
      issuer: 'Google',
      title: 'Google IT Automation with Python',
      meta: 'Coursera',
      modules: ['Crash Course on Python']
    },
    {
      issuer: 'Edraak / ICDL',
      title: 'ICDL — International Computer Driving License',
      meta: '4 modules',
      modules: [
        'Computer Essentials',
        'Internet & Email Essentials',
        'Word Processing',
        'Excel Spreadsheets'
      ]
    },
    {
      issuer: 'Edraak',
      title: 'Networking & Excel',
      meta: '2 courses',
      modules: ['Introduction to Networks', 'Advanced Excel']
    },
    {
      issuer: 'Udemy',
      title: 'Learn Linux in 5 Days and Level Up Your Career',
      meta: 'Self-paced'
    }
  ]
};

/* ---------- HELPERS ---------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const ce = (tag, cls, html) => {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (html != null) el.innerHTML = html;
  return el;
};
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- RENDER MODE-DEPENDENT CONTENT ---------- */
function renderMode(mode) {
  const d = DATA[mode];
  document.documentElement.dataset.mode = mode;

  // hero summary + role
  $('#hero-summary').textContent = d.summary;
  startTyping(d.role);

  // active states
  $$('.dial-option').forEach(b => b.classList.toggle('is-active', b.dataset.modeTarget === mode));
  $$('.nav-mode-btn').forEach(b => b.classList.toggle('is-active', b.dataset.modeTarget === mode));
  $('#dial-meta').textContent = mode === 'tech' ? '01 / 02' : '02 / 02';

  // about
  const about = $('#about-text');
  about.innerHTML = '';
  d.about.forEach((p, i) => {
    const node = ce('p', 'reveal', p);
    node.style.setProperty('--delay', (i * 80) + 'ms');
    about.appendChild(node);
  });

  // skills
  const skills = $('#skills-grid');
  skills.innerHTML = '';
  d.skills.forEach((cat, i) => {
    const card = ce('div', 'skill-cat reveal');
    card.style.setProperty('--delay', (i * 60) + 'ms');
    card.innerHTML = `
      <div class="skill-cat-head">
        <span class="skill-cat-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="skill-cat-title">${cat.title}</span>
      </div>
      <div class="skill-list">
        ${cat.items.map(s => `<span class="skill-chip">${s}</span>`).join('')}
      </div>
    `;
    skills.appendChild(card);
  });

  // timeline
  const tl = $('#timeline');
  tl.innerHTML = '';
  d.timeline.forEach((item, i) => {
    const li = ce('li', 'timeline-item reveal' + (item.current ? ' is-current' : ''));
    li.style.setProperty('--delay', (i * 90) + 'ms');
    li.innerHTML = `
      <div class="tl-card">
        <div class="tl-meta">
          <span class="tl-period">${item.period}</span>
          ${item.current ? '<span class="tl-pill">Current</span>' : ''}
        </div>
        <h3 class="tl-title">${item.title}</h3>
        <div class="tl-company">${item.company}</div>
        <ul class="tl-bullets">
          ${item.bullets.map(b => `<li${b.key ? ' class="is-key"' : ''}>${b.text}</li>`).join('')}
        </ul>
      </div>
    `;
    tl.appendChild(li);
  });

  // projects
  $('#projects-title').textContent = d.projectsTitle;
  const pg = $('#projects-grid');
  pg.innerHTML = '';
  d.projects.forEach((p, i) => {
    const card = ce('article', 'project-card reveal');
    card.style.setProperty('--delay', (i * 70) + 'ms');
    card.innerHTML = `
      <span class="project-num">PROJECT · ${String(i + 1).padStart(2, '0')}</span>
      <h3 class="project-title">${p.title}</h3>
      <div class="project-meta">${p.meta.map(m => `<span>${m}</span>`).join('')}</div>
      <p class="project-body">${p.body}</p>
      <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    `;
    pg.appendChild(card);
  });

  // cv link
  const cv = $('#cv-download');
  cv.setAttribute('href', encodeURI(d.cv));
  cv.setAttribute('download', d.cv);

  // contact pitch
  $('#contact-headline').textContent = d.contact.headline;
  $('#contact-sub').textContent = d.contact.sub;

  // re-attach scroll reveal observer for the new nodes
  attachReveals();

  // adjust section numbers since some sections may be hidden in build mode
  renumberSections();
}

/* ---------- TYPING EFFECT (for hero role) ---------- */
let typingTimer = null;
function startTyping(text) {
  const target = $('#role-text');
  if (!target) return;
  clearTimeout(typingTimer);
  if (reduceMotion) {
    target.textContent = text;
    return;
  }
  // erase then type
  let cur = target.textContent;
  const erase = () => {
    if (cur.length === 0) return type();
    cur = cur.slice(0, -1);
    target.textContent = cur;
    typingTimer = setTimeout(erase, 24);
  };
  let i = 0;
  const type = () => {
    if (i > text.length) return;
    target.textContent = text.slice(0, i);
    i++;
    typingTimer = setTimeout(type, 38 + Math.random() * 30);
  };
  erase();
}

/* ---------- RADIAL WIPE TRANSITION ---------- */
function switchMode(target, originX, originY) {
  const html = document.documentElement;
  const current = html.dataset.mode;
  if (current === target) return;

  const wipe = $('.mode-wipe');
  const label = $('.mode-wipe-label');
  label.textContent = DATA[target].full.toUpperCase();
  wipe.style.setProperty('--wx', originX + 'px');
  wipe.style.setProperty('--wy', originY + 'px');
  wipe.classList.remove('is-out');
  wipe.classList.add('is-active');

  // mid-animation, swap content
  setTimeout(() => {
    renderMode(target);
  }, 380);

  // after the cover, animate out
  setTimeout(() => {
    wipe.classList.remove('is-active');
    wipe.classList.add('is-out');
  }, 720);

  setTimeout(() => {
    wipe.classList.remove('is-out');
  }, 1450);
}

/* ---------- BUILDS RENDER ---------- */
const ICONS = {
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>',
  github:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2c-3.19.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.25 5.71.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>',
  docker:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.55 9.97c-.06-.05-.6-.46-1.74-.46-.3 0-.6.03-.9.08-.22-1.49-1.42-2.22-1.48-2.26l-.3-.18-.2.28c-.25.39-.43.83-.54 1.29-.2.86-.07 1.66.34 2.36-.5.28-1.3.34-1.48.35H1.96c-.38 0-.69.3-.69.68 0 .85.14 1.7.42 2.5a5.94 5.94 0 0 0 1.35 2.15c.7.69 1.9 1.13 3.45 1.27 2.32.2 4.55-.18 6.55-1.13 1.62-.78 2.78-2 3.62-3.52 2.07.07 4.4-.5 5.18-2.3l.08-.16-.12-.13c-.05-.06-.27-.27-.66-.41zM4.7 11.27h1.9c.09 0 .17-.07.17-.16V9.43c0-.09-.08-.17-.17-.17H4.7c-.09 0-.17.08-.17.17v1.68c0 .09.08.16.17.16zm2.62 0h1.9c.09 0 .17-.07.17-.16V9.43c0-.09-.08-.17-.17-.17h-1.9c-.09 0-.17.08-.17.17v1.68c0 .09.08.16.17.16zm2.66 0h1.9c.09 0 .17-.07.17-.16V9.43c0-.09-.08-.17-.17-.17h-1.9c-.09 0-.17.08-.17.17v1.68c0 .09.08.16.17.16zm2.62 0h1.9c.09 0 .17-.07.17-.16V9.43c0-.09-.08-.17-.17-.17h-1.9c-.09 0-.17.08-.17.17v1.68c0 .09.08.16.17.16zM7.32 8.85h1.9c.09 0 .17-.08.17-.17V7c0-.09-.08-.17-.17-.17h-1.9c-.09 0-.17.08-.17.17v1.68c0 .09.08.17.17.17zm2.66 0h1.9c.09 0 .17-.08.17-.17V7c0-.09-.08-.17-.17-.17h-1.9c-.09 0-.17.08-.17.17v1.68c0 .09.08.17.17.17zm2.62 0h1.9c.09 0 .17-.08.17-.17V7c0-.09-.08-.17-.17-.17h-1.9c-.09 0-.17.08-.17.17v1.68c0 .09.08.17.17.17zm0-2.42h1.9c.09 0 .17-.08.17-.17V4.58c0-.09-.08-.17-.17-.17h-1.9c-.09 0-.17.08-.17.17v1.68c0 .09.08.17.17.17zm2.65 4.84h1.9c.09 0 .17-.07.17-.16V9.43c0-.09-.08-.17-.17-.17h-1.9c-.09 0-.17.08-.17.17v1.68c0 .09.08.16.17.16z"/></svg>',
  star:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.95 6.93L22 9.99l-5.5 4.75L18.18 22 12 17.77 5.82 22l1.68-7.26L2 9.99l7.05-1.06z"/></svg>',
  copy:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'
};

function renderBuilds() {
  const grid = $('#builds-grid');
  if (!grid) return;
  grid.innerHTML = '';
  BUILDS.forEach((b, i) => {
    const isDocker = b.type === 'docker';
    const isGithub = b.type === 'github';
    const card = ce('article', 'build-card reveal' + (isDocker ? ' is-docker' : '') + (isGithub ? ' is-github' : ''));
    card.style.setProperty('--delay', (i * 70) + 'ms');
    card.style.setProperty('--build-grad', b.gradient);

    // chrome (url bar) — Docker shows whale icon; GitHub shows octocat; websites show traffic-light dots
    let chrome;
    if (isDocker) {
      chrome = `<div class="build-chrome">
         <span class="build-icon build-icon--docker">${ICONS.docker}</span>
         <span class="build-url">${b.displayUrl}</span>
         ${b.stars != null ? `<span class="build-stars">${ICONS.star}${b.stars}</span>` : ''}
       </div>`;
    } else if (isGithub) {
      chrome = `<div class="build-chrome">
         <span class="build-icon build-icon--github">${ICONS.github}</span>
         <span class="build-url">${b.displayUrl}</span>
         ${b.stars != null ? `<span class="build-stars">${ICONS.star}${b.stars}</span>` : ''}
       </div>`;
    } else {
      chrome = `<div class="build-chrome">
         <span class="build-dots"><span></span><span></span><span></span></span>
         <span class="build-url">${b.displayUrl}</span>
       </div>`;
    }

    // pull command code block for docker
    const pullBlock = isDocker
      ? `<div class="build-pull">
           <code>${b.pullCmd}</code>
           <button class="build-copy" data-copy="${b.pullCmd}" aria-label="Copy pull command">${ICONS.copy}</button>
         </div>`
      : '';

    // actions
    let actionHtml;
    if (b.private) {
      actionHtml = `<span class="build-private">Private deployment</span>`;
    } else if (isDocker) {
      actionHtml = `
        <a class="build-link" href="${b.url}" target="_blank" rel="noopener">${ICONS.download}<span>Pull image</span></a>
        ${b.ghUrl ? `<a class="build-link build-link--ghost" href="${b.ghUrl}" target="_blank" rel="noopener">${ICONS.github}<span>Source</span></a>` : ''}`;
    } else if (isGithub) {
      actionHtml = `<a class="build-link" href="${b.ghUrl}" target="_blank" rel="noopener">${ICONS.github}<span>View source</span></a>`;
    } else if (b.url) {
      actionHtml = `
        <a class="build-link" href="${b.url}" target="_blank" rel="noopener"><span>Visit live</span>${ICONS.external}</a>
        ${b.ghUrl ? `<a class="build-link build-link--ghost" href="${b.ghUrl}" target="_blank" rel="noopener">${ICONS.github}<span>Source</span></a>` : ''}`;
    }

    card.innerHTML = `
      ${chrome}
      <div class="build-hero">
        <div class="build-mark">${b.mark}<small>${b.sub}</small></div>
      </div>
      <div class="build-body">
        <h3 class="build-title">${b.name}</h3>
        <p class="build-desc">${b.desc}</p>
        ${pullBlock}
        <div class="build-tags">${b.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="build-actions">${actionHtml}</div>
      </div>
    `;
    grid.appendChild(card);
  });

  // wire up the copy buttons
  $$('.build-copy').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        const original = btn.innerHTML;
        btn.classList.add('is-copied');
        btn.innerHTML = '<span style="font-size:11px;font-weight:700;letter-spacing:.08em">COPIED</span>';
        setTimeout(() => { btn.classList.remove('is-copied'); btn.innerHTML = original; }, 1400);
      } catch {}
    });
  });

  const foot = $('#builds-foot');
  if (foot) {
    foot.innerHTML = `
      <div>20+ repos and counting · <strong>find more on GitHub</strong>.</div>
      <div class="builds-foot-actions">
        <a href="https://github.com/bekoblast" target="_blank" rel="noopener">${ICONS.github}<span>github.com/bekoblast</span></a>
        <a href="#contact"><span>Start a conversation</span> →</a>
      </div>
    `;
  }
}

/* ---------- DYNAMIC SECTION NUMBERING ---------- */
function renumberSections() {
  const sections = $$('.section').filter(s => getComputedStyle(s).display !== 'none');
  sections.forEach((s, i) => {
    const num = s.querySelector('.section-num');
    if (num) num.textContent = String(i + 1).padStart(2, '0');
  });
}

/* ---------- CREDENTIALS RENDER ---------- */
function renderCreds() {
  const f = $('#cred-featured');
  CREDS.featured.forEach(c => {
    f.appendChild(buildCred(c));
  });
  const p = $('#cred-programs');
  CREDS.programs.forEach(c => {
    p.appendChild(buildCred(c, true));
  });
  const m = $('#cred-modules');
  // flat list of every module across programs
  CREDS.programs.forEach(prog => {
    if (!prog.modules) return;
    prog.modules.forEach(mod => {
      const card = ce('div', 'cred-card');
      card.innerHTML = `
        <span class="cred-issuer"><span class="cred-issuer-dot"></span>${prog.issuer}</span>
        <h3 class="cred-title">${mod}</h3>
        <span class="cred-meta">From: ${prog.title}</span>
      `;
      m.appendChild(card);
    });
  });
}
function buildCred(c, withModules = false) {
  const card = ce('article', 'cred-card');
  card.innerHTML = `
    <span class="cred-issuer"><span class="cred-issuer-dot"></span>${c.issuer}</span>
    <h3 class="cred-title">${c.title}</h3>
    <span class="cred-meta">${c.meta || ''}</span>
    ${withModules && c.modules ? `<ul class="cred-modules">${c.modules.map(m => `<li>${m}</li>`).join('')}</ul>` : ''}
  `;
  return card;
}

/* ---------- HERO BACKGROUND ---------- */
function setupHeroCanvas() {
  const canvas = $('#hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, dpr = Math.min(2, window.devicePixelRatio || 1);
  const NUM = 70;
  const points = [];
  let mouse = { x: -1000, y: -1000 };

  function resize() {
    const r = canvas.getBoundingClientRect();
    w = r.width; h = r.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function init() {
    points.length = 0;
    for (let i = 0; i < NUM; i++) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - .5) * .4,
        vy: (Math.random() - .5) * .4,
        r: 1 + Math.random() * 1.5
      });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const mode = document.documentElement.dataset.mode;
    const accent = mode === 'build' ? '245,158,11' : '0,212,255';

    // grid sparkle for build mode
    if (mode === 'build') {
      ctx.strokeStyle = `rgba(${accent},0.05)`;
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 80) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 80) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
    }

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      // mouse repulsion
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < 18000) {
        const f = 0.06 / Math.max(0.0001, d2 / 18000);
        p.vx += dx * f * 0.0002;
        p.vy += dy * f * 0.0002;
      }
      p.vx = Math.max(-1.2, Math.min(1.2, p.vx));
      p.vy = Math.max(-1.2, Math.min(1.2, p.vy));

      ctx.fillStyle = `rgba(${accent},0.55)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // links (only in tech mode for the neural-web look)
    if (mode === 'tech') {
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 16000) {
            const o = 1 - d2 / 16000;
            ctx.strokeStyle = `rgba(${accent},${o * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); init(); }, { passive: true });
  window.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  }, { passive: true });
  window.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

  resize(); init();
  if (!reduceMotion) draw();
}

/* ---------- SCROLL REVEAL ---------- */
let revealObserver = null;
function attachReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          revealObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
  }
  $$('.reveal:not(.is-in)').forEach(el => revealObserver.observe(el));
}

/* ---------- STAT COUNTERS ---------- */
function animateStats() {
  $$('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const dur = 1400;
    const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

/* ---------- ACTIVE SECTION HIGHLIGHT ---------- */
function setupActiveNav() {
  const links = $$('.navlinks a');
  const map = new Map(links.map(a => [a.getAttribute('href'), a]));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('is-active'));
        const a = map.get('#' + e.target.id);
        if (a) a.classList.add('is-active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
}

/* ---------- CRED TABS ---------- */
function setupCredTabs() {
  $$('.cred-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.cred-tab').forEach(t => t.classList.toggle('is-active', t === tab));
      $$('.cred-panel').forEach(p => {
        p.hidden = p.dataset.panel !== tab.dataset.tab;
      });
    });
  });
}

/* ---------- WIRE UP ---------- */
function bindModeButtons() {
  document.body.addEventListener('click', e => {
    const btn = e.target.closest('[data-mode-target]');
    if (!btn) return;
    e.preventDefault();
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    switchMode(btn.dataset.modeTarget, x, y);
  });
}

function bindMobileMenu() {
  const burger = $('.nav-burger');
  if (!burger) return;
  burger.addEventListener('click', () => {
    $('.topnav').classList.toggle('is-open');
  });
  $$('.navlinks a').forEach(a => a.addEventListener('click', () => {
    $('.topnav').classList.remove('is-open');
  }));
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  renderMode('tech');
  renderBuilds();
  renderCreds();
  attachReveals();
  setupHeroCanvas();
  setupActiveNav();
  setupCredTabs();
  bindModeButtons();
  bindMobileMenu();
  // run stat counters once hero is in view (it is, at load)
  setTimeout(animateStats, 400);
});
