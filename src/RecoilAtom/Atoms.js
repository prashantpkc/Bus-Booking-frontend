import {atom} from "recoil"
export const BusAtom=atom({
    key:"busatom",
    default:[]
})
export const LoginAtom=atom({
    key:"loginatom",
    default:false
})
export const TickeAtom=atom({
    key:"ticket",
    default:{}
})