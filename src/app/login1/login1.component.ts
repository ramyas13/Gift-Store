import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  public login1Form!:FormGroup
//Authenticate user details from userapi
adminapi=environment.adminapi;


submitted = false;
get f() { return this.login1Form.controls; }
//constructor injection
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.validateAdmin(false); //data parameter in your userservice
    this.login1Form = this.formBuilder.group({
      useremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
        });
     
        
  }
  login1(){
    this.submitted = true;
    if (this.login1Form.invalid) {
      return ;
    }
    this.http.get<any>(this.adminapi)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.useremail === this.login1Form.value.useremail && a.password=== this.login1Form.value.password
      });
      if(user){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.login1Form.reset();
        this.router.navigate(['home'])
        this.adminService.validateAdmin(true);
      }else{
        alert("user not found !!");       
        this.adminService.validateAdmin(false);
      }
    })
  }

}

