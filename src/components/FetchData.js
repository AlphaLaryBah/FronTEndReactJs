import React, { Component } from "react";
import Details from "./Details";
// import TagSearchInput from "./TagSearchInput";
import TagsLab from './TagsLab';
require('dotenv').config();


class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsData: [],
            search: "",
            isToggleOn: false,
            findTagSearch: "",
            clickPage: null,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //call the fetch function
        const searchAdress = process.env.REACT_APP_DATA_URL
        console.log(searchAdress)
    //    process.env.DATA_URL;
        // 'https://api.hatchways.io/assessment/students'
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())
            .then(data => {
                this.setState({ studentsData: data.students })
            });
    }


    handleInputChange(event) {
        const { name, value } = event.target;
        
        this.setState({ [name]: value });

    }

    handleSubmit(event) {

        event.preventDefault();

    }

    renderData() {

        const { isToggleOn } = this.state;

        //filter student data
        const { search, studentsData } = this.state;

        const lowercasedFilter = search.toLowerCase();

        const filteredData = studentsData.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(lowercasedFilter)
            );
        })

        const clickToggle = (student, id) => {
            this.setState({ isToggleOn: !isToggleOn, clickPage: id })
        }



        return (<div>
            <div className="fixedElement">
                
            <div>
                <input className="nameSearchInput "
                    type="text"
                    placeholder="Search by name"
                    name="search"
                    value={search}
                    onChange={this.handleInputChange}
                />
                </div>                 
             {/* <div>
                <TagSearchInput
                        name="findTagSearch"
                        value={this.state.findTagSearch}
                        onChange={this.handleInputChange}
                    />
                </div> 
                 */}
            </div> 

            <div className="dataDiv">
                
            {filteredData.map((student, index) => {
                return (<div key={student.id} className="">
                    
                    <div className="card " key={student.id}>
                        
                        <div key={index} className="image">
                            <img src={student.pic} alt="avatar" />
                        </div>

                        <div className="detail" key={student.id}>
                            
                            <div className='name'>
                                <h1>{`${student.firstName} ${student.lastName}`}</h1>
                            </div>

                            <div className="info" key={student.id}>
                                <p> Email: {student.email}</p>
                                <p>Company: {student.company}</p>
                                <p>Skills:  {student.skill}</p>
                                <p>Average: {`${student.grades.reduce((a, b) => a + parseInt(b), 0) / student.grades.length} %`}</p>

                                
                                <Details student={student} toggle={isToggleOn} clickPage={this.state.clickPage} />

                            </div>

                            <div key={index}>
                                <TagsLab theTagSearcher={this.state.findTagSearch} />
                            </div>

                        </div>

                        <div  className="toggleBtn">
                            <button key={student.id} onClick={() => clickToggle(student, student.id)} >{isToggleOn && student.id === this.state.clickPage ? '-' : '+'}</button>
                        </div>

                    </div>

                </div>
                );

            })
            }
            </div>
        </div>

            )
        
    }


    render() {
        return (<div>
            
            {this.renderData()}

        </div>

        )
    }
}
export default FetchData;


