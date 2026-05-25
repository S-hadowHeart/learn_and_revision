export function Login()
{
    return(
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
        
        <form className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-4">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <section>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" name="email" placeholder="Enter your Email" className="w-full border p-3 rounded-lg" />
            </section>
            <section>
                <label htmlFor="password" className="block mb-2">Password</label>
                <input type="password" name="password" placeholder="Enter your password" className="w-full border p-3 rounded-lg" />
            </section>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg" type="submit">Login</button>
        </form>
        </main>
    );
}

