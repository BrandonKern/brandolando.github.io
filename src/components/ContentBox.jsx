import RaceTable from "./RaceTable"
import InformationColumn from "./InformationColumn";

const ContentBox = (props) => {

    return (
        <div className="columns is-2" >
            <div className="column is-one-third">
                <RaceTable/>
            </div>
            <div className="column">
                <InformationColumn/>
            </div>
        </div>
    )
}

export default ContentBox;