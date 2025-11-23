"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CoursesPage(){
  const router = useRouter();
  const [user,setUser]=useState(null);
  useEffect(()=>{ const db=localStorage.getItem('users_db'); if(!db) return router.push('/auth'); const parsed=JSON.parse(db); setUser(parsed[parsed.length-1]); },[]);
  if(!user) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  const courses=[{id:'nursing', title:'Nursing Essentials'},{id:'cs-basics', title:'Computer Science Basics'},{id:'software', title:'Software Engineering Basics'}];

  return (
    <div className="min-h-screen p-10 bg-[#fefbf4]">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700">Available Courses</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map(c=> (
            <div key={c.id} className="p-4 bg-blue-50 rounded-xl cursor-pointer" onClick={()=>router.push(`/courses/${c.id}`)}>
              <h2 className="font-semibold text-lg">{c.title}</h2>
            </div>
          ))}
        </div>
        <button className="mt-8 w-full bg-gray-800 text-white py-3 rounded-xl" onClick={()=>router.push('/dashboard')}>Back to Dashboard</button>
      </div>
    </div>
  );
}
