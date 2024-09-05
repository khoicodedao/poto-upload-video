function getIframeStrings() {
  // Select all divs with data-target="doc"
  const targetDivs = document.querySelectorAll('div[data-target="doc"]');

  // Create an array to hold the iframe strings
  const iframeArray = [];

  // Loop through each div and build the iframe string
  targetDivs.forEach((div) => {
    const dataId = div.getAttribute("data-id");
    if (dataId) {
      const iframeString = `<iframe src="https://drive.google.com/file/d/${dataId}/preview" width="640" height="480" allow="autoplay"></iframe>`;
      iframeArray.push(iframeString);
    }
  });

  // Return the array of iframe strings
  return iframeArray;
}

// Example usage:
const iframes = getIframeStrings();
console.log(iframes);
