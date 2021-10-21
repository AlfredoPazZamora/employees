import React from 'react';
import {IonItem, IonAvatar, IonLabel, IonImg} from  '@ionic/react';
import {Person} from '../models/person.model'

const EmployeeItem : React.FC<{person: Person}> = ({person}) => {
    return (
        <IonItem>
            <IonAvatar slot="start">
                <IonImg src={person.photo}></IonImg>
            </IonAvatar>
            <IonLabel>
                <h2>{person.name}</h2>
                <p>{person.position}</p>
            </IonLabel>
        </IonItem>

    );
}

export default EmployeeItem;