import { ProjectType } from "@/types/Types";

const portfolios: Array<ProjectType> = [
    {
        id: 10,
        category: 'Professional',
        link1: 'https://github.com/gerald-encabo/grand-and-toy/blob/main/README.md',
        link2: 'https://www.grandandtoy.com/',
        icon1: 'Github',
        icon2: 'Website',
        image: '/images/grand-and-toy.JPG',
        alt: 'Grand & Toy home page',
        title: 'Grand & Toy',
        desc: 'Grand & Toy newly home page.'
    },
    {
        id: 11,
        category: 'Professional',
        link1: 'https://github.com/gerald-encabo/grand-and-toy-success-centre/blob/main/README.md',
        link2: 'https://successcentre.grandandtoy.com/',
        icon1: 'Github',
        icon2: 'Website',
        image: '/images/grand-and-toy-success-centre.JPG',
        alt: 'Grand & Toy - Success Centre home page',
        title: 'Grand & Toy Success Centre',
        desc: 'Grand & Toy Success Centre home page.'
    },
    {
        id: 7,
        category: 'Professional',
        link1: 'https://github.com/gerald-encabo/seneca-college/blob/main/README.md',
        link2: 'https://www.senecacollege.ca/home.html',
        icon1: 'Github',
        icon2: 'Website',
        image: '/images/seneca-college.png',
        alt: 'Seneca College home page',
        title: 'Seneca College',
        desc: 'This is Seneca College main page, which I have work during my co-op and contract during work experience with Seneca.'
    },     
    {
        id: 6,
        category: 'Co-op',
        link1: 'https://github.com/gerald-encabo/seneca-college-employee-portal/blob/main/README.md',
        link2: 'https://employees.senecacollege.ca/',
        icon1: 'Github',
        icon2: 'Website',
        image: '/images/employee-intranet.png',
        alt: 'Seneca College Employee Intranet',
        title: 'Seneca College (employee-portal)',
        desc: 'This Seneca employee webpage is a contract project that I have work with Seneca after I graduated.'
    },
    {
        id: 8,
        category: 'Co-op',
        link1: 'https://github.com/gerald-encabo/seneca-college-student-portal/blob/main/README.md',
        link2: 'https://students.senecacollege.ca/',
        icon1: 'Github',
        icon2: 'Website',
        image: '/images/student-intranet.png',
        alt: 'Seneca College Student Intranet',
        title: 'Seneca College (student-portal)',
        desc: 'This Seneca College student intranet, and this extend to Employee Intranet project.'
    }, 
    {
        id: 3,
        category: 'Personal',
        link1: 'https://github.com/gerald-encabo/ramen-house-restaurant/blob/main/README.md',
        link2: 'https://ramen-house.vercel.app/',
        icon1: 'Github',
        icon2: 'Website',
        image: '/images/ramen-house.jpg',
        alt: 'Ramen House home page',
        title: 'Ramen House',
        desc: 'This responsive eCommerce webpage is focusing on Front-End food industry Ramen or Japanese Noodle soup. This is Single Page Application (SPA) with multiple components in Hooks, and it also have redux featured which use in add, remove and delete item into the shopping cart.'
    },
    {
        id: 12,
        category: 'Personal',
        link1: 'https://github.com/gerald-encabo/velopro-online-food-ordering/blob/main/README.md',
        link2: 'https://velopro-online-food-ordering.vercel.app/',
        icon1: 'Github',
        icon2: 'Website',
        image: '/images/velopro-online-food-ordering.JPG',
        alt: 'VeloPro home page',
        title: 'VeloPro',
        desc: 'This VeloPro Online Food Delivery React App with variety of foods of choices'
    },
    {
        id: 1,
        category: 'Personal',
        link1: 'https://github.com/gerald-encabo/guardian-credit-card-app/blob/main/README.md',
        link2: 'https://guardian-credit-card.vercel.app/',
        icon1: 'Github',
        icon2: 'Website',
        image: '/images/guardian-credit-card.JPG',
        alt: 'Guardian home page',
        title: 'Guardian',
        desc: 'This Guardian Credit Card React App is responsive on all devices with multiple pages and components.'
    }
]

export default portfolios;