import { Analytics } from "@vercel/analytics/next"
import MainContent from './components/mainContent/mainContent';
import UIStateProvider from './context/ui-state/uiStateProvider';
import UserUI from './components/user-ui/user-ui';

export default function App() {

  return (
    <>
      <Analytics />

      <UIStateProvider>

        <UserUI />

        <MainContent />

      </UIStateProvider>
  </>
  );
}
