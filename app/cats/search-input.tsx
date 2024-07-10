"use client";
import {ChangeEvent, useContext, useState} from "react";
import {SearchContext} from "./cats-context";

export function SearchInput() {

    const [search, setSearch] = useContext(SearchContext);

    function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    return (
        <label>
            Search:
            <input
                type="search"
                name="search"
                value={search}
                onChange={handleSearchChange}
            />
        </label>
    );
}
