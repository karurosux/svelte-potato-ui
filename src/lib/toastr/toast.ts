import { writable } from 'svelte/store';

export type ToastMessage = {
	message: string;
	duration?: number;
	toastClass?: string;
};

export const toastMessage = writable<ToastMessage>();
