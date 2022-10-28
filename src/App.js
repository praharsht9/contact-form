import './App.css';

import { useState } from 'react';

function App() {
	const [msg, setMsg] = useState({
		namevalue: '',
		emailvalue: '',
		hotelname: '',
		location: 'Mumbai',
	});

	const handleChange = (e) => {
		const name = e.target.name;
		var value = e.target.value;
		if (name === 'namevalue') {
			value = value.toUpperCase();
		}

		setMsg({
			...msg,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		alert('Are you sure to proceed with your booking', msg.hotelname);
		console.log('Name Submitted', msg.namevalue);
		console.log('Email Submitted', msg.emailvalue);
		console.log('Hotel Name Submitted', msg.hotelname);
		console.log('Location Submitted', msg.location);

		setMsg({
			namevalue: '',
			emailvalue: '',
			hotelname: '',
			location: 'Mumbai',
		});
		e.preventDefault();
	};
	return (
		<div className='App'>
			<form className='contents' onSubmit={handleSubmit}>
				Name:
				<input
					type='text'
					name='namevalue'
					value={msg.namevalue}
					onChange={handleChange}
				/>
				<br />
				<br />
				Email:
				<input
					type='text'
					name='emailvalue'
					value={msg.emailvalue}
					onChange={handleChange}
				/>
				<br /> <br />
				Hotel Name:
				<select
					value={msg.hotelname}
					name='hotelname'
					onChange={handleChange}
				>
					<option value='Tiptop Hotel'>TipTop Hotel </option>
					<option value='Orchid Hotel'>Orchid Hotel </option>
					<option value='Savji Hotel'>Savji Hotel </option>
					<option value='Bluenile Hotel'>Bluenile Hotel </option>
				</select>
				<br />
				<br />
				Location:
				<input
					type='text'
					name='location'
					value={msg.location}
					onChange={handleChange}
				/>
				<br /> <br />
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
}

export default App;
