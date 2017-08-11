import React, {Component} from 'react';
import {render} from 'react-dom';
import {Redirect, Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {fetchTasks} from '../../../Actions/index.js';
import NavTask from '../Dashboard/NavTask.jsx';
import ProjectsListItem from './ProjectsListItem.jsx';
import ProjectForm from './ProjectForm.jsx';


class ProjectsList extends Component{

  render() {
    return(
      <div className="dashboard-container">
        <div className="left-col">
					<div className="app-title">
						<h1>Task Mon</h1>
					</div>
          <NavTask />
        </div>
        {/* <div className ="col-sm-">

        </div> */}
        <div className="right-col">
					<div className="dashboard-title">
						<h1 className="pull-left">Projects List</h1>
					</div>
          <div className="tasksListContainer">
            <div>
              {
                this.props.projects.map(project =>
                  <ProjectsListItem projectsListItem={project}/>
                )
              }
              <ProjectForm />
              {/* <Link to="/tasksTree"><button className="tasksTreeButton">Tasks Tree</button></Link> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({}, dispatch);
// }

function mapStateToProps(state) {
  return { projects: state.tasks.allProjects }
}

export default connect(mapStateToProps)(ProjectsList);
