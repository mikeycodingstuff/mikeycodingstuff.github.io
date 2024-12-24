const themeFiles = import.meta.glob('@/assets/themes/*.css', { eager: false });

/**
 * Reads a CSS file and extracts the theme name from it.
 */
async function readCSSFile(filePath) {
  try {
    const response = await fetch(filePath);
    const cssText = await response.text();

    const themeRegex = /\[theme='([^']+)'\]/;
    const match = themeRegex.exec(cssText);

    return match ? match[1] : null;
  } catch (error) {
    console.error(`Error reading CSS file '${filePath}': ${error.message}`);
    return null;
  }
}

/**
 * Dynamically generates a list of themes in the format
 * 'theme-name' => 'theme-name' for use in useColorMode.
 */
export const themes = await (async () => {
  const themeMap = {};

  // Iterate over each CSS file and extract its theme name
  for (const filePath of Object.keys(themeFiles)) {
    const themeName = await readCSSFile(filePath);
    if (themeName) {
      themeMap[themeName] = themeName;
    }
  }

  return themeMap;
})();
