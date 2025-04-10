from flask import Flask, render_template, request, send_file
from googletrans import Translator
from gtts import gTTS
import os

app = Flask(__name__)

# Supported languages dictionary
supported_languages = {
    "en": "English",
    "hi": "Hindi",
    "ta": "Tamil",
    "te": "Telugu",
    "kn": "Kannada",
    "bn": "Bengali",
    "ml": "Malayalam",
    "gu": "Gujarati",
    "mr": "Marathi",
    "pa": "Punjabi",
    "ur": "Urdu"
}

# Home route to render the form
@app.route("/")
def index():
    # Pass the supported languages to the HTML template
    return render_template("index.html", languages=supported_languages)

# Translation and TTS route
@app.route("/process", methods=["POST"])
def process():
    try:
        # Get user input from the form
        source_text = request.form["source_text"]
        target_language = request.form["target_language"]

        # Validate the input
        if not source_text.strip():
            return "Error: No text provided!"

        if target_language not in supported_languages:
            return "Error: Unsupported language!"

        # Translate the text
        translator = Translator()
        translated_text = translator.translate(source_text, dest=target_language).text

        # Generate audio using gTTS
        tts = gTTS(translated_text, lang=target_language)
        audio_path = os.path.join("static", "audio", "output.mp3")
        tts.save(audio_path)

        # Return success response with the translated text and audio
        return render_template(
            "index.html",
            languages=supported_languages,
            source_text=source_text,
            translated_text=translated_text,
            audio_path=audio_path,
            target_language=supported_languages[target_language]
        )
    except Exception as e:
        return f"Error: {e}"

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
