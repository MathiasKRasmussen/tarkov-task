import { writable } from 'svelte/store'
import { browser } from "$app/env"
import { standardUsername } from '$lib/util/variables'

export const userName = writable(browser && localStorage.getItem("userName") || standardUsername)
userName.subscribe((val) => { if (browser) return (localStorage.userName = val) })