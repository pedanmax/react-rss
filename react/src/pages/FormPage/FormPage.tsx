import React from 'react';
import Form from '../../components/Form/Form';
import './FormPage.scss';

class FormPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className='form-page'>Form page</h1>
        <Form />
      </div>
    );
  }
}

export default FormPage;
