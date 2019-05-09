import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from './profile';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:'./profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

    profiles:Profile[];

    constructor(private profileService:ProfileService,private route:ActivatedRoute){}

    ngOnInit(){
        this.profileService.getprofile().subscribe(data=>{
            console.log(data);
            this.profiles=data;
        },err=>{
            console.log(err);
        })


        // this.route.paramMap.subscribe((map) => {
        //     let id = Number(map.get("userId"));
        //     console.log(id);
            
        //     this.profileService.findProfileById(id).subscribe((data) => {
        //         this.profiles = data;
        //         console.log(data);
        //     })
 
        // })
    }
}   