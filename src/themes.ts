const themeFiles = import.meta.glob('@/assets/css/themes/*.css', { eager: false })

/**
 * Dynamically generates a list of themes in the format
 * 'theme-name' => 'theme-name' for use in useColorMode.
 * Css file must be named the same as its [theme] attribute for this to work.
 */
export const themes = Object.keys(themeFiles).reduce((acc, filePath) => {
  // Extract the theme name from the file name (e.g., 'botanical' from 'botanical.css')
  const themeName = filePath.split('/').pop().replace('.css', '')
  acc[themeName] = themeName // Add it to the themes object
  return acc
}, {})
