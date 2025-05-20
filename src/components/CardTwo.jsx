const CardTwo = ({ img, name, firstText, secondText, color }) => {
	return (
		<div
			style={{ backgroundColor: `${color == 'brown' ? '#fcf2e5' : 'white'}` }}
			className='px-4 py-8 shadow-lg rounded-2xl'
		>
			<img className='w-full' src={img} alt='' />

			<h2 className='font-semibold text-xl my-5 text-[#009AF0]'>{name}</h2>

			<div className=''>
				<p className='text-md text-[#aa977e]'>{firstText}</p>
				<p className='text-md text-[#aa977e]'>{secondText}</p>
			</div>
		</div>
	)
}

export default CardTwo
