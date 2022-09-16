import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  const games = [
    "League of Legends",
    "Dota 2",
    "Counter Strike",
    "World of Warcraft",
    "Apex Legends",
    "Fortnite",
  ];

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

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game, index) => (
          <a key={index + 1} href="#" className="relative rounded-lg overflow-hidden">
            <Image
              src={`/assets/image-${index + 1}.png`}
              alt={`Capa do jogo ${game}`}
              width={180}
              height={240}
            />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-1.5 left-0 right-0 rounded-md">
              <strong className="font-bold text-white block">{game}</strong>
              <span className="text-zinc-300 text-sm block">{index + 2} anúncios</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}

export default Home
