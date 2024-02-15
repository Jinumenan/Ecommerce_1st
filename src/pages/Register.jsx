import React from "react";
import { Component } from "react";


export default class Login extends Component{

    state = {
        first:'',
        last:'',
        username:'',
        pass :'',
        confirm:'',
    }

    handleChange = (evt)=>{
        const fields = Object.assign({},this.state);
        fields[evt.target.name] = evt.target.value;
        this.setState({...fields})
    }

    render(){
        
        return <div className="flex justify-center bg-slate-800">
            <div className="flex flex-col absolute top-[30%] shadow-xl
            border-[2px] p-5 w-[60%] rounded-lg mobile:w-[90%]">
                
                <text className="text-2xl text-center">Register</text>
                <div className="flex mt-3">
                <input className="border-[2px] rounded-xl w-[100%] p-2 outline-blue-200 focus:border-[#5c4bf3] ease-linear duration-300"
                    placeholder="First Name"
                    name="first"
                    value={this.state.first}
                    onChange={this.handleChange}/>
                
                <input className="border-[2px] rounded-xl w-[100%] p-2 outline-blue-200 focus:border-[#5c4bf3] ease-linear duration-300 ml-5"
                    placeholder="Last Name"
                    name="last"
                    value={this.state.last}
                    onChange={this.handleChange}/>
                </div>
                <div className="flex mt-3">
                    <input className="border-[2px] rounded-xl w-[100%] p-2 outline-blue-200 focus:border-[#5c4bf3] ease-linear duration-300"
                    placeholder="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}/>
                </div>
                <div className="flex mt-3">
                    <input  className="border-[2px] rounded-xl w-[100%] p-2 outline-blue-200 focus:border-[#5c4bf3] ease-linear duration-300"
                    placeholder="password"
                    name="pass"
                    value={this.state.pass }
                    onChange={this.handleChange}/>
             
                <input  className="border-[2px] rounded-xl w-[100%] p-2 outline-blue-200 focus:border-[#5c4bf3] ease-linear duration-300 ml-5"
                    placeholder="confirm"
                    name="confirm"
                    value={this.state.confirm }
                    onChange={this.handleChange}/>
                </div>

                <input type="button" value="Register" className="btn mt-7 hover:scale-[1.02]"/>
            </div>
        </div>
    }
}