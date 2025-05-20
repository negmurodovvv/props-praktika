import { data } from '../mock-data'
import Card from './Card'

const UserList = () => {
	return (
		<div>
			<h3 className='text-center text-4xl font-semibold py-6'>User Card</h3>
			<div className='grid grid-cols-4 justify-between gap-5 py-4'>
				{data.map((item, i) => (
					<Card
						key={i}
						name={item.name}
						firstText={item.firstText}
						secondText={item.secondText}
						img={item.imageSource}
					/>
				))}
				{/* 
				<Card
					name='Arjun Patel'
					firstText='Software Engineer'
					secondText='Technology'
					img='images/Second.svg'
				/>

				<Card
					name='Carlos Hernández'
					firstText='UI Designer'
					secondText='Design'
					img='images/Third.svg'
				/>

				<Card
					name='Amina Idris'
					firstText='Marketing Specialist'
					secondText='Marketing'
					img='images/Fourth.svg'
				/>

				<Card
					name='Takumi Sato'
					firstText='HR Specialist'
					secondText='Human Resources'
					img='images/Sixth.svg'
				/>

				<Card
					name='Chen Wei'
					firstText='Data Analyst'
					secondText='Data Science'
					img='images/Seventh.svg'
				/>

				<Card
					name='Emma Dubois'
					firstText='Sales Manager'
					secondText='Sales'
					img='images/Eight.svg'
				/>

				<Card
					name='Igor Sokolov'
					firstText='Quality Assurance'
					secondText='Quality Control'
					img='images/Nine.svg'
				/> */}
			</div>

			<h4 className='text-center font-semibold text-4xl py-6'>Info Card</h4>
		</div>
	)
}

export default UserList
