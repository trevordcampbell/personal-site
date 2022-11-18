import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const product = {
//   name: 'Zip Tote Basket',
//   price: '$220',
//   rating: 3.9,
//   href: '#',
//   description:
//     'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
//   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
//   imageAlt: 'Back angled view with bag open and handles to the side.',
//   colors: [
//     { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
//     { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
//     { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
//   ],
// }

export default function ImageModal() {
  const [open, setOpen] = useState(false)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-900 bg-opacity-95 sm:bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full min-w-screen items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg text-left shadow-xl shadow-black/40 transition-all sm:my-8 sm:w-full sm:max-w-fit sm:mx-8 max-h-[90vh]">
                <div className="absolute top-0 right-0 block pt-4 pr-4">
                  <button
                    type="button"
                    className="rounded-md bg-zinc-400/70 text-white hover:text-zinc-900 hover:bg-zinc-400/90 focus:outline-none "
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
                  <img src="https://trevordcampbell.imgix.net/singapore-2022/Still+8.png?auto=format" alt="Image Alt Text" className="max-h-[90vh] object-cover object-center" />
                </div>

                <div className="absolute bottom-0 pb-4 pt-8 text-left sm:mt-0 px-8 bg-gradient-to-b from-transparent to-black/90 via-black/60 w-full">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-zinc-100">
                    Image Title
                  </Dialog.Title>
                  <div className="flex justify-between">
                    <p className="text-sm text-zinc-400">
                      Image Description
                    </p>
                    <a href="" className='flex text-zinc-400 hover:text-zinc-100 hover:border-b-2 hover:border-zinc-100 hover:-mt-1'>
                      <ShoppingBagIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                      <p className="text-sm">Buy a Print of this Photo</p>
                    </a>
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
