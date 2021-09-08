import './DrawerToggleButton.css'

const DrawerToggleButton = ({ toggleHandler }) => (
	<button className='toggle-button' onClick={toggleHandler}>
		<div className='toggle-button__line' />
		<div className='toggle-button__line' />
		<div className='toggle-button__line' />
	</button>
)

export default DrawerToggleButton
