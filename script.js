const startButton = document.getElementById('start-button');
const transcriptElement = document.getElementById('transcript');
const videoContainer = document.getElementById('sign-language-video');

// Base path for video files
const BASE_PATH = './MultipleFiles/';

// Video dataset mapping
const signLanguageDataset = {
    // Basic words
    "hello": BASE_PATH + "Hello.mp4",
    "bye": BASE_PATH + "Bye.mp4",
    "thank": BASE_PATH + "Thank.mp4",
    "you": BASE_PATH + "You.mp4",
    "please": BASE_PATH + "Please.mp4",
    "yes": BASE_PATH + "Yes.mp4",
    "no": BASE_PATH + "No.mp4",
    
    // Additional common words
    "after": BASE_PATH + "After.mp4",
    "age": BASE_PATH + "Age.mp4",
    "all": BASE_PATH + "All.mp4",
    "alone": BASE_PATH + "Alone.mp4",
    "always": BASE_PATH + "Always.mp4",
    "and": BASE_PATH + "And.mp4",
    "angry": BASE_PATH + "Angry.mp4",
    "animal": BASE_PATH + "Animal.mp4",
    "answer": BASE_PATH + "Answer.mp4",
    "any": BASE_PATH + "Any.mp4",
    "apple": BASE_PATH + "Apple.mp4",
    "ask": BASE_PATH + "Ask.mp4",
    "baby": BASE_PATH + "Baby.mp4",
    "bad": BASE_PATH + "Bad.mp4",
    "beautiful": BASE_PATH + "Beautiful.mp4",
    "because": BASE_PATH + "Because.mp4",
    "begin": BASE_PATH + "Begin.mp4",
    "better": BASE_PATH + "Better.mp4",
    "big": BASE_PATH + "Big.mp4",
    "bird": BASE_PATH + "Bird.mp4",
    "black": BASE_PATH + "Black.mp4",
    "blue": BASE_PATH + "Blue.mp4",
    "book": BASE_PATH + "Book.mp4",
    "boy": BASE_PATH + "Boy.mp4",
    "bread": BASE_PATH + "Bread.mp4",
    "bring": BASE_PATH + "Bring.mp4",
    "brother": BASE_PATH + "Brother.mp4",
    "busy": BASE_PATH + "Busy.mp4",
    "but": BASE_PATH + "But.mp4",
    "buy": BASE_PATH + "Buy.mp4",
    "can": BASE_PATH + "Can.mp4",
    "car": BASE_PATH + "Car.mp4",
    "careful": BASE_PATH + "Careful.mp4",
    "carry": BASE_PATH + "Carry.mp4",
    "cat": BASE_PATH + "Cat.mp4",
    "chair": BASE_PATH + "Chair.mp4",
    "clean": BASE_PATH + "Clean.mp4",
    "close": BASE_PATH + "Close.mp4",
    "cold": BASE_PATH + "Cold.mp4",
    "come": BASE_PATH + "Come.mp4",
    "computer": BASE_PATH + "Computer.mp4",
    "could": BASE_PATH + "Could.mp4",
    "cut": BASE_PATH + "Cut.mp4",
    "dance": BASE_PATH + "Dance.mp4",
    "dark": BASE_PATH + "Dark.mp4",
    "day": BASE_PATH + "Day.mp4",
    "deep": BASE_PATH + "Deep.mp4",
    "different": BASE_PATH + "Different.mp4",
    "dinner": BASE_PATH + "Dinner.mp4",
    "dog": BASE_PATH + "Dog.mp4",
    "door": BASE_PATH + "Door.mp4",
    "down": BASE_PATH + "Down.mp4",
    "draw": BASE_PATH + "Draw.mp4",
    "drink": BASE_PATH + "Drink.mp4",
    "dry": BASE_PATH + "Dry.mp4",
    "early": BASE_PATH + "Early.mp4",
    "easy": BASE_PATH + "Easy.mp4",
    "eat": BASE_PATH + "Eat.mp4",
    "egg": BASE_PATH + "Egg.mp4",
    "empty": BASE_PATH + "Empty.mp4",
    "end": BASE_PATH + "End.mp4",
    "enough": BASE_PATH + "Enough.mp4",
    "every": BASE_PATH + "Every.mp4",
    "eye": BASE_PATH + "Eye.mp4",
    "face": BASE_PATH + "Face.mp4",
    "family": BASE_PATH + "Family.mp4",
    "far": BASE_PATH + "Far.mp4",
    "fast": BASE_PATH + "Fast.mp4",
    "father": BASE_PATH + "Father.mp4",
    "few": BASE_PATH + "Few.mp4",
    "find": BASE_PATH + "Find.mp4",
    "fine": BASE_PATH + "Fine.mp4",
    "finish": BASE_PATH + "Finish.mp4",
    "fire": BASE_PATH + "Fire.mp4",
    "first": BASE_PATH + "First.mp4",
    "fish": BASE_PATH + "Fish.mp4",
    "floor": BASE_PATH + "Floor.mp4",
    "flower": BASE_PATH + "Flower.mp4",
    "fly": BASE_PATH + "Fly.mp4",
    "food": BASE_PATH + "Food.mp4",
    "foot": BASE_PATH + "Foot.mp4",
    "friend": BASE_PATH + "Friend.mp4",
    "full": BASE_PATH + "Full.mp4",
    "fun": BASE_PATH + "Fun.mp4",
    "game": BASE_PATH + "Game.mp4",
    "garden": BASE_PATH + "Garden.mp4",
    "girl": BASE_PATH + "Girl.mp4",
    "give": BASE_PATH + "Give.mp4",
    "glass": BASE_PATH + "Glass.mp4",
    "go": BASE_PATH + "Go.mp4",
    "good": BASE_PATH + "Good.mp4",
    "grass": BASE_PATH + "Grass.mp4",
    "great": BASE_PATH + "Great.mp4",
    "green": BASE_PATH + "Green.mp4",
    "grow": BASE_PATH + "Grow.mp4",
    "happy": BASE_PATH + "Happy.mp4",
    "help": BASE_PATH + "Help.mp4",
    "here": BASE_PATH + "Here.mp4",
    "home": BASE_PATH + "Home.mp4",
    "how": BASE_PATH + "How.mp4",
    
};

