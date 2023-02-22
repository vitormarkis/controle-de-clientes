export function formatData(fields: object) {
  const tuples = Object.entries(fields)
  const formattedTuples = tuples.map(([key, value]) => {
    // console.log({ value, key })
    return [key, value.trim()]
  })
  return Object.fromEntries(formattedTuples)
}
