import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Hero = () => {
	const classes = useStyles();
	return (
		<div className="hero">
			<Container className={classes.container} maxWidth="md">
				<Typography variant="h3" className={classes.header}>
					Discover Events
				</Typography>
				<Typography className={classes.p} variant="subtitle1" gutterBottom={true}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, augue non auctor
					pellentesque, lectus nunc dignissim diam, non condimentum magna lorem vitae eros.
				</Typography>
				<Button className={classes.button} variant="outlined" size="large">
					Sign up
				</Button>
			</Container>
		</div>
	);
};

export default Hero;
