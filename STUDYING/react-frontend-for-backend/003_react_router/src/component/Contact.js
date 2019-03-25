import React, { Component } from 'react';

class Contact extends Component {
    subbmitForm = (event) => {
        event.preventDefault();
    }

    render() {

        

        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                      <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                          <div className="header-content mx-auto">
                            <h1 className="mb-5">Trang Liên hệ</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                {/* //BẮT ĐẦU FORM */}
                <div classNameName="form-group">
                    <label for="">Tên</label>
                    <input type="text" name="nhat" className="form-control" placeholder="điền nhất" aria-describedby="helpId"/>
                </div>
                <div className="form-group">
                    <label for="">Slect</label>
                    <select defaultValue="one" className="form-control" name="lang" id="">
                        <option>nhất</option>
                        <option>one</option>
                        <option>một</option>
                    </select>
                </div>
                <button onClick={(event)=>this.subbmitForm(event)} type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Submit</button>
            </div>
        );
    }
}

export default Contact;