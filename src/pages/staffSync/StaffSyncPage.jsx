import React from 'react';
import { Footer, Projectdetails, Projectoverview, Projectrequirements, Nav } from '../../containers';
import { laptop, staffSyncIcon } from '../../assets';

const StaffSync = () => {
  return (
    <>
      <Nav />

      <Projectoverview
        projectName="Staff Sync"
        projectType="A command-line application to manage a company's employee database"
        projectImage={staffSyncIcon}
        projectGithub="https://github.com/Kristy-H-Thompson/staffSync"
        projectWebsite="https://drive.google.com/file/d/1P4EtECP367esbrNcRkglSNNc58tUQ7KN/view?usp=sharing"
      >
        The Staff Sync project is a command-line application designed to streamline the management and tracking of employee data within a company. Built using Node.js, Inquirer, and PostgreSQL, it provides an interactive and efficient way for administrators to manage their workforce data through a series of easy-to-use prompts and queries. The motivation behind creating this project was to solve the challenges of keeping track of employee information, roles, and departments in an organized and accessible way. By leveraging this application, users can perform essential functions such as adding and updating employee records, roles, and departments, as well as deleting outdated or redundant entries. 
      </Projectoverview>

      <Projectdetails
        projectClient="N/A"
        projectTeam="Kristy Thompson"
        projectTimeline="N/A"
        projectImage={laptop}
        projectImageName="laptop"
      >
        <p>
          <b>Software & Technology Used:</b>
        </p>
        <ul className="projectList">
          <li><b>Node.js:</b> In the Staff Sync project, Node.js is used to build the server-side functionality, handling user input, database connections, and executing the core logic of managing employee data.</li>
          <li><b>Inquirer: </b>Inquirer is used to prompt users with interactive questions in the command-line interface, allowing them to view, add, update, or delete employee records, roles, and departments.</li>
          <li><b>PostgreSQL: </b> ostgreSQL serves as the database to store and manage employee, role, and department information, allowing the application to perform CRUD operations and maintain data integrity.</li>
        </ul>

        <br />
      </Projectdetails>

      <Projectrequirements projectImage={laptop} projectImageName="laptop">   
        <p><b>User Story:</b></p>
      <p>AS A business owner, I WANT to be able to view and manage the departments, roles, and employees in my company, SO THAT I can organize and plan my business</p>
      <p><i>Acceptance Criteria:</i></p>
      <ul className="projectList">
        <li>GIVEN a command-line application that accepts user input</li>
        <li>WHEN I start the application, THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role</li> 
        <li>WHEN I choose to view all departments, THEN I am presented with a formatted table showing department names and department ids</li> 
        <li>WHEN I choose to view all roles, THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role</li>
        <li>WHEN I choose to view all employees, THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to</li>
        <li>WHEN I choose to add a department, THEN I am prompted to enter the name of the department and that department is added to the database</li>
        <li>WHEN I choose to add a role, THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database</li>
        <li>WHEN I choose to add an employee, THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database</li>
        <li>WHEN I choose to update an employee role,THEN I am prompted to select an employee to update and their new role and this information is updated in the database</li>
      </ul>
    </Projectrequirements>
      <Footer />
    </>
  );
};

export default StaffSync;