"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Scholarships(){
  const router = useRouter();
  useEffect(()=>{ const db=localStorage.getItem('users_db'); if(!db) return router.push('/auth'); },[]);

  const list=[{title:'DAAD', link:'https://www.daad.de'},{title:'Chevening', link:'https://www.chevening.org'}];

  return (
    <div className="min-h-screen p-10 bg-[#fefbf4]">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700">Global Scholarships</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {list.map((s,i)=>(<div key={i} className="p-4 bg-blue-50 rounded-xl" onClick={()=>window.open(s.link,'_blank')}><h2 className="font-semibold">{s.title}</h2></div>))}
        </div>
      </div>
    </div>
  );
}
