import React from 'react';
import { Form, Formik } from 'formik';

class UserEntriesBody extends React.Component {
  render() {
    let userNameRequired = '';
    let userEmailRequired = '';
    return (
      <Formik
        initialValues={{
          userName: '',
          userEmail: '',
        }}
        validate={values => {
          if (!values.userName) {
            userNameRequired = 'required';
          }
          if (!values.userEmail) {
            userEmailRequired = 'required';
          } 
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div className="form-group">
                    <label htmlFor="userName" className={userNameRequired}>Enter your Name:</label>
                    <input className="form-control" id="userName" name="userName" placeholder="Enter your beautiful name here"/>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="userEmail" className={userEmailRequired}>Enter your Email-Id:</label>
                    <input className="form-control" type="email" name="userEmail" placeholder="Recomended" />
                    <small id="emailHelp" className="form-text text-muted">We need your email to send the generated links.</small>
                  </div>
                </div>
                <div className="col-md-5 submit-div">
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary submit">
                    Generate Link
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}
 
export default UserEntriesBody;