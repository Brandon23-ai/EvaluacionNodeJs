import { useState } from 'react';
import { crearAlumno } from '../../../services/alumnoService';

const AgregarAlumno = ({ gradoId, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    nombre: '',
    fechaNacimiento: '',
    nombrePadre: '',
    nombreMadre: '',
    seccion: '',
    fechaIngreso: ''
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearAlumno({ ...form, gradoId });
      if (onSuccess) onSuccess();
      onClose();
    } catch (error) {
      console.error('[ERROR crearAlumno]', error);
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content shadow">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">Agregar Alumno</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {[
                { label: 'Nombre', name: 'nombre', type: 'text' },
                { label: 'Fecha de Nacimiento', name: 'fechaNacimiento', type: 'date' },
                { label: 'Nombre del Padre', name: 'nombrePadre', type: 'text' },
                { label: 'Nombre de la Madre', name: 'nombreMadre', type: 'text' },
                { label: 'Sección', name: 'seccion', type: 'text' },
                { label: 'Fecha de Ingreso', name: 'fechaIngreso', type: 'date' },
              ].map(({ label, name, type }) => (
                <div className="mb-3" key={name}>
                  <label className="form-label">{label}</label>
                  <input
                    type={type}
                    name={name}
                    className="form-control"
                    value={form[name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-success">Guardar</button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgregarAlumno;
