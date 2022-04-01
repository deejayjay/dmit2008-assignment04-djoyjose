import { AddNewToyPanel, EditToyPanel, ViewAllToysPanel } from "components/panels";
import { Routes, Route } from "react-router-dom";

import { LoginPage, DashBoardPage, PageNotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashBoardPage />}>
        <Route index element={<ViewAllToysPanel title="All Toys" />} />
        <Route path="add" element={<AddNewToyPanel title="Add New Toy" />} />
        <Route path="edit" element={<EditToyPanel title="Edit Toy" />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
