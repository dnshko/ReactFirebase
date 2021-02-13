import React, { Component } from 'react'
import {db} from '../utils/firebase'
import {firebaseLooper} from '../utils/tools';

export default class Cars extends Component {


    state ={
        cars : null
    }

    componentDidMount(){

        db.collection('cars').get().then(
            snapshot =>{
                const cars = firebaseLooper(snapshot);
                this.setState({
                    cars
                })
           }
       ).catch(
           e => {
               console.log(e);
           }
       )
       
    }
    handleCarData = (cars) => (
        cars ? 
            cars.map( (data,i) => (
                <tr key={i}>
                    <th>{data.id}</th>
                    <th>{data.brand}</th>
                    <th>{data.color}</th>
                    <th>{data.price}</th>
                </tr>
            ))
        : null
    )

    render() {

        return (
            <>
            
            <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Color</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.handleCarData(this.state.cars)}
                    </tbody>
                </table>  
            </>
        )
    }
}
