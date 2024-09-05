# Poto Video Upload Tool

This tool automates the process of uploading videos to the Poto educational platform.

## Usage Instructions

### Step 1: Generate iframe links

1. Open the Chrome browser developer console.
2. Run the function from `getLinkVidoeToIframe.js` in the console.
3. Copy the generated iframe links from the console output.

### Step 2: Update the script

1. Open the `index.js` file.
2. Locate the `frameStrings` array.
3. Paste the copied iframe links into this array, replacing any existing content.

### Step 3: Execute the upload

1. Ensure you have Node.js installed on your system.
2. Open a terminal in the project directory.
3. Run the script using the command:

## Notes

- Make sure you have the necessary permissions and authentication set up for the Poto platform before running the script.
- The script uses environment variables for sensitive information. Ensure these are properly configured.

## Troubleshooting

If you encounter any issues, check the console output for error messages. Common problems include network connectivity issues or incorrect authentication details.

## Contributing

Contributions to improve this tool are welcome. Please submit a pull request or open an issue to discuss proposed changes.
