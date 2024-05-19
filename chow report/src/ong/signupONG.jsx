// SignupONG.jsx

import React, { useState } from 'react';
import { database } from './firebase';

const SignupONG = () => {
  const [formData, setFormData] = useState({
    orgNombre: '',
    descripcion: '',
    correoElectronico: '',
    pais: '',
    calleYNumero: '',
    municipio: '',
    estado: '',
    codigoPostal: '',
    coordenadas: {latitud: '', longitud: ''}
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usersRef = database.ref('usuarios');
      usersRef.push(formData);
      console.log('Usuario registrado:', formData);
      window.location.href = '/login'; // Redirect to login or another page
    } catch (err) {
      console.error(err);
      setError('Error en el registro');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registra tu organización</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Esta información será pública para que los demás conozcan tu organización, considera lo que compartes.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Nombre de la organización</label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=""
                        value={formData.orgNombre}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.descripcion}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Explica un poco lo que hacen y quiénes son.</p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Información de contacto y ubicación</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Introduce el correo para recibir los reportes y la ubicación a la que quieras que sean acotados.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Dirección e-mail</label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.correoElectronico}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">País</label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      value={formData.pais}
                      onChange={handleChange}
                    >
                      <option>México</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Calle y número</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="streetAddress"
                      id="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.calleYNumero}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">Municipio</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.municipio}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">Estado</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.estado}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Código postal</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postalCode"
                      id="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
          </div>
          {error && <div className="mt-4 text-red-600">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignupONG;
