import {Helmet} from 'react-helmet';

import Details from '../components/Details/index.js';
import EditForm from '../components/EditForm/index.js';
import Layout from '../components/Layout/index.js';
import useStore from '../hooks/useStore.js';

export default function Detailpage() {
	const isEditing = useStore(state => state.isEditing);

	return (
		<Layout>
			<Helmet>
				<title key="title">Details</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			{isEditing ? <EditForm /> : <Details />}
		</Layout>
	);
}
