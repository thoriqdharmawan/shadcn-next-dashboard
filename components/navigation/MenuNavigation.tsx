"use client"

import { useNavigation } from '@/hooks/useNavigation'
import { navigations } from '@/lib/constants'
import { ChildNavigation } from '@/types/global'

import Icon from '../icon'

export default function MenuNavigation() {
  const { current, setPath } = useNavigation(navigations)

  return (
    <div className='w-1/5  bg-gray-300 p-4'>
      <div className='flex gap-4 mb-4'>
        <div className='w-12 h-12 flex items-center justify-center'>
          <Icon name="chart-bar-outline" className='text-4xl' />
        </div>

        <div className='flex items-center'>
          <h1 className='text-3xl font-bold text-primary'>azia</h1>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col gap-2'>
          {navigations.map((nav) => (
            <div key={nav.title}>
              <div
                onClick={() => setPath(nav.path)}
                className='w-12 h-12 flex justify-center items-center cursor-pointer'
              >
                <Icon
                  name={nav.icon}
                  className={`text-3xl ${current?.path === nav.path ? 'text-primary' : ''}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className='mb-4'>
            <h2 className='text-xl font-bold mb-1'>{current?.title}</h2>
            <p className='text-sm font-light'>{current?.description}</p>
          </div>

          <nav className="mb-4 border-l-2 border-gray-400 pl-4">
            <ul>
              {current?.child?.map((navChild: ChildNavigation) => (
                <li key={navChild.path} className="py-2 text-sm font-medium">{navChild.label}</li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
