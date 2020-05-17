import React from 'react';

const Card = ({ movie }) => {
	return (
		<div className="card">
			<img src={ movie.img.src } alt={ movie.img.alt } className="card-img-top"/>
			<div className="card-body">
				<h2 className="card-title">{`#${movie.ranking} - ${movie.title} - (${movie.year})`}</h2>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">{`Distributor: ${movie.distributor}`}</li>
				<li className="list-group-item">{`Amount: ${movie.amount}`}</li>
			</ul>
		</div>
	);
};

export default Card;