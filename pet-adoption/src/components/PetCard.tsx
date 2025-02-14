import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';

interface PetCardProps {
  petName: string;
  petImage: string;
  petDescription: string;
}

const PetCard: React.FC<PetCardProps> = ({ petName, petImage, petDescription }) => {
  return (
    <IonCard style={{ margin: '16px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor: 'var(--ion-color-tertiary-tint)' }}>
      <IonImg src={petImage} style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
      <IonCardHeader>
        <IonCardTitle style={{ color: 'var(--ion-color-primary)', fontWeight: 600, fontSize: '1.2em' }}>{petName}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent style={{ color: 'var(--ion-color-primary-contrast)', fontSize: '1em', lineHeight: '1.4em' }}>
        {petDescription}
      </IonCardContent>
    </IonCard>
  );
};

export default PetCard; 