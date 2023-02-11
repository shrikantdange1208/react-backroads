import tour_1 from './images/tour-1.jpeg'
import tour_2 from './images/tour-2.jpeg'
import tour_3 from './images/tour-3.jpeg'
import tour_4 from './images/tour-4.jpeg'
import tour_5 from './images/tour-5.jpeg'
import tour_6 from './images/tour-6.jpeg'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
]

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'fab fa-squarespace',
  },
  {
    id: 4,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'fab fa-instagram',
  },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  ,
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    image: tour_1,
    tourDate: 'august 26, 2020',
    tourTitle: 'Tibet Adventure',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'china',
    days: '6',
    cost: '2100',
  },
  {
    id: 2,
    image: tour_2,
    tourDate: 'october 1th, 2020',
    tourTitle: 'best of java',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'indonesia',
    days: '11',
    cost: '1400',
  },
  {
    id: 3,
    image: tour_3,
    tourDate: 'september 15th, 2020',
    tourTitle: 'explore hong kong',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'hong kong',
    days: '8',
    cost: '5000',
  },
  {
    id: 4,
    image: tour_4,
    tourDate: 'december 5th, 2019',
    tourTitle: 'kenya highlights',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'kenya',
    days: '20',
    cost: '3300',
  },
  {
    id: 5,
    image: tour_5,
    tourDate: 'december 5th, 2019',
    tourTitle: 'South Africa',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'South Africa',
    days: '15',
    cost: '2400',
  },
  {
    id: 6,
    image: tour_6,
    tourDate: 'december 5th, 2019',
    tourTitle: 'Incredible India',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'India',
    days: '12',
    cost: '2500',
  },
]
