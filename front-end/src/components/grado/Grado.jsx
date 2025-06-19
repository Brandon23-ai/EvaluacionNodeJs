import { useEffect, useState } from 'react';
import { obtenerGrados, crearGrado, eliminarGrado, obtenerGradoPorId } from '../../services/gradoService';
import { obtenerAlumnoPorId } from '../../services/alumnoService';

import Agregar from './components/agregar';
import AgregarAlumno from './components/agregarAlumno'

const Grado = () => {
    const [grados, setGrados] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [gradoDetalle, setGradoDetalle] = useState(null);
    const [gradoParaAlumno, setGradoParaAlumno] = useState(null);
    const [alumnosDetalle, setAlumnosDetalle] = useState([]);

    const handleVerAlumnoForm = (id) => setGradoParaAlumno(id);

  const cargarGrados = async () => {
    try {
      const data = await obtenerGrados();
      if (data) setGrados(data);
    } catch (error) {
      console.error('[ERROR EN OBTENER GRADOS]', error);
    }
  };

  useEffect(() => {
    cargarGrados();
  }, []);

  const handleGuardar = async (nuevoGrado) => {
    await crearGrado(nuevoGrado);
    await cargarGrados();
  };

  const handleEliminate = async (id) => {
    try {
        const eliminar = await eliminarGrado(id);
        await cargarGrados();
        console.log('ELIMINAR', eliminar);
        
    } catch (error) {
        console.log(['ERROR', error]);
        
    }
  }

const handleVer = async (id) => {
  try {
    const data = await obtenerGradoPorId(id);
    const dataAlumno = await obtenerAlumnoPorId(id);

    if (data) {
      setGradoDetalle(data);
      setAlumnosDetalle(dataAlumno || []);
    }
  } catch (error) {
    console.error('[ERROR EN DETALLE]', error);
  }
};


  return (
    <div className="min-vh-100 bg-light p-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Listado de Grados</h2>
        <button className="btn btn-primary" onClick={() => setMostrarModal(true)}>
          + Agregar
        </button>
      </div>

      <div className="card shadow border-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-striped table-bordered align-middle">
              <thead className="table-primary text-center">
                <tr>
                  <th style={{ width: '10%' }}>#</th>
                  <th>Nombre del Grado</th>
                  <th>Eliminar</th>
                  <th>Ver</th>
                  <th>Alumno</th>
                </tr>
              </thead>
              <tbody>
                {grados.length > 0 ? (
                  grados.map((grado, index) => (
                    <tr key={grado.id}>
                        <td className="text-center">{grado.id}</td>
                        <td>{grado.nombre}</td>
                        <td className="text-center">
                            <i
                                className="bi bi-trash-fill text-danger"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleEliminate(grado.id)}
                            ></i>
                        </td>
                        <td className="text-center">
                        <i
                            className="bi bi-eye-fill text-primary"
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleVer(grado.id)}
                        ></i>
                        </td>
                        <td className="text-center">
                            <i
                                className="bi bi-person-plus-fill text-success"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleVerAlumnoForm(grado.id)}
                            ></i>
                        </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center text-muted">No hay grados registrados</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    {gradoDetalle && (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-lg">
        <div className="modal-content shadow">
            <div className="modal-header bg-info text-white">
            <h5 className="modal-title">Detalle del Grado</h5>
            <button type="button" className="btn-close" onClick={() => {
                setGradoDetalle(null);
                setAlumnosDetalle([]);
            }}></button>
            </div>
            <div className="modal-body">
            <p><strong>ID:</strong> {gradoDetalle.id}</p>
            <p><strong>Nombre:</strong> {gradoDetalle.nombre}</p>

            <hr />

            <h5>Alumnos</h5>
            {alumnosDetalle.length > 0 ? (
                <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Fecha Nacimiento</th>
                        <th>Padre</th>
                        <th>Madre</th>
                        <th>Sección</th>
                        <th>Ingreso</th>
                    </tr>
                    </thead>
                    <tbody>
                    {alumnosDetalle.map((a, index) => (
                        <tr key={a.id}>
                        <td>{index + 1}</td>
                        <td>{a.nombre}</td>
                        <td>{a.fechaNacimiento}</td>
                        <td>{a.nombrePadre}</td>
                        <td>{a.nombreMadre}</td>
                        <td>{a.seccion}</td>
                        <td>{a.fechaIngreso}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            ) : (
                <p className="text-muted">No hay alumnos registrados en este grado.</p>
            )}
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => {
                setGradoDetalle(null);
                setAlumnosDetalle([]);
            }}>Cerrar</button>
            </div>
        </div>
        </div>
    </div>
    )}


      {mostrarModal && (
        <Agregar
          onClose={() => setMostrarModal(false)}
          onGuardar={handleGuardar}
        />
      )}

      {gradoParaAlumno && (
        <AgregarAlumno
          gradoId={gradoParaAlumno}
          onClose={() => setGradoParaAlumno(null)}
          onSuccess={() => setGradoParaAlumno(null)}
        />
      )}
    </div>
  );
};

export default Grado;
