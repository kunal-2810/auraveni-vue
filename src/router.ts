import { createRouter, createWebHistory } from 'vue-router';
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import About from './pages/About.vue';
import Blogs from './pages/Blogs.vue';
import SoftwareDevelopmentPartner from './pages/blogs/SoftwareDevelopmentPartner.vue';
import Home from './pages/Home.vue';
import Services from './pages/Services.vue';
import MobileApp from './pages/services/MobileApp.vue';
import MobileUIUX from './pages/services/MobileUIUX.vue';
import IOS from './pages/services/IOS.vue';
import MobileAppGrowth from './pages/blogs/MobileAppGrowth.vue';
import CustomCRMSoftware from './pages/blogs/CustomCRMSoftware.vue';
import Career from './pages/Career.vue';
import Contact from './pages/Contact.vue';
import Solutions from './pages/Solutions.vue';
import CaseStudies from './pages/CaseStudies.vue';
import Maintenance from './pages/services/Maintenance.vue';
import LandingPage from './pages/services/LandingPage.vue';
import Backend from './pages/services/Backend.vue';
import Frontend from './pages/services/Frontend.vue';
import CMS from './pages/services/CMS.vue';
import WebApp from './pages/services/WebApp.vue';
import ResponsiveWeb from './pages/services/ResponsiveWeb.vue';
import CustomWebsite from './pages/services/CustomWebsite.vue';
import WebsiteDesign from './pages/services/WebsiteDesign.vue';
import Deployment from './pages/services/Deployment.vue';
import Scalability from './pages/services/Scalability.vue';
import Enterprise from './pages/services/Enterprise.vue';
import Database from './pages/services/Database.vue';
import CloudInfrastructure from './pages/services/CloudInfrastructure.vue';
import Wireframing from './pages/services/Wireframing.vue';
import InformationArchitecture from './pages/services/InformationArchitecture.vue';
import SystemUIUX from './pages/services/SystemUIUX.vue';
import SystemDesign from './pages/services/SystemDesign.vue';
import UIUX from './pages/services/UIUX.vue';
import LogoDesign from './pages/services/LogoDesign.vue';
import BrandStrategy from './pages/services/BrandStrategy.vue';
import BrandingDesign from './pages/services/BrandingDesign.vue';
import MobileSupport from './pages/services/MobileSupport.vue';
import Wearable from './pages/services/Wearable.vue';
import EnterpriseApp from './pages/services/EnterpriseApp.vue';
import EcommerceApp from './pages/services/EcommerceApp.vue';
import CrossPlatform from './pages/services/CrossPlatform.vue';
import Android from './pages/services/Android.vue';
import CaseStudy1 from './pages/case-studies/CaseStudy1.vue';
import CaseStudy2 from './pages/case-studies/CaseStudy2.vue';
import Solution1 from './pages/solutions/Solution1.vue';
import Solution2 from './pages/solutions/Solution2.vue';
import FlutterDeveloper from './pages/careers/FlutterDeveloper.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home | Auraveni Solutions',
      metaName: 'Home',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Welcome to Auraveni Solutions. We provide branding, design, development, and digital marketing services.',
      metaKeywords: 'branding, design, development, digital marketing, auraveni',
    },
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Services | Auraveni Solutions',
      metaName: 'Services',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Explore our services: Branding & Design, System Design, Website & Mobile App Development, eCommerce, CRM, Digital Marketing.',
      metaKeywords: 'branding, system design, website, mobile app, ecommerce, crm, digital marketing',
    },
    children: [
      {
        path: 'mobile-app',
        name: 'MobileApp',
        component: MobileApp,
        meta: {
          title: 'Mobile Application Development | Auraveni Solutions',
          metaName: 'Mobile Application Development',
          ogSiteName: 'Auraveni Solutions',
          ogImage: '/vite.svg',
          metaDescription: 'Mobile Application Development services including UI/UX, iOS, Android, cross-platform, ecommerce, enterprise, wearable, support.',
          metaKeywords: 'mobile app, uiux, ios, android, cross-platform, ecommerce, enterprise, wearable, support, auraveni',
        },
        children: [
          {
            path: 'ui-ux',
            name: 'MobileUIUX',
            component: MobileUIUX,
            meta: {
              title: 'Mobile App UI/UX Design | Auraveni Solutions',
              metaName: 'Mobile App UI/UX Design',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Mobile App UI/UX Design services.',
              metaKeywords: 'mobile app, uiux, auraveni',
            },
          },
          {
            path: 'ios',
            name: 'IOS',
            component: IOS,
            meta: {
              title: 'iOS App Development | Auraveni Solutions',
              metaName: 'iOS App Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'iOS App Development services.',
              metaKeywords: 'ios app, development, auraveni',
            },
          },
          {
            path: 'android',
            name: 'Android',
            component: Android,
            meta: {
              title: 'Android App Development | Auraveni Solutions',
              metaName: 'Android App Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Android App Development services.',
              metaKeywords: 'android app, development, auraveni',
            },
          },
          {
            path: 'cross-platform',
            name: 'CrossPlatform',
            component: CrossPlatform,
            meta: {
              title: 'Cross-Platform App Development | Auraveni Solutions',
              metaName: 'Cross-Platform App Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Cross-Platform App Development services.',
              metaKeywords: 'cross-platform app, development, auraveni',
            },
          },
          {
            path: 'ecommerce',
            name: 'EcommerceApp',
            component: EcommerceApp,
            meta: {
              title: 'eCommerce App Development | Auraveni Solutions',
              metaName: 'eCommerce App Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'eCommerce App Development services.',
              metaKeywords: 'ecommerce app, development, auraveni',
            },
          },
          {
            path: 'enterprise',
            name: 'EnterpriseApp',
            component: EnterpriseApp,
            meta: {
              title: 'Enterprise App Development | Auraveni Solutions',
              metaName: 'Enterprise App Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Enterprise App Development services.',
              metaKeywords: 'enterprise app, development, auraveni',
            },
          },
          {
            path: 'wearable',
            name: 'Wearable',
            component: Wearable,
            meta: {
              title: 'Wearable App Development | Auraveni Solutions',
              metaName: 'Wearable App Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Wearable App Development services.',
              metaKeywords: 'wearable app, development, auraveni',
            },
          },
          {
            path: 'support',
            name: 'MobileSupport',
            component: MobileSupport,
            meta: {
              title: 'Mobile App Support & Maintenance | Auraveni Solutions',
              metaName: 'Mobile App Support & Maintenance',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Mobile App Support & Maintenance services.',
              metaKeywords: 'mobile app, support, maintenance, auraveni',
            },
          },
        ],
      },
      {
        path: 'branding-design',
        name: 'BrandingDesign',
        component: BrandingDesign,
        meta: {
          title: 'Branding & Design | Auraveni Solutions',
          metaName: 'Branding & Design',
          ogSiteName: 'Auraveni Solutions',
          ogImage: '/vite.svg',
          metaDescription: 'Branding & Design services including brand strategy, logo design, and UI/UX design.',
          metaKeywords: 'branding, design, brand strategy, logo, uiux, auraveni',
        },
        children: [
          {
            path: 'brand-strategy',
            name: 'BrandStrategy',
            component: BrandStrategy,
            meta: {
              title: 'Brand Strategy & Positioning | Auraveni Solutions',
              metaName: 'Brand Strategy & Positioning',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Brand Strategy & Positioning services.',
              metaKeywords: 'brand strategy, positioning, branding, auraveni',
            },
          },
          {
            path: 'logo-design',
            name: 'LogoDesign',
            component: LogoDesign,
            meta: {
              title: 'Logo Design & Brand Identity Design | Auraveni Solutions',
              metaName: 'Logo Design & Brand Identity Design',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Logo Design & Brand Identity Design services.',
              metaKeywords: 'logo design, brand identity, branding, auraveni',
            },
          },
          {
            path: 'ui-ux',
            name: 'UIUX',
            component: UIUX,
            meta: {
              title: 'UI/UX Design | Auraveni Solutions',
              metaName: 'UI/UX Design',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'UI/UX Design services.',
              metaKeywords: 'uiux, design, branding, auraveni',
            },
          },
        ],
      },
      {
        path: 'system-design',
        name: 'SystemDesign',
        component: SystemDesign,
        meta: {
          title: 'System Design | Auraveni Solutions',
          metaName: 'System Design',
          ogSiteName: 'Auraveni Solutions',
          ogImage: '/vite.svg',
          metaDescription: 'System Design services including UI/UX, IA, Wireframing, Cloud, Database, Enterprise, Scalability, Deployment.',
          metaKeywords: 'system design, uiux, ia, wireframing, cloud, database, enterprise, scalability, deployment, auraveni',
        },
        children: [
          {
            path: 'ui-ux',
            name: 'SystemUIUX',
            component: SystemUIUX,
            meta: {
              title: 'UI/UX Design (System) | Auraveni Solutions',
              metaName: 'UI/UX Design (System)',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'UI/UX Design for System Design.',
              metaKeywords: 'system design, uiux, auraveni',
            },
          },
          {
            path: 'information-architecture',
            name: 'InformationArchitecture',
            component: InformationArchitecture,
            meta: {
              title: 'Information Architecture (IA) | Auraveni Solutions',
              metaName: 'Information Architecture (IA)',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Information Architecture (IA) for System Design.',
              metaKeywords: 'system design, information architecture, ia, auraveni',
            },
          },
          {
            path: 'wireframing',
            name: 'Wireframing',
            component: Wireframing,
            meta: {
              title: 'Wireframing & Prototyping | Auraveni Solutions',
              metaName: 'Wireframing & Prototyping',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Wireframing & Prototyping for System Design.',
              metaKeywords: 'system design, wireframing, prototyping, auraveni',
            },
          },
          {
            path: 'cloud-infrastructure',
            name: 'CloudInfrastructure',
            component: CloudInfrastructure,
            meta: {
              title: 'Cloud Infrastructure Design | Auraveni Solutions',
              metaName: 'Cloud Infrastructure Design',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Cloud Infrastructure Design for System Design.',
              metaKeywords: 'system design, cloud infrastructure, auraveni',
            },
          },
          {
            path: 'database',
            name: 'Database',
            component: Database,
            meta: {
              title: 'Database Design and Management | Auraveni Solutions',
              metaName: 'Database Design and Management',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Database Design and Management for System Design.',
              metaKeywords: 'system design, database, management, auraveni',
            },
          },
          {
            path: 'enterprise',
            name: 'Enterprise',
            component: Enterprise,
            meta: {
              title: 'Enterprise System Design | Auraveni Solutions',
              metaName: 'Enterprise System Design',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Enterprise System Design for System Design.',
              metaKeywords: 'system design, enterprise, auraveni',
            },
          },
          {
            path: 'scalability',
            name: 'Scalability',
            component: Scalability,
            meta: {
              title: 'Scalability Solutions | Auraveni Solutions',
              metaName: 'Scalability Solutions',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Scalability Solutions for System Design.',
              metaKeywords: 'system design, scalability, auraveni',
            },
          },
          {
            path: 'deployment',
            name: 'Deployment',
            component: Deployment,
            meta: {
              title: 'Deployment & Maintenance | Auraveni Solutions',
              metaName: 'Deployment & Maintenance',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Deployment & Maintenance for System Design.',
              metaKeywords: 'system design, deployment, maintenance, auraveni',
            },
          },
        ],
      },
      {
        path: 'website-design',
        name: 'WebsiteDesign',
        component: WebsiteDesign,
        meta: {
          title: 'Website Design and Development | Auraveni Solutions',
          metaName: 'Website Design and Development',
          ogSiteName: 'Auraveni Solutions',
          ogImage: '/vite.svg',
          metaDescription: 'Website Design and Development services including custom design, responsive, web app, CMS, frontend, backend, landing page, maintenance.',
          metaKeywords: 'website design, development, custom, responsive, web app, cms, frontend, backend, landing page, maintenance, auraveni',
        },
        children: [
          {
            path: 'custom',
            name: 'CustomWebsite',
            component: CustomWebsite,
            meta: {
              title: 'Custom Website Design | Auraveni Solutions',
              metaName: 'Custom Website Design',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Custom Website Design services.',
              metaKeywords: 'custom website, design, auraveni',
            },
          },
          {
            path: 'responsive',
            name: 'ResponsiveWeb',
            component: ResponsiveWeb,
            meta: {
              title: 'Responsive Web Design | Auraveni Solutions',
              metaName: 'Responsive Web Design',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Responsive Web Design services.',
              metaKeywords: 'responsive web, design, auraveni',
            },
          },
          {
            path: 'web-app',
            name: 'WebApp',
            component: WebApp,
            meta: {
              title: 'Web Application Development | Auraveni Solutions',
              metaName: 'Web Application Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Web Application Development services.',
              metaKeywords: 'web application, development, auraveni',
            },
          },
          {
            path: 'cms',
            name: 'CMS',
            component: CMS,
            meta: {
              title: 'Content Management System (CMS) Development | Auraveni Solutions',
              metaName: 'Content Management System (CMS) Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'CMS Development services.',
              metaKeywords: 'cms, content management, auraveni',
            },
          },
          {
            path: 'frontend',
            name: 'Frontend',
            component: Frontend,
            meta: {
              title: 'Frontend Development | Auraveni Solutions',
              metaName: 'Frontend Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Frontend Development services.',
              metaKeywords: 'frontend, development, auraveni',
            },
          },
          {
            path: 'backend',
            name: 'Backend',
            component: Backend,
            meta: {
              title: 'Backend Development | Auraveni Solutions',
              metaName: 'Backend Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Backend Development services.',
              metaKeywords: 'backend, development, auraveni',
            },
          },
          {
            path: 'landing-page',
            name: 'LandingPage',
            component: LandingPage,
            meta: {
              title: 'Landing Page Design & Development | Auraveni Solutions',
              metaName: 'Landing Page Design & Development',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Landing Page Design & Development services.',
              metaKeywords: 'landing page, design, development, auraveni',
            },
          },
          {
            path: 'maintenance',
            name: 'Maintenance',
            component: Maintenance,
            meta: {
              title: 'Website Maintenance and Support | Auraveni Solutions',
              metaName: 'Website Maintenance and Support',
              ogSiteName: 'Auraveni Solutions',
              ogImage: '/vite.svg',
              metaDescription: 'Website Maintenance and Support services.',
              metaKeywords: 'website maintenance, support, auraveni',
            },
          },
        ],
      }
    ]
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies,
    meta: {
      title: 'Case Studies | Auraveni Solutions',
      metaName: 'Case Studies',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'See our successful projects and case studies at Auraveni Solutions.',
      metaKeywords: 'case studies, projects, auraveni',
    },
  },
  {
    path: '/case-studies/case-studies-1',
    name: 'CaseStudies1',
    component: CaseStudy1,
    meta: {
      title: 'Case Studies | Auraveni Solutions',
      metaName: 'Case Studies',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'See our successful projects and case studies at Auraveni Solutions.',
      metaKeywords: 'case studies, projects, auraveni',
    },
  },
  {
    path: '/case-studies/case-studies-1',
    name: 'CaseStudies2',
    component: CaseStudy2,
    meta: {
      title: 'Case Studies | Auraveni Solutions',
      metaName: 'Case Studies',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'See our successful projects and case studies at Auraveni Solutions.',
      metaKeywords: 'case studies, projects, auraveni',
    },
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: Solutions,
    meta: {
      title: 'Solutions | Auraveni Solutions',
      metaName: 'Solutions',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Discover our tailored solutions for your business needs.',
      metaKeywords: 'solutions, business, auraveni',
    },
  },
  {
    path: '/solutions/solution-1',
    name: 'Solution1',
    component: Solution1,
    meta: {
      title: 'Solutions | Auraveni Solutions',
      metaName: 'Solutions',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Discover our tailored solutions for your business needs.',
      metaKeywords: 'solutions, business, auraveni',
    },
  },
  {
    path: '/solutions/solution-2',
    name: 'Solution2',
    component: Solution2,
    meta: {
      title: 'Solutions | Auraveni Solutions',
      metaName: 'Solutions',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Discover our tailored solutions for your business needs.',
      metaKeywords: 'solutions, business, auraveni',
    },
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta: {
      title: 'Blogs | Auraveni Solutions',
      ogSiteName: 'Blogs | Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Read the latest blogs and insights from Auraveni Solutions.',
      metaKeywords: 'blogs, insights, auraveni',
    },
  },
    {
    path: '/blogs/checklist-for-choosing-software-development-partner',
    name: 'Founder’s Checklist for Choosing a Software Development Partner',
    component: SoftwareDevelopmentPartner,
    meta: {
      title: 'Founder’s Checklist for Choosing a Software Development Partner',
      ogSiteName: 'Founder’s Checklist for Choosing a Software Development Partner | Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Looking for the right software development partner? Here’s a checklist to help you evaluate agencies and choose the best tech partner for long-term success.',
      metaKeywords: 'software development agency, choosing a software development partner, enterprise software company India, best software company for startups, tech partner checklist, custom software development company, software team evaluation, offshore software development partner',
    },
  },
    {
      path: '/blogs/mobile-app-growth-startups-small-businesses',
      name: 'Boost Business Growth with Mobile Apps | Small Business App Guide',
      component: MobileAppGrowth,
      meta: {
        title: 'Boost Business Growth with Mobile Apps | Small Business App Guide',
        ogSiteName: 'Boost Business Growth with Mobile Apps | Small Business App Guide | Auraveni Solutions',
        ogImage: '/vite.svg',
        metaDescription: 'Discover how mobile apps drive growth for startups & small businesses. Learn key features, benefits & why custom apps matter in today’s market.',
        metaKeywords: 'mobile app development for startups, mobile app for small business, business mobile app benefits, mobile app development company India, custom app for SME, app development for entrepreneurs, mobile app growth strategy',
      },
    },
    {
      path: '/blogs/custom-crm-software-for-business',
      name: 'Custom CRM Software for Businesses in 2025 | Complete CRM Guide',
      component: CustomCRMSoftware,
      meta: {
        title: 'Custom CRM Software for Businesses in 2025 | Complete CRM Guide',
        metaName: 'CustomCRMSoftware',
        ogSiteName: 'Custom CRM Software for Businesses in 2025 | Complete CRM Guide | Auraveni Solutions',
        ogImage: '/vite.svg',
        metaDescription: 'Discover why custom CRM software is essential for business growth in 2025. Learn benefits, use cases, and how Auraveni delivers scalable CRM systems.',
        metaKeywords: 'custom CRM software development, CRM solutions for business, CRM software company India, enterprise CRM system, CRM for startups, scalable CRM software, custom CRM India, best CRM for business',
      },
    },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us | Auraveni Solutions',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Learn more about Auraveni Solutions, our team, and our mission.',
      metaKeywords: 'about, team, mission, auraveni',
    },
  },
  {
    path: '/career',
    name: 'Career',
    component: Career,
    meta: {
      title: 'Career | Auraveni Solutions',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Join our team! Explore career opportunities at Auraveni Solutions.',
      metaKeywords: 'career, jobs, auraveni',
    },
  },
  {
    path: '/careers/flutter-developer',
    name: 'FlutterDeveloper',
    component: FlutterDeveloper,
    meta: {
      title: 'Career | Auraveni Solutions',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Join our team! Explore career opportunities at Auraveni Solutions.',
      metaKeywords: 'career, jobs, auraveni',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Us | Auraveni Solutions',
      ogSiteName: 'Auraveni Solutions',
      ogImage: '/vite.svg',
      metaDescription: 'Contact Auraveni Solutions for your business needs.',
      metaKeywords: 'contact, business, auraveni',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.beforeEach((to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', (to.meta.metaDescription as string) || '');
    const keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) keywords.setAttribute('content', (to.meta.metaKeywords as string) || '');
    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteName) ogSiteName.setAttribute('content', (to.meta.ogSiteName as string) || '');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', (to.meta.ogImage as string) || '');
  }
  next();
});

export default router;
