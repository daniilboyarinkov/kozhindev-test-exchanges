export const dateConverter = (date: Date) =>
    date.toLocaleDateString('ru', {
        year: '2-digit',
        month: 'long',
        day: '2-digit',
    });
