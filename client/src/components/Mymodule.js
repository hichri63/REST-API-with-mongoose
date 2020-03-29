import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addContact, updatedContact } from "../actions/ContactAction";

class ModalComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
      Num_tel: "",
      Email: ""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleOperation = () => {
    if (this.props.editMode) {
      this.props.updatedContact(this.state._id, {
        name: this.state.name,
        Num_tel: this.state.Num_tel,
        Email: this.state.Email
      });
    } else {
      this.props.addContact({
        name: this.state.name,
        author: this.state.Num_tel,
        year: this.state.Email
      });
    }
    this.setState({ show: false });
  };
  componentDidMount() {
    if (this.props.editMode) {
      this.setState({
        ...this.props.contactToUpdate
      });
    }
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.editMode ? "Edit Contact" : "Add new Contact"}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>name:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                />
              </div>
              <div>
                <label>Num_tel:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="Num_tel"
                  value={this.state.Num_tel}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="Email"
                  value={this.state.Email}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleOperation}>
              {this.props.editMode ? "Edit" : "Add Contact"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { addContact, updatedContact })(ModalComp);