import React from 'react';
import Head from 'next/head';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShareIcon from '@material-ui/icons/Share';

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'next-share';

const ShareButton = (props) => {
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Head>
				<title>{props.quote}</title>
				<meta property="og:url" content="your url" />
				<meta property="og:type" content="website" />
				<meta property="fb:app_id" content="your fb app id" />
				<meta property="og:title" content="Social Media Preview Working?" />
				<meta name="twitter:card" content="summary" />
				<meta property="og:description" content="Hurray!! Yes Social Media Preview is Working" />
				<meta property="og:image" content={'url of image'} />
			</Head>

			<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="default">
				<ShareIcon />
			</IconButton>
			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem onClick={handleClose}>
					<FacebookShareButton className="share__icon" url={props.url} quote={props.quote}>
						<FacebookIcon size={24} round={true} />
					</FacebookShareButton>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<TwitterShareButton className="share__icon" url={props.url} quote={props.quote}>
						<TwitterIcon size={24} round={true} />
					</TwitterShareButton>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<WhatsappShareButton className="share__icon" url={props.url} quote={props.quote}>
						<WhatsappIcon size={24} round={true} />
					</WhatsappShareButton>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default ShareButton;
