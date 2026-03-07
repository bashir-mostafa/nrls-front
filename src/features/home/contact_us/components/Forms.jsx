import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../../../components/inputs/Input";
import Button from "../../../../components/buttons/Button";

const Forms = ({ formik }) => {
  return (
    <div className="inputs">
      <div>
        <h2>
          <FontAwesomeIcon icon={faPaperPlane} /> send a message
        </h2>
        <p>املأ النموذج وسنعود إليك في أقرب وقت ممكن.</p>
      </div>
      <Input
        name="name"
        label="name"
        placeholder="write your full name"
        onChange={formik.handleChange}
        errorText={formik.errors.name}
        value={formik.values.name}
      />
      <Input
        name="email"
        label="email"
        placeholder="write your email"
        onChange={formik.handleChange}
        errorText={formik.errors.email}
        value={formik.values.email}
      />
      <Input
        name="subject"
        label="subject"
        placeholder="write subject"
        onChange={formik.handleChange}
        errorText={formik.errors.subject}
        value={formik.values.subject}
      />
      <Input
        name="message"
        label="message"
        placeholder="write your message"
        onChange={formik.handleChange}
        errorText={formik.errors.message}
        value={formik.values.message}
        elementType="textarea"
        rows={6}
      />
      <Button type="submit">
        <FontAwesomeIcon icon={faPaperPlane} /> submit your message
      </Button>
    </div>
  );
};

export default Forms;
