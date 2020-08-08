import React from 'react';
import zapIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={ teacher.avatar } alt={ teacher.name }/>
                <div>
                <strong>{ teacher.name }</strong>
                    <span>{ teacher.subject }</span>
                </div>
            </header>

            <p>
                { teacher.bio }
            </p>

            <footer>
                <p>
                    Preço/Hora  
                    <strong>R$ { teacher.cost }</strong>
                </p>

                {/* Replace feito para retirar os espaços dos numeros de telefone (caso o usuario colocar) */}
                <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp.replace(' ', '').replace('-', '')}`} type="button">
                    <img src={zapIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem