import React, {useState}  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , useIonViewDidEnter, IonList} from '@ionic/react';
import './Home.css';

import EmployeeItem from './../components/EmployeeItem';

const Home: React.FC = () => {
  const [people, setPeople] = useState<[]>([]);

  useIonViewDidEnter(async() => {
      const result = await fetch ('https://uifaces.co/api?limit=25',{
        headers: { 'x-API-KEY': '873771d7760b846d51d025ac5804ab'}
      });

      const data = await result.json();
      setPeople(data);
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users from API</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonList>
          {people.map((person, idx ) => <EmployeeItem key={idx} person={person}/>)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
