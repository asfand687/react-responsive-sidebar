import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'
const Toolbar = ({ toggleHandler }) => (
	<header className='toolbar'>
		<nav className='toolbar__navigation'>
			<div className='toolbar__logo'>
				<a href='/'>THE LOGO</a>
			</div>
			<div className='spacer'></div>
			<div className='toolbar__navigation-items'>
				<ul>
					<li>
						<a href='/'>Products</a>
					</li>
					<li>
						<a href='/'>Users</a>
					</li>
				</ul>
			</div>
			<div style={{ display: 'inline-block' }}>
				<DrawerToggleButton toggleHandler={toggleHandler} />
			</div>
		</nav>
	</header>
)

export default Toolbar
