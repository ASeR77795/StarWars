import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import StarWars from './components/StarWars';

const root = document.getElementById('root');
const Application = () => {
	const [isVisible, setIsVisible] = useState(false);
	function toggleVisible() {
		setIsVisible(prevState => !prevState);
	}
	return (
		<div>
			<button className='btn btn-primary btn-lg' onClick={toggleVisible}>
				{isVisible ? 'Hide' : 'Show'}
			</button>
			{isVisible && <StarWars />}
		</div>
	);
};

createRoot(root).render(
	<div className='container'>
		<Application />
	</div>
);
