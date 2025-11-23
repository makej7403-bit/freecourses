"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Admin(){
  const router = useRouter();
  const [admin,setAdmin]=useState(null);
  useEffect(()=>{ const a = localStorage.getItem('admin_account'); if(!a) return router.push('/admin/login'); setAdmin(JSON.parse(a)); },[]);
  if(!admin) return <div className="h-screen flex items-center justify-center">Access Denied</div>;
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p>Welcome, {admin.name}</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button onClick={()=>router.push('/admin/users')} className="p-4 bg-blue-50 rounded">Manage Users</button>
          <button onClick={()=>alert('Manage content later')} className="p-4 bg-blue-50 rounded">Manage Courses</button>
        </div>
      </div>
    </div>
  );
}
