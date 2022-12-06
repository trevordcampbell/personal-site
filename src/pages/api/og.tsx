import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function () {
  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full bg-white flex items-center justify-center"
      >
        <div tw="absolute flex top-0 left-0 bg-slate-100 w-full border-b-4 border-slate-300 shadow-xl shadow-slate-300">
          <div
            tw="flex w-full my-6 mx-6 items-center text-slate-900"
          >
            <span>
              <span tw="text-4xl">🎬</span>
              <span tw="ml-6 text-3xl">
                trevordcampbell.com
              </span>
            </span>
          </div>
          <div tw="absolute text-slate-900 bg-slate-400/30 rounded-lg py-2 px-2 my-4 mx-4 right-0 text-4xl">
            📚 ARTICLES
          </div>
        </div>
        <div
          tw="flex flex-wrap justify-center px-12 py-[30] mt-24 mx-12 text-6xl w-auto max-w-4xl text-center bg-slate-900 text-slate-100 rounded-xl"
        >
          How I made Tea from Cockroaches in Antarctica
        </div>
      </div>

    ),
    {
      width: 1200,
      height: 600,

    },
  );
}

