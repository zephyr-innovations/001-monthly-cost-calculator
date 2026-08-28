/**
 * Get the monthly multiplier for a given frequency
 * @param {string} frequency - The frequency of the expense (daily, weekly, bi-weekly, monthly, quarterly, yearly)
 * @returns {number} The multiplier to convert the frequency to monthly
 */
function getMonthlyMultiplier(frequency) {
  // Normalize frequency to lowercase for consistent matching
  const normalizedFrequency = frequency?.toLowerCase() || ''
  
  switch (normalizedFrequency) {
    case 'daily':
      return 365.25 / 12  // Average days in a year ÷ months
    case 'weekly':
      return 52 / 12      // Weeks in a year ÷ months
    case 'bi-weekly':
      return 26 / 12      // Bi-weeks in a year ÷ months
    case 'monthly':
      return 1            // Already monthly
    case 'quarterly':
      return 1 / 3        // One quarter of a month
    case 'yearly':
      return 1 / 12       // One month of a year
    default:
      return 1            // Default to monthly if frequency is unknown
  }
}

/**
 * Safely format a number to 2 decimal places
 * @param {number} value - The number to format
 * @returns {string} Formatted number string
 */
function safeFormat(value) {
  // Handle invalid values
  if (value === null || value === undefined || typeof value !== 'number') {
    return '0.00'
  }
  
  // Handle NaN and Infinity
  if (!isFinite(value) || isNaN(value)) {
    return '0.00'
  }
  
  // Round to 2 decimal places
  const rounded = Math.round(value * 100) / 100
  
  // Ensure we don't exceed safe integer range
  if (rounded > Number.MAX_SAFE_INTEGER) {
    return '0.00'
  }
  
  return rounded.toFixed(2)
}

/**
 * Calculate the monthly equivalent of an expense
 * @param {number} amount - The monetary amount of the expense
 * @param {string} frequency - The frequency of the expense (daily, weekly, bi-weekly, monthly, quarterly, yearly)
 * @returns {number} The monthly equivalent amount
 */
function calculateMonthly(amount, frequency) {
  // Handle invalid amount (null, undefined, or not a number)
  if (amount === null || amount === undefined || typeof amount !== 'number') {
    return 0
  }
  
  // Handle negative amounts
  if (amount < 0) {
    return 0
  }
  
  // Handle NaN and Infinity
  if (!isFinite(amount) || isNaN(amount)) {
    return 0
  }
  
  // Cap amount at a reasonable maximum (10 trillion)
  const MAX_SAFE_AMOUNT = 10000000000000 // 10,000,000,000,000
  const safeAmount = Math.min(amount, MAX_SAFE_AMOUNT)
  
  // Get the multiplier for the frequency
  const multiplier = getMonthlyMultiplier(frequency)
  
  // Calculate monthly equivalent
  let result = safeAmount * multiplier
  
  // Check if result is safe
  if (!isFinite(result) || isNaN(result) || result > Number.MAX_SAFE_INTEGER) {
    return 0
  }
  
  // Round to 2 decimal places to prevent floating point issues
  return Math.round(result * 100) / 100
}

// Export functions for use in other files
export { getMonthlyMultiplier, calculateMonthly, safeFormat }