const projects = [
    {
        title: 'Nike Website',
        description: 'This is a website that displays a shoe store front',
        link:'https://nike-clone-pi-sage.vercel.app/',
        image: process.env.PUBLIC_URL + '/assets/images/nike.png',
    },
    {
        title: 'Portfolio Website',
        description:'This is my personal webpage',
        link:'https://calebzwingli.netlify.app/',
        image: process.env.PUBLIC_URL + '/assets/images/portfolio1.png',
    },
    {
        title: 'Salesman Dashboard',
        description: 'Dashboard sales personal use to track sales',
        link:'https://salesman-dashboard.vercel.app/',
        image: process.env.PUBLIC_URL + '/assets/images/sales.png',
    },
    {
        title: 'React Hire',
        description: 'Job board to find react devs, and post jobs',
        link:'https://reacthire.netlify.app/',  
        image: process.env.PUBLIC_URL + '/assets/images/reacthire.png',
    },
];

export default projects;