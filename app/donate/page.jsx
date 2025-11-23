"use client";

export default function Donate(){
  const copyText=(t)=>{ navigator.clipboard.writeText(t); alert('Copied'); };
  return (
    <div className="min-h-screen p-10 bg-[#fefbf4]">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700">Support The Creator</h1>
        <p className="mt-4">Mobile Money: +231889183557</p>
        <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded" onClick={()=>copyText('+231889183557')}>Copy Number</button>
        <p className="mt-4">Bank (UBA USD): 53020710015394</p>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded" onClick={()=>copyText('53020710015394')}>Copy Account</button>
      </div>
    </div>
  );
}
