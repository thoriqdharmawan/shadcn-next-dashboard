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
    icon: 'calendar-outline',
    path: '/statistics',
    title: 'Statistics',
    description: 'Choose between layouts to experience difference look and feel for your projects',
    child: [
      {
        label: 'Statistics menu 1',
        path: '/statistics-1'
      },
      {
        label: 'Statistics menu 2',
        path: '/statistics-2'
      },
    ]
  },
]