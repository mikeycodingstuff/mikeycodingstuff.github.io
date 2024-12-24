const themeFiles = import.meta.glob('@/assets/themes/*.css', { eager: false });

async function readCSSFile(filePath) {
  try {
    // Fetch the file content
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSS file: ${response.statusText}`);
    }

    const cssText = await response.text();

    // Extract information using regex (e.g., find [theme='botanical'])
    const themeRegex = /\[theme='([^']+)'\]/g;
    let match;
    while ((match = themeRegex.exec(cssText)) !== null) {
      return match[1];
    }
  } catch (error) {
    console.error(`Error reading CSS file: ${error.message}`);
  }
}

/**
 * Dynamically generate a list of themes in the format
 * 'theme-name' => 'theme-name'
 * for use in useColorMode
 */
export const themes = await (async () => {
  const acc = {};

  for (const filePath of Object.keys(themeFiles)) {
    const themeName = await readCSSFile(filePath);

    if (themeName) {
      acc[themeName] = themeName;
    }
  }

  return acc;
})();
