"use client";

import { useEffect } from 'react';
import { auth, provider } from '@/lib/firebase';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function AuthPage(){
  const router = useRouter();

  const loginWithGoogle = async ()=>{
    try{
      const result = await signInWithPopup(auth, provider);
      const existing = JSON.parse(localStorage.getItem('users_db')) || [];
      existing.push({ name: result.user.displayName, email: result.user.email, date: new Date().toLocaleString() });
      localStorage.setItem('users_db', JSON.stringify(existing));

      if(result.user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL){
        localStorage.setItem('admin_account', JSON.stringify({ name: 'Akin S. Sokpah', email: result.user.email }));
        router.push('/admin');
        return;
      }

      router.push('/dashboard');
    }catch(err){
      alert('Error logging in: '+err.message);
    }
  };

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(user)=>{ if(user){ if(user.email===process.env.NEXT_PUBLIC_ADMIN_EMAIL) router.push('/admin'); else router.push('/dashboard'); }});
    return ()=>unsub();
  },[router]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="bg-white p-10 rounded-xl shadow text-center max-w-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Login To Your Account</h1>
        <p className="text-gray-600 mb-6">Sign in to access courses, books, scholarships, and AI assistant.</p>
        <button onClick={loginWithGoogle} className="bg-blue-700 text-white px-6 py-3 rounded-xl">Continue with Google</button>
      </div>
    </div>
  );
}
