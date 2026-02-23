import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <Header />

      {/* Contenedor principal */}
      <div className="layout">
        
        {/* Navegación lateral */}
        <nav className="layout__sidebar">
          Sidebar
        </nav>

        {/* Contenido dinámico de las rutas */}
        <main className="layout__main">
          <Outlet />
        </main>

      </div>

      {/* Footer */}
      <footer className="layout__footer">
        © 2024 Inventario React
      </footer>
    </>
  );
}
