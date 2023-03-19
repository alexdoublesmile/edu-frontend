import {
    getTimeString,
    getTimeDiff
} from "../core/utils/date";
import JS_CREATION_DATE from "../core/constants/date-constants"

export class TimerBlock {
    #date
    #timerContainer
    #timerTextHTML

    constructor(date) {
        this.#date = date;
        this.#timerContainer = document.createElement("div");
        this.#timerTextHTML = document.createElement("h2");
    }

    render() {
        this.#timerContainer.id = "timer";
        this.#timerContainer.classList.add("timer-text");

        this.#timerTextHTML.textContent = getTimeDiff(
            getTimeString(new Date()), getTimeString(JS_CREATION_DATE));

        const todayDateHTML = document.createElement("div");
        todayDateHTML.classList.add("today-date");
        todayDateHTML.textContent = new Date();

        this.#timerContainer.append(this.#timerTextHTML, todayDateHTML);

        return this.#timerContainer;
    }
}