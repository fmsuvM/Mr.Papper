import React from 'react';
import Debug from 'debug';
import PropTypes from 'prop-types';
import { reduxForm, Field, FieldArray } from 'redux-form';

import Button from '../UIcomponents/Button';

const debug = Debug('Mr.Papper::Form::TestForm::');

const renderTags = ({ fields, meta: { error, submitFailed } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>
                Add Tag
            </button>
            {submitFailed && error && <span>{error}</span>}
        </li>
        {fields.map((tag, index) => (
            <li key={index}>
                <button
                    type="button"
                    title="Remove Member"
                    onClick={() => fields.remove(index)}
                >
                    delete
                </button>
                <h4>Tag #{index + 1}</h4>
                <Field
                    name={tag}
                    type="text"
                    component="input"
                    placeholder="add your tag"
                />
            </li>
        ))}
    </ul>
);

const renderAuthors = ({ fields, meta: { error, submitFailed } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>
                Add Author
            </button>
            {submitFailed && error && <span>{error}</span>}
        </li>
        {fields.map((author, index) => (
            <li key={index}>
                <button
                    type="button"
                    title="Remove Member"
                    onClick={() => fields.remove(index)}
                >
                    delete
                </button>
                <h4>Author #{index + 1}</h4>
                <Field
                    name={author}
                    type="text"
                    component="input"
                    placeholder="add paper author"
                />
            </li>
        ))}
    </ul>
);

const PaperEditForm = props => {
    const{ handleSubmit, pristine, reset, submitting, contactValue } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Paper Title</label>
                <Field
                    name="title"
                    component="input"
                    type="text"
                    placeholder="enter title"
                />
            </div>
            <div>
                <label>Paper SubTitle</label>
                <Field
                    name="subtitle"
                    component="input"
                    type="text"
                    placeholder="enter subtitle"
                />
            </div>
            <div>
                <label>Tags</label>
                <FieldArray name="tags" component={renderTags} />
            </div>
            <div>
                <label>Authors</label>
                <FieldArray name="authors" component={renderAuthors} />
            </div>
            <div>
                <label>Published Date(or year)</label>
                <Field
                    name="pulishedDate"
                    component="input"
                    type="text"
                    placeholder="e.g. 2017-4-13"
                />
            </div>
            <div>
                <label>Other</label>
                <Field name="meta" component="textarea" type="text" />
            </div>
            <div>
                <Button
                    primary={'primary'}
                    type="submit"
                    disabled={pristine || submitting}
                >
                    Submit
                </Button>
                <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                >
                    Clear Values
                </Button>
            </div>
        </form>
    );
};

PaperEditForm.propTypes = {
    handleSubmit: PropTypes.func
};

export default reduxForm({
    form: 'PaperEditForm'
})(PaperEditForm);
