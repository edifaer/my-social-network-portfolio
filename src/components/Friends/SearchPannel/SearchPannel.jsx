import React from "react";
import style from './SearchPannel.module.css'
import {FaSearch} from 'react-icons/fa';
import {Field, reduxForm} from "redux-form";

class SearchPannel extends React.Component {
    componentWillUnmount() {
        this.props.onSearchChange('');
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.props.onSearchChange(term);
    };

    render() {
        const {handleSubmit, friends} = this.props;
        return (
            <div className={style.pannel}>
                <div>
                    Kostia's Friends ({friends.friendCardData.length})
                </div>
                <div>
                    <form className={style.searchForm} onSubmit={handleSubmit}>
                        <Field component="input" type='text' placeholder='Search Friends...'
                               className={style.inputField}
                               onChange={this.onSearchChange}/>
                        <div className={style.searchIcon}><FaSearch/></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({form: 'searchForm'})(SearchPannel);