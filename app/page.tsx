// ===== ⭐️ ขั้นตอนที่ 1: Import ไอคอน (เพิ่ม FiExternalLink) และ Image =====
import Image from "next/image";

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
  SiCentos,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi"; // <-- เพิ่มไอคอนนี้สำหรับปุ่ม "Visit Site"

export default function HomePage() {
  return (
    // นี่คือ "กล่อง" หลักที่คุมทุกอย่าง
    <main className="bg-gray-900 text-white">

      {/* ===== HEADER / NAVBAR (เหมือนเดิม) ===== */}
      <header className="sticky top-0 z-50 w-full bg-gray-900/80 backdrop-blur-sm">
        <nav className="container mx-auto flex max-w-4xl items-center justify-between p-4">
          {/* ส่วนด้านซ้าย: "รูปโปรไฟล์" + "ชื่อ" */}
          <a href="#hero" className="flex items-center gap-2 text-xl font-bold text-white hover:text-gray-300">
            <Image
              src="/profile-avatar.jpg" // <-- (ต้องแน่ใจว่าคุณมีรูปนี้ใน public folder นะครับ)
              alt="Pattarapon's Profile Picture"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span>PATTARAPON N.</span>
          </a>

          {/* ส่วนด้านขวา: ลิงก์เมนู (เหมือนเดิม) */}
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-gray-300 hover:text-white">
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-300 hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-300 hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* ===== 1. Hero Section (เหมือนเดิม) ===== */}
      <section id="hero" className="flex h-screen flex-col items-center justify-center">
        {/* ... (เหมือนเดิม) ... */}
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

      {/* ===== 2. About Me Section (เหมือนเดิม) ===== */}
      <section id="about" className="py-20">
        {/* ... (เหมือนเดิม) ... */}
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center text-4xl font-bold">
            About Me
          </h2>
          <p className="mt-8 text-center text-lg text-gray-300">
            I am currently studying at Sukhothai Thammathirat Open University (STOU) in the School of Science and Technology, majoring in Computer Science.
          </p>
        </div>
      </section>

      {/* ===== 3. Skills Section (เหมือนเดิม) ===== */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center text-4xl font-bold">
            My Skills
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {/* ... (โค้ดไอคอน 12 อันของคุณ เหมือนเดิมเป๊ะ) ... */}
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
            <div className="flex w-36 flex-col items-center gap-2 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105">
              <FaWindows size={50} className="text-blue-600" />
              <p className="font-medium">WindowsServer</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. Projects Section (อัปเดตแล้ว!) ===== */}
      <section id="projects" className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center text-4xl font-bold">
            My Projects
          </h2>
          
          {/* กล่องเก็บ "การ์ดโปรเจกต์" */}
          {/* md:grid-cols-2 = จอขนาดกลางขึ้นไป ให้แสดง 2 คอลัมน์ */}
          {/* lg:grid-cols-3 = จอขนาดใหญ่ขึ้นไป ให้แสดง 3 คอลัมน์ */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* --- การ์ด 1: MD Wallpaper --- */}
            <div className="flex flex-col rounded-lg bg-gray-800 p-6 shadow-lg transition-transform hover:scale-105">
              <h3 className="mb-2 text-2xl font-bold text-white">
                MD Wallpaper
              </h3>
              <p className="mb-4 flex-grow text-gray-300">
                เว็บไซต์แคตตาล็อกสำหรับ เอ็มดี วอลล์เปเปอร์ นำเสนอวอลเปเปอร์ ผ้าม่าน และวัสดุตกแต่งภายใน
              </p>
              <a 
                href="https://www.mdwallpaper.com/"
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700"
              >
                Visit Site
                <FiExternalLink className="ml-2" />
              </a>
            </div>

            {/* --- การ์ด 2: MDI Wallpaper --- */}
            <div className="flex flex-col rounded-lg bg-gray-800 p-6 shadow-lg transition-transform hover:scale-105">
              <h3 className="mb-2 text-2xl font-bold text-white">
                MDI Wallpaper
              </h3>
              <p className="mb-4 flex-grow text-gray-300">
                เว็บไซต์สำหรับ บริษัท เอ็มดีไอ วอลเปเปอร์ จำกัด นำเสนอข้อมูลสินค้าและบริการเกี่ยวกับวอลเปเปอร์
              </p>
              <a 
                href="https://mdiwallpaper.com/"
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700"
              >
                Visit Site
                <FiExternalLink className="ml-2" />
              </a>
            </div>

            {/* --- การ์ด 3: Siridecor Inter --- */}
            <div className="flex flex-col rounded-lg bg-gray-800 p-6 shadow-lg transition-transform hover:scale-105">
              <h3 className="mb-2 text-2xl font-bold text-white">
                Siridecor Inter
              </h3>
              <p className="mb-4 flex-grow text-gray-300">
                เว็บไซต์ E-commerce สำหรับ SIRIDECOR INTER นำเสนอผ้าม่าน วอลเปเปอร์ และมู่ลี่หลากหลายชนิด
              </p>
              <a 
                href="https://siridecorinter.com/"
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700"
              >
                Visit Site
                <FiExternalLink className="ml-2" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ===== 5. Contact Section (เหมือนเดิม) ===== */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center text-4xl font-bold">
            Contact Me
          </h2>
          <p className="mt-4 text-center text-lg text-gray-300">
            Feel free to reach out! You can find me here:
          </p>
          
          {/* กล่องเก็บ "ปุ่ม" Contact (ลิงก์ของคุณ ถูกต้องอยู่แล้ว) */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {/* ... (ปุ่ม Contact 3 ปุ่ม เหมือนเดิม) ... */}
            <a 
              href="mailto:pattarapontan@gmail.com" 
              className="flex items-center gap-3 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105 hover:bg-gray-600"
            >
              <MdOutlineEmail size={30} className="text-red-400" />
              <span className="text-lg font-medium">pattarapontan@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/pattarapon-ngamcharat-830357396" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105 hover:bg-gray-600"
            >
              <SiLinkedin size={30} className="text-blue-500" />
              <span className="text-lg font-medium">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/vebyobit15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-gray-700 p-4 transition-transform hover:scale-105 hover:bg-gray-600"
            >
              <SiGithub size={30} />
              <span className="text-lg font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}