import {createContext} from "react";
import {Cat} from "@/app/cats/page";

type ContextType = [string, (x: string) => void];

export const SearchContext = createContext<ContextType>(["", () => undefined]);
export const ListContext = createContext<Cat[]>([]);