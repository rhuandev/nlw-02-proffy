import React from 'react';
import zapIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGX4heUT_Owuw/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=pU9AXywr5Pmn4i9ir3coeq0PR7qYnSDiwfeTHhbUo8w" alt="Rhuan Carlos"/>
                <div>
                    <strong>Rhuan Carlos</strong>
                    <span>Desenvolvedor Front-End</span>
                </div>
            </header>

            <p>
            Bacon ipsum dolor amet ribeye andouille corned beef jowl sausage landjaeger. 
            <br/> <br/>
            Drumstick cupim chislic burgdoggen short loin tri-tip brisket filet mignon kielbasa 
            bresaola strip steak flank meatloaf pork chop hamburger. Doner meatloaf leberkas cow 
            filet mignon andouille chuck capicola ball tip short ribs burgdoggen pork loin tongue. 
            Chislic jowl swine ribeye andouille. Pig ham doner kevin chislic.
            </p>

            <footer>
                <p>
                    Preço/Hora  
                    <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={zapIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem