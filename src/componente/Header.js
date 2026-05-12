import { Link } from "react-router-dom"

function Header() {

    return (
        <header>
            <div className="headerTopo">
                <h1>Curso Técnico em Desenvolvimento de Sistemas</h1>
            </div>
            <nav className="headerMenu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobreCurso">Sobre Curso</Link></li>
                    <li><Link to="/disciplinasCurriculares">Disciplinas Básicas</Link></li>
                    <li><Link to="/disciplinasTecnicas">Disciplinas Técnica</Link></li>
                    <li><Link to="/equipe">Equipe</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;