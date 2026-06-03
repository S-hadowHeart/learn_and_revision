import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;
const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name should atleast 3 char long")
    .regex(/^[A-Za-z\s'-]+$/, "Name must contain only letters and spaces"),
  email: z.string().email("Enter a valid Email"),
  password: z
    .string()
    .trim()
    .min(8, "Minimum 8 characters")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      "Password must contain uppercase, lowercase, and number",
    ),
});

export function Register() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function submitForm(data) {
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/auth/registration`, data, {
        withCredentials: true,
      });
      setIsError(false);

      setMessage("Registration Successful!");
    } catch (err) {
      setIsError(true);
      setMessage(err.response?.data?.error || "Something is wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-4"
        onSubmit={handleSubmit(submitForm)}
      >
        <h1 className="text-3xl font-bold text-center">Registertion</h1>
        <section>
          {message && (
            <p
              className={`text-center ${
                isError ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </section>
        <section>
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            {...register("name")}
            placeholder="Enter your Name"
            className="w-full border p-3 rounded-lg"
          />
          {errors.userName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.userName.message}
            </p>
          )}
        </section>

        <section>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            {...register("email")}
            placeholder="Enter your Email"
            className="w-full border p-3 rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </section>
        <section>
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            {...register("password")}
            placeholder="Enter your password"
            className="w-full border p-3 rounded-lg"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </section>
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-lg"
          disabled={loading}
          type="submit"
        >
          {loading ? "Registering ..." : "Register"}
        </button>
      </form>
    </main>
  );
}
