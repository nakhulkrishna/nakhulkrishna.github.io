// Edit your content here. Image paths are relative to index.html.
// Missing images show a labelled placeholder. See IMAGE-RATIOS.md for screenshot sizes.
//
// Projects WITH screenshots appear in the "Projects" carousel.
// Projects with an empty `shots` list appear in the "More projects" list below it.
// Add screenshots to a project and it moves into the carousel automatically.

window.PORTFOLIO = {
  showAvailability: true,

  facts: [
    { label: 'Based in', value: 'Kerala, India' },
    { label: 'Focus', value: 'Flutter · Mobile & web products' },
    { label: 'Currently', value: 'Lead Flutter Developer at Docwo' },
    { label: 'Open to', value: 'Freelance projects' }
  ],

  skills: [
    { group: 'Languages', items: 'Dart, JavaScript' },
    { group: 'Mobile & UI', items: 'Flutter, Riverpod, Provider, GetX, GoRouter, Responsive UI' },
    { group: 'Backend', items: 'Firebase, Cloud Firestore, Cloud Functions, REST APIs, Authentication, Push notifications' },
    { group: 'Tools', items: 'Git, GitHub, Android Studio, Xcode, VS Code, Postman, App Store Connect, Google Play Console, CI/CD' }
  ],

  projects: [
    {
      id: 'red-rose-admin', device: 'web', name: 'Red Rose Admin', url: 'Red Rose Admin', year: '2025',
      platform: 'Web', role: 'Application Developer',
      stack: [], // TODO: add the admin panel's stack
      summary: 'Admin panel for the Red Rose sales system, used to run products, orders, and the sales team.',
      detail: 'Part of the Red Rose software ecosystem, covering sales management, products and categories, offers, vendors, shops, staff management, and WhatsApp ordering. The dashboard shows sales value, trends, and top products; the catalogue flags low stock and hidden items; the order inbox filters by status, period, and salesman.',
      links: [],
      shots: ['images/projects/red-rose-admin-1.jpg', 'images/projects/red-rose-admin-2.jpg', 'images/projects/red-rose-admin-3.jpg']
    },
    {
      id: 'red-rose-staff', device: 'phone', name: 'Red Rose Staff', url: 'Red Rose Staff', year: '2025 — 2026',
      platform: 'Android & iOS', role: 'Mobile Application Developer',
      stack: ['Flutter', 'Dart', 'Provider', 'Firebase Auth', 'Cloud Firestore', 'Cloud Functions'],
      summary: 'Ordering app for Red Rose field staff to take orders for retail shops on the go.',
      detail: 'Staff pick a customer shop, browse the catalogue by category, set quantities per unit (kg or pieces), review the cart, and place the order. Each order is tracked from placed to confirmed to delivered, and can be resent, shared with the customer, or reordered.',
      links: [],
      shots: ['images/projects/red-rose-staff-1.jpg', 'images/projects/red-rose-staff-2.jpg', 'images/projects/red-rose-staff-3.jpg', 'images/projects/red-rose-staff-4.jpg']
    },
    {
      id: 'bootcamp', device: 'web', name: 'Bootcamp', url: 'Bootcamp Gaming Center', year: '2025 — 2026',
      platform: 'Web & desktop', role: 'Solo developer',
      stack: ['Flutter Web', 'Dart', 'Provider', 'Cloud Firestore', 'Firebase Auth', 'fl_chart'],
      summary: 'Point-of-sale and operations dashboard for the BOOTCAMP gaming café, covering consoles, sessions, payments, and revenue.',
      detail: 'Staff start timed or open-ended sessions per console with game, pricing mode, and payment; timers count down live and end with a chime and spoken alert. Includes device and game management, session history with pending-payment collection, revenue and expense reports with PDF export, and admin and receptionist roles.',
      links: [],
      shots: ['images/projects/bootcamp-1.jpg', 'images/projects/bootcamp-2.jpg', 'images/projects/bootcamp-3.jpg', 'images/projects/bootcamp-4.jpg', 'images/projects/bootcamp-5.jpg', 'images/projects/bootcamp-6.jpg']
    },
    {
      id: 'docwo', device: 'phone', name: 'Docwo', year: '2026',
      platform: 'Android & iOS', role: 'Lead Flutter Developer & Solution Architect',
      stack: ['Flutter', 'Riverpod', 'GoRouter', 'Firebase', 'Socket.IO', 'Razorpay'],
      summary: 'Doctor appointment app for patients to find clinics and doctors nearby, book a slot, and pay in the app.',
      detail: 'Patients browse departments, recommended doctors, and clinics with distance and travel time; read doctor profiles and reviews; pick a time slot; book for themselves or family members; and pay with a clear fee breakdown. Appointments are tracked as upcoming, payment pending, completed, rescheduled, or missed, with a live queue view. I lead the mobile team and designed the feature-first architecture with Riverpod and GoRouter.',
      links: [],
      shots: ['images/projects/docwo-1.jpg', 'images/projects/docwo-2.jpg', 'images/projects/docwo-3.jpg', 'images/projects/docwo-4.jpg', 'images/projects/docwo-5.jpg', 'images/projects/docwo-6.jpg', 'images/projects/docwo-7.jpg', 'images/projects/docwo-8.jpg']
    },
    {
      id: 'feed-meals', device: 'phone', name: 'Feed Meals', year: '2025 — 2026',
      platform: 'Android & iOS', role: 'Flutter Engineer',
      stack: ['Flutter', 'GetX', 'Firebase', 'Google Maps', 'REST APIs'],
      summary: 'Customer app for a food and meals platform.',
      links: [], shots: []
    },
    {
      id: 'planet-zero', device: 'phone', name: 'Planet Zero', year: '2026',
      platform: 'Android & iOS', role: 'Flutter Engineer',
      stack: ['Flutter', 'GetX', 'Firebase', 'Google Maps', 'REST APIs'],
      summary: 'Customer mobile app for the Planet Zero platform.',
      links: [], shots: []
    },
    {
      id: 'finexs', device: 'phone', name: 'Finexs', year: '',
      platform: 'Mobile', role: 'Flutter Developer',
      stack: ['Flutter'],
      summary: 'Financial services application.',
      links: [], shots: []
    },
    {
      id: 'eyy-auto', device: 'phone', name: 'Eyy Auto', year: '',
      platform: 'Mobile', role: 'Flutter Developer',
      stack: ['Flutter'],
      summary: 'Automotive mobile application.',
      links: [], shots: []
    }
  ],

  jobs: [
    { years: '2026 — Now', role: 'Freelance Software Developer', company: 'Self-employed', note: 'Building mobile apps and websites for clients, from first idea to store release.' },
    { years: '2026 — Now', role: 'Lead Flutter Developer & Solution Architect', company: 'Docwo', note: 'Leading mobile development and defining the Flutter architecture for a startup product, using Riverpod, GoRouter, and a feature-first structure.' },
    { years: '2025 — 2026', role: 'Flutter Engineer', company: 'Code-OX Technologies LLP', note: 'Built features for production mobile apps, integrated APIs, owned app architecture and debugging, and shipped iOS and Android releases.' },
    { years: '2025', role: 'Flutter Developer Intern', company: 'Spinecodes Solutions LLP', note: 'Gained professional experience in Flutter app development and working on a shared codebase in a team.' }
  ]
};
