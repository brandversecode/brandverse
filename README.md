# Brandverse Studio

Digital Branding & Marketing Agency Website

## Project Overview

Brandverse Studio crafts powerful digital strategies that help your brand stand out, speak louder, and grow faster. This website showcases our services, portfolio, and provides a platform for clients to get in touch.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn package manager

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd brandverse-studio-redesign

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   ├── ui/         # shadcn-ui components
│   └── ...         # Custom components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── main.tsx        # Application entry point
```

## Deployment

Build the project for production:

```sh
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service.

## Google Sheets Integration

The contact form is configured to submit data to Google Sheets. To set this up:

### 1. Set up Google Sheet

1. Create a new Google Sheet
2. Set the following headers in the first row:
   - Column A: `Date`
   - Column B: `Email`
   - Column C: `Name`
   - Column D: `Phone`
   - Column E: `Service`
   - Column F: `Message`

### 2. Create Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Rename the project to "Contact Form Handler"
3. Replace the default code with:

```javascript
const sheetName = 'Sheet1'
const scriptProp = PropertiesService.getScriptProperties()

function initialSetup () {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const nextRow = sheet.getLastRow() + 1

    const newRow = headers.map(function(header) {
      return header === 'Date' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```

4. Save the project
5. Run the `initialSetup` function once (click Run → select `initialSetup` → Run)
6. Grant permissions when prompted

### 3. Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon (⚙️) and select **Web app**
3. Configure:
   - **Description**: Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the Web app URL** - you'll need this for the environment variable

### 4. Configure Environment Variable

1. Create a `.env` file in the project root (copy from `.env.example` if it exists)
2. Add your Google Sheets web app URL:

```env
VITE_GOOGLE_SHEETS_WEBAPP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Restart your development server after adding the environment variable

**Note**: Field names in the form are case-sensitive and must match the Google Sheet headers exactly.

## Contact

For inquiries, visit our website: [thebrandversestudio.com](https://thebrandversestudio.com)
