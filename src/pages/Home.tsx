import React from 'react'
import { About, Advantages, Fullscreen } from '../components';

type Props = {}

const Home = (props: Props) => {
  return (
	 <>
	 	<Fullscreen/>
		<About/>
		<Advantages/>
	 </>
  )
}

export default Home;