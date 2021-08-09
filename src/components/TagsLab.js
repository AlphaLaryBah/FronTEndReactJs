import React from 'react'
import FilteredTags from './FilteredTags';


class TagsLab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [
                ""],
            tagDataStore: [],
            newTag: "",
            findTagSearch: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handletext = this.handletext.bind(this);


    }
    handleInputChange(newName, index,) {

        const { inputs } = this.state;
        const newaddAtag = [...inputs];
        newaddAtag[index] = newName;

        this.setState({ inputs: newaddAtag });

        this.setState({ newTag: newName });


    }
    handletext(event) {

        const { name, value } = event.target;

        this.setState({ [name]: value });

        this.setState(prevState => ({
            tagDataStore: { ...prevState.tagDataStore, [name]: value }
        }));
        
    }
    handleSubmit(event) {
        event.preventDefault();
        
        this.setState(prevState => ({
            tagDataStore: [...prevState.tagDataStore, this.state.newTag]
        }));
       
        this.setState({ newTag: "" });

    }
    

    render() {
        const { inputs, newTag, tagDataStore } = this.state;

        const look = this.props.theTagSearcher;
        // filter tags
        const lowercasedFilteredTags = look.toString().toLowerCase();

        const filteredDataTags = tagDataStore.filter(item => {

            return Object.keys(item).some(key =>

                item[key].toString().toLowerCase().includes(lowercasedFilteredTags)
            );


        });

        return (<div>

            <FilteredTags
                filteredData={filteredDataTags}
            />

            <ul>
                {inputs.map((item, index) => (

                    <form onSubmit={this.handleSubmit}>

                        <input type="text"
                            name="addAtag"
                            key={index}
                            value={newTag}
                            onChange={(e) => this.handleInputChange(e.target.value, index)}
                            className="tagAdInput"
                            placeholder="Add a tag"
                        ></input>

                    </form>
                ))}
            </ul>
        </div>
        );
    }
}
export default TagsLab;