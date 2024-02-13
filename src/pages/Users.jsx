import styled from 'styled-components'
import Heading from "../ui/Heading";
import SignupForm from '../features/authentication/SignupForm'
import Logo from '../ui/Logo';

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function NewUsers() {
  return (
    <SignupLayout>
      <Logo />
      <Heading as='h4'>Login to your account</Heading>
      <SignupForm />
    </SignupLayout>
  );
}

export default NewUsers;
