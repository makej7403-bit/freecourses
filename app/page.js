import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div className="brand">FreeCourses by Akin</div>
        <nav>
          <Link href="/courses">Courses</Link>{' '}
          <Link href="/chat">AI Tutor</Link>{' '}
          <Link href="/donate">Donate</Link>{' '}
          <Link href="/scholarships">Scholarships</Link>{' '}
          <Link href="/admin/login">Admin</Link>
        </nav>
      </header>

      <section className="container" style={{marginTop:40}}>
        <h1 style={{fontSize:42,fontWeight:700,color:'#003b72'}}>Free Global Courses & AI Learning Powered by OpenAI</h1>
        <p style={{fontSize:18,marginTop:15}}>Learn anything—Nursing, Engineering, IT, Computer Science, Business, and more. Fully powered by OpenAI and created by <b>Akin S. Sokpah</b>.</p>
        <Link href="/courses"><button className="btn" style={{marginTop:20}}>Start Learning</button></Link>
      </section>

      <section className="container" style={{marginTop:40}}>
        <div className="card" style={{marginBottom:16}}>
          <h2>AI Chat Assistant</h2>
          <p>Ask anything. The AI will reply instantly with updated information.</p>
          <Link href="/chat"><button className="btn" style={{marginTop:12}}>Chat Now</button></Link>
        </div>

        <div className="card">
          <h2>Global Donations</h2>
          <p>Support Akin’s mission to give free education to the world.</p>
          <Link href="/donate"><button className="btn" style={{marginTop:12}}>Donate</button></Link>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} FreeCourses by Akin — Powered by OpenAI</footer>
    </div>
  );
}
