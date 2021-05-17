import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import ShareButton from '../ShareButton';

import useStyles from './styles';

const EventCard = (props) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardHeader
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={props.title}
				subheader={`${props.date && props.date.slice(0, 10).split('-').reverse().join('-')} at
						${props.date && props.date.slice(15, 21).split('-').reverse().join('-')}`}
			/>

			<CardMedia className={classes.media} image={props.imgSrc} title="Paella dish" />

			<CardContent className={classes.cardContent}>
				<Typography variant="body2" color="textSecondary" component="p">
					{props.description.slice(0, 80)} ...
				</Typography>
			</CardContent>

			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon className={classes.heart} />
				</IconButton>

				<ShareButton
					aria-label="share"
					url={`https://astro-events-frontend.herokuapp.com/events/${props.id}`}
					quote={props.title}
					imgSrc={props.imgSrc}
					description={props.description}
				/>

				<Button className={classes.view} href={props.link} size="medium" color="primary">
					View
				</Button>
			</CardActions>
		</Card>
	);
};

export default EventCard;
