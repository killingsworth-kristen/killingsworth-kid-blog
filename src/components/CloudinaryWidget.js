import React from 'react';

import './style/CloudinaryWidget.css'

export default function CloudinaryWidget ({setPostImg, postMode}) {

    const handleWidgetOpen = () => {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dwe2wo8w5",
                uploadPreset: "v0udxsbg",
            },
            (error, result) => {
                if (result.event === "success") {
                    console.log('---------------------------------------------------------')
                    console.log(result);
                    console.log(result.info.secure_url)
                    setPostImg(result.info.secure_url)
                    console.log('---------------------------------------------------------')
                // setPostImg(result.info.path)
                } else {
                    console.log("Error occurred")
                    console.log(error)
                }
            }
            );
            widget.open(); // open up the widget after creation
        };
        return (
            <div className={postMode !== 'Edit' ? "cloudinary-new-btn-container": 'cloudinary-edit-btn-container'}>
                <button className={postMode !== 'Edit' ? "cloudinary-new-btn": 'cloudinary-edit-btn'} onClick={handleWidgetOpen}>{postMode} Image</button>
            </div>
        )
    }
