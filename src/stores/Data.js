import { defineStore } from 'pinia'
import pngTodo from '../assets/Todo.webp'
import thumnails_KPI from '../assets/thumnails_kpi.png'
import a_bite from '../assets/a_bite.png'

export const useDataStore = defineStore('data', {
  state: () => ({
    projects: [
      {
        link: 'https://thikamphon.github.io/a-bite/#/',
        imageUrl: a_bite,
        title: 'E-Commerce-(a-Bite)',
        about: 'Mockup Frontend and Backend use locastorage for upload new data.',
        tags: ['Vue', 'Tailwind', 'daisyUI'],
      }, 
      {
        link: 'https://docs.google.com/spreadsheets/d/11IpwMTFbNpbK9x-XU0src6h-d-9bUUYilozTyYiOoLc/edit?usp=sharing',
        imageUrl: thumnails_KPI,
        title: 'Saller KPI',
        about: 'Data and KPI of Saller and Analyst graph of Company in google sheet.',
        tags: ['Sheets'],
      },
      {
        link: 'https://mock-todo-list.vercel.app/',
        imageUrl: pngTodo,
        title: 'Todo-List',
        about: 'This project used mockapi.io to make the Todo-list.can be edit, delete and add.',
        tags: ['Vue', 'Tailwind', 'Daisy.UI'],
      },
      {
        link: 'https://thikamphon.github.io/multi-step-form/',
        imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/oswvtcsjqgxswvdy1cgt.jpg',
        title: 'Multi-Form',
        about: 'This project involves creating a form to calculate the price of products based on the selected monthly or yearly subscription plan.',
        tags: ['React'],
      },
      {
        link: 'https://thikamphon.github.io/ecommerce-product-page-main/',
        imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/vdyqztahkqyslrdsu9nx.jpg',
        title: 'E-commerce website',
        about: 'Mockup add and delete items and make Carousel and modal by basic skill.',
        tags: ['HTML', 'CSS', 'JS'],
      },
      // {
      //   link: 'https://thikamphon.github.io/ecommerce-product-page-main/',
      //   imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/vdyqztahkqyslrdsu9nx.jpg',
      //   title: 'E-commerce website',
      //   about: 'Mockup add and delete items in cart and make Carousel and Modal by Basic HTML,CSS AND Javascript ',
      //   tags: ['HTML', 'CSS', 'JS'],
      // },
      // {
      //   link: 'https://thikamphon.github.io/launch-countdown-timer/',
      //   imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/cpedouxp4ymfbjf0mkwq.jpg',
      //   title: 'Countdown Timer',
      //   about: 'The countdown timer is defaulted at 9 days, with the basic skill of web dev.',
      //   tags: ['HTML', 'CSS', 'JS'],
      // },
      {
        link: 'https://www.frontendmentor.io/solutions/age-calculate-WXdsM9nqSw',
        imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/i36eacsocopecpdzayav.jpg',
        title: 'Calculate Ages',
        about: 'Calculate ages Program on website by basic skill of web development',
        tags: ['HTML', 'CSS', 'JS'],
      },
      {
        link: 'https://thikamphon.github.io/sunnyside-landing-page/',
        imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/wpsrtpflv1nj4hkwptmr.jpg',
        title: 'Landing page',
        about: "This one is the Landing page, responsive. style website used hero is hero overlay. There're many things to learn from this project.",
        tags: ['HTML', 'CSS', 'JS']
      },


    ],
    experience: [
      {
        company: 'Innova Interactive Studio',
        position: '3D Modeler',
        over: '2021',
        ranges: 'Aug. 2021 - Dec. 2021',
        about: "While in college, I chose to intern as a 3D modeler at a company, where I was responsible for creating 3D assets for games while interning.",
      }],
    educations: [
      {
        school: 'King Mongkut’s University of Technology Thonburi (KMUTT)',
        major: 'Bachelor of Science - History and Design, Major in Media Technology, Specializing in Game Development',
        granduate: '2018',
        ranges: '2018-2022',
        gpax: '3.11',
        about: 'I graduated from the Media Technology University, Faculty of Architecture and Design, with a major in Media Technology focusing on Game Development. Over the course of four years, I honed my skills in coding specifically for game development. During my third year, I expanded my knowledge to include web development, gaining a broader understanding of the digital landscape.',
      },
      {
        school: 'Rattanakosinsompoch Bangkhunthian School (RST)',
        major: 'Art and Math Program',
        granduate: '2017',
        ranges: '2012-2017',
        gpax: '3.30',
        about: 'I studied from middle school to high school in the Department of Liberal Arts and Mathematics. My hobby is basketball, and I compete every year on sports day. I also joined the basketball club during middle school, where I developed teamwork, and leadership.',
      },
      // {
      //   school: 'Wat Lao School',
      //   major: 'General',
      //   granduate: '2006',
      //   ranges: '2006-2011',
      //   gpax: '',
      //   about: "I study in the general curriculum. My hobby is mostly reading books, and during midday breaks, I enjoy playing sports and participating in running competitions on Sports Day. Additionally, I also attend the school's orchestra club.",
      // }
    ]
  })
})
