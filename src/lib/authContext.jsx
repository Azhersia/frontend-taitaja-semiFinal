'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetcher } from './fetcher';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const router = useRouter();

    async function checkSession() {
        try {
            const res = await fetcher.get('/api/auth/');
            if (res.status === 200) {
                setSession(res.data.session_id);
                if (res.data.user) {
                    setUser(res.data.user);
                    if (res.data.user.role === 'admin') {
                        setIsAdmin(true);
                    } 
                }
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Session check failed:', error);
            setUser(null);
            setSession(null);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        checkSession();
    }, []);


    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetcher.get('/api/logout/');
            if (res.status === 200) {
                setUser(null);
                setSession(null);
                setIsAdmin(false);
                router.replace('/login');
                
            }
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <AuthContext.Provider value={{ user, loading, logout, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

// Skapar en "custom hook" för att använda context
export const useAuth = () => useContext(AuthContext);