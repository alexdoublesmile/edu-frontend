import moment from "moment";
import "moment-precise-range-plugin";

export const getTimeString = date => 
    moment(date).format("MMM Do YY");

export const getTimeDiff = (firstDate, secondDate) => 
    moment.preciseDiff(moment(firstDate), moment(secondDate));
