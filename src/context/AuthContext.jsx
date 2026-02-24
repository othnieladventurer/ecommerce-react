import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(localStorage.getItem("currentUserEmail") ? { email: localStorage.getItem("currentUserEmail") } : null);

    function signup(email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if(users.find((u) => u.email === email)) {
            return { success: false, error: "Email already exists" };
        }

        const newUser = { email, password };
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUserEmail", email);
        setUser(newUser); // <-- important to update React state

        return { success: true, user: newUser };
    }

    function login(email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = users.find((u) => u.email === email && u.password === password);

        if (!foundUser) {
            return { success: false, error: "Invalid email or password" };
        }

        // Update React state and localStorage
        setUser(foundUser);
        localStorage.setItem("currentUserEmail", foundUser.email);

        return { success: true, user: foundUser };
    }


    function logout() {
        
        localStorage.removeItem("currentUserEmail");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}