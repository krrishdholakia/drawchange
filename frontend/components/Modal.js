import React from 'react';

export default class Modal extends React.Component {

  constructor() {
    super();
    this.email = "";
    this.password = "";
    this._login = this._login.bind(this)
  }

  _login() {
    fetch(`/api?email=${this.email}&password=${this.password}`).then(
      (result) => {
        console.log(result)
      }
      // (success) => {
      //   // alert("ice cream")
      // }
    )
  }

  render() {
    return (
      <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>


            <div className="modal-body">

              <div className="form-group">
                <label>Username</label>
                <input type="username" className="form-control" id="password" placeholder="username" ref={(ref) => {this.username = ref}}/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="password" ref={(ref) => {this.password = ref}}/>
              </div>

            </div>


            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this._login}>Login</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
