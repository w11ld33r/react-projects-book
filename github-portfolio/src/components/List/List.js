import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
	padding: 10px 0;
	border-bottom: 1px solid ligthGrey;
`;

const ListWrapper = styled.ul`
	list-style: none;
	padding: 0;
	text-align: left;
`;

const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
`;

const Label = styled.span`
	font-weight: strong;
`;

const List = ({ title, items }) => (
	<React.Fragment>
		<Title>{title}</Title>
		<ListWrapper>
			{items.map(item =>
				<ListItem key={item.label}>
					<Label>{item.label}:</Label> {item.value}
				</ListItem>
			)}
		</ListWrapper>
	</React.Fragment>
);

export default List;