import TopicImage from '../assets/topics';
import moment from 'moment';
import EventImage from '../assets/events';

export const SampleHotEvents = [
  {
    title: 'Linde.Intel.AI.Challenge',
    tags: ['AI', 'Industry'],
    startDate: moment(new Date()),
    endDate: moment(new Date()),
    location: 'Munich, Germany',
    prize: '1st Prize €7000',
    image: EventImage.Event1,
    link: '#',
  },
  {
    title: 'BE5 HACKDAYS',
    tags: ['Industry', 'Robotic', 'VR', 'AR'],
    startDate: moment(new Date(2019, 2, 1)),
    endDate: moment(new Date(2019, 2, 3)),
    location: 'GARCHING BEI MUNCHEN, GERMANY',
    prize: '1st Prize €7000',
    image: EventImage.Event2,
    link: '#',
  },
  {
    title: 'Blockchain Connect Conference',
    tags: ['FinTech', 'IoT', 'Blockchain', 'Cybersecurity'],
    startDate: moment(new Date(2019, 1, 11)),
    endDate: moment(new Date(2019, 1, 11)),
    location: 'Mission St, San Francisco',
    prize: '~',
    image: EventImage.Event3,
    link: '#',
  },
];

export const SampleTopics = [
  { title: 'AI', image: TopicImage.AI, count: 51, url: '#' },
  { title: 'Industry', image: TopicImage.Industry, count: 40, url: '#' },
  { title: 'Big Data', image: TopicImage.BigData, count: 39, url: '#' },
  { title: 'IoT', image: TopicImage.IOT, count: 36, url: '#' },
  { title: 'Non-Profit', image: TopicImage.NonProfit, count: 25, url: '#' },
  { title: 'API', image: TopicImage.API, count: 16, url: '#' },
  { title: 'Transport', image: TopicImage.Transport, count: 17, url: '#' },
  { title: 'Blockchain', image: TopicImage.BlockChain, count: 18, url: '#' },
];

export const WhyUsContent = [
  {
    title: 'simple',
    content: 'Easily view and book an event with fewer steps than ever.',
  },
  {
    title: 'easy',
    content: 'Fresh and clean design made interactions effortless.',
  },
  {
    title: 'professional',
    content: 'Hundreds of events from the top companies and organizations.',
  },
];
