import { Fragment, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { MuseumItem } from '@/pages/museum'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

function ItemDetailsBrick({ modalData }: { modalData: MuseumItem }) {

  function existingCheck(input: any) {

    if (input != null) return (
      true
    )

    if(input === null) return (
      false
    )
  }

  if (modalData.category === "fossil") return (
    <div className="bg-zinc-100 dark:bg-zinc-900 p-4 mt-4 rounded-lg">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">
        { existingCheck(modalData.details.species) === true &&
          (
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-zinc-500">Species</dt>
              <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.species}</dd>
            </div>
          )
        }
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Age</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.age}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Time Period</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.timePeriod}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Location of Origin</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.locationOfOrigin}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">How It Was Acquired</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.acquisitionMethod}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Size</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.size}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Material</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.material}</dd>
        </div>
      </dl>
    </div>
  )

  if (modalData.category === "artifact") return (
    <div className="bg-zinc-100 dark:bg-zinc-900 p-4 mt-4 rounded-lg">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Age</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.age}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Time Period</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.timePeriod}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Location of Origin</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.locationOfOrigin}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">How It Was Acquired</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.acquisitionMethod}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Size</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.size}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Material</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.material}</dd>
        </div>
      </dl>
    </div>
  )

  if (modalData.category === "cool-rock") return (
    <div className="bg-zinc-100 dark:bg-zinc-900 p-4 mt-4 rounded-lg">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Age</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.age}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Time Period</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.timePeriod}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Location of Origin</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.locationOfOrigin}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">How It Was Acquired</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.acquisitionMethod}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Size</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.size}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Material</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.material}</dd>
        </div>
      </dl>
    </div>
  )

  if (modalData.category === "artwork") return (
    <div className="bg-zinc-100 dark:bg-zinc-900 p-4 mt-4 rounded-lg">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Artist</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.artist}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Year Work Was Created</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.year}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Location of Origin</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.locationOfOrigin}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">How It Was Acquired</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.acquisitionMethod}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Size</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.size}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Medium</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.medium}</dd>
        </div>
      </dl>
    </div>
  )

  if (modalData.category === "project") return (
    <div className="bg-zinc-100 dark:bg-zinc-900 p-4 mt-4 rounded-lg">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Project Operating Period</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.year}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Status</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.status}</dd>
        </div>
      </dl>
    </div>
  )

  if (modalData.category === "personal-life") return (
    <div className="bg-zinc-100 dark:bg-zinc-900 p-4 mt-4 rounded-lg">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Year</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.year}</dd>
        </div>
      </dl>
    </div>
  )
  
  if (modalData.category === "person") return (
    <div className="bg-zinc-100 dark:bg-zinc-900 p-4 mt-4 rounded-lg">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-zinc-500">Relation</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-300">{modalData.details.relation}</dd>
        </div>
      </dl>
    </div>
  )
  
  else return (
    <>
    </>
  )
}

export default function DetailsModalTesting2({ modalData, open, closeModal }: { modalData: MuseumItem, open: boolean, closeModal: any}) {

  const [selectedImage, setSelectedImage] = useState(modalData.images[0])

  const [isLoading, setLoading] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-800"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-800"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-zinc-800 bg-opacity-80 backdrop-blur transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden md:inline-block md:h-screen md:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-800"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-800"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white dark:bg-zinc-950 px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 sm:rounded-xl">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={closeModal}
                    >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                    
                    <div className="sm:col-span-4 lg:col-span-5">
                      <h2 className="block sm:hidden text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 pr-6">{modalData.title}</h2>
                      <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                        <Image
                          alt=''
                          src={selectedImage}
                          // width="0"
                          // height="0"
                          // sizes="100vw"
                          // layout='fill'
                          // objectFit='contain'
                          // layout="fill"
                          // objectFit="cover"
                          width="0"
                          height="0"
                          sizes="100vw"
                          loading='lazy'
                          className={classNames(
                            'object-contain w-full h-full',
                            isLoading
                              ? 'blur-2xl grayscale'
                              : 'blur-0 grayscale-0'
                          )}
                          onLoadingComplete={() => setLoading(false)}
                        />
                      </div>
                      <div className="mt-2">
                        <RadioGroup value={selectedImage} onChange={setSelectedImage} className="mt-6">
                          <RadioGroup.Label className="sr-only"> Choose an Image </RadioGroup.Label>
                          <div className="grid grid-cols-3 gap-4">
                            {modalData.images.map((image) => (
                              <RadioGroup.Option
                                key={image}
                                value={image}
                                className={({ active, checked }) =>
                                  classNames('group cursor-pointer focus:outline-none',
                                    active ? 'ring-4 ring-offset-4 dark:ring-offset-zinc-950 ring-teal-600' : '',
                                    checked
                                      ? 'text-white dark:text-zinc-800 ring-4 ring-offset-4 dark:ring-offset-zinc-950 ring-teal-600 hover:bg-teal-600'
                                      : 'text-zinc-900 hover:bg-teal-600',
                                    'rounded-md flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                  )
                                }
                              >
                                <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                                  <Image
                                    alt=''
                                    src={image}
                                    // width="0"
                                    // height="0"
                                    // sizes="100vw"
                                    // layout='fill'
                                    // objectFit='contain'
                                    // layout="fill"
                                    // objectFit="cover"
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    loading='lazy'
                                    className={classNames(
                                      'object-contain w-full h-full group-hover:opacity-70',
                                      isLoading
                                        ? 'blur-2xl grayscale'
                                        : 'blur-0 grayscale-0'
                                    )}
                                    onLoadingComplete={() => setLoading(false)}
                                  />
                                </div>
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="hidden sm:block text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:pr-12">{modalData.title}</h2>

                      <section aria-labelledby="information-heading" className="mt-1">
                        <h3 id="information-heading" className="sr-only">
                          Details
                        </h3>

                        <ItemDetailsBrick modalData={modalData}/>

                        <div className="relative mt-6">
                          <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-zinc-300 dark:border-zinc-700"></div>
                          </div>
                          <div className="relative flex justify-start">
                            <span className="pr-3 bg-white dark:bg-zinc-950 font-medium text-zinc-900 dark:text-zinc-100"> The Story </span>
                          </div>
                        </div>

                        <div>
                          <div className="relative">
                            <div className="mt-2 pb-20 sm:max-h-60 sm:overflow-scroll">
                              <h4 className="sr-only">Description</h4>
                              <p className="text-sm text-zinc-700 dark:text-zinc-400">{modalData.description}</p>
                            </div>
                            <div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-white dark:from-zinc-950"></div>
                          </div>

                          {/* <div className="mt-4 text-sm text-zinc-600 italic font-semibold">Scroll to read more...</div> */}
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
