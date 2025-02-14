import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import PetCard from '../components/PetCard';

const PetCardPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ background: 'linear-gradient(45deg, var(--ion-color-primary), var(--ion-color-secondary))' }}>
          <IonTitle>Pet Card</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ padding: '16px' }}>
          <PetCard
            petName="Buddy"
            petImage="https://placekitten.com/303/200"
            petDescription="This is a beautiful pet card."
          />
          <IonButton routerLink="/onboarding" style={{ marginTop: '16px' }} color="secondary">
            Back to Onboarding
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PetCardPage; 