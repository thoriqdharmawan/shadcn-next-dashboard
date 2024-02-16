import { Navigation } from "@/types/global";

export const navigations: Navigation[] = [
  {
    icon: 'device-laptop',
    path: '/dashboard',
    title: 'Dashboard',
    description: 'Choose between layouts to experience difference look and feel for your projects',
    child: [
      {
        label: 'Web Analytics',
        path: '/web-analytics'
      },
      {
        label: 'Sales Monitoring',
        path: '/sales-monitoring'
      },
      {
        label: 'Ad Campaign',
        path: '/ad-campaign'
      },
      {
        label: 'Event Management',
        path: '/event-management'
      },
      {
        label: 'Helpdesk Management',
        path: '/helpdesk-monitoring'
      },
      {
        label: 'Finance Monitoring',
        path: '/finance-monitoring'
      },
      {
        label: 'Criptocurrency',
        path: '/criptocurrency'
      },
      {
        label: 'Executive / SaaS',
        path: '/saas'
      },
      {
        label: 'Campign Monitoring',
        path: '/campign-monitoring'
      },
      {
        label: 'Product management',
        path: '/product'
      },
    ]
  },
  {
    icon: 'calendar-outline',
    path: '/callendar',
    title: 'Callendar',
    description: 'Choose between layouts to experience difference look and feel for your projects',
    child: [
      {
        label: 'Child menu 1',
        path: '/child-1'
      },
      {
        label: 'Child menu 2',
        path: '/child-2'
      },
    ]
  },
  {
    icon: 'book',
    path: '/book',
    title: 'Book',
    description: 'Choose between layouts to experience difference look and feel for your projects',
    child: [
      {
        label: 'book menu 1',
        path: '/book-1'
      },
      {
        label: 'book menu 2',
        path: '/book-2'
      },
    ]
  },
]