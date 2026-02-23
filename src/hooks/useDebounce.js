import { useEffect, useState } from "react";

/**
 * Custom Hook: useDebounce
 * Retrasa la actualización de un valor durante un tiempo determinado.
 * Útil para buscadores.
 */
export default function useDebounce(value, delay = 500) {
  // Estado interno que guardará el valor con retraso
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Creamos temporizador
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpiamos el temporizador si el valor cambia antes del tiempo
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
