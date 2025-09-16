import React from 'react';
import Tarjeta from './Tarjeta';
import Container from 'react-bootstrap/Container';


function Galeria(){

const equipo = [
            {
                nombre: 'Raul',
                rol: 'Product Owner',
                imagen: "./src/imagenes/rey_atanagildo.png"

            },
             {
                nombre: 'Rolando',
                rol: 'Product Manager',
                imagen: "./src/imagenes/rey_ataulfo.png"

            },
             {
                nombre: 'Juan',
                rol: 'Product Owner',
                imagen: "./src/imagenes/rey_ervigio.png"

            },
             {
                nombre: 'Ramiro',
                rol: 'Tester',
                imagen: "./src/imagenes/rey_leogivildo.png"

            },

            {
                nombre: 'Luis',
                rol: 'Designer',
                imagen: "./src/imagenes/rey_sisebuto.png"

            }];


            return(
                <>
                    <h4 className='text-center'>Nuestro equipo</h4> 
                    <Container style={{ display:'flex',flexWrap: 'wrap' }}>
                        {
                            equipo.map(empleado => 
                            <div key = {empleado.index}>
                                <Tarjeta nombre= {empleado.nombre} imagen = {empleado.imagen} rol = {empleado.rol}/>
                            </div>) 
                        }
                    </Container>
                </>
            )
}

export default Galeria;
