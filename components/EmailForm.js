import email_form from '../styles/components/_email_form.module.scss'
import React, { useState } from 'react';
import Home from '../pages';
function EmailForm() {
const [email, setEmail] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
      let res = await fetch("https://i918n57v1j.execute-api.us-east-1.amazonaws.com/prod/userCreate", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          first_name: firstName,
          last_name: lastName,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setEmail("");
        setFirstName("");
        setLastName("");
        // setMessage("User created successfully");
      } else {
        // setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={email_form.form}>
        <div className={email_form.form_content}>
        <div className={email_form.form_content_heading}>Create A User</div>
        <form className={email_form.form_content_construct} onSubmit={handleSubmit}>
        <label className = {email_form.form_content_construct_label}>
            Enter Email:   
        </label>
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <label className = {email_form.form_content_construct_label}>
            Enter First Name:   
          </label>
          <input 
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          />
          <label className = {email_form.form_content_construct_label}>
            Enter Last Name: 
          </label>  
          <input 
          type="email" 
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          />
        <input type="submit" value="Submit" className={email_form.form_content_button}/>
        </form>
        </div>
    </div>
  )
}

export default EmailForm


