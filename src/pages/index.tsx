import { Inter } from "next/font/google";
import { LinkedinLogo, InstagramLogo, GithubLogo } from 'phosphor-react'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<header className="p-[1.5em] ">
				<div className="w-full">
					<div className = "textGradient">
						<h1 className="font-bold text-5xl mb-[0.2em]">BINARY CONVERTOR</h1>
					</div>

					<div>
						<p className="text-xl flex items-center gap-[0.5em] text-white opacity-40">
							<span className = "block w-[15%] border rounded-lg"/>
							More binary, less convertor
						</p>
					</div>
				</div>

				{/* BINARY EFFECT */}
			</header>

			<main className={inter.className}>
				<section className="flex justify-between wrap flex-col gap-[1.5em] px-[1.5em]">
					<div>
						<h2 className="font-bold text-3xl mb-[.2em] text-white">
							Bases Decimais
						</h2>
						<p className="text-[#E4E3E3] opacity-90">
							Os números podem ser representados de diversas formas, uma delas é
							por meio de <b>grupos de 10</b>, a que utilizamos.
						</p>
					</div>

					<div className="flex align-center flex-col gap-[1em] text-center">
						<div className = "numberGradient">
							<h1 className="text-6xl font-bold">420</h1>
						</div>
						<p className="text-xl font-medium">4 x 10² + 2 x 10¹ + 0 x 100</p>
					</div>
				</section>

				<section className="bg-white flex flex-col align-center justify-between gap-[1em] text-center text-purple p-[1.5em] my-[2em]">
					<div className="text-3xl font-extrabold">
						<p>0 1 2 3 4 5 6 7 8 9</p>
					</div>

					<div className="text-2xl font-semibold">
						<p>Estes são os números que dispomos na base 10</p>
					</div>
				</section>

				<section className="flex justify-between wrap flex-col gap-[1.5em] px-[1.5em]">
					<div>
						<h2 className="font-bold text-3xl mb-[.2em] text-white">
							Bases Binárias
						</h2>
						<p className="text-[#E4E3E3] opacity-90">
							Diferente das <b>bases decimais</b>, aqui apenas dispomos de <b>agrupamentos
							de 2</b>, ou seja, é como se não existissem números que não sejam 0 ou
							1.
						</p>
					</div>

					<div className="flex align-center flex-col gap-[1em] text-center">
						<div className = 'numberGradient'>
							<h1 className="text-6xl font-bold">420</h1>
						</div>
						<p className="text-xl font-medium">4 x 10² + 2 x 10¹ + 0 x 100</p>
					</div>
				</section>

				<div className = 'w-full flex align-center justify-center'>
					<button className="border-4 p-[.3em] rounded-xl text-4xl font-bold uppercase my-[1em]">Convert</button>
				</div>
			</main>

			<footer className = 'bg-gradient-to-b from-[#312E2E] to-purple flex flex-col align-center justify-center text-center p-[1.5em] gap-[1.5em]'>
				<div>
					<h3 className = 'text-2xl font-semibold text-white mb-[.3em]'>About this website</h3>
					<p className = 'text-medium font-light text-white opacity-80'>
						Made to train my programming logic and improve my understanding
						about numeric bases.
					</p>
				</div>

				<div className = 'flex gap-[1em] justify-center align-center'>
					<InstagramLogo size = {40} color="white" opacity={.8}/>
					<LinkedinLogo size={40} color="white" opacity={.8}/>
					<GithubLogo size = {40} color="white" opacity={.8}/>
				</div>
			</footer>ce
		</>
	);
}
