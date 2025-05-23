
# Speech-To-Sign Language Translator

A web application that converts spoken English words into sign language videos in real-time.

## Features

- Speech-to-text conversion using Web Speech API
- Real-time sign language video playback
- Support for 100+ common English words
- Visual feedback for word processing and errors
- Responsive design with modern UI

## Prerequisites

- Modern web browser (Chrome, Firefox, Edge) with JavaScript enabled
- Web server (like VS Code Live Server) for local development
- MP4 video files for sign language gestures

## Project Structure

```
d:\AI_python\Text_to_speech\
├── index.html           # Main HTML file
├── script.js           # JavaScript logic
├── styles.css         # CSS styles
└── MultipleFiles\     # Sign language video files
    ├── Hello.mp4
    ├── Bye.mp4
    └── ... (other mp4 files)
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd Text_to_speech
```

2. Create the `MultipleFiles` directory and add your sign language MP4 files:
```bash
mkdir MultipleFiles
```

3. Install VS Code Live Server extension:
   - Open VS Code
   - Press Ctrl+Shift+X
   - Search for "Live Server"
   - Install the extension by Ritwick Dey

4. Start the application:
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your default browser will open with the application

## Usage

1. Click the "Start Speaking" button
2. Speak clearly into your microphone
3. The application will:
   - Convert your speech to text
   - Display the recognized words
   - Play corresponding sign language videos
4. Click anywhere to stop recording

## Supported Words
