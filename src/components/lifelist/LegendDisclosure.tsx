import { Disclosure, Transition } from '@headlessui/react'
import clsx from 'clsx';

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { DifficultyIcon } from './DifficultyIcon';
import { StatusIcon } from "./StatusIcon";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export function LegendDisclosure({ className }: { className?: string }) {
  return (
    <div 
      className={clsx(className, 'group bg-zinc-50 rounded-2xl border border-zinc-300 p-6 dark:bg-zinc-800/90 dark:border-zinc-700/40 hover:bg-teal-50 hover:border-teal-400 dark:hover:bg-teal-400/10 hover:dark:border-teal-400')}
    >
      <div className="mx-auto max-w-7xl">
        <dl>
            <Disclosure as="div">
            {({ open }) => (
              <>
                <dt className="text-lg" >
                  <Disclosure.Button key="Legend" className="flex w-full items-start justify-between text-left text-gray-400">
                    <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-300"><span className="no-underline">🔑 </span><span className="hover:underline underline-offset-4">Legend of Statuses:</span><span className="hidden sm:inline opacity-70 sm:ml-4 text-sm font-normal">(click to expand / hide)</span></h3>
                    <span className="ml-6 flex h-7 items-center">
                      <span
                        className={classNames(open ? 'hidden' : 'inline', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      >
                        👀
                      </span>
                      <span
                        className={classNames(open ? 'inline' : 'hidden', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      >
                        🙈
                      </span>
                      <ChevronDownIcon
                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel as="dd" className="mt-6 pr-12" static>
                    <div className="ml-8 space-y-8">
                      <div className="space-y-4">
                        <p className="-ml-2 inline-flex items-center rounded bg-zinc-200 dark:bg-zinc-100/10 dark:text-zinc-100 group-hover:bg-teal-200 dark:group-hover:bg-teal-200/20 px-2 py-0.5 text-sm font-medium text-gray-800">
                          Completion Statuses
                        </p>
                        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4 text-base">
                          <li className="flex items-center">
                            <StatusIcon status="completed" />
                            <p className="ml-4 font-medium text-teal-600 dark:text-teal-400">Completed</p>
                          </li>
                          <li className="flex items-center">
                            <StatusIcon status="in progress" />
                            <p className="ml-4 font-medium text-sky-600 dark:text-sky-400">In Progress</p>
                          </li>
                          <li className="flex items-center">
                            <StatusIcon status="researching" />
                            <p className="ml-4 font-medium text-purple-700 dark:text-purple-400">Researching</p>
                          </li>
                          <li className="flex items-center">
                            <StatusIcon status="paused" />
                            <p className="ml-4 font-medium text-amber-600 dark:text-amber-500">Paused</p>
                          </li>
                          <li className="flex items-center">
                            <StatusIcon status="nuked" />
                            <p className="ml-4 font-medium leading-tight text-red-500 dark:text-red-400 line-through">Nuked / no longer interested</p>
                          </li>
                          <li className="flex items-center">
                            <StatusIcon status="untouched" />
                            <p className="ml-4 font-medium text-zinc-600 dark:text-zinc-300">Untouched</p>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="-ml-2 inline-flex items-center rounded bg-zinc-200 dark:bg-zinc-100/10 dark:text-zinc-100 group-hover:bg-teal-200 dark:group-hover:bg-teal-200/20 px-2 py-0.5 text-sm font-medium text-gray-800">
                          Difficulty Levels
                        </p>
                        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-1 sm:gap-2 text-base">
                          <li className="flex items-center">
                            <DifficultyIcon difficulty="easy" />
                            <p className="ml-4 font-medium text-teal-500 dark:text-teal-400/75">Easy</p>
                          </li>
                          <li className="flex items-center">
                            <DifficultyIcon difficulty="medium" />
                            <p className="ml-4 font-medium text-yellow-500/75 dark:text-yellow-500/75">Medium</p>
                          </li>
                          <li className="flex items-center">
                            <DifficultyIcon difficulty="hard" />
                            <p className="ml-4 font-medium text-orange-500/75">Hard</p>
                          </li>
                          <li className="flex items-center">
                            <DifficultyIcon difficulty="legendary" />
                            <p className="ml-4 font-medium text-red-500/75">Legendary</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
            </Disclosure>
        </dl>
      </div>
    </div>
  )
}
