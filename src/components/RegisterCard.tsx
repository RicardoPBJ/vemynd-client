"use client";

import React, { useState } from "react";

function RegisterCard() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <h1>Comece gratuitamente</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Seu nome completo"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Nome do usuário"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Insira uma senha"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastre-se Agora</button>
      </form>
      <p>
        Já tem conta? <a href="#">Entre aqui</a>
      </p>
    </div>
  );
}

export default RegisterCard;
