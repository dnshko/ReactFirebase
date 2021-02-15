import React, { Component } from 'react'
import {carsCollection, employeeRef} from '../utils/firebase'

export default class Forms extends Component {

    state = {

        brand: '',
        color : '',
        price : '',
        available : ''
    }
    handleForm = (e) =>{
            e.preventDefault();
            // console.log(this.state)
            carsCollection.add(
                {
                    ...this.state,
                    price: parseInt(this.state.price)

                }
            ).then(  data =>{
                console.log(data)
            }
            ).catch(e => {
                console.log(e)
            }

            )
    }

    changeHandler =(e) => {

        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name] : value})

    }

    render() {
        return (
            <div>
                <form onSubmit = { (e)=>this.handleForm(e) } >
                    <div className="form-group">
                        <label>Brand</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="brand"
                            onChange={ (e) => this.changeHandler(e)}
                            />
                    </div>
                    <div className="form-group">
                        <label>color</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="color"
                            onChange={ (e) => this.changeHandler(e)}
                            />
                    </div>
                    <div className="form-group">
                        <label>price</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="price"
                            onChange={ (e) => this.changeHandler(e)}
                            />
                    </div>
                    <div className="form-group">
                        <label>available</label>
                        <select 
                            type="text"
                            className="form-control"
                            name="available"
                            onChange={ (e) => this.changeHandler(e)}
                            >
                                    <option value="true">YES</option>
                                    <option value="false">NO</option>

                            </select>
                    </div>
                <button type="submit" className="btn btn-primary"> submit</button>
                </form>

            </div>
        )
    }
}
