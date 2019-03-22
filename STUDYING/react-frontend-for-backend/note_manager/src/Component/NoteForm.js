import React, { Component } from 'react';
import {connect} from "react-redux"

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    addData = (title, content) => {
        var objData = {};
            objData.title = title;
            objData.content = content;
        this.props.getData(objData)

        this.props.addDataStore();
    }
    render() {
        return (
            <div className="col-4 mt-5">
                <h3>SỬA NỘI DUNG NOTE</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="nodeTitle">Tiêu Đề Note</label>
                        <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="noteTitle" id="nodeTitle" aria-describedby="helpIdNodeTitle" placeholder="Điền tiêu đề vào đây" />
                    </div>
                    <div className="form-group">
                        <label>Nội Dung Note</label>
                        <textarea onChange={(event)=>this.isChange(event)} className="form-control" name="noteContent" rows={3} placeholder="Điền nội dung vào đây" defaultValue={""} />
                    </div>
                    <div onClick={()=>this.addData(this.state.noteTitle, this.state.noteContent)} type="reset" className="btn btn-block btn-primary">Save</div>
                </form>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        testThoi: state.testConnect
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: () => {
            dispatch({type: "ADD_DATA"})
        }
    }
}
// export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
// export default NoteForm;