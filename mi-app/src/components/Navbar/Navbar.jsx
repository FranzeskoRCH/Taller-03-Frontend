function Navbar() {
    const SiteName = "ReactAcademy"
    return (
        <nav>
            <div>
                {SiteName}
            </div>

            <div>
                <ul>
                    <li>
                        <a href="#">
                        Inicio 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Cursos 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Nosotros
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;