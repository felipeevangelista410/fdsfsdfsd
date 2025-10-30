import React from "react";
import apple from './assets/apple.png';
import face from './assets/face.png';
import gooogle from './assets/gooogle.png';
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="principal">
      <h1>Faça Login</h1>

      <label className="usuario">Usuário / E-mail</label>
      <input
        type="text"
        className="input"
        placeholder="Digite seu e-mail ou usuário"
      />

      <label className="senha">Senha</label>
      <input
        type="password"
        className="input"
        placeholder="Digite sua senha"
      />

      <div className="extras">
        <label>
          <input type="checkbox" /> Lembrar-me
        </label>
        <a href="#">Esqueceu a senha?</a>
      </div>

      <button className="btn">Entrar</button>

      <p className="texto">Ou entre com:</p>

      <div className="social">
        <img className="icone" src={apple} alt="Apple" />
        <img className="icone" src={gooogle} alt="Google" />
        <img className="icone" src={face} alt="Facebook" />
      </div>

      <p className="cadastro">
        Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default App;
