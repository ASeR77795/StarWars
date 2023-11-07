import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import StarWars from './components/StarWars';

const root = document.getElementById('root');
createRoot(root).render(
	<div className='container'>
		<StarWars />
	</div>
);
