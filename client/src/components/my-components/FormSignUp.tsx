import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  fullName: string;
  email: string;
  password: string;
};

function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label className="block text-gray-700">Nome Completo</label>
          <input
            {...register("fullName", { required: "Nome completo é obrigatório" })}
            className="w-full p-2 border border-gray-300 rounded-xl mt-1 autofill:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email é obrigatório", pattern: { value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, message: "Email inválido" } })}
            className="w-full p-2 border border-gray-300 rounded-xl mt-1 autofill:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Senha</label>
          <input
            type="password"
            {...register("password", { required: "Senha é obrigatória", minLength: { value: 6, message: "A senha deve ter pelo menos 6 caracteres" } })}
            className="w-full p-2 border border-gray-300 rounded-xl mt-1 autofill:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded duration-200 hover:bg-blue-600 hover:scale-[1.02] transition-all ">
          Registrar-se
        </button>
      </form>
    </div>
  );
}

export default FormSignUp;