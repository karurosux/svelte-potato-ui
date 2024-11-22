import { writable } from 'svelte/store';

export type ToastMessage = {
	message: string;
	duration?: number;
};

export const toastMessage = writable<ToastMessage>();
