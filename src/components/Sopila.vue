<script lang = "js">
import image_24dp from "./icons/queue_music_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import example_pdf from "../assets/sadila_je_mare_rf.pdf";
import "vuestic-ui/css";
import axios from "axios";
import "material-design-icons-iconfont/dist/material-design-icons.min.css";

export default {
    created() {
        document.title = "Sopila Transcriptor Web";
        let link = document.querySelector("[rel='icon']");
        link.setAttribute("href", image_24dp);
    },
    data() { 
        return {
            example_pdf: example_pdf,
            receivedData: null,
            selectedFile: null,
            customFileName: "",
            isProcessing: false,
            BASE_URL: "https://sopila-audio.com"
        }
    },
    methods: {
        printValue(stringToPrint) {
            let paddingUse = '"';
            if (stringToPrint.includes('"')) {
                paddingUse = "'"; 
            }
            return paddingUse + stringToPrint + paddingUse;
        },
        handleFileUpload() {
            if (document.getElementById("handleFileUpload").files && document.getElementById("handleFileUpload").files.length) {
                this.receivedData = null;
                let fileToLoad = document.getElementById("handleFileUpload").files[0];
                let fileNameExtension = fileToLoad.name;
                let extensionIndex = fileNameExtension.lastIndexOf(".");
                let fileExtension = fileNameExtension.slice(extensionIndex + 1);
                if (fileExtension == "wav") {
                    this.selectedFile = fileToLoad;
                } else {
                    this.$vaToast.init({message: "Warning: The file " + this.printValue(fileToLoad.name) + " is not a .wav file", color: "warning"});
                }
            }
        },
        async processAudio() {
            if (!this.selectedFile) {
                return;
            }
            this.receivedData = null;
            this.isProcessing = true;
            
            try {
                // Upload to upload_recording_api

                let formData = new FormData();
                formData.append("audio", this.selectedFile);
                await axios.post(this.BASE_URL + "/upload/", formData, {headers: {"content-type": "multipart/form-data"}});

                // Call download_sheet_api using the original filename as expected by the view
                
                let originalName = this.selectedFile.name.split(".").slice(0, -1).join(".");
                this.receivedData = await axios.get(this.BASE_URL + "/download/api/" + originalName + "/", {responseType: "blob"});
            } catch (err) {
                console.error("Transcription error:", err);
                alert("Error processing file. Check if the server is running and the tunnel is active.");
            } finally {
                this.isProcessing = false;
            }
        },
        getBlob() {
            let blob = new Blob([this.receivedData.data], { type: "application/pdf" });
            return window.URL.createObjectURL(blob);
        },
        startDownload() {
            // Create a download link with the user's custom name

            let downloadUrl = this.getBlob();
            let link = document.body.appendChild(document.createElement("a"));
            link.href = downloadUrl;
            link.download = this.customFileName + ".pdf";
            link.click();
            
            // Cleanup

            this.receivedData = null;
            window.URL.revokeObjectURL(downloadUrl);
            link.remove();
            this.selectedFile = null;
            this.customFileName = null;
        }
    }
}
</script>

<template>
    <div v-if = "isProcessing">
        <p>Generating sheet music... This may take a moment.</p>
    </div>
    <div v-else>
        <VaCard>
        <VaCardTitle>Sopila Sheet Music Generator</VaCardTitle>
        <VaDivider />
        <VaCardContent>
            <VaInput
                class = "my_text"
                v-model = "customFileName"
                label = "Save PDF as:"
                placeholder = "Enter the file name here"
            />
            <input
                style = "display: none"
                type = "file"
                id = "handleFileUpload"
                v-on:click = "handleFileUpload()"
                v-on:input = "handleFileUpload()"
                v-on:focus = "handleFileUpload()"
            />
            <br>
            <VaButton
                onclick = "document.getElementById('handleFileUpload').click()"
                icon = "upload"
            >
                Select WAV File
            </VaButton>
            <div v-if = "selectedFile">
                <br>
                <VaChip>
                    {{ selectedFile.name }}
                </VaChip>
                <br>
                <br>
                <VaButton
                    v-if = "!receivedData"
                    v-on:click = "processAudio()"
                >
                    Generate PDF
                </VaButton>
                <VaButton
                    v-if = "receivedData && customFileName"
                    v-on:click = "startDownload()"
                >
                    Download PDF
                </VaButton>
                <VaChip
                    color = "danger"
                    v-if = "receivedData && !customFileName"
                >
                    Enter the file name
                </VaChip>
            </div>
            </VaCardContent>
        </VaCard>
        <embed v-if = "receivedData" :src = "getBlob()" width = "100%" />
    </div>
</template>

<style scoped>
.sopila-container {
    max-width: 450px;
    margin: 3rem auto;
}
.my_text {
    display: block;
    width: 100%;
}
</style>