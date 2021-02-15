import React, { Component } from 'react'
import {carsCollection, employeeRef} from '../utils/firebase'
import {firebaseLooper} from '../utils/tools';
import Form from './forms';
export default class Cars extends Component {


    state ={
        cars : null
    }



    getAllCars(){

        carsCollection
        .orderBy('price' , 'asc')
        // .where('color','==','blue')
        .get()
        .then(
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

    componentDidMount(){

            this.getAllCars();


            //GET DOC BY ID
            carsCollection.doc('uxv4JL9K71zVc8kq55AT').get().then( snapshot =>{

                console.log(snapshot.data())
            }
            )
       
    //    employeeRef.get().then((snapshot) => {
    //        const employess = firebaseLooper(snapshot);
    //        console.log(employess)
    //    })
       
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
            <Form />
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
