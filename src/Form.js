import React, {useState} from 'react';

function Form(props) {
    const [formValues, setFormValues] = useState({ name: "", email: "", role: "" });

    const handleChange = event => {
      setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formValues);
        props.setMembers(props.members.concat({ name: formValues.name, email: formValues.email, role: formValues.role }));
        setFormValues({ name: "", email: "", role: "" });
    }

    return (
        <div className="Form">
          <form onSubmit={event => handleSubmit(event)}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={event => handleChange(event)}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={event => handleChange(event)}
              />
            </label>
            <label>
              Role:
              <input
                type="text"
                name="role"
                value={formValues.role}
                onChange={event => handleChange(event)}
              />
            </label>
            <button>Add Team Member!</button>
          </form>
        </div>
      );
    }

export default Form;