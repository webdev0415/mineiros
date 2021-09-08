export const formatDate = (date: Date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleString()
}

export const dateTime = (date: Date) => date.toLocaleDateString().split('T')[0]

export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200 // Average case.
  const textLength = text.split(' ').length

  return Math.ceil(textLength / wordsPerMinute)
}
