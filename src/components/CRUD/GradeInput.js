import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore'

export const GradeInput = ({
    grade
}) => {
    const [moduleCode, setCode] = React.useState(grade.moduleCode);
    const [moduleName, setName] = React.useState(grade.moduleName);
    const [moduleCA, setCA] = React.useState(grade.moduleCA);
    const [moduleExam, setExam] = React.useState(grade.moduleExam);

    const onUpdate = () => { //this will update firebase
        const db = firebase.firestore();
        //.set sets all data from before but with updated data
        db.collection('users').doc(grade.id).set({
            ...grade,
            moduleCode,
            moduleName,
            moduleCA,
            moduleExam
        });
    }

    const onDelete = () => { //will delete from firebase
        const db = firebase.firestore();
        db.collection('users').doc(grade.id).delete();
    }

    return ( /*e is the event reference and it calls setCode to set inputted data*/
        <React.Fragment>
            <p>Select Order Preference</p>
            <input type="radio" name="sort" id="asc">Alphabetical Order (Asc)</input>
            <input type="radio" name="sort" id="desc">Descending Order (Desc) </input>
            <input type="radio" name="sort" id="high">Highest Grade</input>
            <input type="radio" name="sort" id="low">Lowest Grade</input>
            <button type="submit" name="order" id="submit" >>Order</button>
            <table className="crudTable">
                <thead className="headers">
                    <th>Module Code</th>
                    <th>Module Name</th>
                    <th>Module CA</th>
                    <th>Module Exam</th>
                    <th>Action</th>
                </thead>
                <td>
                    <input
                        value={moduleCode}
                        onChange={e => {
                            setCode(e.target.value);
                        }}
                    />
                </td>
                <td>
                    <input
                        value={moduleName}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                    />
                </td>
                <td>
                    <input
                        value={moduleCA}
                        onChange={e => {
                            setCA(e.target.value);
                        }}
                    />
                </td>
                <td>
                    <input
                        value={moduleExam}
                        onChange={e => {
                            setExam(e.target.value);
                        }}
                    />
                </td>
                <td>
                    <button onClick={onUpdate}>Update</button>
                    <button onClick={onDelete}>Delete</button>
                </td>

            </table>
        </React.Fragment>

    );
};