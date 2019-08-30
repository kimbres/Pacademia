import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  
  cpf:string;

  formLogin = new FormGroup({
    cpf: new FormControl('',[Validators.required]),
    }); 

 // constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

  consultar() {
    alert("Testando a consulta");
    
  }

  mascara_cpf(cpf){
    if(this.cpf.length == 3){
      this.cpf = this.cpf + '.';	   
    }
    if(this.cpf.length == 7){
      this.cpf = this.cpf + '.';
    }
    if(this.cpf.length == 11){
      this.cpf = this.cpf + '-';
    }
  }

  

}
