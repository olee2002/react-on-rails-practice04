import React, { Component } from 'react'
import axios from 'axios'

export default class TeacherForm extends Component {
    state = {
        name: this.props.teacher ? this.props.teacher.name : '',
        subject: this.props.teacher ? this.props.teacher.subject : '',
        email: this.props.teacher ? this.props.teacher.email : ''
    }


    handleChange = name => e => {
        this.setState({ [name]: e.target.value })
    }

    handleSubmit = () => {
        const { name, subject, email } = this.state
        const { isEdited, teacher } = this.props
        const payload = { name, subject, email }
        isEdited ?
            axios.put(`/api/teachers/${teacher.id}`, payload)
            :
            axios.post('/api/teachers', payload)
    }


    render() {
        const { name, subject, email } = this.state
        console.log('teacher', this.props.teacher)
        return (
            <div className='container'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input value={name} onChange={this.handleChange('name')} />
                    </div>
                    <div>
                        <label>Subject</label>
                        <input value={subject} onChange={this.handleChange('subject')} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input value={email} onChange={this.handleChange('email')} />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        )
    }
}
