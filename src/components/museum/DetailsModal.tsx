import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

// const product = {
//   title: "Women's Basic Tee",
//   geography: '$32',
//   rating: 3.9,
//   reviewCount: 512,
//   href: '#',
//   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
//   imageAlt: "Back of women's Basic Tee in black.",
//   colors: [
//     { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
//     { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: true },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: 'XXL', inStock: false },
//   ],
//   otherImages: [
//     { href: 'https://trevordcampbell.imgix.net/museum-images/fossils/amber/Amber-Top-Down.jpg' },
//     { href: 'https://trevordcampbell.imgix.net/museum-images/fossils/stalk-eyed-trilobite/Trilobite-2.jpg' },
//     { href: 'https://trevordcampbell.imgix.net/museum-images/fossils/coral/Coral-Slab-Front.jpg' },
//     { href: 'https://trevordcampbell.imgix.net/museum-images/fossils/ginkgo-leaf/Ginkgo-Leaf-Front.jpg' },
//   ],
// }

type MuseumItem = {
  id: number
  createdAt: Date
  title: string
  description: string
  category: string
  year: string
  timePeriod: string
  geography: string
  otherDetails: Date
  featureImage: string
  images: string
  junk1: string
  junk2: string
  otherImages: [
    {href: string}
  ]
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function DetailsModalTesting({ modalData, open, setOpen }: { modalData: MuseumItem, open: boolean, setOpen: any}) {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  const [selectedImage, setSelectedImage] = useState(modalData.otherImages[0])

  const [isLoading, setLoading] = useState(true)

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
          <div className="fixed inset-0 hidden bg-zinc-800 bg-opacity-80 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden md:inline-block md:h-screen md:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 sm:rounded-xl">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                    
                    <div className="sm:col-span-4 lg:col-span-5">
                      <h2 className="block sm:hidden text-2xl font-bold text-gray-900 mb-4 pr-6">{modalData.title}</h2>
                      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                        <img src={selectedImage.href} alt='' className="object-cover object-center" />
                      </div>
                      {/* <div className="w-1/3 aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                        <img src={modalData.featureImage} alt={modalData.description} className="object-cover object-center" />
                      </div> */}
                      <div className="mt-2">
                        <RadioGroup value={selectedImage} onChange={setSelectedImage} className="mt-6">
                          <RadioGroup.Label className="sr-only"> Choose an Image </RadioGroup.Label>
                          <div className="grid grid-cols-3 gap-4">
                            {modalData.otherImages.map((image) => (
                              <RadioGroup.Option
                                key={image.href}
                                value={image}
                                className={({ active, checked }) =>
                                  classNames('group cursor-pointer focus:outline-none',
                                    active ? 'ring-4 ring-offset-4 ring-teal-600' : '',
                                    checked
                                      ? 'text-white ring-4 ring-offset-4 ring-teal-600 hover:bg-teal-600'
                                      : 'text-zinc-900 hover:bg-teal-600',
                                    'rounded-md flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                  )
                                }
                              >
                                <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                                  <Image
                                    alt=''
                                    src={image.href}
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
                                {/* <RadioGroup.Label as="span">{image.href}</RadioGroup.Label> */}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="hidden sm:block text-2xl font-bold text-zinc-900 sm:pr-12">{modalData.title}</h2>

                      <section aria-labelledby="information-heading" className="mt-1">
                        <h3 id="information-heading" className="sr-only">
                          Details
                        </h3>
                        <div className="bg-zinc-100 p-4 mt-4 rounded-lg">

                          <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-zinc-500">Year</dt>
                              <dd className="text-sm text-zinc-900">{modalData.year}</dd>
                            </div>
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-zinc-500">Time Period</dt>
                              <dd className="text-sm text-zinc-900">{modalData.timePeriod}</dd>
                            </div>
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-zinc-500">Location of Origin</dt>
                              <dd className="text-sm text-zinc-900">{modalData.geography}</dd>
                            </div>
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-zinc-500">Size</dt>
                              <dd className="text-sm text-zinc-900">2.54" Long</dd>
                            </div>
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-zinc-500">Material / Medium</dt>
                              <dd className="text-sm text-zinc-900">Fossilized on Quartz Substrate</dd>
                            </div>
                          </dl>

                        </div>

                        <div className="relative mt-6">
                          <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-zinc-300"></div>
                          </div>
                          <div className="relative flex justify-start">
                            <span className="pr-3 bg-white font-medium text-zinc-900"> The Story </span>
                          </div>
                        </div>

                        <div>
                          <div className="relative">
                            <div className="mt-2 pb-20 sm:max-h-60 sm:overflow-scroll">
                              <h4 className="sr-only">Description</h4>
                              <p className="text-sm text-zinc-700">The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use</p>
                            </div>
                            <div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-white"></div>
                          </div>

                          {/* <div className="mt-4 text-sm text-zinc-600 italic font-semibold">Scroll to read more...</div> */}
                        </div>

                        {/* Reviews */}
                        {/* <div className="mt-4">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <p className="text-sm text-gray-700">
                              {product.rating}
                              <span className="sr-only"> out of 5 stars</span>
                            </p>
                            <div className="ml-1 flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <div className="ml-4 hidden lg:flex lg:items-center">
                              <span className="text-gray-300" aria-hidden="true">
                                &middot;
                              </span>
                              <a href="#" className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                See all {product.reviewCount} reviews
                              </a>
                            </div>
                          </div>
                        </div> */}
                      </section>

                      <section aria-labelledby="options-heading" className="mt-8">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          {/* Color picker
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Color</h4>

                            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                              <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                              <div className="flex items-center space-x-3">
                                {product.colors.map((color) => (
                                  <RadioGroup.Option
                                    key={color.name}
                                    value={color}
                                    className={({ active, checked }) =>
                                      classNames(
                                        color.selectedColor,
                                        active && checked ? 'ring ring-offset-1' : '',
                                        !active && checked ? 'ring-2' : '',
                                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                      )
                                    }
                                  >
                                    <RadioGroup.Label as="span" className="sr-only">
                                      {' '}
                                      {color.name}{' '}
                                    </RadioGroup.Label>
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        color.bgColor,
                                        'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                      )}
                                    />
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div> */}

                        </form>
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

// function ImageMagnifier({
//   src,
//   width,
//   height,
//   magnifierHeight = 100,
//   magnifieWidth = 100,
//   zoomLevel = 1.5
// }: {
//   src: string;
//   width?: string;
//   height?: string;
//   magnifierHeight?: number;
//   magnifieWidth?: number;
//   zoomLevel?: number;
// }) {
//   const [[x, y], setXY] = useState([0, 0]);
//   const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
//   const [showMagnifier, setShowMagnifier] = useState(false);
//   return (
//     <div
//       style={{
//         position: "relative",
//         height: height,
//         width: width
//       }}
//     >
//       <img
//         src={src}
//         style={{ height: height, width: width }}
//         onMouseEnter={(e) => {
//           // update image size and turn-on magnifier
//           const elem = e.currentTarget;
//           const { width, height } = elem.getBoundingClientRect();
//           setSize([width, height]);
//           setShowMagnifier(true);
//         }}
//         onMouseMove={(e) => {
//           // update cursor position
//           const elem = e.currentTarget;
//           const { top, left } = elem.getBoundingClientRect();

//           // calculate cursor position on the image
//           const x = e.pageX - left - window.pageXOffset;
//           const y = e.pageY - top - window.pageYOffset;
//           setXY([x, y]);
//         }}
//         onMouseLeave={() => {
//           // close magnifier
//           setShowMagnifier(false);
//         }}
//         alt={"img"}
//       />

//       <div
//         style={{
//           display: showMagnifier ? "" : "none",
//           position: "absolute",

//           // prevent magnifier blocks the mousemove event of img
//           pointerEvents: "none",
//           // set size of magnifier
//           height: `${magnifierHeight}px`,
//           width: `${magnifieWidth}px`,
//           // move element center to cursor pos
//           top: `${y - magnifierHeight / 2}px`,
//           left: `${x - magnifieWidth / 2}px`,
//           opacity: "1", // reduce opacity so you can verify position
//           border: "1px solid lightgray",
//           backgroundColor: "white",
//           backgroundImage: `url('${src}')`,
//           backgroundRepeat: "no-repeat",

//           //calculate zoomed image size
//           backgroundSize: `${imgWidth * zoomLevel}px ${
//             imgHeight * zoomLevel
//           }px`,

//           //calculate position of zoomed image.
//           backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
//           backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
//         }}
//       ></div>
//     </div>
//   );
// }
