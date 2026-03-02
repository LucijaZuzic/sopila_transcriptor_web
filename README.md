# Sopila Sheet Music Generator: User Guide

Welcome! This tool is designed to help you transform your **Sopila** (a traditional Croatian woodwind instrument) audio recordings into professional **sheet music using the Portable Document Format (PDF)**.

Below is a step-by-step guide on how to use the application at [https://sopilatranscriptorweb.firebaseapp.com/](https://sopilatranscriptorweb.firebaseapp.com/).

---

## 🛠 How to Use the Generator

### 1. Name Your File

Before starting, look for the text box labeled **"Save PDF as:"**.

* Type the name you want your final document to have (e.g., *My_Sopila_Song*).
* **Note:** You must provide a name before you can download your finished sheet music.

### 2. Upload Your Recording

Click the **"Select WAV File"** button.

* Select the audio file from your computer.
* **Important:** The system only accepts files in the **.wav** format. If you try to upload a different format (like .mp3), you will see a warning message.

### 3. Generate the Sheet Music

Once your file is selected, a new button labeled **"Generate PDF"** will appear.

* Click this button to start the transcription.
* A message will appear saying, *"Generating sheet music... This may take a moment."* Please wait while the system processes your audio.

### 4. Preview and Download

Once the processing is finished:

* **Preview:** A preview of your sheet music will appear directly on the page.
* **Download:** Click the **"Download PDF"** button to save the file to your computer.
* *If the button is red and says "Enter the file name," make sure you have typed something into the "Save PDF as" box.*



---

## 💡 Quick Tips for Success

| Feature | Requirement |
| --- | --- |
| **Audio Format** | Must be **.wav** |
| **File Name** | Required before downloading |
| **Processing Time** | Depends on the length of your audio; do not refresh the page while it says "Generating" |

---

## ❓ Troubleshooting

* **"Warning: The file is not a .wav file"**: Your audio is in the wrong format. You may need to use a converter to change your audio into a .wav file before uploading.
* **"Error processing file"**: This usually means there is a connection issue with the server. Ensure you have an active internet connection and try again in a few minutes.
* **Download button is disabled**: Check if you have entered a name in the **"Save PDF as"** box. The system won't let you download until it knows what to name the file!
* **Stuck at** ***"Generating sheet music... This may take a moment.***: The predictions may take longer for the large machine learning model if there is heavy server load. Refresh the page and try again, come back at a later time, or contact the administrators if problems persist.

---

# Guide for Technical Users

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

### Clone the Repository

Open your terminal and run the following commands to clone the GitHub repository:
```sh
git clone https://github.com/LucijaZuzic/sopila_transcriptor_web.git
cd sopila_transcriptor_web
```

### Setup the Node Package Manager (npm)

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Firebase Login

```sh
firebase login
```

### Firebase Configuration

```sh
firebase init
```

### Firebase Deploy for Production

```sh
firebase deploy
```

# Appendix

This repository is part of a larger project for the automatic transcription of sopila (a traditional Croatian instrument) music.

## Scientific Papers

*   The scientific papers describe the:
    *   ***Sopele*** **music dataset:** [https://doi.org/10.1016/j.dib.2019.104840](https://doi.org/10.1016/j.dib.2019.104840)
    *   **Automatic music transcription for traditional woodwind instruments sopele:** [https://doi.org/10.1016/j.patrec.2019.09.024](https://doi.org/10.1016/j.patrec.2019.09.024)

## Repository Index

*   The repositories include the:
    *   **Web Interface Code:** [https://github.com/LucijaZuzic/sopila_transcriptor_web](https://github.com/LucijaZuzic/sopila_transcriptor_web)
    *   **Android Application:** [https://github.com/LucijaZuzic/SopilaTranscriptor](https://github.com/LucijaZuzic/SopilaTranscriptor)
        *   **Forked from:** [https://github.com/askoki/SopilaTranscriptor](https://github.com/askoki/SopilaTranscriptor)
    *   **Django Backend Server:** [https://github.com/LucijaZuzic/django-sopila](https://github.com/LucijaZuzic/django-sopila)
        *   **Forked from:** [https://github.com/askoki/django-sopila](https://github.com/askoki/django-sopila)
    *   **Machine Learning Model Training:** [https://github.com/LucijaZuzic/sopila-transcriptor](https://github.com/LucijaZuzic/sopila-transcriptor)
        *   **Forked from:** [https://github.com/askoki/sopila-transcriptor](https://github.com/askoki/sopila-transcriptor)

## Machine Learning

The models use `scikit-learn` and default parameters, unless stated otherwise.

*   The transcription is done with the following possible setups:
    *   **Music Type:**
        *   **Polyphonic (Poly):** two instruments (both small and great sopila) - **used in deployment**
        *   **Monophonic (Mono):** a single instrument (small or great sopila)
    *   **Architecture:**
        *   the Random Forest (RF) model - **used in deployment**
        *   a Convolutional Neural Network (CNN)
    *   **Discrete Fourier Transform (DFT):**
        *   with the DFT - **used in deployment**
        *   without the DFT

*   The model parameters were obtained in hyperparameter tuning:
    *   **Poly RF DFT (used in deployment):**
        *   **n_estimators:** 900
        *   **criterion:** Gini
        *   **min_samples_split:** 2
        *   **max_samples_leaf:** 1
        *   **max_features:** auto**
        *   **max_depth:** 80
        *   **bootstrap:** false
    *   **Poly RF:**
        *   **n_estimators:** 1000
        *   **criterion:** Gini
        *   **min_samples_split:** 6
        *   **max_samples_leaf:** 1
        *   **max_features:** auto**
        *   **max_depth:** 60
        *   **bootstrap:** false
    *   **Mono RF DFT:**
        *   **n_estimators:** 1000
        *   **criterion:** entropy
        *   **min_samples_split:** 2
        *   **max_samples_leaf:** 1
        *   **max_features:** auto**
        *   **max_depth:** 60
        *   **bootstrap:** false
    *   **Mono RF:**
        *   **n_estimators:** 900
        *   **criterion:** Gini
        *   **min_samples_split:** 2
        *   **max_samples_leaf:** 1
        *   **max_features:** auto**
        *   **max_depth:** 80
        *   **bootstrap:** false

# Supplementary Links

*   The supplementary links define the:
    *   **Web Interface Access:**
        *   [https://sopilatranscriptorweb.firebaseapp.com/](https://sopilatranscriptorweb.firebaseapp.com/)
    *   **Application Installation Android Package Kit (APK):**
        *   [https://drive.google.com/file/d/1pdoee_afd3XuugroIi6P6vlkh9txp2-h/view?usp=drive_link](https://drive.google.com/file/d/1pdoee_afd3XuugroIi6P6vlkh9txp2-h/view?usp=drive_link)
    *   **Trained Machine Learning Models:**
        *   **Poly RF DFT (used in deployment):** [https://drive.google.com/file/d/1HIAFEaunJomerYyrKrfPycj9OpVPSkuP/view?usp=drive_link](https://drive.google.com/file/d/1HIAFEaunJomerYyrKrfPycj9OpVPSkuP/view?usp=drive_link)
        *   **Poly RF:** [https://drive.google.com/file/d/11_mbaqlTAu3-1QkXD8GqYuaBDI1J5DEP/view?usp=drive_link](https://drive.google.com/file/d/11_mbaqlTAu3-1QkXD8GqYuaBDI1J5DEP/view?usp=drive_link)
        *   **Mono RF DFT:** [https://drive.google.com/file/d/1_fHYT2Ykz4xWumwj4j0yT-wxdwABUEQ9/view?usp=drive_link](https://drive.google.com/file/d/1_fHYT2Ykz4xWumwj4j0yT-wxdwABUEQ9/view?usp=drive_link)
        *   **Mono RF:** [https://drive.google.com/file/d/1UhBfw_QOduRCRDoJjlifEHBBNoOirqUL/view?usp=drive_link](https://drive.google.com/file/d/1UhBfw_QOduRCRDoJjlifEHBBNoOirqUL/view?usp=drive_link)