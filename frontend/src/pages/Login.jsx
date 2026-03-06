import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await login(data);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-500">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input {...register("email")} placeholder="Email" className="input" />

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="input"
        />

        <button disabled={loading} className="btn-primary">
          {loading ? "Logging in..." : "Login"}
        </button>

        <Link to="/register" className="text-blue-500 text-sm">
          Create account
        </Link>
      </form>
    </div>
  );
};

export default Login;
