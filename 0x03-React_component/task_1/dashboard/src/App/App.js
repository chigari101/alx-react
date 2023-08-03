import { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  static listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: '<strong>Urgent requirement</strong> - complete by EOD' }
  ];

  static listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  constructor(props) {
    super(props);
    this.handleCtrH = this.handleCtrH.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleCtrH , false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCtrH , false);
  }

  handleCtrH(ev) {
    ev.preventDefault();
    const props = this.props;
    // function to check the detection
    ev = ev || window.event; // Event object 'ev'
    // Detecting keyCode
    const key = ev.which || ev.keyCode;

    // Detecting Ctrl
    const ctrl = ev.ctrlKey ? ev.ctrlKey : ((key === 17) ? true : false);

    // If key pressed is ctr and h is true.
    if (ctrl && key === 72) {
      alert('Logging you out');
      props.logOut();
    }
  }

  render() {
    return (
      <>
        <div className='root-notifications'>
          <Notifications listNotifications={this.listNotifications} />
        </div>
        <div className='App'>
          <div className='App-header'>
            <Header />
          </div>
          <div className='App-body'>
            {this.props.isLoggedIn
              ? <CourseList listCourses={this.listCourses} />
              : <Login />}
          </div>
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

// Assign Prop Types
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

// Default Prop Values
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

export default App;

