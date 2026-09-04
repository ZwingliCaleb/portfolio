const projects = [
  {
    id: 'nike-clone',
    title: 'Nike E-Commerce Experience',
    category: 'Frontend',
    description: 'A high-performance Nike storefront clone built with React and Tailwind CSS, focusing on responsive layout ergonomics, modular atomic UI design, and smooth interaction states.',
    link: 'https://nike-clone-pi-sage.vercel.app/',
    github: 'https://github.com/ZwingliCaleb',
    image: '/assets/images/nike.png',
    technologies: ['React.js', 'Tailwind CSS', 'Vercel', 'Responsive Design'],
    architecture: 'Modular component architecture with lazy-loaded image assets and utility-first styling.',
    featured: true
  },
  {
    id: 'salesman-dashboard',
    title: 'Sales Intelligence Dashboard',
    category: 'Full-Stack',
    description: 'A data-driven sales analytics dashboard built with Next.js and a RESTful backend. Enables real-time target tracking, revenue pipeline visualization, and client CRM management.',
    link: 'https://salesman-dashboard.vercel.app/',
    github: 'https://github.com/ZwingliCaleb',
    image: '/assets/images/sales.png',
    technologies: ['Next.js', 'REST API', 'Tailwind CSS', 'JSON Server'],
    architecture: 'SSR dashboard with optimistic UI updates and normalized telemetry schemas.',
    featured: true
  },
  {
    id: 'react-hire',
    title: 'ReactHire Talent Platform',
    category: 'Full-Stack',
    description: 'A specialized developer talent marketplace connecting tech companies with verified React & Cloud engineers. Includes job listings, query filtering, and employer applicant workflows.',
    link: 'https://reacthire.netlify.app/',
    github: 'https://github.com/ZwingliCaleb',
    image: '/assets/images/reacthire.png',
    technologies: ['Next.js', 'Node.js', 'Netlify', 'Tailwind CSS'],
    architecture: 'Full-stack recruitment portal featuring server-rendered job indexing and search filters.',
    featured: true
  },
  {
    id: 'dev-portfolio',
    title: '2026 Cloud Developer Portfolio',
    category: 'Cloud & Systems',
    description: 'Caleb\'s interactive cyberpunk developer workspace and workstation. Built with Vite, React 18, Web Audio API sound synthesis, K8s Pod arcade mini-game, and Unix-like terminal.',
    link: 'https://calebzwingli.netlify.app/',
    github: 'https://github.com/ZwingliCaleb/portfolio',
    image: '/assets/images/portfolio1.png',
    technologies: ['React 18', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Framer Motion'],
    architecture: 'Sub-second cold start Vite bundle with canvas-based particle simulations and zero-dependency SFX.',
    featured: true
  },
];

export default projects;