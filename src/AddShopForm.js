import React from "react";
import { Form, Button, Container, Col, Figure } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useIndexedDB } from "react-indexed-db";

// const FILE_SIZE = 160 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const shopSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().default(),
  price: yup.string().required()
  // file: yup
  //   .mixed()
  //   .notRequired()
  //   .test(
  //     "fileFormat",
  //     "Unsupported Format",
  //     value => value && SUPPORTED_FORMATS.includes(value.type)
  //   )
  //   .test(
  //     "fileSize",
  //     "File too large",
  //     value => value && value.size <= FILE_SIZE
  //   )
});

// add({
//   name: values.name,
//   createdAt: values.createdAt,
//   price: values.price,
//   description: values.description,
//   avatar: values.avatar
// }).then(
//   event => {
//     console.log("Id generated ", event.currentTarget);
//   },
//   error => {
//     console.log(error);
//   }
// )

const AddToDB = values => {
  //alert(JSON.stringify(values, null, 2));
  const { add } = useIndexedDB("inventory");
  add({
    name: values.name,
    createdAt: values.createdAt,
    price: values.price,
    description: values.description,
    avatar: values.avatar,
    isActive: values.isActive,
    imageUrl: values.imageUrl
  }).then(
    event => {
      console.log("Id generated ", event);
    },
    error => {
      console.log(error);
    }
  );
};

const AddShopFormDemo = () => {
  return (
    <React.Fragment>
      <Container>
        <h1 style={{ color: "deepskyblue" }}>Add an item to Inventory</h1>
        <Formik
          validationSchema={shopSchema}
          onSubmit={values => {
            AddToDB(values);
          }}
          initialValues={{
            name: "item 1",
            description: "Enter Description 1",
            price: "0",
            file: "images/default-shop.jpg",
            avatar: "images/default-shop.jpg",
            createdAt: new Date().toLocaleString("en-US", { hour12: false }),
            isActive: true,
            imageUrl: "images/default-shop.jpg"
          }}
        >
          {({
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
            handleChange,
            setFieldValue,
            validateOnBlur
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
    </React.Fragment>
  );
};

export default AddShopFormDemo;
