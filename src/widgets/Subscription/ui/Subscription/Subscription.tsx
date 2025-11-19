import { useState } from 'react';

import { SidePanel } from '@/shared/ui/SidePanel/SidePanel.tsx';

import { Cancel } from '../Cancel/Cancel.tsx';
import { Navigation } from '../Navigation/Navigation.tsx';
import { SubscriptionCard } from '../SubscriptionCard/SubscriptionCard.tsx';

export const Subscription = () => {
  const [panelShowed, setPanelShowed] = useState(false);
  return (
    <section>
      <SubscriptionCard />
      <Navigation onOpenPanel={() => setPanelShowed(true)} />
      <SidePanel isOpen={panelShowed}>
        <Cancel onClosePanel={() => setPanelShowed(false)}  />
      </SidePanel>
    </section>
  );
};
