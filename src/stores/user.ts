import { writable } from 'svelte/store'
import { browser } from "$app/env"
// Storing player name in browser
export const userName = writable(browser && localStorage.getItem("userName") || '')
userName.subscribe((val) => { if (browser) return (localStorage.userName = val) })