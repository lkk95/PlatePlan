import {useParams, useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';
import Button from '../Button/Button.js';
import IconButton from '../Button/IconButton.js';

import StyledDetails from './styled.js';

export default function Details() {
	const allMeals = useStore(state => state.allMeals);
	const deleteMeal = useStore(state => state.deleteMeal);
	const setEditing = useStore(state => state.setEditing);
	const navigate = useNavigate();
	const {idFromUrl} = useParams();

	const meal = allMeals.find(meal => meal.id === idFromUrl);

	return (
		<StyledDetails>
			<h1>{meal.title}</h1>
			<Button functionToClick={navigate} parameterToClick={'/'}>
				Go Back
			</Button>
			<div>
				<IconButton functionToClick={setEditing} parameterToClick={true}>
					<i className="fa-solid fa-pen"></i>
				</IconButton>
				<IconButton
					functionToClick={deleteMeal}
					parameterToClick={idFromUrl}
					buttonMode={'delete'}
				>
					<i className="fa-solid fa-trash"></i>
				</IconButton>
			</div>
			<section>
				<h2>Ingredients</h2>
				<p>{meal.ingredients}</p>
			</section>
			<section>
				<h2>Preparation</h2>
				<p>{meal.preparation}</p>
			</section>
			<section>
				<h2>Servings</h2>
				<p>{meal.servings}</p>
			</section>
			<section>
				<h2>Cooking Time</h2>
				<p>{meal.time}</p>
			</section>
			<section>
				<h2>Category</h2>
				<p>{meal.category}</p>
			</section>
		</StyledDetails>
	);
}
