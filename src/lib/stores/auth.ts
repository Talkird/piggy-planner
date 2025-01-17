import type { User } from 'firebase/auth';
import { auth } from '../../firebase';
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { writable } from 'svelte/store';

export const currentUser = writable<User | null>(null);

export const login = async (email: string, password: string) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.error(error);
	}
};

export const logout = async () => {
	try {
		await signOut(auth);
		console.log('Logged out');
	} catch (error) {
		console.error(error);
	}
};

export const register = async (email: string, password: string) => {
	try {
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.error(error);
	}
};
