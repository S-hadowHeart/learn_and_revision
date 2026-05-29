import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().email("Enter a valid Email"),
    password : z.string().trim().min(8,"Minimum 8 characters").regex( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
            "Password must contain uppercase, lowercase, and number")

})

export function Register()
{
    const { register , handleSubmit , formState:{errors} } =  useForm({resolver:zodResolver(formSchema)});

    function submitForm(data)
    {
        console.log(data);
    }

    return(
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
        
        <form className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-4" onSubmit={handleSubmit(submitForm)}>
            <h1 className="text-3xl font-bold text-center">Registertion</h1>
            <section>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" name="email" {...register('email')} placeholder="Enter your Email" className="w-full border p-3 rounded-lg" />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                    </p>
                )}
            </section>
            <section>
                <label htmlFor="password" className="block mb-2">Password</label>
                <input type="password" name="password" {...register('password')} placeholder="Enter your password" className="w-full border p-3 rounded-lg" />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                    </p>
                )}
            </section>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg" type="submit">Login</button>
        </form>
        </main>
    );
}