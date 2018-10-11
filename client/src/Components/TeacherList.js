import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import TeacherForm from './TeacherForm';

export default class TeacherList extends Component {


    state = {
        teachers: [],
        showForm: false
    }

    componentDidMount = () => {
        axios.get('/api/teachers')
            .then(res => this.setState({ teachers: res.data }))
    }

    handleDelete = (id) => {
        axios.delete(`/api/teachers/${id}`)
            .then(res => this.setState({ teachers: res.data }))
    }
    handleCreate = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    render() {
        const { teachers, showForm } = this.state
        return (
            <div className='container'>
                <h2>Teacher List</h2>
                <table className='table'>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                    {teachers.map(t =>
                        <tr key={t.id}>
                            <td><Link to={`/teachers/${t.id}`}>{t.name}</Link></td>
                            <td>{t.subject}</td>
                            <td>{t.email}</td>
                            <td>
                                <button className='btn btn-primary btn-sm'>
                                    Edit
                                </button>
                                <button
                                    onClick={() => this.handleDelete(t.id)}
                                    className='btn btn-danger btn-sm ml-2'>
                                    Delete
                                </button>
                            </td>
                        </tr>)}
                </table>
                <hr style={{ marginTop: '-15px' }} />
                <button onClick={this.handleCreate} className='btn btn-primary btn-sm'>
                    Add A Teacher
                </button>
                {showForm ? <TeacherForm /> : null}
            </div>
        )
    }
}
