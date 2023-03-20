import {
    getTimeString,
    getTimeDiff
} from "../core/utils/date";
import { JS_CREATION_DATE } from "../core/constants/dates"

export class TimerBlock {
    #timerContainer
    #timerTextHTML

    constructor() {
        this.#timerContainer = document.createElement("div");
        this.#timerTextHTML = document.createElement("h2");
    }

    render() {
        this.#timerContainer.id = "timer";
        this.#timerContainer.classList.add("timer-text");
        this.#timerTextHTML.textContent = getTimeDiff(new Date(), JS_CREATION_DATE);

        const todayDateHTML = document.createElement("div");
        todayDateHTML.classList.add("today-date");
        
        const todayDate = getTimeString(new Date());
        todayDateHTML.textContent = `Today is ${todayDate}`;

        this.#timerContainer.append(this.#timerTextHTML, todayDateHTML);
        this.#enableTimeUpdate();

        return this.#timerContainer;
    }

    #enableTimeUpdate() {
        setInterval(() => {
            this.#timerTextHTML.textContent = getTimeDiff(new Date(), JS_CREATION_DATE);
        }, 1000);
    }
}