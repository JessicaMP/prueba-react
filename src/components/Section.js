import React, { Component } from 'react';

class Section extends Component {
    render() {
        const hobbies = ['codear', 'comer', 'dormir'];
        return (
            <section>
                <center><h3>Sobre mí</h3></center>
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