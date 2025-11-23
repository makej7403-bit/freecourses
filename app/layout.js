import './globals.css';

export const metadata = {
  title: 'FreeCourses by Akin',
  description: 'FreeCourses — AI-powered free courses platform by Akin S. Sokpah',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: 'linear-gradient(135deg, #f5e9d3, #c7e6ff)', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}
