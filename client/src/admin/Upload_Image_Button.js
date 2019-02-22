import React from 'react'
import widgetStyle from './widgetStyle';

export default class Upload_Image_Button extends React.Component{

	uploadWidget = () => {
        window.cloudinary.openUploadWidget({ 
        	cloud_name: 'dyxarofvr', 
        	upload_preset: 'bpyvfnsb', 
			tags:['user'],
			stylesheet:widgetStyle
        },
            (error, result)=> {
                this.props.getImage(result[0].secure_url,result[0].public_id)				
                if(error){
					
                }
            });
    }

	render(){
		return (
			<div className="flex_upload">
                <div className="upload">
					<button className ="button_small"
                    	onClick={this.uploadWidget} > Upload Image
                    </button>
                </div>
            </div>
		)
	}
}