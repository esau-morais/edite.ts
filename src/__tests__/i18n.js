import { Suspense } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';
import Spinner from 'components/Spinner';
import Banner from 'components/Banner';

test('renders Banner translation', () => {
  const banner = render(
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Spinner />}>
        <Banner />
      </Suspense>
    </I18nextProvider>
  );

  // Expect that the component has the following translation
  expect(banner.getByText(i18n.getDataByLanguage('en').language.Banner)).toBeDefined();
})
