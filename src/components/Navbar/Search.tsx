'use client';
import { searching } from "@/src/lib/redux/slices/FilterSearchSlice/FilterSearchSlice";
import { useDispatch } from "@/src/lib/redux/store";
import { usePathname, useRouter } from "next/navigation";;
import { useState } from "react";

export default function Search() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const path = usePathname();
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(searching(input));
        if(path !== '/'){
            router.push('/')
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
}
