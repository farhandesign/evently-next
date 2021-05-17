import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		padding: '32px 0',
		overflow: 'hidden'
	},
	grid: {
		padding: '0 8px'
	},
	card: {
		maxWidth: 400,
		margin: '0px auto'
	},
	cardContent: {
		minHeight: 72
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	heart: {
		'&:hover': {
			color: theme.palette.secondary.light
		}
	},
	view: {
		marginLeft: 'auto'
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: '#556CD6'
	}
}));

export default useStyles;
