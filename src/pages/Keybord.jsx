import React, { useState } from 'react';
import KeybordStyle from './Keybord.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Keybord() {
    const [formState, setFormState] = useState({
        category: "",
        date: "",
        remark: "",
        vehicle: "",
        che: [],
    });

    const onKeyDown = () => {
        console.log('key down');
    }

    const onKeyUp = () => {
        console.log('key up');
    }

    const onKeyPress = () => {
        console.log('key press');
    }

    const onchangevalue = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            // If checkbox is checked or unchecked, update the array
            setFormState((prevState) => {
                const updatedChe = checked
                    ? [...prevState.che, value]
                    : prevState.che.filter(item => item !== value);
                return { ...prevState, che: updatedChe };
            });
        } else if (type === 'radio') {
            // Update only the selected radio button value
            setFormState((prevState) => ({
                ...prevState,
                [name]: value
            }));
        } else {
            // For text input, select dropdown, etc.
            setFormState((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    const { category, date, remark, vehicle, che } = formState;

    const Person = {
        name:'akash',
        job:'developer',
        class: 12
    }

    return (
        <>
            <h1>Keyboard Handler</h1>
            <input type="text" onKeyDown={onKeyDown} />
            <input type="text" onKeyUp={onKeyUp} />
            <input type="text" onKeyPress={onKeyPress} />

            <h1>Random number: {Math.random() * 100}</h1>
            <h5>{`my name is ${Person.name} and my job ${Person.job} and i read in class ${Person.class}`}</h5>

            <br />

            <h1 className={KeybordStyle.hoblu}>This is Bangladesh</h1>
            <h1 className={KeybordStyle.hobluu}>Bangladesh is a small country</h1>
            <button className={KeybordStyle.btn}>Click Me</button>
            <button className='btn btn-success btn-sm m-1'>Click Here</button>

            <Form className='w-50 m-auto' onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                            name="firstName"
                            onChange={onchangevalue}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                            name="lastName"
                            onChange={onchangevalue}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                                name="username"
                                onChange={onchangevalue}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            required
                            name="city"
                            onChange={onchangevalue}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="State"
                            required
                            name="state"
                            onChange={onchangevalue}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zip"
                            required
                            name="zip"
                            onChange={onchangevalue}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustomCategory">
                        <Form.Label>Category</Form.Label>
                        <select
                            className='form-control'
                            value={category}
                            onChange={onchangevalue}
                            name='category'
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="category one">Category One</option>
                            <option value="category two">Category Two</option>
                            <option value="category three">Category Three</option>
                        </select>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustomDate">
                        <Form.Label>Date</Form.Label>
                        <input
                            type="date"
                            className='form-control'
                            value={date}
                            name="date"
                            onChange={onchangevalue}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustomRemark">
                        <Form.Label>Description</Form.Label>
                        <textarea
                            name='remark'
                            value={remark}
                            className='form-control'
                            onChange={onchangevalue}
                            placeholder='Tell me about this'
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustomVehicle">
                        <Form.Label>Vehicle</Form.Label>
                        <div onChange={onchangevalue}>
                            <input
                                type="radio"
                                value="Bike"
                                className="checked"
                                id="vehicle1"
                                name="vehicle"
                            />
                            <label htmlFor="vehicle1">Bike</label>

                            <input
                                type="radio"
                                value="Honda"
                                id="vehicle2"
                                name="vehicle"
                            />
                            <label htmlFor="vehicle2">Honda</label>
                        </div>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustomChe">
                        <Form.Label>Checkbox</Form.Label>
                        <div onChange={onchangevalue}>
                            <input
                                type="checkbox"
                                value="Bike"
                                className="checked"
                                id="checkbox1"
                                name="che"
                            />
                            <label htmlFor="checkbox1">Bike</label>

                            <input
                                type="checkbox"
                                value="Honda"
                                id="checkbox2"
                                name="che"
                            />
                            <label htmlFor="checkbox2">Honda</label>
                        </div>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>

                <Button type="submit">Submit form</Button>
            </Form>
        </>
    );
}

export default Keybord;
