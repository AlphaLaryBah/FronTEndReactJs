import React from "react";


function FilteredTags(props) {
    const { filteredData } = props;
    return (<div>
        
        {filteredData.map((tag, index) => {

            return (<div className="tagDiv2" key={index}>
                
                <div className="tag" key={index}>
                    
                    <p key={index} className="tagpara">{tag}</p>
                    
                </div>

            </div>

            )
        })
        }
    </div>

    );
}

export default FilteredTags;

