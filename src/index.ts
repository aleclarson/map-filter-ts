export function mapFilter<T, U>(
  values: Iterable<T>,
  map: (value: T) => U | undefined | void
): U[] {
  const results = []
  for (let value of values as Iterable<any>) {
    value = map(value)
    if (value !== undefined) {
      results.push(value)
    }
  }
  return results
}
