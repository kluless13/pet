import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const Onboarding: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Onboarding</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ backgroundImage: 'url("https://source.unsplash.com/featured/?pets")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ padding: '16px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', borderRadius: '8px', margin: '16px' }}>
          <h1>Welcome to the Pet Adoption App</h1>
          <p>Start your journey towards adopting your perfect pet.</p>
          <IonButton routerLink="/pet-profile" style={{ marginTop: '16px' }}>Go to Pet Profile</IonButton>
          <IonButton routerLink="/petcard" style={{ marginTop: '16px' }} color="secondary">Go to Pet Card</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding; 