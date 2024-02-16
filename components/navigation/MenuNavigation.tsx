"use client"

import { useNavigation } from '@/hooks/useNavigation'
import React from 'react'

const navigations = [
  {
    icon: 'a',
    path: '/dashboard',
    title: 'Dashboard',
    description: 'This is dashboard menu',
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
    icon: 'b',
    path: '/callendar',
    title: 'Callendar',
    description: 'This is calendar menu',
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
    icon: 'c',
    path: '/statistics',
    title: 'Statistics',
    description: 'This is statistics menu',
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

export default function MenuNavigation() {
  const { current, path, setPath } = useNavigation(navigations)

  return (
    <div className='w-1/5  bg-gray-900 text-white p-4'>
      <div className='flex gap-4 mb-4'>
        <div className='w-12 h-12'>Icon</div>
        <div className='flex align-middle'>
          <h1>azia</h1>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col gap-2'>
          {navigations.map((nav) => (
            <div key={nav.icon}>
              <div onClick={() => setPath(nav.path)} className='w-12 h-12 flex justify-center cursor-pointer bg-gray-700'>
                <div>{nav.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {path === current?.path && (
          <div className="hidden lg:block">
            <nav className="mb-4">
              <ul>
                {current?.child?.map((navChild: any) => (
                  <li key={navChild.path} className="py-2">{navChild.label}</li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
