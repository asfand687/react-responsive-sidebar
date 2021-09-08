import './Backdrop.css'
const Backdrop = ({ toggleHandler }) => (
	<div onClick={toggleHandler} className='backdrop'></div>
)

export default Backdrop
