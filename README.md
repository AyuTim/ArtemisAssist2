Artemis Assist 

Artemis Assist is a wearable device, integrated with a mobile application to enforce the safety of women walking alone on campus at night. The sound sensor, attached to a necklace or hair clip, sleeps when not activated. Tapping the attached touch sensor activates the sound sensor, which records sounds and detects anomalies that may indicate a dangerous situation. Anomalies in the sound are detected using an ML algorithm. Furthermore, the device includes a wearable camera module with which if a danger is detected, it will begin recording surroundings to gather evidence in the event of a violent situation. Moreover, the app provides a function to have a conversation with a generative AI while walking in an unsafe area, reducing the risk of harm or victimization. All these functionalities can be monitored, and the camera footage can be accessed through the user-friendly mobile app. 

Requirements 
/opt/homebrew/bin/python3.11 /Users/soumikaseelam/Downloads/wehack2024/hack.py
import numpy as np
import librosa
from sklearn.linear_model import LogisticRegression 
