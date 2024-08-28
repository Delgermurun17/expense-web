"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [newInput, setNewinput] = useState("");

  function loadList() {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }

  useEffect(() => {
    loadList();
  }, []);


  function createNew() {
    if (!newInput) return;

    fetch(`http://localhost:5000/category`, {
      method: "POST",
      body: JSON.stringify({ name: newInput, color: color, icon, icon }),
      headers: {
        "Content-type": "Application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setNewinput("")
        loadList();
      });
  }

  function ChangeInput(event){
    setNewinput(event.target.value)
  }

  function enter(event) {
    if (event.key === "Enter") {
      createNew();
    }
  }

  return (
    <main>
      <Link href={"/login"}>
        <button className="login-btn text-white text-xl font-normal">
          Login
        </button>
      </Link>

      <div className="mt-52 flex justify-center flex-col items-center gap-20">
        <input
          onKeyDown={enter}
          value={newInput}
          onChange={ChangeInput}
          className="input"
          type="text"
          placeholder="Name"
        />
        <button onClick={createNew} className="btn">
          Add new
        </button>
        <div className="flex flex-col w-[500px] gap-5">
          {categories.map((category) => (
            <div
              className="flex gap-20 justify-between items-center"
              key={category.id}
            >
              <input className="bg-white" disabled value={category.name} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}