import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';

const CardGrid = ({ events }) => {
	const classes = useStyles();

	return (
		<Container className={classes.cardGrid} maxWidth="lg">
			<Grid className={classes.grid} spacing={4} container>
				{events &&
					events
						.map((event) => {
							return (
								<Grid item xs={12} sm={6} md={4} key={event._id}>
									<EventCard
										id={event._id}
										title={event.name}
										description={event.description}
										imgSrc={event.eventImg}
										date={event.eventDate}
										link={`/events/${event._id}`}
									/>
								</Grid>
							);
						})
						.slice(0, 6)}
			</Grid>
		</Container>
	);
};

export default CardGrid;
