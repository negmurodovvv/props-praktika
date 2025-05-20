const Card = ({ img, name, firstText, secondText }) => {
	return (
		<div>
			<div className='bg-[#f5f5f5] cursor-pointer p-3 rounded-xl'>
				<img className='w-full' src={img} alt='' />
				<h2 className='font-bold text-2xl text-center'>{name}</h2>

				<div className='text-center'>
					<p className='text-md text-[#aa977e]'>{firstText}</p>
					<p className='text-md text-[rgb(170,151,126)]'>{secondText}</p>
				</div>
			</div>
			
		</div>
	)
}

export default Card
