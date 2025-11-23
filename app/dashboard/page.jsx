"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard(){
  const router = useRouter();
  const [user,setUser]=useState(null);

  useEffect(()=>{
    const data = localStorage.getItem('users_db');
    if(!data) return router.push('/auth');
    const parsed = JSON.parse(data); setUser(parsed[parsed.length-1]);
  },[]);

  if(!user) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen p-10 bg-[#fefbf4]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700">Welcome, {user.name}</h1>
        <p className="text-gray-700">Email: {user.email}</p>
        <p className="text-sm text-gray-500">Joined: {user.date}</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <button onClick={()=>router.push('/courses')} className="p-6 bg-blue-50 rounded-xl">Courses</button>
          <button onClick={()=>router.push('/chat')} className="p-6 bg-blue-100 rounded-xl">AI Tutor</button>
          <button onClick={()=>router.push('/books')} className="p-6 bg-blue-50 rounded-xl">Books</button>
          <button onClick={()=>router.push('/scholarships')} className="p-6 bg-blue-100 rounded-xl">Scholarships</button>
        </div>

        <button className="mt-8 w-full bg-red-600 text-white py-3 rounded-xl" onClick={()=>{ localStorage.removeItem('users_db'); window.location.href='/auth'; }}>Logout</button>
      </div>
    </div>
  );
}
