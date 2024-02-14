import './NavBar.styles.css'

function NavBar(): JSX.Element {
    return (
        <div className="navBar-container">
            <p>Desarrollado por <strong>Juan David Yanez</strong> para:</p>
            <img className="navBar-img" src="logo-kuepa-white.svg" alt="logo-kuepa-blanco" />
        </div>
    )
}

export default NavBar;