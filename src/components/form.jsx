/* eslint-disable react/prop-types */
import FormDiv from "./form-div";
export default function Form() {
  return (
    <form className="max-w-md">
      <FormDiv text="Full Name" htmlFor="full_name" />
      <FormDiv text="Email" htmlFor="email" />
      <FormDiv text="Phone" htmlFor="phone_number" />
      <FormDiv text="Address" htmlFor="address" />
    </form>
  );
}
