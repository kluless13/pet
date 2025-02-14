import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const PetProfile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ background: 'linear-gradient(45deg, var(--ion-color-primary), var(--ion-color-secondary))' }}>
          <IonTitle>Pet Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ backgroundImage: 'url("https://source.unsplash.com/featured/?pet")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', margin: '16px' }}>
          <h1>Meet Charlie</h1>
          <p>Friendly and playful pet looking for a loving home. Charlie loves long walks and playtime in the park.</p>
          <IonButton routerLink="/onboarding" style={{ marginTop: '16px' }} color="secondary">Back to Onboarding</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PetProfile; 