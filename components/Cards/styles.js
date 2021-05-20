import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		padding: '32px 0',
		overflow: 'hidden'
	},
	grid: {
		padding: '0 8px'
	},
	card: {
		maxWidth: 400,
		margin: '0px auto',
		boxShadow: 'none'
	},
	header: {},
	cardContent: {
		minHeight: 72
	},
	cardActions: {},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	heart: {
		'&:hover': {
			color: '#0295FF'
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
