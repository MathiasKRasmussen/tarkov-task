import { onDestroy } from 'svelte';

export function timeString(seconds: number): string {
    return hourString(seconds) + minuteString(seconds)
}

function hourString(seconds: number): string {
    if (seconds > 3600) {
        return Math.floor(seconds / 3600) + 'h '
    }
    return ''
}

function minuteString(seconds: number): string {
    if (seconds > 3600) {
        const afterHours: number = seconds % 3600
        return Math.floor(afterHours / 60) + 'm'
    }
    return Math.floor(seconds / 60) + 'm'
}

function hrs(num: number) {
    return 1000 * 60 * 60 * num;
}

// 1 second real time = 7 seconds tarkov time
export const tarkovRatio = 7;

export function realTimeToTarkovTime(time: Date, left: boolean) {
    // tarkov time moves at 7 seconds per second.
    // surprisingly, 00:00:00 does not equal unix 0... but it equals unix 10,800,000.
    // Which is 3 hours. What's also +3? Yep, St. Petersburg - MSK: UTC+3.
    // therefore, to convert real time to tarkov time,
    // tarkov time = (real time * 7 % 24 hr) + 3 hour
    const oneDay = hrs(24);
    const russia = hrs(3);

    const offset = russia + (left ? 0 : hrs(12));
    const tarkovTime = new Date((offset + (time.getTime() * tarkovRatio)) % oneDay);
    return tarkovTime;
}

// Formats the time to tarkov time
export function formatHMS(date: Date) {
    return [date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()].map(x => x.toString().padStart(2, '0')).join(':');
}


export function onInterval(callback, milliseconds) {
    const interval = setInterval(callback, milliseconds);

    onDestroy(() => {
        clearInterval(interval);
    });
}