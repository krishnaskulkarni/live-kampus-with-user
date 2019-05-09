import { Component } from '@angular/core';

@Component({
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

    friends= [
        {
            "dp":"assets/images/friend-avatar9.jpg",
            "name": "krishna kulkarni",
            "request":["tony starc","abc"],
            
        },
        {
            "dp":"assets/images/friend-avatar9.jpg",
            "name": "abbas pathan"
        },
        {
            "dp":"assets/images/friend-avatar9.jpg",
            "name": "kapil pawar"
        }
        
        
    ];

    requests= [
        {
            "dp":"assets/images/friend-avatar9.jpg",
            "name": "david warner",  
        },
        {
            "dp":"assets/images/friend-avatar9.jpg",
            "name": "queeton dekok",  
        },
        {
            "dp":"assets/images/friend-avatar9.jpg",
            "name": "stuart broad",  
        }
          
    ]

}
