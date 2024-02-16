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
  {
    icon: 'folder-add',
    path: '/folder',
    title: 'Folder',
    description: 'Choose between layouts to experience difference look and feel for your projects',
    child: [
      {
        label: 'Folder menu 1',
        path: '/folder-1'
      },
      {
        label: 'Folder menu 2',
        path: '/folder-2'
      },
    ]
  },
  {
    icon: 'chart-line-outline',
    path: '/chart',
    title: 'Chart',
    description: 'Choose between layouts to experience difference look and feel for your projects',
    child: [
      {
        label: 'Chart menu 1',
        path: '/chart-1'
      },
      {
        label: 'Chart menu 2',
        path: '/chart-2'
      },
    ]
  },
  {
    icon: 'map',
    path: '/map',
    title: 'Map',
    description: 'Choose between layouts to experience difference look and feel for your projects',
    child: [
      {
        label: 'Map menu 1',
        path: '/map-1'
      },
      {
        label: 'Map menu 2',
        path: '/map-2'
      },
    ]
  },
  {
    icon: 'archive',
    path: '/archive',
    title: 'Archive',
    description: 'Choose between layouts to experience difference look and feel for your projects',
    child: [
      {
        label: 'Archive menu 1',
        path: '/archive-1'
      },
      {
        label: 'Archive menu 2',
        path: '/archive-2'
      },
    ]
  },
]