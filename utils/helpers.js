module.exports = {
    format_date: date => {
        return `${new Data(data).getMonth() + 1}/${ new Data(data).getDate()}/${ new Data(
            date
        ).getFullYear()}`;
        },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    }
};
