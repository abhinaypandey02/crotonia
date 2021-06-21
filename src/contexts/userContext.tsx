import React, { createContext, useContext, useEffect, useState } from "react";
import UserInterface from "../interfaces/userInterface";
import { getUserFirestore } from "../utils/firebase/firestore";
import fire from "../utils/firebase/main";

const USER_CONTEXT = createContext<
    [
        UserInterface | undefined | null,
        React.Dispatch<React.SetStateAction<UserInterface | null | undefined>>
    ]
>([undefined, () => {}]);

export function useUser() {
    return useContext(USER_CONTEXT);
}

export default function UserContext({ children }: any) {
    const [user, setUser] =
        useState<UserInterface | undefined | null>(undefined);

    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (user && user.email)
                getUserFirestore(user.email).then((userData) =>
                    setUser(userData)
                );
            else setUser(null);
        });
    }, []);

    return (
        <USER_CONTEXT.Provider value={[user, setUser]}>
            {children}
        </USER_CONTEXT.Provider>
    );
}
