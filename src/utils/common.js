const getAccessToken = () => localStorage.getItem("accessToken");

const removeAccessToken = () => localStorage.removeItem("accessToken");

const isFalsyValue = value => ["", null, undefined].includes(value);

const msToTime = s => {
    const date = new Date(s);
    const hours = date.getHours();
    const mins = date.getMinutes();

    return `${hours < 10 ? `0${hours}` : hours}:${mins < 10 ? `0${mins}` : mins}`;
}

const getDateStringAndTime = milliseconds => {
    const date = new Date(milliseconds);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.toLocaleTimeString()}`;
}

const moneyFormat = (number) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'vnd',
    });

    return formatter.format(number);
};

export { getAccessToken, removeAccessToken, isFalsyValue, msToTime, getDateStringAndTime, moneyFormat };