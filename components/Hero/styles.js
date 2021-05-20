import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		background: '#0295FF',
		margin: 0,
		borderRadius: 4,
		marginLeft: '4%',
		padding: '32px 32px',
		borderTopRightRadius: '40px',
		transform: 'translateY(12%)'
	},
	header: {
		color: '#fff',
		marginBottom: '16px'
	},
	p: {
		color: '#fff',
		marginBottom: '16px'
	},
	button: {
		color: '#fff',
		border: '1px solid #fff'
	}
}));

export default useStyles;
