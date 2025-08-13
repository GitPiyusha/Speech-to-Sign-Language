# How to Run the Speech-to-Sign Language Web Applications

This project contains **two separate web applications**:

## 🎤 Application 1: Speech-to-Sign Language Converter (Main App)

**What it does:** Converts speech to text in real-time and displays corresponding sign language videos.

### Requirements:
- Modern web browser (Chrome, Firefox, Edge)
- Local web server
- Microphone access

### To Run:

#### Option 1: Using Python's built-in server
```bash
cd /workspace
python3 -m http.server 8000
```
Then open: http://localhost:8000

#### Option 2: Using VS Code Live Server (Recommended)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### How to Use:
1. Click "Start Speaking" button
2. Speak clearly into your microphone
3. The app will display recognized words and play sign language videos
4. Click anywhere to stop recording

---

## 🌐 Application 2: Flask Translation & Text-to-Speech App

**What it does:** Translates text between multiple languages and generates audio using Google Text-to-Speech.

### Requirements:
- Python 3.x
- Internet connection (for Google Translate API)

### Setup & Run:

1. **Install Dependencies:**
```bash
cd /workspace
pip3 install -r requirements.txt
```

2. **Run the Flask App:**
```bash
python3 app.py
```

3. **Access the Web Interface:**
Open your browser and go to: http://localhost:5000

### Supported Languages:
- English, Hindi, Tamil, Telugu, Kannada
- Bengali, Malayalam, Gujarati, Marathi
- Punjabi, Urdu

### How to Use:
1. Enter text you want to translate
2. Select target language
3. Click submit to get translation and audio

---

## 🔧 Troubleshooting

### For Speech-to-Sign App:
- **No microphone access:** Allow microphone permissions in browser
- **Videos not loading:** Ensure MultipleFiles directory contains .mp4 files
- **CORS errors:** Use a local server (don't open HTML directly)

### For Flask Translation App:
- **Import errors:** Run `pip3 install -r requirements.txt`
- **Google Translate errors:** Check internet connection
- **Template not found:** Ensure templates/index.html exists

### Common Issues:
- **Port already in use:** Try a different port (8001, 8080, etc.)
- **Missing videos:** Check that MultipleFiles contains sign language videos

---

## 📁 Project Structure

```
/workspace/
├── index.html              # Main speech-to-sign app
├── script.js              # Speech recognition logic
├── styles.css             # Styles for frontend
├── app.py                 # Flask translation app
├── main.py               # Command-line version
├── requirements.txt       # Python dependencies
├── templates/            # Flask templates
│   └── index.html
├── static/              # Flask static files
│   ├── styles.css
│   └── audio/
└── MultipleFiles/       # Sign language video files
    ├── Hello.mp4
    ├── Goodbye.mp4
    └── ... (other videos)
```

## 🚀 Quick Start

**For Speech-to-Sign Language:**
```bash
cd /workspace
python3 -m http.server 8000
# Open http://localhost:8000 in browser
```

**For Translation App:**
```bash
cd /workspace
pip3 install -r requirements.txt
python3 app.py
# Open http://localhost:5000 in browser
```