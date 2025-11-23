"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BooksPage(){
  const router = useRouter();
  useEffect(()=>{ const db=localStorage.getItem('users_db'); if(!db) return router.push('/auth'); },[]);

  const books=[{title:'Intro to Nursing', link:'#'},{title:'Software Engineering Basics', link:'#'}];

  return (
    <div className="min-h-screen p-10 bg-[#fefbf4]">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700">Online Books</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((b,i)=> (
            <div key={i} className="p-4 bg-blue-50 rounded-xl" onClick={()=>window.open(b.link,'_blank')}>
              <h2 className="font-semibold">{b.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
