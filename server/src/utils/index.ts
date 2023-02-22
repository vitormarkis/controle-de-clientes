import { Cliente } from "../server"

export const parseDatesWhitelist = ["data_entrega", "data_despacho"]

export function formatData(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
}
export function clientDate(date: string) {
  const newDate = new Date(date)
  return newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

export function parseDates(result: Cliente[]): Cliente[] {
  return result.map(cliente => {
    const tuples = Object.entries(cliente)
    const parsedTuples = tuples.map(([key, value]) => {
      return parseDatesWhitelist.includes(value) ? [key, formatData(value)] : [key, value]
    })
    return Object.fromEntries(parsedTuples)
  })
}

export function clientDates(result: Cliente[]): Cliente[] {
  return result.map(cliente => {
    const tuples = Object.entries(cliente)
    const parsedTuples = tuples.map(([key, value]) => {
      return parseDatesWhitelist.includes(key) ? [key, clientDate(value)] : [key, value]
    })
    return Object.fromEntries(parsedTuples)
  })
}
