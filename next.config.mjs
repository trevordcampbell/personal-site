import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['trevordcampbell.imgix.net', 'cdn.rareblocks.xyz', 'tailwindui.com'],
//   },
//   experimental: {
//     scrollRestoration: true,
//   },
//   pageExtensions: ['tsx', 'jsx', 'mdx'],
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'jsx', 'mdx'],
  images: {
    domains: ['trevordcampbell.imgix.net', 'cdn.rareblocks.xyz', 'tailwindui.com'],
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)