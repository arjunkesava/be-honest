import React from 'react';
import { Formik, Form } from 'formik';

class InputFormBody extends React.Component {
  render() {
    let honestyTextAreaLabelClass = "";
    return (
      <Formik
        initialValues={{ honestyTextArea: '', name: '' }}
        validate={values => {
          if (!values.honestyTextArea) {
            honestyTextAreaLabelClass = 'required';
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
                    <label htmlFor="honestyTextArea" className={honestyTextAreaLabelClass}>Enter what ever you want to tell to Arjun.</label>
                    <textarea className="form-control" id="honestyTextArea" name="honestyTextArea" rows="5" placeholder="Start typing here..."></textarea>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="name">If you want tell me your name:</label>
                    <input className="form-control" type="text" name="name" placeholder="Optional" />
                  </div>
                </div>
                <div className="col-md-5 submit-div">
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary submit">
                    Done.
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

export default InputFormBody;
