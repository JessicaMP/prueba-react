import React, { Component } from 'react';

class Section extends Component {
    render() {
        const hobbies = ['Codear', 'Leer', 'Escuchar musica', 'Comer', 'Dormir'];
        return (
            <section>
                <center><h3>Mis hobbies:</h3></center>
                <ul>
                    {hobbies.map(function (hob, i) {
                        return <li key={i}><a href="#li">{hob}</a></li>
                    })}
                </ul>
            </section>
        );
    }
  }
  
  export default Section;