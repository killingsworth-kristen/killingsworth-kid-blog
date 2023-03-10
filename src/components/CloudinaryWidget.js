import React from 'react';

import './style/CloudinaryWidget.css'

export default function CloudinaryWidget ({postImg, setPostImg}) {

    const handleWidgetOpen = () => {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: process.env.REACT_APP_CLOUD_NAME,
                uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
            },
            (error, result) => {
                if (result.event === "success") {
                console.log(result);
                setPostImg(result.info.path)
                } else {
                    console.log("Error occurred")
                }
            }
            );
            widget.open(); // open up the widget after creation
        };
        return (
            <div className="cloudinary-upload-btn-container">
                <button id="cloudinary-upload-btn" onClick={handleWidgetOpen}>Add Image(s)</button>
            </div>
        )
    }
