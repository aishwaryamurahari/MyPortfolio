import portfolioImg02 from '../assets/image_2.jpeg';
import portfolioImg03 from '../assets/image_3.jpeg';
import portfolioImg04 from '../assets/image_4.jpeg';
import portfolioImg05 from '../assets/image_5.jpeg';

const portfolios = [
  {
    id: '01',
    imgUrl: portfolioImg02,
    category: 'Backend',
    title: 'Image Processing API',
    description:
      'This project aims to give a real-world scenario to read and write to your disk via a Node.js express server rather than a database. The project serves two purposes: prepares for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects.I independently executed the project, handling all aspects from initiation to completion without collaboration.',
    technologies: ['Node.js', 'TypeScript'],
    siteUrl: 'https://github.com/aishwaryamurahari/imageprocessingapi',
  },
  {
    id: '02',
    imgUrl: portfolioImg03,
    category: 'Backend',
    title: 'A Storefront Backend',
    description:
      'In this project, as a web developer at a small company, my task is to develop the backend for a new online store. I am responsible for designing the database, ensuring it meets the data requirements from the stakeholders document, and creating a RESTful API for frontend-backend communication. Its main focus includes preparing the application for beta testing, implementing security measures, particularly for user data, and providing authentication tokens for integration with the frontend. My role is crucial in ensuring the system is functional, secure, and user-friendly, ready for real-world deployment.I independently executed the project, handling all aspects from initiation to completion without collaboration.',
    technologies: ['JavaScript', 'Node.js', 'SQL'],
    siteUrl: 'https://github.com/aishwaryamurahari/StorefrontBackend',
  },
  {
    id: '03',
    imgUrl: portfolioImg04,
    category: 'Web Design',
    title: 'My Store Front',
    description:
      'MyStore is a single-page web application built with Angular, offering a user-friendly and interactive shopping experience. It features a variety of functionalities, including viewing a list of products, adding products to a cart, reviewing the cart contents, removing items from the cart, and completing the checkout process. The application emphasizes a seamless and efficient online shopping journey.I independently executed the project, handling all aspects from initiation to completion without collaboration.',
    technologies: ['Angular', 'NodeJS', 'CSS', 'HTML'],
    siteUrl: 'https://github.com/Njc27/Web_FinalProject',
  },
  {
    id: '04',
    imgUrl: portfolioImg05,
    category: 'Web Design',
    title: 'Udagram',
    description:
      'This project focuses on deploying a Full-Stack retail application, Udagram, to the cloud, making it user-accessible. Key tasks include using AWS for database and web server setup, and code modifications for security. Udagram allows user registration, photo uploads, and image filtering, consisting of an Angular-based Frontend with Ionic and a Node-Typescript Backend RESTful API.I independently executed the project, handling all aspects from initiation to completion without collaboration.',
    technologies: ['Angular', 'NodeJS', 'Typescript', 'CSS', 'AWS'],
    siteUrl: 'https://github.com/aishwaryamurahari/udagramApplication',
  },
];

export default portfolios;
