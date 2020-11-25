import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import Button from '../Button'
import './Register.css'
import Axios from 'axios';

function JoinUs() {

    const [form, setForm] = useState({
        category: '',
        name: '',
        mobile: '',
        email: '',
        address: '',
        qualification: '',
        college: '',
        resume: '',
        technicalSkill: '',
        additionalInfo: '',
        question: ''
    })

    const handleInputOnchange = (e) => {
        const { name, value } = e.target;

        setForm((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            }
        })
    }

    const handleSubmit = () => {
        console.log(form.name, form.mobile, form.email, form.college, form.qualification, form.category);

        setForm({
            category: '',
            name: '',
            mobile: '',
            email: '',
            address: '',
            qualification: '',
            college: '',
            resume: '',
            technicalSkill: '',
            additionalInfo: '',
            question: ''
        })

        Axios.post("http://52.66.234.240:4000/join/joinUs", { form })
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='register'>
                <div className='register_form_container'>
                    <h1>Join Us</h1>
                    <form className='register_form'>
                        <div className='new_user_role'>
                            <select name='category' value={form.category} onChange={handleInputOnchange} >
                                <option>Intern</option>
                                <option>Volunteer</option>
                                <option>Full-Time</option>
                            </select>
                        </div>
                        <div className='name'>
                            <input type='text' name='name' value={form.name} onChange={handleInputOnchange} placeholder='Your Name;' />
                        </div>
                        <div className='mobile'>
                            <input type='number' name='mobile' value={form.mobile} onChange={handleInputOnchange} placeholder='Your Mobile;' />
                        </div>
                        <div className='email'>
                            <input type='email' name='email' value={form.email} onChange={handleInputOnchange} placeholder='Your email;' />
                        </div>
                        <div className='new_user_address'>
                            <input type='text' name='address' value={form.address} onChange={handleInputOnchange} placeholder='Your Address;' />
                        </div>
                        <div className='qualification'>
                            <input type='email' value={form.qualification} onChange={handleInputOnchange} name='qualification' placeholder='Your Qualification;' />
                        </div>
                        <div className='college'>
                            <input type='text' name='college' value={form.college} onChange={handleInputOnchange} placeholder='Your College;' />
                        </div>
                        <div className='resume'>
                            <input type='text' name='resume' value={form.resume} onChange={handleInputOnchange} placeholder='Your Resume;' />
                        </div>
                        <div className='technical_skills'>
                            <input type='text' name='technicalSkill' value={form.technicalSkill} onChange={handleInputOnchange} placeholder='Your Technical_skills:' />
                        </div>
                        <div className='join_additional_info'>
                            <textarea type='text' cols='53' rows="5" name='additionalInfo' value={form.additionalInfo} onChange={handleInputOnchange} placeholder='Your Additional_info:' />
                        </div>
                        <div className='questions'>
                            <textarea type='text' cols='53' rows="5" name='question' value={form.question} onChange={handleInputOnchange} placeholder='Why do you want to join us?' />
                        </div>
                        <Button onClick={handleSubmit}>Join us</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JoinUs;
