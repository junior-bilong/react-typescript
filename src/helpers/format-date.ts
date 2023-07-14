import moment from "moment";

const formatDate = (date: Date = new Date()): string => {
    // console.log(date)
    return moment(date).utc().format("MMMM Do YYYY");
}

export default formatDate;