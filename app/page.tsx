// ===== ⭐️ ขั้นตอนที่ 1: Import ไอคอน (เปลี่ยนมาใช้ FaWindows) =====
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiPython,
  SiCentos
} from "react-icons/si";
// vvvv เราจะ Import ไอคอน Windows มาจาก "fa" (Font Awesome) แทน vvvv
import { FaWindows } from "react-icons/fa";

export default function HomePage() {
  return (
    // นี่คือ "กล่อง" หลักที่คุมทุกอย่าง
    <main className="bg-gray-900 text-white">

      {/* ===== 1. Hero Section (ส่วนต้อนรับ) ===== */}
      <section className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white md:text-7xl">
          PATTARAPON NGAMCHARAT
        </h1>
        <p className="mt-4 text-xl text-gray-300 md:text-2xl">
          junior developer
        </p>
        <p className="mt-2 text-lg text-gray-400">
          Welcome to my portfolio
        </p>
      </section>

      {/* ===== 2. About Me Section (เกี่ยวกับฉัน) ===== */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center text-4xl font-bold">
            About Me
          </h2>
          <p className="mt-8 text-center text-lg text-gray-300">
            I am currently studying at Sukhothai Thammathirat Open University (STOU) in the School of Science and Technology, majoring in Computer Science.
          </p>
        </div>
      </section>

      {/* ===== 3. Skills Section (ใช้ FaWindows) ===== */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center text-4xl font-bold">
            My Skills
          </h2>

          {/* กล่องเก็บการ์ดไอคอน */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">

            {/* (การ์ด 1-11 ... เหมือนเดิม ... ) */}
            
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiJavascript size={50} className="text-yellow-300" />
              <p className="font-medium">JavaScript</p>
            </div>
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiTypescript size={50} className="text-blue-400" />
              <p className="font-medium">TypeScript</p>
            </div>
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiReact size={50} className="text-sky-400" />
              <p className="font-medium">React</p>
            </div>
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiNextdotjs size={50} />
              <p className="font-medium">Next.js</p>
            </div>
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiTailwindcss size={50} className="text-cyan-400" />
              <p className="font-medium">Tailwind CSS</p>
            </div>
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiGit size={50} className="text-orange-500" />
              <p className="font-medium">Git</p>
            </div>
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiHtml5 size={50} className="text-orange-600" />
              <p className="font-medium">HTML5</p>
            </div>
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiCss3 size={50} className="text-blue-500" />
              <p className="font-medium">CSS3</p>
            </div>
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiPhp size={50} className="text-purple-400" />
              <p className="font-medium">PHP</p>
            </div>
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiPython size={50} className="text-yellow-400" />
              <p className="font-medium">Python</p>
            </div>
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <SiCentos size={50} className="text-purple-600" />
              <p className="font-medium">CentOS</p>
            </div>

            {/* ===== vvvv การ์ดที่แก้ไข (Windows) vvvv ===== */}
            
            {/* การ์ด 12: Windows Server */}
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              {/* เปลี่ยนมาใช้ FaWindows จาก 'fa' */}
              <FaWindows size={50} className="text-blue-600" />
              <p className="font-medium">WindowsServer</p>
            </div>
            
          </div>
        </div>
      </section>


      {/* ===== 4. Projects Section (จะมาทำต่อ) ===== */}
      {/* ===== 5. Contact Section (จะมาทำต่อ) ===== */}

    </main>
  );
}