import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./componente/Header";
import Footer from "./componente/Footer";
import Main from "./componente/Main";

import Erro from './componentes/Erro';
import Equipe from './componentes/Equipe';
import DisciplinasCurriculares from './componentes/DisciplinasCurriculares';
import DisciplinasTecnicas from './componentes/DisciplinasTecnicas';
import ListarDisciplinaCurricular from './componentes/ListarDisciplinaCurricular';
import ListarDisciplinaTecnica from './componentes/ListarDisciplinaTecnica';
import SobreCurso from './componentes/sobreCurso';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="*" element={<Erro />} />
          <Route path="/" element={<Main />} />
          <Route path="/sobreCurso" element={<SobreCurso />} />
          <Route path="/disciplinasTecnicas" element={<DisciplinasTecnicas />} />
          <Route path="/disciplinasCurriculares" element={<DisciplinasCurriculares />} />

          <Route path="/disciplinaTecnica" element={<ListarDisciplinaTecnica />} />
          <Route path="/disciplinaCurricular" element={<ListarDisciplinaCurricular />} />

          <Route path="/equipe" element={<Equipe />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>

  );
}

export default App;
