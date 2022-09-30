// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Typography, Grid } from '@mui/material'

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = (props) => {
	const { data } = props
	// Contact berisi foto, nama, telepon, dan email
	const { name, phone, email, photo } = data

	return (
		<Grid key={email} item>
			<Typography>{name}</Typography>
			<Typography>{phone}</Typography>
			<Typography>{email}</Typography>
			<img width="100" height="100" alt="person" src={photo}></img>
		</Grid>
	)
};

export default Contact;