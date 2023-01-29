import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            createdDate: new Date(),
            snaps: 1,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            location: "Paris"
        },
        {
            id: 2,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            createdDate: new Date(),
            snaps: 2,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            location: "La montagne"
        },
        {
            id: 3,
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            createdDate: new Date(),
            snaps: 3,
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
        },
        {
            id: 4,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            createdDate: new Date(),
            snaps: 4,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            location: "Paris"
        },
        {
            id: 5,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            createdDate: new Date(),
            snaps: 5,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            location: "La montagne"
        },
        {
            id: 6,
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            createdDate: new Date(),
            snaps: 6,
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
        }
    ];
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error("FaceSnap not found!");
        } else {
            return faceSnap;
        }
    }
    snapFaceSnapById(faceSnapId: number, snapType : 'snap'|'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap'?faceSnap.snaps++ : faceSnap.snaps --;
    }
   
}