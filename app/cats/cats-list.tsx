"use client";
import React, {ChangeEvent, useContext, useState} from "react";
import {ListContext, SearchContext} from "./cats-context";

export function CatsList() {

    const search = useContext(SearchContext);
    const list = useContext(ListContext);

    return (
        <div className="search">
            {list.filter(cat => cat.breed.includes(search[0])).map(x => <li key={x.breed}> {x.breed}</li>)}
        </div>
    );
}
