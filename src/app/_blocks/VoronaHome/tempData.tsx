import {
  BanknotesIcon,
  ClockIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

import type { BenefitsBlockProps } from '../BenefitsBlock'
import { ContactFormBlockProps } from '../ContactFormBlock'
import { ContactsBlockProps } from '../ContactsBlock'
import type { HeroBlockProps } from '../HeroBlock'
import { PricingBlockProps } from '../PricingBlock'
import { PrinciplesBlockProps } from '../PrinciplesBlock'
import type { ServicesBlockProps } from '../ServicesBlock'
import { TeamBlockProps } from '../TeamBlock'
import type { WhoBlockProps } from '../WhoBlock'

export const PROMO_SLIDE = {
  title: 'Check our youtube channel',
  description:
    'Unlocking the world of modern development, product management, and tech - a sea of knowledge, value, and fun',
  ctaLink: '#',
  ctaText: 'Visit',
  image: '/idea 2.png',
  imageAlt: 'image alt',
}

export const HERO_BLOCK: HeroBlockProps = {
  header: {
    firstPart: 'We create high-performing',
    secondPart: 'IT and marketing solutions',
    thirdPart: 'for',
    fourthPart: 'startups',
  },
  description:
    'Qbesk, a development and design crew, hooks up startups and businesses, making products happen and tackling tech challenges',
  ctaMain: {
    href: '#',
    text: 'Get a consult',
  },
  ctaAdditional: {
    href: '#',
    text: 'Get a consult',
  },
}

const WHO_BENEFITS = [
  {
    title: 'Startups / MVP',
    description: 'If you have a startup idea and seeking an MVP developer',
    helpItems: [
      {
        title: 'Transform',
        description: 'concepts and ideas into tech specifications',
      },
      {
        title: 'Develop',
        description: 'an MVP version of the product',
      },
      {
        title: 'Provide',
        description: 'training on how to continue working with it',
      },
    ],
  },
  {
    title: 'Beginner product',
    description: "You've already started a product, now it's time to boost the team",
    helpItems: [
      {
        title: 'Transform',
        description: 'concepts and ideas into tech specifications',
      },
      {
        title: 'Develop',
        description: 'an MVP version of the product',
      },
      {
        title: 'Provide',
        description: 'training on how to continue working with it',
      },
    ],
  },
  {
    title: 'Growing product',
    description: 'Your product is already working, now it needs further development',
    helpItems: [
      {
        title: 'Transform',
        description: 'concepts and ideas into tech specifications',
      },
      {
        title: 'Develop',
        description: 'an MVP version of the product',
      },
      {
        title: 'Provide',
        description: 'training on how to continue working with it',
      },
    ],
  },
  {
    title: 'Online business',
    description: 'You want to optimize business with automation, tech and design',
    helpItems: [
      {
        title: 'Transform',
        description: 'concepts and ideas into tech specifications',
      },
      {
        title: 'Develop',
        description: 'an MVP version of the product',
      },
      {
        title: 'Provide',
        description: 'training on how to continue working with it',
      },
    ],
  },
]

export const WHO_BLOCK: WhoBlockProps = {
  header: {
    firstPart: 'Who',
    secondPart: 'will benefit',
    thirdPart: 'from us',
  },
  description:
    'We have extensive experience in online business, projects, and startups. We would be delighted to collaborate with you!',
  whoBenefitsItems: WHO_BENEFITS,
}

export const SERVICES = [
  {
    title: 'products',
    services: ['mvp', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-indigo-300',
  },
  {
    title: 'design',
    services: ['ui/ux', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-amber-300',
  },
  {
    title: 'development',
    services: ['mvp', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-pink-300',
  },
  {
    title: 'consulting',
    services: ['mvp', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-yellow-300',
  },
  {
    title: 'marketing',
    services: ['mvp', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-blue-300',
  },
  {
    title: 'content',
    services: ['mvp', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-cyan-300',
  },
]

export const SERVICES_BLOCK: ServicesBlockProps = {
  header: 'Services',
  description:
    "We'll supercharge your business growth, boost your online income, and help you ace the digital game",
  services: SERVICES,
}

const BENEFITS = [
  {
    title: 'On the same page',
    description: "We're tackling business challenges, not just coding",
  },
  {
    title: 'Small team',
    description: 'Our seasoned team is fully immersed in your project',
  },
  {
    title: 'Total transparency',
    description:
      "Timelines, pricing, processes, and outcomes. We're available and open to your questions",
  },
  {
    title: 'Security and efficiency',
    description:
      'We leverage a framework of the most popular and stable solutions tailored to your needs',
  },
  {
    title: 'Documentation',
    description: "While developing, we'll share knowledge and create detailed docs for the future",
  },
]

export const BENEFITS_BLOCK: BenefitsBlockProps = {
  header: 'Benefits',
  description:
    "We'll supercharge your business growth, boost your online income, and help you ace the digital game",
  benefits: BENEFITS,
}

const PRICING_PRINCIPLES = [
  {
    icon: ClockIcon,
    title: 'We operate on an hourly rate model',
    description:
      "We'll allocate our team's time as needed for your project. Whether it's coordination or full-time dedication, we can accommodate your requirements",
  },
  {
    icon: BanknotesIcon,
    title: 'Hourly rates vary based on the specialist and tasks',
    description:
      'The project cost depends on task complexity; for larger tasks and full-time commitment, costs are discussed separately',
  },
]

const PROCESS_STEPS = [
  {
    percentage: '10',
    title: 'Discuss',
    description: 'the project and create a contract',
  },
  {
    percentage: '20',
    title: 'Choose',
    description: 'the technology stack and methodologies',
  },
  {
    percentage: '30',
    title: 'Plan',
    description: 'the project and commence development',
  },
  {
    percentage: '60',
    title: 'Present',
    description: 'a results and gather feedback',
  },
  {
    percentage: '80',
    title: 'Provide',
    description: 'docs and train your team on product usage',
  },
  {
    percentage: '100',
    title: 'Support & expand',
    description: 'the product if you are ready to continue',
  },
]

const COLLABORATION_PRINCIPLES = [
  {
    icon: RocketLaunchIcon,
    title: 'Large projects',
    description:
      "We operate under SCRUM:  determine how many tasks can be completed each month, and you pay for the time spent on them. You have the flexibility to decide how much of the team's time you need, based on the tasks, budget, and deadlines",
    services: ['mvp', 'startup', 'product', 'web-service', 'automation'],
    color: 'bg-cyan-300',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Short projects',
    description:
      'These projects can be estimated upfront. In this case, SCRUM is optional, and the development time is fixed',
    services: ['website', 'branding', 'chatbot', 'landing page'],
    color: 'bg-amber-300',
  },
]

export const PRINCIPLES_BLOCK: PrinciplesBlockProps = {
  header: {
    firstPart: 'Working',
    secondPart: 'principles',
  },
  description: 'A glimpse into how we operate: the process, pricing, and collaboration options',
  collaboration: {
    title: 'Collaboration',
    description:
      "We offer two collaboration options depending on the project's size and complexity",
    principles: COLLABORATION_PRINCIPLES,
    videoSrc: 'https://www.youtube.com/embed/-3PUQZqnuuE?si=jgk8_FWdF78_aEaB',
  },
  pricing: {
    title: 'Pricing',
    principles: PRICING_PRINCIPLES,
    videoSrc: 'https://www.youtube.com/embed/-3PUQZqnuuE?si=jgk8_FWdF78_aEaB',
  },
  process: {
    title: 'Process',
    videoSrc: 'https://www.youtube.com/embed/-3PUQZqnuuE?si=jgk8_FWdF78_aEaB',
    description:
      'We have a flexible development process that depends on your goals, tasks, and product. We prefer Agile',
    steps: PROCESS_STEPS,
  },
}

const PERSONS = [
  {
    name: 'Artem Galukhin',
    role: 'CEO, Head of developers',
    description: 'I am the man between business and technologies',
    highlightDescription: 'Entrepreneur, web developer',
    highlightHeader: '10+ years',
    competences: ['strategy', 'marketing', 'development', 'content production', 'advert'],
    photo: '/idea 2.png',
  },
  {
    name: 'Elena Galukhina',
    role: 'Creative director',
    description: 'I am the man between business and technologies',
    highlightDescription: 'Entrepreneur, web developer',
    highlightHeader: '10+ years',
    competences: ['strategy', 'marketing', 'development', 'content production', 'advert'],
    photo: '/idea 2.png',
  },
]

export const TEAM_BLOCK: TeamBlockProps = {
  header: 'Our team',
  description:
    "Let's introduce ourselves: a compact, high-performing team blending IT, business, and design expertise",
  persons: PERSONS,
}

export const PRICING_BLOCK: PricingBlockProps = {
  header: 'Pricing',
  description:
    'Our working model enables you to pay for the actual project time spent by our specialists. Payment is made on a monthly basis for the completed work. Our work estimation is based on an hourly rate',
  hourlyRate: {
    rate: '$50',
    description: 'Hourly rate, starting from',
  },
  consultRate: {
    rate: '01/23',
    description: 'Dev kickoff of your project',
  },
  urgentProject: {
    title: 'Do you have an urgent project?',
    description: 'Contact us now to discuss its feasibility',
  },
  pricingPolicy: {
    title: 'Our prices will increase starting from June 2024',
    description: 'Secure a contract at a favorable rate now',
  },
}

export const CONTACTS_BLOCK: ContactsBlockProps = {
  header: 'Contacts',
  phone: '+54 11 26748618',
  email: 'hi@qbesk.com',
  address1: 'Qbesk Company, USA, Delaware,',
  address2: 'Lenin ave,1 / 12354321',
  callToAction: 'Text us now, and let’s start working!',
  disclamer:
    'We operate entirely in a remote format, with our team members located all around the world. Our back office is in Delaware, USA, and we operate within the legal framework of the United States',
}

export const CONTACT_FORM_BLOCK: ContactFormBlockProps = {
  header: 'Shall we discuss this further?',
  nameInput: {
    label: 'Name',
    placeholder: 'Ivan Ivanov',
  },
  emailInput: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
  descriptionInput: {
    label: 'Description',
    placeholder: 'Please, tell us a bit about your project or task',
  },
  agreementCheckboxText: 'I agree with the personal data processing policy',
  submitButtonText: 'Get a consult',
}
