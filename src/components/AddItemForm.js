import React from "react";
import { Form, Button, Container, Col, Figure } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const shopSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().default(),
  price: yup.string().required()
});

const AddItemForm = ({ actions }) => {
  // console.log(actions);
  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Container>
        {/* <h2 style={{ color: "deepskyblue" }}>Add an item to Inventory</h2> */}
        <Formik
          validationSchema={shopSchema}
          onSubmit={item => {
            actions.createIndexedDBInventory(item);
          }}
          initialValues={{
            name: "item1",
            description: "Enter Description 1",
            price: "14",
            file: "images/default-shop.jpg",
            avatar: "images/default-shop.jpg",
            createdAt: new Date().toLocaleString("en-US", { hour12: false }),
            imageUrl: "images/default-shop.jpg",
            isActive: true
          }}
        >
          {({
            handleSubmit,
            values,
            touched,
            errors,
            handleChange,
            setFieldValue
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Item Name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Tea shop name is required!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Enter Description"
                    value={values.description}
                    onChange={handleChange}
                    isValid={touched.description && !errors.description}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Description is required!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik03">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    placeholder="Enter Price"
                    value={values.price}
                    onChange={handleChange}
                    isValid={touched.price && !errors.price}
                    isInvalid={!!errors.price}
                  />
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Price is required!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationFormik04">
                  <Form.Row>
                    <Form.Group as={Col} md="6">
                      <Form.Label>Default Picture</Form.Label>
                      <Figure as={Col} md="5">
                        <Figure.Image
                          width={171}
                          height={180}
                          alt="171x180"
                          src={values.avatar}
                          roundedCircle
                        />
                      </Figure>
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                      <Form.Label>Upload New Picture</Form.Label>
                      <Form.Control
                        type="file"
                        name="file"
                        title="Select a file"
                        onChange={event => {
                          setFieldValue("file", event.currentTarget.files[0]);
                          setFieldValue(
                            "avatar",
                            URL.createObjectURL(event.currentTarget.files[0])
                          );
                        }}
                        isValid={touched.file && !errors.file}
                        isInvalid={!!errors.file}
                      />
                      <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.file}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>

                <Button variant="primary" type="submit" size="lg" block>
                  Add Item
                </Button>
              </Form.Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default AddItemForm;
