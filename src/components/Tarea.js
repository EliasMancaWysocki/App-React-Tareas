import React from 'react';
import '../stylesheets/Tareas.css';
import { MdDeleteForever } from 'react-icons/md';

export function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div
       className='tarea-texto'
       onClick={() => completarTarea(id)}>
        { texto }
      </div>
      <div 
      className='tarea-contenedors-icono'
      onClick={() => eliminarTarea(id)}>
          <MdDeleteForever className='tarea-icono'/>
      </div>
    </div>
  );
};

