import React from 'react'
import { useContext } from 'react';
import { Loading } from '../components/Loading';
import { Table } from '../components/Table';
import { Appcontext } from '../context/Appcontext';
import styles from '../styles/containers/Contact.module.scss';

const Contact = () => {
	const {searchContact,loading,searchValue,characters}=useContext(Appcontext);
	const lisTitle = {
		name: 'Nombres y Apellidos',
		age: 'Edad actual',
		phone: 'Telefono',
		dateofbirth: 'Fecha de nacimiento',
		addres: 'Direccion de residencia',
		email: 'Correo electronico',
		actions: 'Acciones'
	}
	


	return (
		<div className={styles.container}>
				
				{loading && <Loading/>}
				{(searchContact && !loading) && <Table listTitle={lisTitle}/>}
				{(characters.length ===0) && <h2>Esta vacio tu agenda, no has creado el primer contacto, crealo con el botón de añadir</h2>}
				{(searchContact.length ===0 && searchValue.length>0 && characters.length>0) && <h2>Upss... lo siento no hemos encontrado lo que buscas</h2>} 
				
		</div>
	)
}

export { Contact };