import React, { Component } from 'react'
import axios from 'axios'
import HistoryList from './HistoryList'


class DataProvider extends Component {

  constructor(props){
    super(props)
    this.state = {
      history: [],
    }
  }

 componentDidMount(){

    axios.get('https://sprmspc.ru/restapi/api/lead/') // {method: 'HEAD', mode: 'no-cors'}
    .then(response => {
      let history = response.data
      this.setState({
        history
      })
      console.log(history);
    })

  }


  render(){
    const historyList = this.state.history.map(item => (
      <HistoryList
        data={item}
        key={item.id}
      />
    ))

    return (
      <div className="row d-flex justify-content-center">
        {historyList}
      </div>
    )
  }
}


export default DataProvider
