import React, { useEffect, useState } from 'react';

const StarWars = () => {
	const [planetId, setPlanetId] = useState(1);
	const [planetInfo, setPlanetInfo] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		fetch(`https://swapi.dev/api/planets/${planetId}`)
			.then(res => res.json())
			.then(data => {
				setPlanetInfo(data);
				setIsLoading(false);
			});
	}, [planetId]);

	return (
		<div className='row'>
			<div className='col-10 offset-1'>
				{isLoading ? (
					<div className='spinner-border'></div>
				) : (
					<>
						<h1>{planetInfo.name}</h1>
						<p>{planetId}</p>
						<div className='d-flex gap-2'>
							<button
								disabled={planetId <= 1}
								className='btn btn-primary'
								onClick={() => setPlanetId(prevState => prevState - 1)}
							>
								Previous
							</button>
							<button
								disabled={planetId >= 10}
								className='btn btn-primary'
								onClick={() => setPlanetId(prevState => prevState + 1)}
							>
								Next
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default StarWars;
