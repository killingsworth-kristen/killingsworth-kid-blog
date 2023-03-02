import React from 'react';

export default function CloudinaryWidget () {

    const handleWidgetOpen = () => {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: process.env.REACT_APP_CLOUD_NAME,
                uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
            },
            (error, result) => {
                if (result.event === "success") {
                console.log(result);
                }
            }
            );
            widget.open(); // open up the widget after creation
        };
        return (
            <button onClick={handleWidgetOpen}>Add Image(s)</button>
        )
    }
