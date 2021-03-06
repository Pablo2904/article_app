import React from "react";
import { Form } from "react-bootstrap";
import { checkboxesConfig } from "../../utils/configurations";

const CheckboxFilter = ({ checked, onHandleChange }) => {
  const title = "Data sources";
  return (
    <div>
      <Form>
        <span>
          <u>{title}</u>
        </span>
        <Form.Group>
          {checkboxesConfig &&
            checkboxesConfig.map((checkbox) => {
              return (
                <Form.Check
                  type="checkbox"
                  key={checkbox.id}
                  label={checkbox.label}
                  id={checkbox.id}
                  checked={checkbox.id === checked}
                  onChange={onHandleChange}
                />
              );
            })}
        </Form.Group>
      </Form>
    </div>
  );
};

export default CheckboxFilter;
