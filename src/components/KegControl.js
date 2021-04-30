import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component {

  handleClick = () => {
    if (this.props.selectedKeg != null) {
      const { dispatch } = this.props;
      const action = a.unselectKeg();
      dispatch(action);
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const {dispatch} = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.mainKegList[id];
    const { dispatch } = this.props;
    const action = a.selectKeg(selectedKeg);
    dispatch(action);
  }

  handleDecrementingSoldPint = (keg) => {
    const {dispatch } = this.props;
    const action = a.decrementPint(keg);
    dispatch(action);
    const action2 = a.unselectKeg();
    dispatch(action2);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail
      keg = {this.props.selectedKeg}
      onPintSaleButtonClicked = {this.handleDecrementingSoldPint}
      />
      buttonText = "Return to Keg List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList 
      kegList={this.props.mainKegList}
      onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg"
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

KegControl.propTypes = {
  mainKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;