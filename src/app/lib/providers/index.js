import ContactProvider from '@/context/ContactProvider';


const Providers = ({children}) => {
  return (
    <ContactProvider>
      {
        children
      }
    </ContactProvider>
  );
};

export default Providers;