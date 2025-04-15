import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
    const [formValues, setformValues] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: ""
    });
    const [formErrors, setformErrors] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: ""
    });
    function handelchange(e) {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        switch (fieldname) {
            case 'name':
                if (fieldvalue === "") {
                    setformErrors({ ...formErrors, name: "Required" });
                } else {
                    setformErrors({ ...formErrors, name: "" }); // إزالة الخطأ لو صح
                }
                break;

            case 'email':
                if (fieldvalue === " ") {
                    setformErrors({ ...formErrors, email: "Required" });
                } else {
                    const emailRegx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,4}$/;
                    if (!emailRegx.test(fieldvalue)) {
                        setformErrors({ ...formErrors, email: "Invalid email" });
                    }
                    else {
                        setformErrors({ ...formErrors, email: "" });
                    }
                }
                break;
            case 'username':
                if (fieldvalue === "") {
                    setformErrors({ ...formErrors, username: "Required" });
                }
                else if (fieldvalue.includes(" ")) {
                    setformErrors({ ...formErrors, username: "Username must not contain spaces" });
                }
                else {
                    setformErrors({ ...formErrors, username: "" }); // إزالة الخطأ لو صح
                }

                break;
            case 'password':
                if (fieldvalue == '') {
                    setformErrors({ ...formErrors, password: "Required" })
                }
                else {
                    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
                    if (fieldvalue.length < 8) {
                        setformErrors({ ...formErrors, password: 'password lenĀth not less 8 characters' })
                    }
                    else if (!passwordRegex.test) {
                        setformErrors({ ...formErrors, password: 'contains at least one lowercase letter, one uppercase letter, at least one diĀit, and a special character' })
                    }
                    else {
                        setformErrors({ ...formErrors, password: "" })
                        setformValues({ ...formValues, password: fieldvalue })
                        console.log("formvalue", formValues.password)
                    }
                }
                break;
            case "confirmpassword":
                if (fieldvalue == "") {
                    setformErrors({ ...formErrors, confirmpassword: "Required" })
                }
                else {
                    if (formValues.password != fieldvalue) {
                        setformErrors({ ...formErrors, confirmpassword: "password not match" })
                    }
                    else {
                        setformErrors({ ...formErrors, confirmpassword: "" })

                        setformValues({ ...formValues, confirmpassword: fieldvalue })
                    }
                }

            default:
                break;
        }


    }
    const navigate=useNavigate();
    function handelsubmit(e) {
        e.preventDefault();
        navigate('/Home')

    }
    return (
        <div className="mx-3">
            <h3>Register</h3>
            <hr />
            <form onSubmit={handelsubmit} method="post">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="name" onChange={handelchange} />
                    {formErrors.name && (
                        <div className="Form-text text-danger">
                            {formErrors.name}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" name="email" placeholder="name@example.com" onChange={handelchange} />
                    {formErrors.email && (
                        <div className="Form-text text-danger">
                            {formErrors.email}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">user name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput3" name="username" onChange={handelchange} />
                    {formErrors.username && (
                        <div className="Form-text text-danger">
                            {formErrors.username}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput4" className="form-label">password</label>
                    <input type="text" className="form-control" id="exampleFormControlInput4" name="password" placeholder="name@example.com" onChange={handelchange} />
                    {formErrors.password && (
                        <div className="Form-text text-danger">
                            {formErrors.password}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput5" className="form-label">confirm password</label>
                    <input type="text" className="form-control" id="exampleFormControlInput5" name="confirmpassword" placeholder="name@example.com" onChange={handelchange} />
                    {formErrors.confirmpassword && (
                        <div className="Form-text text-danger">
                            {formErrors.confirmpassword}
                        </div>
                    )}
                </div>
                <button type="submit"  className="btn btn-success">Success</button>
            </form>

        </div>
    )
}
export default Register;