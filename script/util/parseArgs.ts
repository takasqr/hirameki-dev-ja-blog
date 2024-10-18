/**
 * This function replaces placeholders in the message string with values provided in the params object.
 *
 * @param message - The message template containing placeholders in the format {key}.
 * @param params - An object containing key-value pairs where the key corresponds to the placeholder in the message.
 * @returns A string with the placeholders replaced by corresponding values from the params object.
 */
export function parseArgs(
  message: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>,
): string {
  // Use a regular expression to find all placeholders in the message string
  return message.replace(/{([^}]+)}/g, (_, key) => {
    // Replace the placeholder with the corresponding value from the params object
    return params[key] !== undefined ? params[key] : `{${key}}`
  })
}
