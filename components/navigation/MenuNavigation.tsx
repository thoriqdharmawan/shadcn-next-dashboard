"use client"
import { Separator } from "@/components/ui/separator"

import { useNavigation } from '@/hooks/useNavigation'
import { navigations } from '@/lib/constants'
import { ChildNavigation } from '@/types/global'

import Icon from '../icon'
import { Fragment } from "react"

export default function MenuNavigation() {
  const { current, setPath } = useNavigation(navigations)

  return (
    <div className='w-3/12 bg-gray-200 p-4 shadow-inner'>
      <div className='flex gap-4 mb-4'>
        <div className='w-8 h-w-8 flex items-center justify-center'>
          <Icon name="chart-bar-outline" className='text-4xl' />
        </div>

        <div className='hidden lg:flex items-center'>
          <h1 className='text-3xl font-bold text-primary'>azia</h1>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col gap-2'>
          {navigations.map((nav) => (
            <div key={nav.title}>
              <div
                onClick={() => setPath(nav.path)}
                className='w-8 h-w-8 flex justify-center items-center cursor-pointer'
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

          <nav className="mb-4 pl-4 border-l-2 border-gray-400">
            <ul>
              {current?.child?.map((navChild: ChildNavigation, idx) => (
                <Fragment key={navChild.path}>
                  <li className="cursor-pointer py-3 text-sm font-medium select-none">
                    {navChild.label}
                  </li>
                  <Separator
                    hidden={current?.child.length === idx + 1}
                    className="bg-gray-400"
                  />
                </Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
