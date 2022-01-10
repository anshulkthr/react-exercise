import { Field, Form, Formik, ErrorMessage } from "formik";
import { Button, TextField, Select } from "@cruk/cruk-react-components";
import * as yup from "yup";
import { Grid, Row, Col } from "../Style/Common";

const Filter = (params) => {
  const formSchema = yup.object().shape({
    keywords: yup.string()
    .min(2, 'Keywords must be between 2 and 50 characters.')
    .max(50, 'Keywords must be between 2 and 50 characters.')
    .required("Please enter keywords to search."),
    mediaType: yup.string().required("Please select a media type."),
    yearStart: yup
      .number()
      .positive()
      .integer()
      .test("check_year", "", function (value) {
        if (value && value.toString().length === 4) {
          let currentYear = new Date().getFullYear();
          if (value > currentYear) {
            return this.createError({
              message: `Year must not be in the future.`,
            });
          }
          return true;
        } else if (
          value &&
          (value.toString().length < 4 || value.toString().length > 4)
        ) {
          return this.createError({ message: `Please enter a valid year.` });
        }
        return true;
      }),
  });
  return (
    <div className="filter">
      <Formik
        validateOnChange
        initialValues={{
          keywords: "",
          mediaType: "",
          yearStart: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            params.filterData(values);
          }, 1200);
        }}
      >
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form>
              <Grid>
                <Row direction="Row">
                  <Col>
                    <Field name="keywords">
                      {({ field }) => (
                        <>
                          <TextField
                            label="Keywords"
                            type="text"
                            required
                            form="novalidatedform"
                            {...field}
                          />
                          <ErrorMessage component="div" name="keywords">
                            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </>
                      )}
                    </Field>
                  </Col>
                  <Col>
                    <Field name="mediaType">
                      {({ field }) => (
                        <>
                          <Select
                            label="Media type"
                            value=""
                            required
                            {...field}
                          >
                            <option disabled value="">
                              --Please choose an option--
                            </option>
                            <option value="audio">audio</option>
                            <option value="video">video</option>
                            <option value="image">image</option>
                          </Select>
                          <ErrorMessage component="div" name="mediaType">
                            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </>
                      )}
                    </Field>
                  </Col>
                  <Col>
                    <Field name="yearStart">
                      {({ field }) => (
                        <>
                          <TextField
                            label="Year start"
                            type="text"
                            {...field}
                          />
                          <ErrorMessage component="div" name="yearStart">
                            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </>
                      )}
                    </Field>
                  </Col>
                </Row>
                <Row direction="Row">
                  <Col>
                    <Button type="submit" disabled={isSubmitting}>{ isSubmitting ? 'Submitting..' : 'Submit' }</Button>
                  </Col>
                </Row>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Filter;
