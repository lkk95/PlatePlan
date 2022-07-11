import StyledRadio from './styledradio.js';

export default function Radio({newMeal, setNewMeal}) {
	return (
		<StyledRadio
			onChange={event => {
				setNewMeal({...newMeal, category: event.target.value});
			}}
		>
			<legend>Choose the category of your recipe:</legend>
			<input type="radio" name="category" id="breakfast" value="A - Breakfast" required />
			<label htmlFor="breakfast">Breakfast</label>
			<input type="radio" name="category" id="lunch" value="B - Lunch" />
			<label htmlFor="lunch">Lunch</label>
			<input type="radio" name="category" id="dinner" value="C - Dinner" />
			<label htmlFor="dinner">Dinner</label>
		</StyledRadio>
	);
}
