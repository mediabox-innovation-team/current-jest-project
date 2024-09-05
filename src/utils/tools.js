import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { PrimeReact } from "primereact/api";

const WithProviders = (InputComponent) => {
  const OtherComponent = (props) => (
    <Provider>
      <IntlProvider locale="en" defaultLocale="en">
        {/* Configuration de PrimeReact */}
        <PrimeReact />
        <InputComponent {...props} />
      </IntlProvider>
    </Provider>
  );

  return OtherComponent;
};

export default WithProviders;
