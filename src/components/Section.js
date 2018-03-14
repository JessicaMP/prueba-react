import React from 'react';

const text = 'Soy front-end developer con conocimientos en Marketing digital. Apasionada en el desarrollo de la innovación tecnológica, códigos de diseño e implementación de páginas web. Disfruto de trabajar en equipo y puedo asumir cualquier reto en el sector tech.';
const img = 'gato.gif';
const hobbies = ['Codear', 'Leer', 'Escuchar musica', 'Comer', 'Dormir'];
const Section = () => (
            <section>
                <center><h3>Mis hobbies:</h3></center>
                <ul>
                    {hobbies.map(function (hob, i) {
                        return <li key={i}><a href="#li">{hob}</a></li>
                    })}
                </ul>
            </section>
        );

  
export default Section;