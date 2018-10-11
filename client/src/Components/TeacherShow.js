import React, { Component } from 'react'
import axios from 'axios'

import TeacherForm from './TeacherForm'


export default class TeacherShow extends Component {


    state = {
        teacher: {},
        isEdited: false
    }

    componentDidMount = () => {
        const id = this.props.match.params.teacherId
        axios.get(`/api/teachers/${id}`)
            .then(res => this.setState({ teacher: res.data }))
    }

    handleEdit = () => {
        this.setState({ isEdited: !this.state.isEdited })
    }

    render() {
        const { teacher, isEdited } = this.state
        return (
            <div className='container'>
                <h2>Teacher information</h2>
                <div>Name:{teacher.name}</div>
                <div>Subject:{teacher.subject}</div>
                <div>Email:{teacher.email}</div>
                <hr />
                <button onClick={this.handleEdit} className='btn btn-primary'>Edit</button>
                {isEdited ? <TeacherForm teacher={teacher} isEdited={isEdited} /> : null}
            </div>
        )
    }
}
