
// Importamos las herramientas necesarias de React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Importamos el Layout principal
import AppLayout from "./components/AppLayout";
// Importamos las páginas de la aplicación
import Dashboard from "./pages/Dashboard";
import Productos from "./pages/Productos";
import Proveedores from "./pages/Proveedores";
import Envios from "./pages/Envios";
// Componente principal de la aplicación
export default function App() {
  return (
    // BrowserRouter activa el sistema de navegación SPA
    <BrowserRouter>
      {/* Routes agrupa todas las rutas */}
      <Routes>
        {/* 
          Ruta principal "/" 
          Esta ruta envuelve TODA la aplicación con AppLayout.
          Todo lo que esté dentro se renderizará dentro del <Outlet />
        */}
        <Route path="/" element={<AppLayout />}>
          {/* 
            Ruta index:
            Representa la ruta "/"
            Es la vista por defecto cuando entramos al sitio
          */}
          <Route index element={<Dashboard />} />
          {/* Ruta hija: /productos */}
          <Route path="productos" element={<Productos />} />
          {/* Ruta hija: /proveedores */}
          <Route path="proveedores" element={<Proveedores />} />
          {/* Ruta hija: /envios */}
          <Route path="envios" element={<Envios />} />
        </Route>
        {/* 
          Ruta comodín "*"
          Si el usuario escribe una URL que no existe,
          lo redirige automáticamente al Dashboard
        */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}