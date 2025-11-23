"use client";
import { useEffect, useState } from 'react';

export default function AdminUsers(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{ const u = JSON.parse(localStorage.getItem('users_db')||'[]'); setUsers(u); },[]);
  return (
    <div className="min-h-screen p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-4">Registered Users</h1>
        {users.length===0? <p>No users yet</p> : (<table className="w-full"><thead><tr><th>Name</th><th>Email</th><th>Date</th></tr></thead><tbody>{users.map((u,i)=>(<tr key={i}><td className="p-2">{u.name}</td><td>{u.email}</td><td>{u.date}</td></tr>))}</tbody></table>)}
      </div>
    </div>
  );
}
