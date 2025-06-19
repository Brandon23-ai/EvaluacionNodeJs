import api from './api';

export const crearGrado = async (data) => {
  try {
    const { data: res } = await api.post('/grado/crear', data);
    return res;
  } catch (error) {
    console.error('[ERROR crearGrado] >>', error.message);
    return null;
  }
};

export const obtenerGrados = async () => {
  try {
    const { data: res } = await api.get('/grado');
    return res;
  } catch (error) {
    console.error('[ERROR obtenerGrados] >>', error.message);
    return null;
  }
};

export const obtenerGradoPorId = async (id) => {
  try {
    const { data: res } = await api.get(`/grado/${id}`);
    return res;
  } catch (error) {
    console.error('[ERROR obtenerGradoPorId] >>', error.message);
    return null;
  }
};

export const eliminarGrado = async (id) => {
  try {
    const { data: res } = await api.delete(`/grado/${id}`);
    return res;
  } catch (error) {
    console.error('[ERROR eliminarGrado] >>', error.message);
    return null;
  }
};
