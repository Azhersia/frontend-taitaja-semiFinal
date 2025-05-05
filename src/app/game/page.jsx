'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("5");
  const [teachers, setTeachers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  async function getData() {
    try {
      const teachersRes = await fetcher.get("/api/teachers/");
      const categoriesRes = await fetcher.get("/api/categories/");
      const questionsRes = await fetcher.get("/api/questions/");

      setTeachers(teachersRes.data.teachers);
      setCategories(categoriesRes.data.categories);
      setQuestions(questionsRes.data.questions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="gameContainer">
      <div className="gameLeft">
        <h2>Aloita peli</h2>

        {/* Teachers Dropdown */}
        <p>Opettaja</p>
        <select value={selectedTeacher} onChange={(e) => setSelectedTeacher(e.target.value)}>
          <option value="">Valitse opettaja</option>
          {teachers.map((teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.username}
            </option>
          ))}
        </select>

        {/* Categories Dropdown */}
        <p>Kategoria</p>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Valitse kategoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <p className="gameChooseText">Valitse kysymysten määrä</p>

        <label>
          <input
            type="radio"
            value="5"
            checked={selectedOption === "5"}
            onChange={(e) => setSelectedOption(e.target.value)}
            />
          Lyhyt (5)
        </label>
        <label>
          <input
            type="radio"
            value="10"
            checked={selectedOption === "10"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Kekipitkä (10)
        </label>
        <label>
          <input
            type="radio"
            value="15"
            checked={selectedOption === "15"}
            onChange={(e) => setSelectedOption(e.target.value)}
            />
          Pitkä (15)
        </label>
         <Link href="/quizquestions"> <button className="gameButton">Aloita Peli</button></Link>
      </div>

      {/* Right Side - Full-Height Image */}
      <div className="gameRight">
        <Image
          src="/img/home.png"  // Replace with your actual image path
          alt="Game Background"
          width={500}
          height={500}
        />
      </div>



    </div>
  );
}