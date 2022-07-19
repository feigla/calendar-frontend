import dayjs from "dayjs";

export const getMonth = (month = dayjs().month()) => {
    const year = dayjs().year()
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
    const lastDayOfTheMonth = dayjs(new Date(year, month, 1)).daysInMonth()

    let daysMonthPage = 1 - firstDayOfTheMonth

    const monthPage = new Array(5).fill([]).map(() => {
        return new Array(7).fill([]).map(() => {
            daysMonthPage++ // iterate through all days of a month page in a calendar
            if (daysMonthPage < 1 || daysMonthPage > lastDayOfTheMonth) {
                return
            }
            return dayjs(new Date(year, month, daysMonthPage))
        })
    })
    return monthPage
}