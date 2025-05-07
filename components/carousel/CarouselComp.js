"use client"
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const CarouselComp = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 3
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	const ButtonGroup = ({ next, previous }) => {
		return (
			<div className="carousel-button-group gap-4 flex justify-center items-center w-full absolute -bottom-24">
				<button className='block p-3 bg-secondary rounded-none' onClick={previous}>
					<Image src='/svg/arrow-left.svg' alt='' width={40} height={40} />
				</button>
				<button onClick={next}>
					<span className='block p-3 bg-primary rounded-none'>
						<Image src='/svg/arrow-right.svg' alt='' width={40} height={40} />
					</span>
				</button>
			</div>
		);
	};

	return (
		<div className='mx-auto relative'>
			<Carousel
				responsive={responsive}
				arrows={false}
				showDots={true}
				autoPlaySpeed={4000}
				renderButtonGroupOutside={true}
				autoPlay
				infinite
				customButtonGroup={<ButtonGroup />}
			>
				<div className='rounded-none relative overflow-hidden'>
					<Image src='/images/furnitur.webp' className='rounded-none' alt='Фурнитура' width={660} height={480} />
					<div className='absolute top-0 left-0 px-3 py-2 bg-primary/65  text-white text-2xl'>
						<p className=''>
							Фурнитура
						</p>
					</div>
				</div>
				<div className='rounded-none relative overflow-hidden'>
					<Image src='/images/moskit.webp' className='rounded-none' alt='Москитные сетки' width={660} height={480} />
					<div className='absolute top-0 left-0 px-3 py-2 bg-primary/65 text-white text-2xl'>
						<p className=''>
							Москитные сетки
						</p>
					</div>
				</div>
				<div className='rounded-none relative overflow-hidden'>
					<Image src='/images/ogranich.webp' className='rounded-none' alt='Ограничители окон' width={660} height={480} />
					<div className='absolute top-0 left-0 px-3 py-2 bg-primary/65 text-white text-2xl'>
						<p className=''>
							Ограничители окон
						</p>
					</div>
				</div>
				<div className='rounded-none relative overflow-hidden'>
					<Image src='/images/otkos.webp' className='rounded-none' alt='Откосы' width={660} height={480} />
					<div className='absolute top-0 left-0 px-3 py-2 bg-primary/65 text-white text-2xl'>
						<p className=''>
							Отливы
						</p>
					</div>
				</div>
				<div className='rounded-none relative overflow-hidden'>
					<Image src='/images/podokon.webp' className='rounded-none' alt='Подоконники' width={660} height={480} />
					<div className='absolute top-0 left-0 px-3 py-2 bg-primary/65 text-white text-2xl'>
						<p className=''>
							Подоконники
						</p>
					</div>
				</div>
				<div className='rounded-none relative overflow-hidden'>
					<Image src='/images/zamki.webp' className='rounded-none' alt='Замки' width={660} height={480} />
					<div className='absolute top-0 left-0 px-3 py-2 bg-primary/65 text-white text-2xl'>
						<p className=''>
							Замки
						</p>
					</div>
				</div>

			</Carousel>
		</div>
	);
}

export default CarouselComp;
