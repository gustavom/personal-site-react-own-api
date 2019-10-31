import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <h2>Criar Conta</h2>
      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e -mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
