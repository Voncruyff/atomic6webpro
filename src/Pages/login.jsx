import AuthLayout from "../Component/Layout/AuthLayouts";
import FormLogin from "../Component/Fragment/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;