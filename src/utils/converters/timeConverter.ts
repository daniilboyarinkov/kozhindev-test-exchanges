export const timeConverter = (time: Date) =>
    time.toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
