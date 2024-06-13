import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";


export const todoListMongezAtom = atom({
    key: "todoMongezAtom",
    default: cache.get("todoMongez") && cache.get("todoMongez") || []
})