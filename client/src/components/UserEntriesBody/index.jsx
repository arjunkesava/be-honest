import React from 'react';
import { Form, Formik } from 'formik';

class UserEntriesBody extends React.Component {
  render() {
    // let userNameRequired = '';
    // let userEmailRequired = '';
    return (
      <Formik
        initialValues={{
          email: '',
          name: '',
        }}
        validate={() => {
          // if (!values.name) {
          //   userNameRequired = 'required';
          // }
          // if (!values.email) {
          //   userEmailRequired = '';
          // } 
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
                    <label htmlFor="userName">Name:</label>
                    <input className="form-control" id="userName" name="userName" rows="5" />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="userEmail">Email:</label>
                    <input className="form-control" type="text" name="userEmail" placeholder="Recomended" />
                  </div>
                </div>
                <div className="col-md-5 submit-div">
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary submit">
                    Generate.
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