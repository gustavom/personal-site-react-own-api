import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta</Link>
      </form>
    </>
  );
}