// Speech recognition setup and handlers
startButton.addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.start();
    startButton.disabled = true;
    startButton.textContent = 'Listening...';

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        transcriptElement.textContent = `You said: ${transcript}`;
        playSignLanguage(transcript);
    };

    recognition.onend = () => {
        startButton.disabled = false;
        startButton.textContent = 'Start Speaking';
    };

    recognition.onerror = (event) => {
        console.error("Recognition error:", event.error);
        startButton.disabled = false;
        startButton.textContent = 'Start Speaking';
    };
});

// Video handling functions
async function playSignLanguage(text) {
    videoContainer.innerHTML = '';
    const statusDiv = createStatusElement();
    videoContainer.appendChild(statusDiv);

    try {
        const words = text.toLowerCase().split(' ');
        
        for (const word of words) {
            statusDiv.textContent = `Processing: ${word}`;
            await playWordVideo(word, statusDiv);
        }
    } catch (error) {
        console.error('Playback error:', error);
        showError(`Error playing videos: ${error.message}`);
    } finally {
        statusDiv.remove();
    }
}

async function playWordVideo(word, statusDiv) {
    const videoPath = signLanguageDataset[word.toLowerCase()];
    
    if (!videoPath) {
        showError(`No video available for: ${word}`);
        return;
    }

    const video = document.createElement('video');
    video.controls = true;
    video.width = 320;
    video.style.margin = '10px';
    video.style.display = 'block';

    try {
        video.src = videoPath;
        await loadVideo(video);
        videoContainer.appendChild(video);
        await video.play();
        statusDiv.textContent = `Playing: ${word}`;
    } catch (error) {
        showError(`Failed to load video for: ${word}`);
        console.error(`Video error for ${word}:`, error);
    }
}

function loadVideo(video) {
    return new Promise((resolve, reject) => {
        video.onloadeddata = () => resolve();
        video.onerror = () => reject(new Error('Video load failed'));
        setTimeout(() => reject(new Error('Video load timeout')), 5000);
    });
}

function createStatusElement() {
    const status = document.createElement('div');
    status.className = 'status-message';
    status.style.textAlign = 'center';
    status.style.margin = '10px';
    return status;
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
    errorDiv.style.padding = '10px';
    errorDiv.style.margin = '5px 0';
    errorDiv.style.backgroundColor = '#fff0f0';
    errorDiv.style.border = '1px solid #ffccc';
    videoContainer.appendChild(errorDiv);
}

// Initialize video testing on page load
window.addEventListener('load', async () => {
    console.log('Testing video availability...');
    for (const [word, path] of Object.entries(signLanguageDataset)) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            console.log(`✓ Video available: ${word}`);
        } catch (error) {
            console.error(`✗ Video missing: ${word}`);
        }
    }
});