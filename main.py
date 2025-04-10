import cv2
import numpy as np
from gtts import gTTS
from googletrans import Translator
import os

# Supported languages for translation and TTS
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

# Display available languages to the user
print("Available languages:")
for code, language in supported_languages.items():
    print(f"{code}: {language}")

# Input: Sentence and target language
source_text = input("\nEnter the sentence you want to translate and convert to speech: ")
target_language = input("\nEnter the target language code (e.g., 'hi' for Hindi, 'en' for English): ").strip()

# Validate the language code
if target_language not in supported_languages:
    print("Invalid language code. Defaulting to English.")
    target_language = "en"

# Initialize Translator
translator = Translator()

try:
    # Step 1: Translate the text into the target language
    translated_text = translator.translate(source_text, dest=target_language).text
    print(f"\nTranslated Text ({supported_languages[target_language]}): {translated_text}")

    # Step 2: Convert the translated text to speech using gTTS
    tts = gTTS(translated_text, lang=target_language)
    audio_file = "output.mp3"
    tts.save(audio_file)
    print(f"Audio generated in {supported_languages[target_language]} and saved as '{audio_file}'.")

    # # Step 3: Display the text using OpenCV
    # image = 255 * np.ones(shape=[500, 800, 3], dtype=np.uint8)
    # font = cv2.FONT_HERSHEY_SIMPLEX
    # cv2.putText(image, translated_text, (20, 250), font, 0.8, (0, 0, 0), 2, cv2.LINE_AA)

    # cv2.imshow("Translation and Text-to-Speech Demo", image)

    # Step 4: Play the audio file
    os.system(f"start {audio_file}")  # For Windows
    # os.system(f"open {audio_file}")  # For macOS
    # os.system(f"xdg-open {audio_file}")  # For Linux

    cv2.waitKey(0)
    cv2.destroyAllWindows()

except Exception as e:
    print("Error:", e)

