import React, { Component } from 'react'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: []
        }

    }
    
    render() {
        return ( <React.Fragment>
            <h2 className="text-center">Employee List</h2>
            <div className="row">
                    {/* <button className="btn btn-primary" onClick={}>Add Employee</button>  */}
            </div>
            <div className="row">
                  <table className="table table-striped table=bordered">
                      <thead>
                          <tr>
                              <td>Employee First Name</td>
                              <td>Employee Last Name</td>
                              <td>Date of Birth</td>
                              <td>Designation</td>     
                              <td>PhotoLink</td>
                              <td>Experience</td>
                              <td>Edit Action</td>
                              <td>Delete Action</td>
                          </tr>
                      </thead>
                      <tbody>
                      <tr>
                              <td>Raja</td>
                              <td>Dastidar</td>
                              <td>14/04/1987</td>
                              <td>SD</td>     
                              <td>PhotoLink</td>
                              <td>6</td>
                              <td><button>Edit</button></td>
                              <td><button>Delete</button></td>
                          </tr>
                      </tbody>
                  </table>
            </div>
        </React.Fragment>);
    }

}

export default Home;