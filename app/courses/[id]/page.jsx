"use client";
import { useRouter } from 'next/navigation';

export default function CourseDetail({ params }){
  const router = useRouter();
  const { id } = params;

  const courseData = {
    nursing: { title: 'Nursing Essentials', desc: 'Basic nursing course.' },
    'cs-basics': { title: 'Computer Science Basics', desc: 'Intro to CS' },
    software: { title: 'Software Engineering Basics', desc: 'Intro to SE' }
  };

  const course = courseData[id] || { title: 'Course', desc: 'Course details coming soon.' };

  return (
    <div className="min-h-screen p-10 bg-[#fefbf4]">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <button onClick={()=>router.back()} className="mb-4">← Back</button>
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="mt-4 text-gray-700">{course.desc}</p>
        <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-xl">Ask AI about this course</button>
      </div>
    </div>
  );
}
