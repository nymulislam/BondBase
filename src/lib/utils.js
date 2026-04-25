export const formatDate = (dateString) => {
    const option = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', option)
}
