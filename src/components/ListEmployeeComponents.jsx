import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

export default function ListEmployeeComponents() {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => console.error(error))
    }
    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        deleteEmployee(id).then((response) => {
            getAllEmployees()
        }).catch(error => {
            console.error(error);
        })
    }
  return (
    <div className='container my-5 py-3'>
        <h2 className='my-4'>List of Employee</h2>
        
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Employee.Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee, index) => 
                        <tr key={employee.id}>
                            <td>{index + 1}</td>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>

                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}} 
                                >Delete</button>
                            </td>
                        </tr>
                    )
                }

            </tbody>
        </table>
        <div className='text-center'>
                <button className='btn btn-primary mb-4' onClick={addNewEmployee}>Add Employee</button>
        </div>
        
    </div>
  )
}


// Bootstrap install command npm install bootstrap --save
// npm install axios --save

// use state hooks

    // const dummyData = [
    //     {
    //         "id" : 1,
    //         "firstName" : "Surya",
    //         "lastName" : "Kumar",
    //         "email" : "surya@gmail.com"
    //     },
    //     {
    //         "id" : 2,
    //         "firstName" : "John",
    //         "lastName" : "Cena",
    //         "email" : " john@gmail.com"
    //     },
    //     {
    //         "id" : 3,
    //         "firstName" : "Roman",
    //         "lastName" : "Reings",
    //         "email" : "roman@gmail.com"
    //     }
    // ] used this to test whether it is working or not

    //  <tbody>
    //             {
    //                 dummyData.map(employee => 
    //                     <tr key={employee.id}>
    //                         <td>{employee.id}</td>
    //                         <td>{employee.firstName}</td>
    //                         <td>{employee.lastName}</td>
    //                         <td>{employee.email}</td>
    //                     </tr>
    //                 )
    //             }

    //         </tbody>