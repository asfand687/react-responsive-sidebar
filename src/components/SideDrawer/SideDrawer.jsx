import './SideDrawer.css'

const SideDrawer = ({ showDrawer }) => (
	<nav className={`side-drawer ${showDrawer ? 'open' : ''}`}>
		<ul>
			<li>
				<a href='/'>Products</a>
			</li>
			<li>
				<a href='/'>Users</a>
			</li>
		</ul>
	</nav>
)

export default SideDrawer
