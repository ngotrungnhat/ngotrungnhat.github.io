import React, { Component } from 'react';

class NoteList extends Component {
    render() {
        return (
            <div className="col mt-5">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                    <div className="card-header" role="tab" id="note_01">
                        <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                            Ngày 31/03/2018
                        </a>
                        </h5>
                    </div>
                    <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                        <div className="card-body">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ratione iure dolores voluptas labore molestias nemo incidunt eligendi laudantium veritatis ea aliquid, ducimus quasi harum at reprehenderit sunt maxime. Et?
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header" role="tab" id="note_02">
                        <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#noteContent_02" aria-expanded="true" aria-controls="noteContent_02">
                            Ngày 31/03/2018
                        </a>
                        </h5>
                    </div>
                    <div id="noteContent_02" className="collapse in" role="tabpanel" aria-labelledby="note_02">
                        <div className="card-body">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ratione iure dolores voluptas labore molestias nemo incidunt eligendi laudantium veritatis ea aliquid, ducimus quasi harum at reprehenderit sunt maxime. Et?
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NoteList;