import React from 'react';
// import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';


export default class AvatarUploads extends React.Component {

    state = {
        image: {},
        // video: {}
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            // console.log(e.target.files)
            return {
                
                [e.target.name]: e.target.files[0]
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log("onSubmit here")
    
        let body = new FormData()
        // debugger
        body.append("image", this.state.image)
        body.append("user_id", this.props.id)

        // body.append({"image": this.state.image, "user_id": this.props.id})
        
        // console.log(newForm)
        // form.append("video", this.state.video)
        fetch(`http://localhost:3000/image_upload`, {
            method: "PUT",
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Accepts': 'application/json'
            //   },
            body
        })
        .then(resp => resp.json())
        .then(json => {
            console.log("put fetch", json)
        })
        // .catch(errors => ("avatar error", errors))
        .catch(error => {
            console.log("avatar upload error", error)
        })
    }

    render(){
        return (
            <div className="form">
                <h3>Image Upload</h3>
                <form id="edit-img-form" className="form" action="" onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <input type="file"name="image" onChange={this.onChange} accept="image/*"/>
                    <br/>
                    {/* <label>Video Upload</label>
                    <input type="file" name="video" onChange={this.onChange}/>
                    <br/> */}
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

