import dayjs from "dayjs";


export const getDaysOfWeek = () => {
    const arrayWeek: string[] = []
    for (let i = 1; i < 8; i++) {
        arrayWeek.push(dayjs().day(i).format('ddd').toUpperCase())
    }
    return arrayWeek
}