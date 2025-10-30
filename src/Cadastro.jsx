import React from "react";
import apple from './assets/apple.png';
import face from './assets/face.png';
import gooogle from './assets/gooogle.png';
import { Link } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
  return (
    <div className="container">
      <h1>Crie sua Conta</h1>

      <label className="usuario">Nome Completo</label>
      <input
        type="text"
        className="input"
        placeholder="nome completo"
      />

      <label className="usuario">CPF</label>
      <input
        type="text"
        className="input"
        placeholder=" CPF"
      />

      <label className="usuario">E-mail</label>
      <input
        type="email"
        className="input"
        placeholder="e-mail"
      />

      <label className="usuario">Usuário</label>
      <input
        type="text"
        className="input"
        placeholder=" usuário"
      />

      <label className="senha">Senha</label>
      <input
        type="password"
        className="input"
        placeholder="senha "
      />

      <button className="btn">Cadastrar</button>

      <p className="texto">Ou cadastre-se com:</p>

      <div className="social">
        <img className="icone" src={apple} alt="Apple" />
        <img className="icone" src={gooogle} alt="Google" />
        <img className="icone" src={face} alt="Facebook" />
      </div>

      <p className="cadastro">
        Já tem uma conta? <Link to="/">Faça login</Link>
      </p>
    </div>
  );
}

export default Cadastro;
