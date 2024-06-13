import cache from "@mongez/cache";
import { atom } from 'recoil';


export const todoListRecoilState = atom({
    key: "todoRecoilState",
    default: cache.get("todoRecoil") && cache.get("todoRecoil") || []
})