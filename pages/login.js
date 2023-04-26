import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import ValidateError from "@/components/shared/validateError";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "@/store/auth/auth.action";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
    const {push} = useRouter()
    const authState = useSelector( state => state.auth)
    const { isLogin } = authState;
    
    const dispatch = useDispatch();
    const initialValues = {
        password: 'm38rmF$',
        email: 'johnd',
      }
    const onSubmit2 = (values) => {
        dispatch(loginAction(values));
    }
    const LoginSchema = Yup.object().shape({
        password: Yup.string()
          .min(6, 'Please enter atleast 6 charecter')
          .required('The password is required'),
        email: Yup.string().required('The email address is Required'),
      });
      useEffect(() => {
        if(isLogin){
            push('/');
        }
     }, [isLogin]);
    return(
        <div class="flex justify-center h-full w-full place-items-center">
            <div>
                <div className="flex flex-col md:flex-row bg-white p-2 rounded-md dark:bg-slate-800 border dark:border-slate-700 shadow min-w-[350px]">
                    <div class="flex flex-col w-full">
                        <h2 class="text-2xl font-mono font-bold w-full text-center my-4">Login</h2>
                        <div>
                            <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={onSubmit2} >
                                {({ errors, touched }) => (
                                    <Form>
                                        <Input label="Email" placeholder="Email" type="text"  name="email"/>
                                        {errors.email && touched.email ? (
                                            <ValidateError error={errors.email} />
                                        ) : null}
                                        <div className="mt-3"></div>
                                        <Input label="Password" placeholder="Password" type="password" name="password"/>
                                        {errors.password && touched.password ? (
                                            <ValidateError error={errors.password} />
                                        ) : null}
                                        <div className="mt-2">
                                            <Button class="" text={'Login'} type="submit"></Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Login;