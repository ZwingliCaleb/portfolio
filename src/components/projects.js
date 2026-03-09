const projects = [
    {
      title: 'Nike Website',
      description: 'A pixel-perfect Nike storefront clone built with React and Tailwind CSS, focusing on responsive layouts, component reusability, and smooth UI interactions.',
      link: 'https://nike-clone-pi-sage.vercel.app/',
      image: process.env.PUBLIC_URL + '/assets/images/nike.png',
      technologies: ['React', 'Tailwind CSS'],
    },
    {
      title: 'Portfolio Website',
      description: 'My personal developer portfolio, built to showcase my projects and skills. Features animated sections with Framer Motion, NextUI components, and a customized dark theme.',
      link: 'https://calebzwingli.netlify.app/',
      image: process.env.PUBLIC_URL + '/assets/images/portfolio1.png',
      technologies: ['React.js', 'Tailwind CSS', 'Formspree'],
    },
    {
      title: 'Salesman Dashboard',
      description: 'A full-featured sales analytics dashboard built with Next.js and a JSON Server backend. Enables sales reps to track daily targets, view performance trends, and manage leads.',
      link: 'https://salesman-dashboard.vercel.app/',
      image: process.env.PUBLIC_URL + '/assets/images/sales.png',
      technologies: ['Next.js', 'JSON Server', 'Tailwind CSS'],
    },
    {
      title: 'React Hire',
      description: 'A niche job board connecting companies with React developers. Supports job posting, searching, and candidate browsing — built with Next.js and deployed on Heroku.',
      link: 'https://reacthire.netlify.app/',
      image: process.env.PUBLIC_URL + '/assets/images/reacthire.png',
      technologies: ['Next.js', 'Heroku'],
    },
  ];
  
  export default projects;
  