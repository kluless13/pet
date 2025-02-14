import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PetCard from '../components/PetCard';

const Home: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  const pets = [
    { petName: 'Max', petImage: 'https://placekitten.com/300/200', petDescription: 'Friendly and energetic dog.' },
    { petName: 'Bella', petImage: 'https://placekitten.com/301/200', petDescription: 'Calm and loving companion.' },
    { petName: 'Charlie', petImage: 'https://placekitten.com/302/200', petDescription: 'Playful and curious adventurer.' }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ background: 'linear-gradient(45deg, var(--ion-color-primary), var(--ion-color-secondary))' }}>
          <IonTitle style={{ color: 'var(--ion-color-primary-contrast)' }}>Pet Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Swiper slidesPerView={1} pagination={{ clickable: true }} style={{ height: '100%' }}>
          {pets.map((pet, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <PetCard
                petName={pet.petName}
                petImage={pet.petImage}
                petDescription={pet.petDescription}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
