import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { name, label, form, disabled } = props;
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                    label={label}
                    disabled={disabled}
                    {...field}
                    fullWidth
                    margin="normal"
                    error={invalid}
                    helperText={error?.message}
                />
            )}
        >
        </Controller>
    );
}

export default InputField;