'use client'

import { useAuth } from "@/lib/authContext";
import { fetcher } from "@/lib/fetcher";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function admin() {
    const { user, loading, logout, isAdmin } = useAuth();
    const router = useRouter();

    // set needed states
    const [teachers, setTeachers] = useState([])
    const [categories, setCategories] = useState([])
 
    // fetch data needed
    async function getStuff(){
    const teachers = await fetcher.get("/api/teachers/"); 
    const categories = await fetcher.get("/api/categories/"); 

     setTeachers(teachers.data.teachers)
     setCategories(categories.data.categories)
    }
    
    useEffect(()=> {
        if (!loading && !user) {
            router.push('/login');  // Redirect efter att komponenten har laddats
        }

        getStuff()
    }, [loading, user, router])
    if (loading || !user) return <p>Loading...</p>;

  return (
<div className="adminPage">
   

<div>
    {teachers.map((teacher)=> (
        <div key={teacher.id}>   
            <h1>{teacher.username}</h1>
        </div>
))}
</div>


<div>
    {categories.map((category)=> (
        <div key={category.id}>   
            <p>{category.name}</p>
        </div>
))}
</div>


</div>
  )
}