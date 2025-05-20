import CardTwo from './CardTwo'
import img from '../public/images/Tog.svg'
const UserCard = () => {
	return (
		<div className='grid grid-cols-5 justify-between items-center gap-5'>
			<CardTwo
				name='Unraveling the of the Ocean'
				firstText='From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. '
				img={img}
			/>

			<CardTwo
				name='Discovering the World of Mountains'
				firstText='From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. '
				img={img}
			/>

			<CardTwo
				name='Discovering the World of Mountains'
				firstText='From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. '
				img={img}
			/>

			<CardTwo
				name='Discovering the World of Mountains'
				firstText='From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. '
				img={img}
			/>

			<CardTwo
				name='Unraveling the Mysteries of the Forest'
				firstText='From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. '
				img={img}
			/>
		</div>
	)
}
export default UserCard
