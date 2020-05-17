import React, { Component } from 'react';
import Card from '../components/Card/Card';

class List extends Component {
	
	constructor() {
		super();
		this.state = {
			movies: [],
			loading: true,
		};
	}

	async componentDidMount() {
		const movies = await fetch('../../assets/data.json');
		const moviesJSON = await movies.json();

		if (!moviesJSON) return;

		this.setState({
			movies: moviesJSON,
			loading: false,
		});
	}

	render() {
		const { movies, loading } = this.state;

		if (loading) {
			return <div>Loading...</div>;	
		}

		return (
			<div className="row">
				{movies.map(movie =>
					<div className="col-sm-2" key={ movie.id }>
						<Card movie={ movie } />
					</div>
				)}
			</div>
		);
	}
}

export default List;