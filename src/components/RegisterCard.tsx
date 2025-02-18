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
    <div
      className="flex flex-col bg-white  p-6 m-6 rounded-lg
      lg:p-0 lg:py-4 lg:mt-[3rem] lg:mb-[7rem] lg:w-[19rem] lg:rounded-sm"
    >
      <div className="flex items-center pb-8 lg:pb-5 lg:items-start lg:pl-6">
        <h1 className="text-[#5D47E9] text-[1.3rem] border-b border-[#5D47E9] pb-2 lg:text-[0.8rem]">
          Comece
        </h1>
        <h1 className="text-[#5D47E9] text-[1.3rem] text-center pl-1 pb-[0.6rem] lg:text-[0.8rem]">
          gratuitamente
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center space-y-5 pb-4
        lg:pb-3 lg:space-y-3 lg:px-6"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Seu nome completo"
          value={formData.fullName}
          onChange={handleChange}
          className="pl-4 w-[100%] h-[2.6rem] rounded-lg border border-[#D9D9D9]-300 align-center text-[#5A5F64]
          lg:text-[0.58rem] lg:h-[1.5rem] lg:rounded-sm lg:pl-3"
        />
        <input
          type="text"
          name="username"
          placeholder="Nome do usuário"
          value={formData.username}
          onChange={handleChange}
          className="pl-4 w-[100%] h-[2.6rem] rounded-lg border border-[#D9D9D9]-300 align-center text-[#5A5F64]
          lg:text-[0.58rem] lg:h-[1.5rem] lg:rounded-sm lg:pl-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="pl-4 w-[100%] h-[2.6rem] rounded-lg border border-[#D9D9D9]-300 align-center text-[#5A5F64]
          lg:text-[0.58rem] lg:h-[1.5rem] lg:rounded-sm lg:pl-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Insira uma senha"
          value={formData.password}
          onChange={handleChange}
          className="pl-4 w-[100%] h-[2.6rem] rounded-lg border border-[#D9D9D9]-300 align-center text-[#5A5F64]
          lg:text-[0.58rem] lg:h-[1.5rem] lg:rounded-sm lg:pl-3"
        />
        <button
          type="submit"
          className="bg-[#009F51] h-[2.6rem] rounded-lg text-white
          lg:h-[1.5rem] lg:text-[0.65rem] lg:rounded-sm"
        >
          Cadastre-se agora
        </button>
      </form>
      <p className="text-center text-[#5A5F64] lg:text-[0.58rem]">
        Já tem conta?{" "}
        <a href="#" className="text-[#5D47E9]">
          Entre aqui
        </a>
      </p>
    </div>
  );
}

export default RegisterCard;
