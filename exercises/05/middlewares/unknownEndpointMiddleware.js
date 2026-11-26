// Se ejecuta solo si ninguna ruta ha respondido antes: la URL no existe
export const unknownEndpoint = (request, response) => {
  response.status(404).json({ error: 'unknown endpoint' });
};
