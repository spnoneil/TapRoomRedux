import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      // mainKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage
      // }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const {dispatch} = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
    // const newMainKegList = this.state.mainKegList.concat(newKeg);
    // this.setState({
    //   mainKegList: newMainKegList,
    //   formVisibleOnPage: false
    // });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  }

  handleDecrementingSoldPint = () => {
    const selectedKeg = this.state.selectedKeg;
    const newPintsLeft = Object.assign({}, selectedKeg, { pintsLeft: parseInt(selectedKeg.pintsLeft) - 1 });
    selectedKeg.pintsLeft = newPintsLeft
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(newPintsLeft);
    
    this.setState({ 
      // mainKegList: newMainKegList,
      selectedKeg: newPintsLeft })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail
      keg = {this.state.selectedKeg}
      onPintSaleButtonClicked = {this.handleDecrementingSoldPint}
      />
      buttonText = "Return to Keg List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList 
      kegList={this.state.mainKegList}
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
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;