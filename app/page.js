import Header from './components/Header/Header';
import Form from './components/Form/Form';
import WelcomePopup from './components/WelcomePopup/WelcomePopup'

export default function Home() {
  return (
    <div>
      <Header />
      <WelcomePopup/>
      <Form />
    </div>
  );
}
