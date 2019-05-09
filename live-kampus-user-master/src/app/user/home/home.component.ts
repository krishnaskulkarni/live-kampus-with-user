import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    profile=[
        {"timeline":"assets/images/user.jpg"}
    ]


    homes = [
        {
            "name":"james andorson",
            "profile":"assets/images/user.jpg",
            "post":"assets/images/user-post.jpg",
            "caption":"World's most beautiful car in Curabitur test drive booking the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            "tag":"#test drive booking !",
            "likes":"2.2k",
        },
        {
            "name":"james andorson",
            "profile":"assets/images/user.jpg",
            "post":"assets/images/user-post.jpg",
            "caption":"World's most beautiful car in Curabitur test drive booking the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            "tag":"#test drive booking !",
            "likes":"6.6k"
        }

    ]


    liveshots = [
        {
            "storyposter":"Marcus Stoinis",
            "liveshot":"assets/images/user.jpg",
            "story":"assets/images/user-post.jpg"
        },
        {
            "storyposter":"Amitab Bachhan",
            "liveshot":"assets/images/user.jpg",
            "story":"assets/images/user-post.jpg"
        },
    
    ]

}
