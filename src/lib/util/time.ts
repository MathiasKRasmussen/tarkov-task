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