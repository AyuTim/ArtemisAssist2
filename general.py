# /opt/homebrew/bin/python3.11 /Users/soumikaseelam/Downloads/wehack2024/general.py

# import numpy as np
# import librosa
# from sklearn.ensemble import RandomForestClassifier
# from sklearn.metrics import accuracy_score
# from sklearn.model_selection import cross_val_score, StratifiedKFold
# import os
# from twilio.rest import Client

# scream_path = '/Users/soumikaseelam/Downloads/wehack2024/dataset/scream/'
# background_path = '/Users/soumikaseelam/Downloads/wehack2024/dataset/background/'
# test_path = '/Users/soumikaseelam/Downloads/wehack2024/dataset/test/'

# def extract_features(audio_path):
    
#     try:
#         audio, sr = librosa.load(audio_path, sr=None)
#         mfcc = librosa.feature.mfcc(y=audio, sr=sr)
#         mfccMean = np.mean(mfcc, axis=1)
#         chroma_stft_mean = np.mean(librosa.feature.chroma_stft(y=audio, sr=sr), axis=1)
#         melSpecMean = np.mean(librosa.feature.melspectrogram(y=audio, sr=sr), axis=1)
#         contrastMean = np.mean(librosa.feature.spectral_contrast(y=audio, sr=sr), axis=1)
        
#         return np.concatenate((mfccMean, chroma_stft_mean, melSpecMean, contrastMean))
#     except Exception as e:
#         return None

# def load_data_from_folder(folder_path, label, file_extension):

#     data = []
#     for file in os.listdir(folder_path):
#         if file.endswith(file_extension):
#             features = extract_features(os.path.join(folder_path, file))
#             if features is not None:
#                 data.append((features, label))
#     return data

# def load_labeled_data():

#     scream_data = load_data_from_folder(scream_path, 1, '.wav')
#     background_data = load_data_from_folder(background_path, 0, '.wav')
#     return scream_data + background_data

# def evaluate_model(X, y):
#     kfold = StratifiedKFold(n_splits=10, shuffle=True, random_state=42)
#     model = RandomForestClassifier(n_estimators=100, random_state=42)
#     cv_results = cross_val_score(model, X, y, cv=kfold, scoring='accuracy')
#     return np.mean(cv_results)

# def send_emergency_message(contact, message="Emergency! Distress detected."):

#     account_sid = 'AC70ba263371ededf8c33fe9635d263136'
#     auth_token = '80bb87e5072f8dbbcf642696401d8793'
#     client = Client(account_sid, auth_token)

#     message = client.messages.create(
#         body=message,
#         from_='+18557082143',
#         to=contact
#     )

# labeled_data = load_labeled_data()
# X, y = zip(*labeled_data)

# print()

# model_accuracy = evaluate_model(np.array(X), np.array(y))
# print(f"Cross-Validated Accuracy: {model_accuracy * 100:.2f}%")
# print()
