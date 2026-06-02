import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./componente/Header";
import Footer from "./componente/Footer";
import Main from "./componente/Main";

import Erro from './componente/Erro';
import Equipe from './componente/Equipe';
import DisciplinasCurriculares from './componente/DisciplinasCurriculares';
import DisciplinasTecnicas from './componente/DisciplinasTecnicas';
import ListarDisciplinaCurricular from './componente/ListarDisciplinaCurricular';
import ListarDisciplinaTecnica from './componente/ListarDisciplinaTecnica';
import SobreCurso from './componente/SobreCurso';

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
