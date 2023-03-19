export class Timer {
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

        this.#timerTextHTML.textContent = "TIME";

        const todayDateHTML = document.createElement("div");
        todayDateHTML.classList.add("today-date");
        todayDateHTML.textContent = new Date();

        this.#timerContainer.append(this.#timerTextHTML, todayDateHTML);

        return this.#timerContainer;
    }
}