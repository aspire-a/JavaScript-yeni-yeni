'use client';
import React, {useContext, useEffect, useState} from 'react';
import {ListContext, SearchContext} from "@/app/cats/cats-context";
import {SearchInput} from "@/app/cats/search-input";
import {CatsList} from "@/app/cats/cats-list";
import {list} from "postcss";

export interface Cat {
    breed: string;
}

export default function Home() {
    const [cats, setCats] = useState<Cat[]>([]);
    const search = useState("");

    useEffect(() => {
        async function fetchCats() {
            const res = await fetch("https://catfact.ninja/breeds");
            const json = await res.json();
            setCats(json.data);
        }

        fetchCats();
    }, [])

    return (
        <main>

            <SearchContext.Provider value={search}>
                <SearchInput/>
                <ListContext.Provider value={cats}>
                    <CatsList/>
                </ListContext.Provider>
            </SearchContext.Provider>
        </main>
    );
}