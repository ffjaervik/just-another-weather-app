import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
	//const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=61f73456f424d0ad090e0e62da2168da`

	return (
		<div className='Container'>
			<div className='container'>
				<div className='top'>
					<div className='location'>
						<p>London</p>
					</div>
					<div className='temp'>
						<h1>60ºC</h1>
					</div>
					<div className='description'>
						<p>Clouds</p>
					</div>
				</div>
				<div className='bottom'>
					<div className='feels'>
						<p>57ºC</p>
					</div>
					<div className='humidity'>
						<p>20%</p>
					</div>
					<div className='wind'>12km/h</div>
				</div>
			</div>
		</div>
	)
}

export default App
