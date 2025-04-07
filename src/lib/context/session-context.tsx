"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the session type
type SessionType = {
	id: string;
	role: string;
} | null;

// Define the context type
type SessionContextType = {
	session: SessionType;
	createSession: (id: string, role: string) => void;
	logOut: () => void;
};

// Create the context with default values
const SessionContext = createContext<SessionContextType>({
	session: null,
	createSession: () => {},
	logOut: () => {},
});

// Provider component
export function SessionProvider({ children }: { children: ReactNode }) {
	const [session, setSession] = useState<SessionType>(null);

	// Initialize session from localStorage on mount
	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedSession = localStorage.getItem("session");
			if (storedSession) {
				setSession(JSON.parse(storedSession));
			}
		}
	}, []);

	// Create session function
	const createSession = (id: string, role: string) => {
		const newSession = { id, role };
		setSession(newSession);
		localStorage.setItem("session", JSON.stringify(newSession));
		localStorage.setItem("isLoggedIn", JSON.stringify(true));
	};

	// Logout function
	const logOut = () => {
		setSession(null);
		localStorage.removeItem("session");
		localStorage.removeItem("isLoggedIn");
	};

	return (
		<SessionContext.Provider value={{ session, createSession, logOut }}>
			{children}
		</SessionContext.Provider>
	);
}

// Custom hook for using the session context
export function useSession() {
	const context = useContext(SessionContext);
	if (context === undefined) {
		throw new Error("useSession must be used within a SessionProvider");
	}
	return context;
}
