import React from "react";
import firebase from "firebase";
import "firebase/storage";

class SampleData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getFireData();
  }

  getFireData() {
    let db = firebase.database();
    let ref = db.ref("sample/");
    let self = this;
    console.log(db);
    console.log(ref);
    ref
      .orderByKey()
      .limitToFirst(2)
      .on("value", snapshot => {
        console.log(snapshot);
        self.setState({
          data: snapshot.val()
        });
      });
  }

  getTableData() {
    let result = [];
    if (this.state.data === null || this.state.data.length === 0) {
      return [
        <tr key="0">
          <th>NO DATA</th>
        </tr>
      ];
    }
    for (let i in this.state.data) {
      result.push(
        <tr key={i}>
          <th>{this.state.data[i].ID}</th>
          <th>{this.state.data[i].name}</th>
          <th>{this.state.data[i].message}</th>
        </tr>
      );
    }
    return result;
  }

  render() {
    if (this.state.data.length === 0) {
      this.getFireData();
    }
    return (
      <table>
        <tbody>{this.getTableData()}</tbody>
      </table>
    );
  }
}

export default SampleData;
