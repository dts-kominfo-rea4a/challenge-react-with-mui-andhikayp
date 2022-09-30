// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material'

const ContactForm = (props) => {
	const { setContacts, contacts } = props
	// Form berisi name, phone, email, dan photo url
	// Buatlah state newContact berupa objek sesuai dengan data yang ada
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [photo, setPhoto] = useState('')

	const handleSubmit = () => {
		const newContact = {
			name, phone, email, photo
		}
		setContacts([...contacts, newContact])
	}

	return (
		<Grid container direction="column" spacing={1}>
			<Grid item>
				<TextField
					value={name}
					onChange={(e) => (setName(e.target.value))}
					id="Name"
					label="Name"
					variant="outlined"
				/>
			</Grid>
			<Grid item>
				<TextField
					value={phone}
					onChange={(e) => (setPhone(e.target.value))}
					id="Phone"
					label="Phone"
					variant="outlined"
				/>
			</Grid>
			<Grid item>
				<TextField
					value={email}
					onChange={(e) => (setEmail(e.target.value))}
					id="Email"
					label="Email"
					variant="outlined"
				/>
			</Grid>
			<Grid item>
				<TextField
					value={photo}
					onChange={(e) => (setPhoto(e.target.value))}
					id="Photo URL"
					label="Photo URL"
					variant="outlined"
				/>
			</Grid>
			<Grid item>
				<Button
					onClick={handleSubmit}
					variant="text"
				>
					ADD NEW
				</Button>
			</Grid>
		</Grid>
	);
}

export default ContactForm;