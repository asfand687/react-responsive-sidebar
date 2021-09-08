import { useState } from 'react'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

function App() {
	const [showDrawer, setShowDrawer] = useState(false)
	const drawerToggleClickHandler = () => {
		setShowDrawer((prev) => !prev)
	}
	return (
		<div style={{ height: '100%' }}>
			<Toolbar toggleHandler={drawerToggleClickHandler} />
			<SideDrawer showDrawer={showDrawer} />
			{showDrawer && (
				<>
					<Backdrop toggleHandler={drawerToggleClickHandler} />
				</>
			)}
			<main style={{ marginTop: '64px' }}>
				<p>This is the page content</p>
			</main>
		</div>
	)
}

export default App
