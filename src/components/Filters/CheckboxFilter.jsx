import React from "react";
import { Form } from "react-bootstrap";
import { checkboxesConfig } from "./checkboxesConfig";

const CheckboxFilter = ({ checked, onHandleChange }) => {
  return (
    <div>
      <Form>
        <span>
          <u>Data sources</u>
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
