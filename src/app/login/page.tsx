"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
<div className="flex flex-col items-center justify-center min-h-screen py-4 px-6 bg-gray-50">
  <h1 className="text-2xl font-bold mb-4">{loading ? "Processing..." : "Login"}</h1>
  <hr className="w-full max-w-md border-gray-300 mb-4" />
  
  <form className="w-full max-w-md space-y-4">
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input
        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-black"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
    </div>
    
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input
        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
    </div>
    
    <button
      onClick={onLogin}
      disabled={buttonDisabled}
      className={`p-2 w-full border border-gray-300 rounded-lg text-white font-bold ${buttonDisabled ? 'bg-gray-400' : 'bg-gray-600 hover:bg-gray-700'} focus:outline-none focus:ring-2 focus:ring-gray-600`}
    >
      {buttonDisabled ? "No Login" : "Login"}
    </button>
  </form>
  
  <Link href="/signup" className="mt-4 text-blue-600 hover:underline">Visit Signup page</Link>
</div>
    )

}