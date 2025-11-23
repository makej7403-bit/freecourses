"use client";
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Chat(){
  const router = useRouter();
  const [messages,setMessages]=useState([{role:'assistant',content:"Hello! I'm Akin's AI Assistant."}]);
  const [input,setInput]=useState('');
  const chatRef=useRef();

  useEffect(()=>{ const db=localStorage.getItem('users_db'); if(!db) router.push('/auth'); },[]);

  const send=async ()=>{
    if(!input.trim()) return;
    const userMsg={role:'user',content:input};
    setMessages(prev=>[...prev,userMsg]);
    setInput('');

    try{
      const res=await fetch('/api/ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:userMsg.content})});
      const data=await res.json();
      setMessages(prev=>[...prev,{role:'assistant',content:data.reply||'No reply'}]);
    }catch(err){ setMessages(prev=>[...prev,{role:'assistant',content:'Error contacting AI'}]); }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f9ff]">
      <header className="bg-blue-700 text-white p-4 text-center font-bold">AI Tutor — Akin</header>
      <div className="flex-1 p-6 overflow-y-auto">
        {messages.map((m,i)=>(<div key={i} className={m.role==='user'? 'text-right':'text-left'}><div className={`inline-block p-3 rounded ${m.role==='user'? 'bg-blue-600 text-white':'bg-gray-200 text-black'}`}>{m.content}</div></div>))}
      </div>
      <div className="p-4 bg-white flex gap-3">
        <input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 p-3 border rounded" placeholder="Ask anything..." />
        <button onClick={send} className="bg-blue-700 text-white px-6 py-2 rounded">Send</button>
      </div>
    </div>
  );
}
