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
    <div className="flex flex-col bg-white p-6 m-6 rounded-lg">
      <div className="flex items-center pb-8">
        <h1 className="text-[#5D47E9] text-[1.3rem] border-b border-[#5D47E9] pb-2">
          Comece
        </h1>
        <h1 className="text-[#5D47E9] text-[1.3rem] text-center pl-1 pb-[0.6rem]">
          gratuitamente
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center space-y-5 pb-4 "
      >
        <input
          type="text"
          name="fullName"
          placeholder="Seu nome completo"
          value={formData.fullName}
          onChange={handleChange}
          className="pl-4 w-[100%] h-[2.6rem] rounded-lg border border-[#D9D9D9]-300 align-center text-[#5A5F64] "
        />
        <input
          type="text"
          name="username"
          placeholder="Nome do usuário"
          value={formData.username}
          onChange={handleChange}
          className="pl-4 w-[100%] h-[2.6rem] rounded-lg border border-[#D9D9D9]-300 align-center text-[#5A5F64] "
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="pl-4 w-[100%] h-[2.6rem] rounded-lg border border-[#D9D9D9]-300 align-center text-[#5A5F64] "
        />

        <input
          type="password"
          name="password"
          placeholder="Insira uma senha"
          value={formData.password}
          onChange={handleChange}
          className="pl-4 w-[100%] h-[2.6rem] rounded-lg border border-[#D9D9D9]-300 align-center text-[#5A5F64] "
        />
        <button
          type="submit"
          className="bg-[#009F51] h-[2.6rem] rounded-lg text-white"
        >
          Cadastre-se agora
        </button>
      </form>
      <p className="text-center text-[#5A5F64]">
        Já tem conta?{" "}
        <a href="#" className="text-[#5D47E9]">
          Entre aqui
        </a>
      </p>
    </div>
  );
}

export default RegisterCard;
