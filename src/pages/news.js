import React from 'react';
import { NewsContextProvider } from '../components/NewsContext';
import News from '../components/News';
import Layout from '../components/layout';

function Newspage() {
	return (
		<Layout pageTitle='Tesla Today'>
			<NewsContextProvider>
				<News />
			</NewsContextProvider>
		</Layout>
	);
}

export default Newspage;
