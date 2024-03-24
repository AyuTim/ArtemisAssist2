import sounddevice as sd
import numpy as np
from scipy.io.wavfile import write
import tempfile
from datetime import datetime
from hack import analyze_audio

fs = 44100  
threshold = 20  
last_distress_detection = None  

def sound_intensity_callback(indata, frames, time, status):
    global last_distress_detection
    volume_norm = np.linalg.norm(indata) * 10

    if volume_norm > threshold:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as tmpfile:
            write(tmpfile.name, fs, indata)
            result = analyze_audio(tmpfile.name)

            if result == 1:
                current_time = datetime.now()
                if last_distress_detection is None or (current_time - last_distress_detection).total_seconds() > 10:  # Adjust the time threshold as needed
                    print(f"Distress sound detected at {current_time.strftime('%Y-%m-%d %H:%M:%S')}, simulating call to emergency services...")
                    last_distress_detection = current_time

def record_continuous():
    with sd.InputStream(callback=sound_intensity_callback, channels=1, samplerate=fs):
        print("Monitoring ambient sound. Type 'quit' and press 'Enter' to stop.")
        input('')

if __name__ == "__main__":
    record_continuous()
