
// Importamos el sistema de enrutamiento de React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importamos nuestras páginas
import Dashboard from "./pages/Dashboard";
import Productos from "./pages/Productos";
import Proveedores from "./pages/Proveedores";
import Envios from "./pages/Envios";

// Componente principal de la aplicación
export default function App() {
  return (

    // BrowserRouter habilita el sistema de rutas usando el historial del navegador
    <BrowserRouter>

      {/* Routes agrupa todas las rutas de la aplicación */}
      <Routes>

        {/* Ruta principal "/" */}
        {/* Cuando el usuario entra a la raíz del sitio, muestra el Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Ruta /productos */}
        {/* Muestra la página de productos */}
        <Route path="/productos" element={<Productos />} />

        {/* Ruta /proveedores */}
        {/* Muestra la página de pedidos a proveedores */}
        <Route path="/proveedores" element={<Proveedores />} />

        {/* Ruta /envios */}
        {/* Muestra la página de envíos */}
        <Route path="/envios" element={<Envios />} />

        {/* Ruta comodín "*" */}
        {/* Si el usuario escribe una ruta que no existe,
            lo redirige automáticamente al Dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
