import React, { Component } from 'react';

class Sesion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: 0
        }
    }

    renderButton = () =>
         (
            <div className="bnt bnt-group">
            <button onClick={this.editClick} className="btn btn-info">edit</button>
            <button className="bnt bnt-warning">remove</button>
        </div>
        )

    renderForm = () => (
        <div>
             <div className="form-group">
            <input defaultValue={this.props.tieude} className="form-control" type="text" />
        </div>
        <div className="form-group">
            <div onClick={this.saveClick} className="btn btn-block btn-danger">Save</div>
        </div>
        </div>
       
    )
    displayCheck = () => {
        if(this.state.trangThai === 0){
            return this.renderButton();
        }else{
            return this.renderForm();
        }
    }
    editClick = () => {
        this.setState({trangThai: 1});
    }
    saveClick = () => {
        this.setState({trangThai: 0});
    }


    render() {
        return (
            <section>
                <div className="container">
                    <div className="row ">
                        <div className={"col-lg-6 " + this.props.vitri2}>
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={"img/" + this.props.img + ".jpg"} alt />
                            </div>
                        </div>
                        <div className={"col-lg-6 " + this.props.vitri1}>
                            <div className="p-5">
                                <h2 className="display-4">{this.props.tieude}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                    </div>
                    {this.displayCheck()}

                </div>
            </section>
        );
    }
}

export default Sesion;