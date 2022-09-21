import React, { Component } from 'react'
// import { useState } from 'react';
export class form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Swaroop',
      email: 'default@gmail.com',
      occupation: 'student',
      gender: 'male',
      languages: ['html'],
      file:''
    }
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })

  }
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value
    })

  }
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    })

  }
  handleOccupationChange = (event) => {
    this.setState({
      occupation: event.target.value
    })

  }
  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value
    })

  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })

  }
  handleLanguagesChange = (event) => {
    this.setState({
      languages: event.target.value
    })

  }
  handleFileChange = (event) => {
    this.setState({
      file: event.target.value
    })

  }

  handleSubmit = (event) => {
    console.log('ok')
    event.preventDefault()
  }
  handleUpload = (event) => {
    console.log(this.state,"the state ------$$$$$")
    event.preventDefault()
  }

  render() {
    const { username, email,occupation,gender,languages,file} = this.state
    return (
     
      <form onSubmit={this.handleSubmit}>
       
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input className="form-control" name="username" onChange={this.handleUsernameChange} value={username} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={this.handleEmailChange} value={email} />
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Occupation</label>
          <select className="form-select" name="occupation" onChange={this.handleOccupationChange} value={occupation}>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={this.handleGenderChange} checked={gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={this.handleGenderChange} checked={gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" onChange={this.handleGenderChange} checked={gender === 'other'} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="language" className="form-label">Languages</label>
          <div>
            <div>
              <input type="checkbox" name="languages" value="html" onChange={this.handleLanguagesChange} checked={languages.indexOf('html') !== -1} />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="css" onChange={this.handleLanguagesChange} checked={languages.indexOf('css') !== -1} />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="javascript" onChange={this.handleLanguagesChange} checked={languages.indexOf('javascript') !== -1} />
              <label htmlFor="javascript">Javascript</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="python" onChange={this.handleLanguagesChange} checked={languages.indexOf('python') !== -1} />
              <label htmlFor="python">Python</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="documents" className="form-label">Documents</label>
         </div>
         <div>
         <input type='file' accept='.pdf' onChange={this.handleFileChange} value={file} ></input>
          <button type='button' onClick={this.handleUpload}>Upload</button>
         </div>
         {/* <div className="form-group">
          <label htmlFor="documents" className="form-label">Picture(jpg</label>
         </div>
         <div>
         <input type='file' accept='.jpg' onChange={this.handleFileChange} value={file} ></input>
          <button type='button' onSubmit={this.handleUpload}>Upload</button>
         </div>
         <div className="form-group">
          <label htmlFor="documents" className="form-label">Picture(png</label>
         </div>
         <div>
         <input type='file' accept='.png' onChange={this.handleFileChange} value={file} ></input>
          <button type='button' onSubmit={this.handleUpload}>Upload</button>
         </div>*/}
         <div className="form-group">
           <button className="btn" type="submit" >Submit</button>
         </div> 
      </form>
      
    )
  }
}

export default form