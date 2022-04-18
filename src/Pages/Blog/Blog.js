import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className='m-5 p-2 border rounded border-secondary bg-success text-dark bg-opacity-25'>
        <h3>Q.1 : Difference between authorization and authentication?
        </h3>
        <p> <strong>Ans: Authentication is the process of verifying your log in username and password. Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process.
          <br /> <br />
          Authorization is the process of verifying that you can access to something.Authorization in system security is the process of giving the user permission to access a specific resource or function.This term is often used interchangeably with access control or client privilege. </strong> </p>
      </div>
      <div className='m-5 p-2 border rounded border-secondary bg-success text-dark bg-opacity-25'>
        <h3>Q.2 : Why are you using firebase? What other options do you have to implement authentication?
        </h3>
        <p> <strong>Ans:Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. It reduces development workload and time. Firebase is simple, lightweight, friendly, and industrially recognized. It deliver web content faster. So Google Firebase is very cool.
          <br /> <br />
          Google Firebase Alternative Site are Back4App, AWS Amplify, Kuzzle etc.
        </strong> </p>
      </div>
      <div className='m-5 p-2 border rounded border-secondary bg-success text-dark bg-opacity-25'>
        <h3>Q.3 : What other services does firebase provide other than authentication?
        </h3>
        <p> <strong>Ans:There are many services which Firebase provides, Most useful of them are
          Cloud Firestore,
          Cloud Functions,
          Authentication,
          Hosting,
          Cloud Storage,
          Google Analytics,
          Predictions
          Cloud Messaging.</strong> </p>
      </div>
    </div>
  );
};

export default Blog;