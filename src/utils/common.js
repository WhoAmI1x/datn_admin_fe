const getAccessToken = () => localStorage.getItem("accessToken");

const removeAccessToken = () => localStorage.removeItem("accessToken");

const isFalsyValue = value => ["", null, undefined].includes(value);

const msToTime = s => {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    s = (s - mins) / 60;
    const hrs = s % 24;
    s = (s - hrs) / 24;
    const days = s % 24;

    return { days, hrs, mins, secs };
}

const getDateStringAndTime = milliseconds => {
    const date = new Date(milliseconds);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.toLocaleTimeString()}`
}

export { getAccessToken, removeAccessToken, isFalsyValue, msToTime, getDateStringAndTime };