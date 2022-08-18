import {Helmet} from 'react-helmet';

import Details from '../components/Details/index.js';
import EditForm from '../components/EditForm/index.js';
import useStore from '../hooks/useStore.js';

export default function DetailPage() {
	const isEditing = useStore(state => state.isEditing);

	return (
		<>
			<Helmet>
				<title key="title">Detailss</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			{isEditing ? <EditForm /> : <Details />}
		</>
	);
}
