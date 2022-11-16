import React from 'react'
import { About, Advantages, Cost, Fullscreen, Keep, Order, Portfolio, Team, Work } from '../components';

type Props = {}

const Home = (props: Props) => {
  return (
	 <>
	 	<Fullscreen/>
		<About/>
		<Order/>
		<Team/>
		{/*<Portfolio/>*/}
		<Keep/>
		<Work/>
		<Cost/>
		<Advantages/>
	 </>
  )
}

export default Home;