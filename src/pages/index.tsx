import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <main className="max-w-[1344px] mx-auto flex flex-col items-center mt-20">
      <Image
        src="/assets/nlw-esports-logo.svg"
        width={286}
        height={160}
        alt="NLW eSports Logo"
      />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span> {" "}
        está aqui.
      </h1>
    </main>
  )
}

export default Home
