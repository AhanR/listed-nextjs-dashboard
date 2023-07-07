/* eslint react/no-unescaped-entities */
'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className="grid grid-cols-5 w-screen min-h-screen">
      <div className="flex justify-center items-center text-5xl font-black bg-black col-span-5 md:col-span-2 h-full text-white p-8">Board.</div>
      <div className="md:col-span-3 col-span-5 bg-[#F5F5F5] h-full flex justify-center items-center">
        <div className="md:w-[50%] w-full p-8">
          <h1 className="text-3xl font-bold ">Sign In</h1>
          <h3 className="text-sm">Sign in to your account</h3>
          <div className="grid grid-cols-2 gap-4 my-4 box-border">
            <button className="rounded-xl px-4 py-2 text-[#858585] text-xs text-center bg-white box-border">Sign in with Google</button>
            <button className="rounded-xl px-4 py-2 text-[#858585] text-xs text-center bg-white box-border">Sign in with Apple</button>
          </div>
          <form className="p-8 rounded-xl bg-white grid gap-2 box-border"
            onSubmit={(e)=>{
              // do some validation
              e.preventDefault();
              router.push("/dashboard");
            }}
          >
            <label className=" text-sm" htmlFor="email">Email</label>
            <input className="rounded-xl px-4 py-2 bg-[#F5F5F5] mb-4 box-border" type="email" name="email" id="email" />
            <label className=" text-sm" htmlFor="password">Password</label>
            <input className="rounded-xl px-4 py-2 bg-[#F5F5F5] mb-4 box-border" type="password" name="password" id="password" />
            <a href="" className="text-[#346BD4] text-sm">Forgot password</a>
            <input className="bg-black rounded-xl text-white p-2 mt-4 font-bold" type="submit" value="Sign In" />
          </form>
          <div className="text-center m-4 text-sm text-[#858585]">
            Don't have an account? <a className="text-[#346BD4]">Register here</a>
          </div>
        </div>
      </div>
    </main>
    )
}
