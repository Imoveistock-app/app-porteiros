
import { Injectable } from "@angular/core";
 
@Injectable({
    providedIn: 'root'
})
export class TermsService {

    profileAbout = [
        {
            name: 'André Silva',
            img: 'https://i.pinimg.com/originals/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.png',
            description: 'CEO | Curitiba',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo leo eget nisl molestie luctus. Donec posuere luctus ultricies. Suspendisse fermentum, est vel vestibulum malesuada, lectus erat euismod libero'
        },
       
    ]
 
}
