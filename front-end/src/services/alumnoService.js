import api from './api';

export const crearAlumno = async (data) => {
  try {
    const { data: res } = await api.post('/alumno/crear', data);
    return res;
  } catch (error) {
    console.error('[ERROR crearAlumo] >>', error.message);
    return null;
  }
};

export const obtenerAlumnoPorId = async (id) => {
  try {
    const { data: res } = await api.get(`/alumno/grado/id/${id}`);
    return res;
  } catch (error) {
    console.error('[ERROR obtenerAlumoPorId] >>', error.message);
    return null;
  }
};
